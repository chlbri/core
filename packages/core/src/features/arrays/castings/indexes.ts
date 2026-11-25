import type { IndexesOfArray, RuA, UnionToTuple } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Builds the tuple of the indexes of the given values.
 *
 * Maps every argument to its position (`0` to `n - 1`) and narrows the result
 * to `UnionToTuple<IndexesOfArray<T>>`. Mirrors the `indexes` helper of the
 * type-level {@linkcode typings} aggregate.
 *
 * @template T - Tuple type whose indexes are produced.
 * @param array - Values whose length drives the produced indexes.
 * @returns Tuple of the indexes of `array`.
 */
const fn = <const T extends RuA>(...array: T) => {
  const out = array.map((_, index) => index);
  return _unknown<UnionToTuple<IndexesOfArray<T>>>(out);
};

export default fn;
