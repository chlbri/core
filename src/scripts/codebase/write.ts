import { writeFile } from 'node:fs/promises';
import { relative } from 'node:path';
import { analyze } from './analyse';
import { OUTPUT_FILE } from './constants';
import { generate } from './generate';

/**
 * Fonction principale d'exécution
 */
export const write = async () => {
  try {
    const analysis = await analyze();
    const code = generate(analysis);
    console.log(JSON.stringify(analysis, null, 2));

    await writeFile(OUTPUT_FILE, code, 'utf8');

    console.log(
      `📁 Analyse sauvegardée dans: ${relative(process.cwd(), OUTPUT_FILE)}`,
    );
    console.log(`📊 Statistiques:`);
    console.log(`   - Fichiers analysés: ${Object.keys(analysis).length}`);
    console.log(
      `   - Total imports: ${Object.values(analysis).reduce((acc, file) => acc + file.imports.length, 0)}`,
    );
    console.log(
      `   - Total exports: ${Object.values(analysis).reduce((acc, file) => acc + file.exports.length, 0)}`,
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
