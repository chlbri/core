import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

/**
 * Aggregated type-level helpers for deep non-readonly transforms.
 *
 * Uses {@linkcode expandFn} to extend the recursive mutable transform from
 * `./index` with:
 * - `is`: checks whether an object type matches its own deeply mutable form.
 *
 * Exposed as `not` on `readonly.deep` of the aggregated common
 * {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const deepNot = expandFn(_index, { is });

export default deepNot;
