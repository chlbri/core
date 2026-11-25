import { Node } from 'ts-morph';

/**
 * Walks a call chain down to its left-most call expression.
 *
 * While the current node exposes an `expression` that itself exposes an
 * `expression` (a call or property access chained after another call), the
 * walk continues on the left-hand side. It stops at the node whose callee is a
 * plain identifier, which is returned.
 *
 * @param node - Node from which the walk starts.
 * @returns The left-most call expression of the chain, or `node` itself when it
 *   has no nested expression.
 */
export const findFirstCallExpression = (node: Node): any => {
  const hasExpression = Node.hasExpression(node);
  if (hasExpression) {
    const expression = node.getExpression();

    // Si l'expression est un PropertyAccessExpression (e.g., createMachine(...).provideOptions)
    if (
      expression &&
      // expression.getKind() === SyntaxKind.PropertyAccessExpression &&
      Node.hasExpression(expression)
    ) {
      // Récursivement chercher dans l'expression de gauche
      // Cast to PropertyAccessExpression to access getExpression()
      return findFirstCallExpression(expression.getExpression());
    }

    // Si c'est un Identifier ou autre, c'est le premier appel
    return node;
  }

  return node;
};
