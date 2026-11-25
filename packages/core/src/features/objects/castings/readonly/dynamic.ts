/**
 * Freezes an object whose type is inferred from the argument.
 *
 * Freezes the given object in place with `Object.freeze` and returns it typed
 * as `Readonly<U>`, with `U` inferred entirely from `object` so no explicit
 * type argument is needed.
 *
 * @template U - Object type inferred from `object`.
 * @param object - Object frozen in place and returned.
 * @returns The same `object`, frozen and typed as `Readonly<U>`.
 */
const fn = <U extends object>(object: U) => {
  return Object.freeze(object);
};

export default fn;
