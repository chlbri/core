/**
 * Reads a property of an object by key.
 *
 * @template T - Type of the source object.
 * @template K - Key to read, constrained to the keys of `T`.
 * @param object - Object to read from.
 * @param key - Property key to access.
 * @returns The value stored at `key`.
 */
const fn = <T extends object, K extends keyof T>(object: T, key: K): T[K] => {
  return object[key];
};

export default fn;
