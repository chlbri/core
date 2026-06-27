import { Node, Project, SyntaxKind } from 'ts-morph';
import { findFirstCallExpression } from './findFirstCallExpression';
import {
  extractExportsRecursively,
  resolveModuleSpecifier,
} from './helpers';
import { parseObject } from './parseObject';
import { resolveType } from './resolveType';

export const extractFromFile = (filePath: string) => {
  const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
  });
  const sourceFile = project.addSourceFileAtPath(filePath);

  // Fonction pour résoudre les spécificateurs de modules en utilisant tsconfig.json

  // Fonction pour résoudre récursivement les types importés en utilisant l'API du compilateur

  const out = {
    exports: extractExportsRecursively(project, sourceFile),

    imports: sourceFile.getImportDeclarations().map(imp => ({
      moduleSpecifier: resolveModuleSpecifier(
        project,
        imp.getModuleSpecifierValue(),
      ),
      namedImports: imp.getNamedImports().map(named => named.getName()),
    })),

    types: sourceFile.getTypeAliases().map(type => ({
      name: type.getName(),
      typeParameters: type.getTypeParameters().map(tp => tp.getName()),
      type: type.getTypeNodeOrThrow().getText(),
    })),

    variables: sourceFile.getVariableDeclarations().map(v => {
      const initializer = v.getInitializer();
      let params: any[] = [];
      let firstFunctionName: string | undefined;

      const isCallable1 = Node.isCallExpression(initializer);

      // Fonction pour trouver le premier appel de fonction dans une chaîne

      // Vérifier si l'initializer est un appel de fonction
      if (isCallable1) {
        // Trouver le premier appel de fonction dans la chaîne
        const firstCallExpression = findFirstCallExpression(initializer);

        const isCallable2 = Node.isCallExpression(firstCallExpression);

        if (isCallable2) {
          // Récupérer le nom de la fonction
          const expression = firstCallExpression.getExpression();
          if (expression.getKind() === SyntaxKind.Identifier) {
            firstFunctionName = expression.getText();
          }

          params = firstCallExpression.getArguments().map(arg => {
            if (Node.isCallExpression(arg)) {
              // Si c'est un appel de fonction, extraire le type de retour
              const type = arg.getType();
              return resolveType(sourceFile, type);
            }

            const text = arg.getText();
            if (Node.isObjectLiteralExpression(arg))
              return parseObject(text);

            return text;
          });
        }
      }

      return {
        name: v.getName(),
        // Type node (ce qui est écrit dans le code)
        // Nom de la première fonction appelée
        function: firstFunctionName,
        // Arguments de l'appel de fonction si applicable
        params,
        // Flags du type
      };
    }),
  };

  project.removeSourceFile(sourceFile);

  return out;
};
