import type { Checker2 } from '#types';

/**
 * Checks whether a value is a single-argument checker function.
 *
 * Rejects values that are not functions, functions whose declared arity is not
 * one, and class constructors.
 *
 * @template T - Type narrowed by the checker.
 * @param value - Value to check.
 * @returns `true` when `value` is a checker for `T`.
 */
const is = <T = unknown>(value: unknown): value is Checker2<T> => {
  return (
    typeof value === 'function' &&
    value.length === 1 &&
    !/^\s*class\s+/.test(value.toString())
  );
};

export default is;
