import { isTypeFn } from '#utils/is/_default';

/**
 * Type guard checking that a string ends with a given suffix.
 *
 * Combines the `string` check from {@linkcode isTypeFn} with
 * `String.prototype.endsWith`.
 *
 * @template U - Type of the suffix.
 * @param value - Value to test.
 * @param suffix - Suffix the string must end with.
 * @returns `true` when `value` is a string ending with `suffix`.
 */
const fn = <U extends string>(
  value: unknown,
  suffix: U,
): value is `${string}${U}` => {
  return isTypeFn('string')(value) && value.endsWith(suffix);
};

export default fn;
