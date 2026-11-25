import type { NonN } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Returns a fallback value when the input is `null` or `undefined`.
 *
 * @template T - Type of the value being defaulted.
 * @template | {@linkcode NonN} `U` - Type of the fallback, constrained to `NonN<T>`.
 * @param value - Value returned when it is defined.
 * @param defaultValue - Fallback used when `value` is `null` or `undefined`.
 * @returns `value` when defined, otherwise `defaultValue`, typed as `NonN<T>`.
 */
const fn = <T, U extends NonN<T>>(value: T, defaultValue: U) => {
  const out = value === undefined || value === null ? defaultValue : value;
  return _unknown<NonN<T>>(out);
};

export default fn;
