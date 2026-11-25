import { _unknown } from '#utils/_unknown';

/**
 * Reads the length of a string.
 *
 * The returned number is typed as the literal length of `T`.
 *
 * @template T - String type whose length is measured.
 * @param value - String to measure.
 * @returns The length of `value`, typed as `T['length']`.
 */
const fn = <const T extends string>(value: T) => {
  const out = value.length;
  return _unknown<T['length']>(out);
};

export default fn;
