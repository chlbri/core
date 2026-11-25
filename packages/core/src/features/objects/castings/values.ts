/**
 * Typed wrapper around `Object.values`.
 *
 * @template T - Type of the object.
 * @param object - Object to read the values from.
 * @returns Array of the own enumerable values of `object`.
 */
const fn = <T extends object>(object: T): T[keyof T][] => {
  return Object.values(object) as any;
};

export default fn;
