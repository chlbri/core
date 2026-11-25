import type { Neverify } from '#types';
import _unknown from './_unknown';

/**
 * Casts a value to its type {@linkcode Neverify} form.
 *
 * Returns the value unchanged while re-typing it as `Neverify<T>`, which maps
 * deep-never types to `never` and leaves all other types untouched.
 *
 * @template T - Type of the input value.
 * @param value - Value returned unchanged.
 * @returns The input value typed as `Neverify<T>`.
 */
const fn = <T>(value: T) => {
  return _unknown<Neverify<T>>(value);
};

export default fn;
