import { expandFn } from '#utils/expandFn';
import by from './by/all';
import _index from './index';
import is from './is';

/**
 * Aggregate `omit.deep` helper.
 *
 * Wraps the recursive omit function from `./index` and attaches the `by` value
 * variant along with the `is` predicate. Nested plain objects are filtered
 * recursively at every level.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(_index, { by, is });

export default fn;
