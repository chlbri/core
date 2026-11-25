import { _unknown } from '#utils/_unknown';

/**
 * Unwraps a one-element array, or returns the value unchanged.
 *
 * Arrays yield their first element, while any other value is returned as-is;
 * the result is asserted to `T` through {@linkcode _unknown}. Mirrors the
 * `reduce` helper of the type-level {@linkcode typings} aggregate, which maps
 * arrays to their element type.
 *
 * @template T - Element type of the returned value.
 * @param value - Single value or one-element array to unwrap.
 * @returns First element for arrays, otherwise `value`.
 */
const fn = <T>(value: T | readonly [T] | [T]) => {
  const out = Array.isArray(value) ? value[0] : value;
  return _unknown<T>(out);
};

export default fn;
