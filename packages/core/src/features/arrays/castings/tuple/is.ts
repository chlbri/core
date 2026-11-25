import type { Checker2 } from '#types';
import is from '../is';

/**
 * Creates a type guard checking every element of an array.
 *
 * The returned guard relies on {@linkcode is} before applying the given checker
 * to each element with `Array.prototype.every`, narrowing to `Array<T>`.
 * Exposed as `is` on the aggregated tuple helper.
 *
 * @template T - Element type recognised by the guard.
 * @param fn - Checks each array element against `T`.
 * @returns Type guard recognising arrays whose elements all satisfy `fn`.
 */
const fn = <const T>(fn: Checker2<T>) => {
  const _out = (value: unknown): value is Array<T> => {
    return is(value) && value.every(fn);
  };

  return _out;
};

export default fn;
