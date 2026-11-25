import isMaxLength from './is';

/**
 * Checks that a string is shorter than a maximum length and returns it
 * unchanged.
 *
 * @param max - Exclusive upper bound of the string length.
 * @param value - String to check.
 * @returns An object with `bool` (the guard result) and the original `value`.
 */
const lowMaxLength = (max: number, value: string) => {
  const bool = isMaxLength(max, value);

  return { bool, value };
};

export default lowMaxLength;
