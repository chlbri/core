/**
 * Assigns properties onto an object.
 *
 * Copies the own enumerable properties of `requires` onto `object` with
 * `Object.assign`, mutating `object` in place, and returns the merged object.
 * No key checking is performed here; the `strict` and `const` variants
 * restrict `requires` to the keys of `object` whose values may be `undefined`.
 *
 * @template T - Type of the object receiving the properties.
 * @param object - Object mutated in place and returned.
 * @param requires - Properties assigned onto `object`.
 * @returns `object` after the properties of `requires` were assigned.
 */
const fn = <T extends object>(object: T, requires: object) => {
  return Object.assign(object, requires);
};

export default fn;
