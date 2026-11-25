import { expandFn } from '#utils/expandFn';
import index from './index';
import strict from './strict';

/**
 * Aggregated permutation helpers.
 *
 * Extends the permutation generator from `./index` through
 * {@linkcode expandFn} with a `strict` variant that narrows results to the
 * distinct permutations. Sort the input before use for predictable output.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(index, {
  /**
   * Strictly typed permutation variant exposed as `strict`.
   *
   * Shares the runtime behaviour of the base generator and narrows the result
   * type.
   */
  strict,
});

export default fn;
