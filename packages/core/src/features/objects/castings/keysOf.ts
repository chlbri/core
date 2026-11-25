/**
 * Typed wrapper around `Object.keys`.
 *
 * @template T - Type of the object.
 * @param object - Object to list the keys of.
 * @returns Array of the own enumerable string keys of `object`.
 */
const fn = <T extends object>(object: T): (keyof T)[] => {
  return Object.keys(object) as any;
};

export default fn;
