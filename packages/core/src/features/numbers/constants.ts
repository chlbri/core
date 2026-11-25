/**
 * Tuple of the ten decimal digits, ordered from `0` to `9`.
 *
 * Declared `as const`, so each element keeps its literal type and the tuple
 * serves to derive the type {@linkcode Digit}.
 */
export const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
