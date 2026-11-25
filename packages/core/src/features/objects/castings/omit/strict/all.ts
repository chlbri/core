import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

/**
 * Aggregate `omit.strict` helper.
 *
 * Wraps the strict omit function from `./index` and attaches its `is` predicate.
 * The key tuple is constrained to the own keys of the object, so unknown keys are
 * rejected at compile time.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(_index, { is });

export default fn;
