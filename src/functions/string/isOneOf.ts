export function isOneOf(
  checkers: string[] | readonly string[],
  ...toChecks: string[]
): boolean {
  return toChecks.every(checkers.includes);
}
