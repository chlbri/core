import { SourceFile, SyntaxKind } from 'ts-morph';
import type { ImportInfo } from './types';

/**
 * Analyse les imports d'un fichier
 */
export const analyzeImports = (sourceFile: SourceFile): ImportInfo[] => {
  const imports: ImportInfo[] = [];

  // Import declarations (import ... from '...')
  sourceFile.getImportDeclarations().forEach(importDecl => {
    const moduleSpecifier = importDecl.getModuleSpecifierValue();

    // Import default
    const defaultImport = importDecl.getDefaultImport();
    if (defaultImport) {
      imports.push({
        moduleSpecifier,
        kind: 'default',
        default: defaultImport.getText(),
      });
    }

    // Import namespace (* as name)
    const namespaceImport = importDecl.getNamespaceImport();
    if (namespaceImport) {
      imports.push({
        moduleSpecifier,
        kind: 'namespace',
        default: namespaceImport.getText(),
      });
    }

    // Named imports ({ name1, name2 })
    const namedImports = importDecl.getNamedImports();
    if (namedImports.length > 0) {
      imports.push({
        moduleSpecifier,
        kind: 'named',
        namedImports: namedImports.map(ni => ni.getName()),
      });
    }

    // Side-effect import (import '...')
    if (!defaultImport && !namespaceImport && namedImports.length === 0) {
      imports.push({
        moduleSpecifier,
        kind: 'side-effect',
      });
    }
  });

  // Dynamic imports (import('...'))
  sourceFile
    .getDescendantsOfKind(SyntaxKind.CallExpression)
    .forEach(callExpr => {
      if (
        callExpr.getExpression().getKind() === SyntaxKind.ImportKeyword
      ) {
        const arg = callExpr.getArguments()[0];
        if (arg && arg.getKind() === SyntaxKind.StringLiteral) {
          imports.push({
            moduleSpecifier: arg.getText().replace(/['"]/g, ''),
            kind: 'side-effect',
            isDynamic: true,
          });
        }
      }
    });

  return imports;
};
