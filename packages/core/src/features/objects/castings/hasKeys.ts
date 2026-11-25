import type { Keys } from '#types';

/**
 * Type guard checking that an object contains all the given keys.
 *
 * Each key is tested with the `in` operator, which also matches keys inherited
 * through the prototype chain.
 *
 * @template K - Tuple of the keys to check.
 * @param object - Object to inspect.
 * @param keys - Keys that must be present on `object`.
 * @returns `true` when every key exists on `object`, otherwise `false`.
 */
const fn = <K extends Keys[]>(
  object: object,
  ...keys: K
): object is Record<K[number], unknown> => {
  return keys.every(key => key in object);
};

export default fn;
