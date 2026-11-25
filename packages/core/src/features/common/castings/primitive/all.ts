import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';
import object from './object/all';

/**
 * Aggregated runtime helpers for primitive casts.
 *
 * Extends the identity cast from `./index` through {@linkcode expandFn} with:
 * - `is`: guard checking for primitives, including `null` and `undefined`;
 * - `object`: casting helpers for values whose nested members are primitives.
 *
 * Exposed as `primitive` on the aggregated {@linkcode castings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { is, object });

export default fn;
