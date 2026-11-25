import { expandFn } from '#utils/expandFn';
import _index from './index';
import strict from './strict';

/**
 * Aggregated function guards.
 *
 * Extends the base `is` guard with a `strict` variant.
 *
 * @see -- type {@linkcode FnBasic}
 */
const is = expandFn(_index, { strict });

export default is;
