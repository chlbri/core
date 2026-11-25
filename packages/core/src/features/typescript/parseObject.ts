import { Node, Project, SyntaxKind } from 'ts-morph';

/**
 * Converts an object-literal source string into a plain JavaScript value.
 *
 * The string is parsed in a throwaway ts-morph project as `const obj = ...`.
 * Object literals become plain objects, arrays become arrays of converted
 * elements, string and numeric literals are unwrapped, `true`, `false` and
 * `null` map to their runtime values, and any other node (identifier or
 * expression) is kept as its source text.
 *
 * @param objString - Source text of an object literal.
 * @returns The converted value, or `null` when parsing fails or the
 *   initializer is not an object literal.
 */
export const parseObject = (objString: string): any => {
  try {
    const project = new Project();

    // Créer un fichier temporaire avec l'objet
    const tempFile = project.createSourceFile(
      'temp.ts',
      `
      const obj = ${objString};
      export default obj;
    `,
    );

    // Obtenir la déclaration de variable
    const variableDeclaration = tempFile.getVariableDeclaration('obj');
    if (!variableDeclaration) return null;

    const initializer = variableDeclaration.getInitializer();
    if (
      !initializer ||
      initializer.getKind() !== SyntaxKind.ObjectLiteralExpression
    ) {
      return null;
    }

    // Fonction récursive pour parser l'objet
    /**
     * Recursively converts a ts-morph node into a plain JavaScript value.
     *
     * @param node - Node visited during the conversion.
     * @returns Converted value, falling back to the node's source text for
     *   unsupported nodes.
     */
    const parseNode = (node: Node): any => {
      if (Node.isObjectLiteralExpression(node)) {
        const obj: any = {};
        node.getProperties().forEach((prop: any) => {
          if (Node.isPropertyAssignment(prop)) {
            const name = prop.getName();
            const initializer = prop.getInitializer();
            if (initializer) {
              const value = parseNode(initializer);
              obj[name] = value;
            }
          }
        });
        return obj;
      }

      if (Node.isArrayLiteralExpression(node)) {
        return node.getElements().map((element: any) => parseNode(element));
      }

      if (Node.isStringLiteral(node) || Node.isNumericLiteral(node)) {
        return node.getLiteralValue();
      }

      if (Node.isTrueLiteral(node)) {
        return true;
      }

      if (Node.isFalseLiteral(node)) {
        return false;
      }

      if (Node.isNullLiteral(node)) {
        return null;
      }

      if (Node.isIdentifier(node)) {
        return node.getText();
      }

      return node.getText();
    };

    return parseNode(initializer);
  } catch (error) {
    console.error('Erreur avec ts-morph:', error);
    return null;
  }
};
