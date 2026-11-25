/**
 * Compares two strings by their runtime length.
 *
 * @param a - First string.
 * @param b - Second string.
 * @returns `0` when both lengths are equal, `-1` when `a` is shorter and `1`
 * when `a` is longer.
 */
const stringCompareLengthLow = (a: string, b: string): number => {
  if (a.length === b.length) {
    return 0;
  }

  return a.length < b.length ? -1 : 1;
};

export default stringCompareLengthLow;
