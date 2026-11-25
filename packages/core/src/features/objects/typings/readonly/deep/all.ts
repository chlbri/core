import { expandFn } from '#utils/expandFn';
import deepReadonly from './index';
import is from './is';
import not from './not/all';

/**
 * Object typing helper that makes a type deeply readonly.
 *
 * Extends the base `deep` typing with the `not` and `is` variants, reachable as
 * `typings.readonly.deep.not` and `typings.readonly.deep.is`. The export only
 * describes type transformations and evaluates to `undefined` at runtime.
 *
 * @see {@linkcode expandFn}
 */
const fn = expandFn(deepReadonly, { not, is });

export default fn;
