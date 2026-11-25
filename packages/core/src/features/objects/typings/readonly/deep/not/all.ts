import { expandFn } from '#utils/expandFn';
import deepNotReadonly from './index';
import is from './is';

/**
 * Object typing helper that removes `readonly` deeply from a type.
 *
 * Extends the base `deep.not` typing with its `is` variant, reachable as
 * `typings.readonly.deep.not.is`. The export only describes type
 * transformations and evaluates to `undefined` at runtime.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(deepNotReadonly, { is });

export default fn;
