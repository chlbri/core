import type { NotUndefined } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Cast removing `undefined` from a type.
 *
 * Base helper of the `required` casts. Returns the value untouched and only
 * asserts it as type {@linkcode NotUndefined} `<T>` through
 * {@linkcode _unknown}, so `undefined` is excluded from the type with no
 * runtime check.
 *
 * @template T - Type from which `undefined` is removed.
 * @param value - Value returned unchanged.
 * @returns The same `value`, typed as `NotUndefined<T>`.
 */
const fn = <T>(value: T) => {
  return _unknown<NotUndefined<T>>(value);
};

export default fn;
