/**
 * Checks that an object has no `undefined` or `null` values.
 *
 * Reads the own enumerable values of `object` with `Object.values` and
 * narrows it to `Required<T>` when none of them is `undefined` or `null`.
 * Only the first level is checked; use the `deep` variant for nested values.
 *
 * @template T - Object type checked and narrowed to `Required<T>`.
 * @param object - Object whose values are checked.
 * @returns `true` when every top-level value is neither `undefined` nor `null`.
 */
const fn = <T extends object>(object: T): object is Required<T> => {
  const values = Object.values(object);
  return values.every(value => value !== undefined && value !== null);
};

export default fn;
