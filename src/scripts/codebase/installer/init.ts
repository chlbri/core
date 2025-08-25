import { CODEBASE_ANALYSIS, type FileAnalysis } from '#codebase';
import isS from '#features/strings/castings/is';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { REPLACERS } from '../constants';
import { JSON_FILE_NAME, PATH_KEY } from './constants';

export interface InitOptions {
  /**
   * Emplacement personnalisé pour le dossier .bemedev
   * Par défaut: 'src/.bemedev' si src existe, sinon '.bemedev' à la racine
   */
  path?: string;
}

const writeFileAnalysis = (
  fileAnalysis: FileAnalysis,
  bemedevPath: string,
) => {
  const relativePath = fileAnalysis.relativePath;

  // Créer le chemin de destination dans .bemedev en maintenant la structure
  const destPath = join(bemedevPath, relativePath);
  const destDir = dirname(destPath);

  try {
    // Créer le dossier de destination si nécessaire
    mkdirSync(destDir, { recursive: true });

    let fileContent = fileAnalysis.text;
    REPLACERS.init
      // .filter(() => false)
      .forEach(([search, replace]) => {
        fileContent = fileContent.replaceAll(search, replace);
      });

    // Écrire le contenu du fichier types
    writeFileSync(destPath, fileContent, 'utf8');

    console.log(`  ✅ ${relativePath}`);
  } catch (error) {
    console.error(`  ❌ Erreur pour ${relativePath}:`, error);
  }
};

export const createTypesStructure = (bemedevPath: string) => {
  const entries = Object.entries(CODEBASE_ANALYSIS).filter(([key]) => {
    return key.endsWith('.types') || key.endsWith('.constants');
  });

  console.log(
    `🔧 Création de la structure de types (${entries.length} fichiers)...`,
  );

  for (const [, fileAnalysis] of entries) {
    writeFileAnalysis(fileAnalysis, bemedevPath);
  }

  console.log(`✅ Structure de types créée avec succès!`);
};

export const init = (options?: InitOptions) => {
  const cwd = process.cwd();
  const srcExists = existsSync(join(cwd, 'src'));

  // Déterminer l'emplacement du dossier .bemedev
  const path = options?.path ?? (srcExists ? 'src/.bemedev' : '.bemedev');
  const bemedevPath = join(cwd, path);

  // 1. Créer le dossier .bemedev
  try {
    mkdirSync(join(bemedevPath), { recursive: true });
    console.log(`✅ Dossier .bemedev créé dans: ${path}`);
  } catch (error) {
    console.error(
      `❌ Erreur lors de la création du dossier .bemedev:`,
      error,
    );
    return false;
  }

  // 1.5. Créer la structure des fichiers types
  try {
    createTypesStructure(bemedevPath);
  } catch (error) {
    console.error(
      `❌ Erreur lors de la création de la structure de types:`,
      error,
    );
    return false;
  }

  // 2. Mettre à jour le tsconfig.json
  const tsconfigPath = join(cwd, 'tsconfig.json');

  if (existsSync(tsconfigPath)) {
    try {
      const tsconfigContent = readFileSync(tsconfigPath, 'utf8');
      const tsconfig = JSON.parse(tsconfigContent);

      // Initialiser compilerOptions et paths si ils n'existent pas
      if (!tsconfig.compilerOptions) {
        tsconfig.compilerOptions = {};
      }
      if (!tsconfig.compilerOptions.paths) {
        tsconfig.compilerOptions.paths = {};
      }

      // Ajouter le path #bemedev/*
      let relativePath = path;
      const baseUrl = tsconfig.compilerOptions.baseUrl;

      if (isS(baseUrl)) {
        // Si baseUrl est défini, calculer le chemin relatif par rapport à baseUrl

        relativePath = join(baseUrl, relativePath);
      }

      tsconfig.compilerOptions.paths[PATH_KEY] = [`${relativePath}/*`];

      writeFileSync(
        tsconfigPath,
        JSON.stringify(tsconfig, null, 2),
        'utf8',
      );
      console.log(`✅ Path #bemedev/* ajouté au tsconfig.json`);
    } catch (error) {
      console.error(
        `❌ Erreur lors de la mise à jour du tsconfig.json:`,
        error,
      );
      return false;
    }
  } else {
    console.warn(`⚠️ Fichier tsconfig.json introuvable, path non ajouté`);
  }

  // 3. Créer le fichier .bemedev.json à la racine
  const configFile = join(cwd, JSON_FILE_NAME);
  const config = {
    version: '1.0.0',
    path,
  };

  try {
    writeFileSync(configFile, JSON.stringify(config, null, 2), 'utf8');
    console.log(`✅ Fichier .bemedev.json créé à la racine du projet`);
  } catch (error) {
    console.error(
      `❌ Erreur lors de la création du fichier .bemedev.json:`,
      error,
    );
    return false;
  }

  console.log(`🎉 Initialisation de bemedev terminée avec succès!`);
  return true;
};
