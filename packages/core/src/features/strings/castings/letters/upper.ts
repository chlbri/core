import type { UpperLetters } from '#types';
import { castFn } from '#utils/castFn';
import is from './is';

/**
 * Casting helper restricted to uppercase English letters.
 *
 * Creates the identity uppercase-letters cast through {@linkcode castFn} and
 * adds an `is` guard built on the letters guard, which also requires the value
 * to equal its uppercased form. Exposed as `upper` on the `letters` helper of
 * the aggregated {@linkcode castings} helper.
 */
const fn = castFn<UpperLetters>()({
  is: (value: unknown): value is UpperLetters => {
    return typeof value === 'string' && is(value) && value === value.toUpperCase();
  },
});

export default fn;
