import { join, relative } from 'path';
import { Project } from 'ts-morph';
import { pathToDotNotation } from '../utils';
import { SRC_DIR } from './constants';
import { analyzeExports } from './exports';
import { analyzeImports } from './imports';
import type { CodebaseAnalysis } from './types';

/**
 * Analyse tous les fichiers TypeScript dans src/ (sauf src/scripts/)
 */
export const analyze = async (): Promise<CodebaseAnalysis> => {
  console.log('🔍 Analyse du codebase en cours...');

  // Initialiser le projet ts-morph
  const project = new Project({
    tsConfigFilePath: join(process.cwd(), 'tsconfig.json'),
  });

  // Ajouter tous les fichiers TypeScript du dossier src
  const sourceFiles = project.addSourceFilesAtPaths([
    'src/**/*.ts',
    '!src/scripts/**/*', // Exclure le dossier scripts
    '!src/**/*.test.ts', // Exclure les fichiers de test
    '!src/**/*.spec.ts', // Exclure les fichiers de spec
  ]);

  const analysis: CodebaseAnalysis = {};
  let processedCount = 0;

  for (const sourceFile of sourceFiles) {
    const filePath = sourceFile.getFilePath();
    const relativePath = relative(SRC_DIR, filePath);
    const text = sourceFile.getText();

    // Analyser les imports et exports
    const imports = analyzeImports(sourceFile);
    const exports = analyzeExports(sourceFile);

    analysis[pathToDotNotation(relativePath)] = {
      relativePath,
      imports,
      exports,
      text,
    };

    processedCount++;
    if (processedCount % 50 === 0) {
      console.log(
        `📊 Analysé ${processedCount}/${sourceFiles.length} fichiers...`,
      );
    }
  }

  console.log(`✅ Analyse terminée: ${processedCount} fichiers analysés`);
  return analysis;
};
