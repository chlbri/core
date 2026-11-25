import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

/**
 * Aggregated runtime helpers for symbol casts.
 *
 * Extends the identity symbol cast from `./index` through
 * {@linkcode expandFn} with `is`, a `typeof` guard checking for symbols.
 * Exposed as `symbol` on the aggregated {@linkcode castings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { is });

export default fn;
