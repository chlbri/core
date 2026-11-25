import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

/**
 * Aggregate `omit.by` helper.
 *
 * Wraps the value-based omit function from `./index` and attaches the `is`
 * predicate, so the same condition can be evaluated without allocating the
 * filtered object.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(_index, { is });

export default fn;
