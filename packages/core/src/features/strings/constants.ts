/**
 * Tuple of the lowercase English letters `a` through `z`.
 *
 * Declared `as const`, so its element type is the literal union used by type
 * {@linkcode LowerLetters}. Also serves as the runtime alphabet used by the
 * letters type guards.
 */
export const ENGLISH_LETTERS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
] as const;

/**
 * Default delimiter used when splitting strings.
 *
 * Set to a single dot and used as the default separator of the string
 * splitting helpers.
 */
export const DEFAULT_DELIMITER = '.';
