import type { CodebaseAnalysis } from './types';

/**
 * Génère le code TypeScript pour l'analyse du codebase
 */
export const generate = (analysis: CodebaseAnalysis): string => {
  let code = `// Analyse automatique de la codebase\n\n`;

  code += `export interface ImportInfo {
  moduleSpecifier: string;
  kind: 'default' | 'named' | 'namespace' | 'side-effect';
  namedImports?: string[];
  default?: string;
  isDynamic?: boolean;
}

export interface ExportInfo {
  name: string;
  kind: 'default' | 'named' | 'namespace';
  text?: string;
  moduleSpecifier?: string;
  declarationKind?: 'function' | 'class' | 'interface' | 'type' | 'variable' | 'const' | 'let' | 'enum';
}

export interface FileAnalysis {
  relativePath: string;
  imports: ImportInfo[];
  exports: ExportInfo[];
  text: string;
}

export interface CodebaseAnalysis {
  [dotNotationKey: string]: FileAnalysis;
}

`;

  code += `export const CODEBASE_ANALYSIS: CodebaseAnalysis = {\n`;

  // Trier les clés par ordre alphabétique
  const sortedKeys = Object.keys(analysis).sort();

  sortedKeys.forEach((key, index) => {
    const fileAnalysis = analysis[key];
    // Convertir le chemin en notation dot comme dans .manifest.ts
    const dotNotationKey = key;
    const formattedKey = `'${dotNotationKey}'`;

    code += `  ${formattedKey}: {\n`;
    code += `    relativePath: '${fileAnalysis.relativePath}',\n`;

    // Imports
    code += `    imports: [\n`;
    fileAnalysis.imports.forEach(imp => {
      code += `      {\n`;
      code += `        moduleSpecifier: '${imp.moduleSpecifier}',\n`;
      code += `        kind: '${imp.kind}',\n`;
      if (imp.namedImports) {
        code += `        namedImports: [${imp.namedImports.map(ni => `'${ni}'`).join(', ')}],\n`;
      }
      if (imp.default) {
        code += `        default: '${imp.default}',\n`;
      }
      if (imp.isDynamic) {
        code += `        isDynamic: true,\n`;
      }
      code += `      },\n`;
    });
    code += `    ],\n`;

    // Exports
    code += `    exports: [\n`;
    fileAnalysis.exports.forEach(exp => {
      code += `      {\n`;
      code += `        name: '${exp.name}',\n`;
      code += `        kind: '${exp.kind}',\n`;
      if (exp.text) {
        // Échapper les caractères spéciaux dans le texte
        const escapedText = exp.text
          .replace(/\\/g, '\\\\')
          .replace(/'/g, "\\'")
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r');
        code += `        text: '${escapedText}',\n`;
      }
      if (exp.moduleSpecifier) {
        code += `        moduleSpecifier: '${exp.moduleSpecifier}',\n`;
      }
      if (exp.declarationKind) {
        code += `        declarationKind: '${exp.declarationKind}',\n`;
      }
      code += `      },\n`;
    });
    code += `    ],\n`;
    // Échapper les backticks pour qu'ils n'interrompent pas la template literal générée
    const escapedTextForBackticks = fileAnalysis.text
      .replace(/`/g, '\\`')
      .replace(/\${/g, '$|||{') // Special to be replaced
      .replace(/\\s/g, '|||s'); // Special to be replaced
    code += `    text: \`${escapedTextForBackticks}\`,\n`;

    code += `  },\n`;

    // Ajouter une ligne vide tous les 10 fichiers pour la lisibilité
    if ((index + 1) % 10 === 0 && index < sortedKeys.length - 1) {
      code += '\n';
    }
  });

  code += `};\n\n`;

  // Ajouter des statistiques
  code += `// Statistiques de l'analyse\n`;
  code += `export const ANALYSIS_STATS = {\n`;
  code += `  totalFiles: ${Object.keys(analysis).length},\n`;
  code += `  totalImports: ${Object.values(analysis).reduce((acc, file) => acc + file.imports.length, 0)},\n`;
  code += `  totalExports: ${Object.values(analysis).reduce((acc, file) => acc + file.exports.length, 0)},\n`;
  code += `};\n`;

  return code;
};
