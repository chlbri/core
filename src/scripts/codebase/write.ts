import { writeFileSync } from 'node:fs';
import { relative } from 'node:path';
import { analyze } from './analyse';
import { OUTPUT_FILE } from './constants';
import { generate } from './generate';

/**
 * Fonction principale d'exécution
 */
export const write = () => {
  try {
    const analysis = analyze();
    const code = generate(analysis);

    writeFileSync(OUTPUT_FILE, code, 'utf8');

    const values = Object.values(analysis);
    const keys = Object.keys(analysis);

    console.log(
      `📁 Analyse sauvegardée dans: ${relative(process.cwd(), OUTPUT_FILE)}`,
    );
    console.log(`📊 Statistiques:`);
    console.log(`   - Fichiers analysés: ${keys.length}`);
    console.log(
      `   - Total imports: ${values.reduce((acc, file) => acc + file.imports.length, 0)}`,
    );
    console.log(
      `   - Total exports: ${values.reduce((acc, file) => acc + file.exports.length, 0)}`,
    );
  } catch (error) {
    console.error("❌ Erreur lors de l'analyse du codebase:", error);
    process.exit(1);
  }
};

// // Exécuter si ce fichier est appelé directement
// if (process.argv[1] && process.argv[1].endsWith('analyze-codebase.ts')) {
//   main();
// }
