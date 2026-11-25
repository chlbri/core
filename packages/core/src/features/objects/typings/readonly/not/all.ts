import { expandFn } from '#utils/expandFn';
import notReadonly from './index';
import is from './is';

/**
 * Object typing helper that removes the `readonly` modifier from a type.
 *
 * Extends the base `not` typing with its `is` variant, reachable as
 * `typings.readonly.not.is`. The export only describes type transformations and
 * evaluates to `undefined` at runtime.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(notReadonly, { is });

export default fn;
