import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

/**
 * Object typing helper that removes keys selected by literal value types.
 *
 * Extends the base `by.const` typing with its `is` variant, reachable as
 * `typings.omit.by.const.is`. The export only describes a type transformation
 * and evaluates to `undefined` at runtime.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(_index, { is });

export default fn;
