import type { TupleOf } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Repeats a value into a fixed-length tuple.
 *
 * Builds an array of `times` copies of `data` and narrows it to type
 * {@linkcode TupleOf}`<T, N>`. Mirrors the type-level `multiply` helper,
 * exposed as `number` on the `tuple` helper of {@linkcode typings}.
 *
 * @template T - Type of the repeated value.
 * @template N - Literal number of repetitions.
 * @param data - Value to repeat.
 * @param times - Number of copies to produce.
 * @returns Tuple containing `times` copies of `data`.
 */
const fn = <const T, N extends number>(data: T, times: N) => {
  const out = Array.from({ length: times }, () => data);
  return _unknown<TupleOf<T, N>>(out);
};

export default fn;
