import { _unknown } from '#utils/_unknown';

/**
 * Returns the length of a string.
 *
 * Reads `value.length` at runtime. Because the return type is inferred as
 * `number`, the literal length is not preserved; the typed variant wraps this
 * helper through {@linkcode _unknown} to keep it.
 *
 * @param value - String whose length is read.
 * @returns The number of characters in `value`.
 */
const fn = (value: string) => {
  return value.length;
};

export default fn;
