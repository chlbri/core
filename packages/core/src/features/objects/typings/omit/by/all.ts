import { expandFn } from '#utils/expandFn';
import _const from './const/all';
import _index from './index';
import is from './is';

/**
 * Object typing helper that removes keys selected by value type.
 *
 * Extends the base `by` typing with the `is` and `const` variants, reachable
 * as `typings.omit.by.is` and `typings.omit.by.const`. The export only
 * describes a type transformation and evaluates to `undefined` at runtime.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(_index, { is, const: _const });

export default fn;
