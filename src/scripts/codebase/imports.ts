import { SourceFile, SyntaxKind } from 'ts-morph';
import type { ImportInfo } from './types';

/**
 * Résout le moduleSpecifier en utilisant les paths du tsconfig si il commence par "#"
 */
const resolveModuleSpecifier = (
  sourceFile: SourceFile,
  moduleSpecifier: string,
): string => {
  // Résolution uniquement pour les imports qui commencent par "#"
  if (!moduleSpecifier.startsWith('#')) {
    return moduleSpecifier;
  }

  const paths = sourceFile.getProject().getCompilerOptions().paths;

  if (!paths) {
    return moduleSpecifier;
  }

  // Chercher la correspondance dans les paths
  for (const [pattern, mappings] of Object.entries(paths)) {
    // Remplacer * par une regex pour matcher
    const regexPattern = pattern.replace(/\*/g, '(.*)');
    const regex = new RegExp(`^${regexPattern}$`);
    const match = moduleSpecifier.match(regex);

    if (match) {
      // Prendre le premier mapping disponible
      const mapping = mappings[0];
      if (mapping) {
        // Remplacer * dans le mapping par la partie matchée
        let resolvedPath = mapping;
        if (match[1]) {
          resolvedPath = mapping.replace('*', match[1]);
        }
        return resolvedPath;
      }
    }
  }

  return moduleSpecifier;
};

/**
 * Analyse les imports d'un fichier
 */
export const analyzeImports = (sourceFile: SourceFile): ImportInfo[] => {
  const imports: ImportInfo[] = [];

  // Import declarations (import ... from '...')
  sourceFile.getImportDeclarations().forEach(importDecl => {
    const rawModuleSpecifier = importDecl.getModuleSpecifierValue();
    const moduleSpecifier = resolveModuleSpecifier(
      sourceFile,
      rawModuleSpecifier,
    );

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
          const rawModuleSpecifier = arg.getText().replace(/['"]/g, '');
          const moduleSpecifier = resolveModuleSpecifier(
            sourceFile,
            rawModuleSpecifier,
          );
          imports.push({
            moduleSpecifier,
            kind: 'side-effect',
            isDynamic: true,
          });
        }
      }
    });

  return imports;
};
