/**
 * Freezes an object and returns it typed as readonly.
 *
 * Calls `Object.freeze` on the object, so its top-level properties become
 * non-writable and non-configurable at runtime, and returns the same reference
 * typed as `Readonly<T>`. Nested objects are not frozen.
 *
 * @template T - Object type whose top-level properties become readonly.
 * @param object - Object frozen in place and returned.
 * @returns The same `object`, frozen and typed as `Readonly<T>`.
 */
const fn = <T extends object>(object: T) => {
  return Object.freeze(object);
};

export default fn;
