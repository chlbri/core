import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

/**
 * Aggregate `omit.deep.by` helper.
 *
 * Wraps the recursive omit-by-value function from `./index` and attaches its
 * `is` predicate, which tests the same condition across nested plain objects.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(_index, { is });

export default fn;
