import type { Checker2 } from '#types';

/**
 * Very low
 * Checks if value is a function with one argument
 * @param value value to check
 * @returns true if value is a function with one argument
 */
const is = <T = unknown>(value: unknown): value is Checker2<T> => {
  return (
    typeof value === 'function' &&
    value.length === 1 &&
    !/^\s*class\s+/.test(value.toString())
  );
};

export default is;
