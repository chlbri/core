import type { LowerLetters } from '#types';
import { castFn } from '#utils/castFn';
import is from './is';

/**
 * Casting helper restricted to lowercase English letters.
 *
 * Creates the identity lowercase-letters cast through {@linkcode castFn} and
 * adds an `is` guard built on the letters guard, which also requires the value
 * to equal its lowercased form. Exposed as `lower` on the `letters` helper of
 * the aggregated {@linkcode castings} helper.
 */
const fn = castFn<LowerLetters>()({
  is: (value: unknown): value is LowerLetters => {
    return typeof value === 'string' && is(value) && value === value.toLowerCase();
  },
});

export default fn;
