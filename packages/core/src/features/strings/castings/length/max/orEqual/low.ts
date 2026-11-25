import isMaxOrEqualLength from './is';

/**
 * Checks that a string is at most a maximum length and returns it unchanged.
 *
 * @param max - Inclusive upper bound of the string length.
 * @param value - String to check.
 * @returns An object with `bool` (the guard result) and the original `value`.
 */
const lowMaxOrEqualLength = (max: number, value: string) => {
  const bool = isMaxOrEqualLength(max, value);

  return { bool, value };
};

export default lowMaxOrEqualLength;
