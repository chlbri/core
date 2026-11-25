/**
 * Typed wrapper around `Object.entries`.
 *
 * Returns the own enumerable string-keyed entries of the object, with keys typed
 * as `keyof T` and values as `T[keyof T]`.
 *
 * @template T - Type of the object.
 * @param object - Object to read the entries from.
 * @returns Array of `[key, value]` tuples.
 */
const fn = <T extends object>(object: T): [keyof T, T[keyof T]][] => {
  return Object.entries(object) as any;
};

export default fn;
