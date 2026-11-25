import { _unknown } from '#utils/_unknown';

/**
 * Converts a string to upper case.
 *
 * The result is typed as the intrinsic upper-case string type of `T`.
 *
 * @template T - Type of the string to convert.
 * @param value - String to convert.
 * @returns The upper-cased string.
 */
const fn = <T extends string>(value: T) => {
  const out = value.toUpperCase();
  return _unknown<Uppercase<T>>(out);
};

export default fn;
