import { expandFn } from '#utils/expandFn';
import by from './by';
import _index from './index';

/**
 * Aggregate `pick.deep` helper.
 *
 * Wraps the recursive pick function from `./index` and attaches the `by` value
 * variant. Nested plain objects are filtered recursively at every level.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(_index, { by });

export default fn;
