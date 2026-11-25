import type { TupleOf } from '#types';
import is from '../is';

/**
 * Creates a type guard checking for an exact array length.
 *
 * The returned guard relies on {@linkcode is} before comparing `value.length`
 * with `check`, narrowing to type {@linkcode TupleOf}`<unknown, T>`. Exposed as
 * `has` on the aggregated length helper.
 *
 * @template T - Literal number of elements expected.
 * @param check - Exact length the guarded array must have.
 * @returns Type guard recognising arrays of length `check`.
 */
const fn = <T extends number>(check: T) => {
  const _out = (value: unknown): value is TupleOf<unknown, T> => {
    return is(value) && value.length === check;
  };

  return _out;
};

export default fn;
