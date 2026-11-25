import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

/**
 * Aggregate `omit.const` helper.
 *
 * Wraps the const-generic omit function from `./index` and attaches its `is`
 * predicate. The `const` type parameter keeps literal object types inferred from
 * the call site.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(_index, { is });

export default fn;
