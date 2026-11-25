import type { AddString } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Wraps a string between a prefix and a suffix.
 *
 * Returns the runtime concatenation `${before}${value}${after}`, typed as the
 * corresponding template literal of the three inputs.
 *
 * @template T - Type of the wrapped string.
 * @template Before - Type of the prefix.
 * @template After - Type of the suffix.
 * @param value - String placed at the centre of the result.
 * @param before - Prefix prepended to `value`; defaults to `''`.
 * @param after - Suffix appended to `value`; defaults to `''`.
 * @returns The concatenated string.
 * @see -- type {@linkcode AddString}
 */
const fn = <T extends string, Before extends string, After extends string>(
  value: T,
  before = '' as Before,
  after = '' as After,
) => {
  const out = `${before}${value}${after}`;
  return _unknown<AddString<T, Before, After>>(out);
};

export default fn;
