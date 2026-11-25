import type { Defaulted, NonN } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Typing-oriented default-value helper.
 *
 * Returns the same runtime fallback as the runtime variant but exposes the
 * resolved type {@linkcode Defaulted} of the value and its fallback.
 *
 * @template T - Type of the value being defaulted.
 * @template | {@linkcode NonN} `U` - Type of the fallback, constrained to
 * `NonN<T>`.
 * @param value - Value returned when it is defined.
 * @param defaultValue - Fallback used when `value` is `null` or `undefined`.
 * @returns `value` when defined, otherwise `defaultValue`, typed as
 * `Defaulted<T, U>`.
 */
const fn = <T, const U extends NonN<T>>(value: T, defaultValue: U) => {
  const out = value === undefined || value === null ? defaultValue : value;
  return _unknown<Defaulted<T, U>>(out);
};

export default fn;
