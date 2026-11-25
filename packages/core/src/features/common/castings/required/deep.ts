import type { DeepRequired } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Recursive required cast.
 *
 * Returns the value untouched and only asserts it as `DeepRequired<T>` through
 * {@linkcode _unknown}, removing the optional modifier and `undefined` from
 * nested properties at every depth. No runtime change occurs.
 *
 * @template T - Object type, or `undefined`, made required at every level.
 * @param value - Value returned unchanged.
 * @returns The same `value`, typed as `DeepRequired<T>`.
 */
const fn = <T extends object | undefined>(value: T) => {
  return _unknown<DeepRequired<T>>(value);
};

export default fn;
