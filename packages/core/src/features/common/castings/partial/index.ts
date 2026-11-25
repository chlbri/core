import { _unknown } from '#utils/_unknown';

/**
 * Shallow partial cast.
 *
 * Returns the value untouched and only asserts it as `Partial<T>` through
 * {@linkcode _unknown}, making every top-level property optional at the type
 * level without any runtime change.
 *
 * @template T - Type whose top-level properties become optional.
 * @param value - Value returned unchanged.
 * @returns The same `value`, typed as `Partial<T>`.
 */
const fn = <T>(value: T) => {
  return _unknown<Partial<T>>(value);
};

export default fn;
