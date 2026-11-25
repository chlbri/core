import { _unknown } from '#utils/_unknown';

/**
 * Converts a string to lower case.
 *
 * The result is typed as the intrinsic lower-case string type of `T`.
 *
 * @template T - Type of the string to convert.
 * @param value - String to convert.
 * @returns The lower-cased string.
 */
const fn = <T extends string>(value: T) => {
  const out = value.toLowerCase();
  return _unknown<Lowercase<T>>(out);
};

export default fn;
