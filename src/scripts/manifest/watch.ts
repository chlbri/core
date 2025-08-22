#!/usr/bin/env tsx

import chokidar from 'chokidar';
import { globSync } from 'node:fs';
import { join } from 'node:path';
import { relative } from 'path';
import {
  addFileToManifest,
  generateManifest,
  MANIFEST_FILE,
  removeFileFromManifest,
  SRC_DIR,
} from './helpers';

// Génération initiale
console.log('🚀 Génération initiale du manifest...');

const ignored = [
  ...[
    'src/scripts/**',
    '**/*.test.ts', // Ignorer les fichiers de test
    '**/*.spec.ts', // Ignorer les fichiers de spec
  ]
    .map(val => globSync(val))
    .flat()
    .map(val => {
      console.log('file =>', val);
      return join(process.cwd(), val);
    }),
  relative(process.cwd(), MANIFEST_FILE), // Ignorer le fichier manifest lui-même
];

// Options de génération du manifest
const manifestOptions = {
  excludePatterns: ['scripts/**', '**/*.test.ts', '**/*.spec.ts'],
  verbose: true,
};

// Configuration du watcher
const watcher = chokidar.watch(SRC_DIR, {
  ignored,
  persistent: true,
  awaitWriteFinish: {
    stabilityThreshold: 200,
    pollInterval: 100,
  },
  cwd: process.cwd(),
});

// Debouncer la regénération pour éviter les appels trop fréquents
// const debouncedGenerate = debounce(
//   () => generateManifest(manifestOptions),
//   300,
// );

// Événements de surveillance
watcher
  .on('add', (filePath: string) => {
    if (filePath.endsWith('.ts') && !filePath.endsWith('.test.ts')) {
      console.log(`➕ Fichier ajouté: ${relative(SRC_DIR, filePath)}`);
      addFileToManifest(filePath, manifestOptions);
    }
  })
  .on('change', (filePath: string) => {
    if (filePath.endsWith('.ts') && !filePath.endsWith('.test.ts')) {
      console.log(`🔄 Fichier modifié: ${relative(SRC_DIR, filePath)}`);
      addFileToManifest(filePath, manifestOptions);
    }
  })
  .on('unlink', (filePath: string) => {
    if (filePath.endsWith('.ts') && !filePath.endsWith('.test.ts')) {
      console.log(`🗑️ Fichier supprimé: ${relative(SRC_DIR, filePath)}`);
      removeFileFromManifest(filePath, manifestOptions);
    }
  })
  .on('error', (error: unknown) => {
    console.error('❌ Erreur de surveillance:', error);
  })
  .on('ready', () => {
    console.log('👀 Surveillance active sur le dossier src/');
    console.log(
      '📝 Le manifest sera automatiquement mis à jour lors des changements',
    );
    console.log('⏹️  Appuyez sur Ctrl+C pour arrêter la surveillance');
    return generateManifest(manifestOptions);
  });

// Gestion propre de l'arrêt
process.on('SIGINT', async () => {
  console.log('\n🛑 Arrêt de la surveillance...');
  await watcher.close();
  console.log('✅ Surveillance arrêtée');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await watcher.close();
  process.exit(0);
});
