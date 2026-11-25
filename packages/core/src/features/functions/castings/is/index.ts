import type { Fn } from '#types';

/**
 * Checks whether a value is a function.
 *
 * @param value - Value to inspect.
 * @returns `true` when `value` is callable.
 */
const is = (value: unknown): value is Fn => {
  return typeof value === 'function';
};

export default is;
