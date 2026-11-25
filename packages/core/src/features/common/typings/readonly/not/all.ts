import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

/**
 * Aggregated type-level helpers for non-readonly transforms.
 *
 * Uses {@linkcode expandFn} to extend the mutable transform from `./index`
 * with:
 * - `is`: checks whether an object type matches its own mutable form.
 *
 * Exposed as `not` on the `readonly` member of the aggregated common
 * {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const not = expandFn(_index, { is });

export default not;
