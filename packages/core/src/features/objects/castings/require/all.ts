import { expandFn } from '#utils/expandFn';
import _const from './const';
import _index from './index';
import is from './is/all';
import strict from './strict';

/**
 * Aggregated runtime helpers for require casts.
 *
 * Extends the property assignment from `./index` through {@linkcode expandFn}
 * with:
 * - `strict`: assigns only keys whose values may be `undefined`;
 * - `const`: same assignment while preserving literal types;
 * - `is`: required-state guards, including a recursive `deep` variant.
 *
 * Exposed as `require` on the aggregated {@linkcode castings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { strict, const: _const, is });

export default fn;
