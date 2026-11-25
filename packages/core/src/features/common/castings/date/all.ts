import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

/**
 * Casting helper for the `Date` type, extended with its `is` guard.
 *
 * Uses {@linkcode expandFn} to attach an `is` member that tests for `Date`
 * instances to the base `Date` identity cast.
 */
const fn = expandFn(_index, { is });

export default fn;
