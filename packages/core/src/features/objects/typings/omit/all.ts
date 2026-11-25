import { expandFn } from '#utils/expandFn';
import by from './by/all';
import _const from './const/all';
import _index from './index';
import is from './is';

/**
 * Object typing helper that removes a set of keys from a type.
 *
 * Extends the base `omit` typing with the `const`, `is` and `by` variants, so
 * the helper is reachable as `typings.omit.const`, `typings.omit.is` and
 * `typings.omit.by`. The export only describes a type transformation and
 * evaluates to `undefined` at runtime.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(_index, { const: _const, is, by });

export default fn;
