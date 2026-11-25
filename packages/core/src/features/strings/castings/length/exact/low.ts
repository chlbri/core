import isExactLength from './is';

/**
 * Checks a string against an exact length and returns it unchanged.
 *
 * @param length - Exact length the string must have.
 * @param value - String to check.
 * @returns An object with `bool` (the guard result) and the original `value`.
 */
const lowExactLength = (length: number, value: string) => {
  const bool = isExactLength(length, value);

  return { bool, value };
};

export default lowExactLength;
