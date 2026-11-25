import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

/**
 * Aggregated runtime helpers for primitive object casts.
 *
 * Extends the identity cast from `./index` through {@linkcode expandFn} with
 * `is`, a recursive guard checking that every nested value is a primitive.
 * Exposed as `object` on the aggregated `primitive` helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { is });

export default fn;
