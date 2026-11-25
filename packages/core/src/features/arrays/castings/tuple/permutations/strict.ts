import type { Permutations, RuA } from '#types';
import { _unknown } from '#utils/_unknown';
import index from './index';

/**
 * Strictly typed variant of the permutation generator.
 *
 * Delegates the computation to {@linkcode index} and asserts the result to
 * type {@linkcode Permutations}`<T>[]`, whose element type unions the distinct
 * permutations. Exposed as `strict` on the aggregated `permutations` helper.
 *
 * @template T - Tuple type of the permuted values.
 * @param arr - Elements to permute.
 * @returns Every permutation of `arr`, typed as `Permutations<T>[]`.
 */
const fn = <const T extends RuA>(...arr: T) => {
  return _unknown<Permutations<T>[]>(index(...arr));
};

export default fn;
