import { isTypeFn } from '#utils/is/_default';

/**
 * Type guard checking that a string starts with a given prefix.
 *
 * Combines the `string` check from {@linkcode isTypeFn} with
 * `String.prototype.startsWith`.
 *
 * @template U - Type of the prefix.
 * @param value - Value to test.
 * @param prefix - Prefix the string must start with.
 * @returns `true` when `value` is a string starting with `prefix`.
 */
const fn = <U extends string>(
  value: unknown,
  prefix: U,
): value is `${U}${string}` => {
  return isTypeFn('string')(value) && value.startsWith(prefix);
};

export default fn;
