import { expandFn } from '#utils/expandFn';
import _index from './index';
import union from './union';

/**
 * Aggregated type-level helpers for the indexes of a tuple.
 *
 * Uses {@linkcode expandFn} to extend the base index-listing function with:
 * - `union`: the valid indexes as a union of literals.
 *
 * Exposed as `indexes` on the aggregated {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { union });

export default fn;
