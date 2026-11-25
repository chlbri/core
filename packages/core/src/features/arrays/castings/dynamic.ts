import type { AnyArray } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Identity array cast that returns the value untouched.
 *
 * The value is only asserted to be of type `T` through {@linkcode _unknown},
 * so no coercion or copy happens at runtime. Mirrors the `dynamic` helper of
 * the type-level {@linkcode typings} aggregate.
 *
 * @template T - Array type asserted on the value.
 * @param value - Value returned unchanged.
 * @returns The same `value`, typed as `T`.
 */
const fn = <T extends AnyArray>(value: T) => {
  return _unknown<T>(value);
};

export default fn;
