import type { Project, SourceFile } from 'ts-morph';
import { Node } from 'ts-morph';

export const resolveModuleSpecifier = (
  project: Project,
  moduleSpecifier: string,
): string => {
  try {
    // Obtenir les options du compilateur du projet
    const compilerOptions = project.getCompilerOptions();
    const baseUrl = compilerOptions.baseUrl;
    const paths = compilerOptions.paths;

    // Si on a un chemin relatif simple, le retourner tel quel
    if (
      moduleSpecifier.startsWith('./') ||
      moduleSpecifier.startsWith('../')
    ) {
      return moduleSpecifier;
    }

    // Si on a des chemins définis dans tsconfig, essayer de les résoudre
    if (paths && baseUrl) {
      for (const [pathPattern, pathMappings] of Object.entries(paths)) {
        // Enlever l'astérisque pour la comparaison
        const patternBase = pathPattern.replace('/*', '');

        if (moduleSpecifier.startsWith(patternBase)) {
          // Remplacer le préfixe par le chemin réel
          const suffix = moduleSpecifier.slice(patternBase.length);
          const mappingBase = pathMappings[0]?.replace('/*', '') || '';
          return `${mappingBase}${suffix}`;
        }
      }
    }

    // Sinon, retourner le spécificateur original
    return moduleSpecifier;
  } catch {
    // En cas d'erreur, retourner le spécificateur original
    return moduleSpecifier;
  }
};

// Fonction pour extraire récursivement les exports
export const extractExportsRecursively = (
  project: Project,
  sourceFile: SourceFile,
  visited = new Set<string>(),
): any => {
  const filePath = sourceFile.getFilePath();

  // Éviter les cycles infinis
  if (visited.has(filePath)) {
    return [];
  }
  visited.add(filePath);

  const exports: any[] = [];

  // Traiter toutes les déclarations d'export
  for (const [
    name,
    declarations,
  ] of sourceFile.getExportedDeclarations()) {
    for (const declaration of declarations) {
      const declarationSourceFile = declaration.getSourceFile();

      // Si la déclaration vient d'un autre fichier, extraire récursivement
      if (declarationSourceFile.getFilePath() !== filePath) {
        const recursiveExports = extractExportsRecursively(
          project,
          declarationSourceFile,
          visited,
        );

        // Extraire tous les imports du fichier source de la déclaration
        const fileImports = declarationSourceFile
          .getImportDeclarations()
          .map(imp => ({
            moduleSpecifier: resolveModuleSpecifier(
              project,
              imp.getModuleSpecifierValue(),
            ),
            namedImports: imp
              .getNamedImports()
              .map(named => named.getName()),
            defaultImport: imp.getDefaultImport()?.getText(),
            namespaceImport: imp.getNamespaceImport()?.getText(),
          }));

        exports.push({
          name,
          type: 'recursive',
          imports: fileImports, // Ajouter les imports comme exports
          filePath: declarationSourceFile.getFilePath(),
          declarations: recursiveExports,
        });
      } else {
        // Traiter les différents types de déclarations
        const declarationInfo: any = {
          name,
          type: declaration.getKindName(),
        };

        // Traitement spécifique selon le type de déclaration
        if (Node.isVariableDeclaration(declaration)) {
          const initializer = declaration.getInitializer();
          declarationInfo.hasInitializer = !!initializer;
          if (initializer) {
            declarationInfo.initializerText = initializer.getText();
          }
        } else if (Node.isFunctionDeclaration(declaration)) {
          declarationInfo.parameters = declaration
            .getParameters()
            .map(p => ({
              name: p.getName(),
              type: p.getTypeNode()?.getText(),
            }));
          declarationInfo.returnType = declaration
            .getReturnTypeNode()
            ?.getText();
        } else if (Node.isClassDeclaration(declaration)) {
          declarationInfo.extends = declaration.getExtends()?.getText();
          declarationInfo.implements = declaration
            .getImplements()
            .map(i => i.getText());
          declarationInfo.properties = declaration
            .getProperties()
            .map(p => ({
              name: p.getName(),
              type: p.getTypeNode()?.getText(),
            }));
        } else if (Node.isInterfaceDeclaration(declaration)) {
          declarationInfo.extends = declaration
            .getExtends()
            .map(e => e.getText());
          declarationInfo.properties = declaration
            .getProperties()
            .map(p => ({
              name: p.getName(),
              type: p.getTypeNode()?.getText(),
            }));
        } else if (Node.isTypeAliasDeclaration(declaration)) {
          declarationInfo.typeParameters = declaration
            .getTypeParameters()
            .map(tp => tp.getName());
          declarationInfo.typeDefinition = declaration
            .getTypeNode()
            ?.getText();
        } else if (Node.isExportDeclaration(declaration)) {
          // Gérer les re-exports (export * from './module')
          const moduleSpecifier = declaration.getModuleSpecifier();
          if (moduleSpecifier) {
            const targetFile = declaration.getModuleSpecifierSourceFile();
            if (targetFile) {
              const recursiveExports = extractExportsRecursively(
                project,
                targetFile,
                visited,
              );
              declarationInfo.reExports = recursiveExports;
              declarationInfo.moduleSpecifier = resolveModuleSpecifier(
                project,
                moduleSpecifier.getLiteralValue(),
              );
            }
          }
        }

        exports.push(declarationInfo);
      }
    }
  }

  return exports;
};
