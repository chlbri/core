export function isS(
  checkers: string[] | readonly string[],
  toCheck: string,
): boolean {
  return checkers.includes(toCheck);
}
