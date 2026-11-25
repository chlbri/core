import { _unknown } from '#utils/_unknown';

/**
 * Casts any value to an array of `T` without runtime validation.
 *
 * The value is returned untouched and only asserted to be `T[]` through
 * {@linkcode _unknown}. Mirrors the `forceCast` helper of the type-level
 * {@linkcode typings} aggregate.
 *
 * @template T - Element type asserted for the resulting array.
 * @param value - Value asserted as an array of `T`.
 * @returns The same `value`, typed as `T[]`.
 */
const fn = <T>(value: unknown) => {
  return _unknown<T[]>(value);
};

export default fn;
