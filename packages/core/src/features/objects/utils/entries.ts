import type { KeyTypes } from '#types';

/**
 * Validates an object against a key-to-type schema.
 *
 * Every entry of `keys` must exist on `object`. When the expected value is a
 * string it is compared with `typeof`, when it is a function it is called with
 * the actual value. Nested schemas are not traversed.
 *
 * @param keys - Schema mapping keys to expected `typeof` strings or checkers.
 * @param object - Object to validate.
 * @returns `true` when every key exists and matches its expected type.
 */
export const checkEntries = (keys: KeyTypes, object: object) => {
  const entries = Object.entries(keys);
  return entries.every(([key, type]) => {
    const check1 = key in object;
    if (!check1) return false;

    const value = (object as any)[key];
    if (typeof type === 'string') {
      return typeof value === type;
    } else if (typeof type === 'function') {
      return type(value);
    }
    return false;
  });
};
