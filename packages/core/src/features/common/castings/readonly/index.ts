/**
 * Shallow readonly cast.
 *
 * Casts the value with `as Readonly<T>`, returning the same reference while its
 * top-level properties are typed as readonly. The object is not frozen at
 * runtime.
 *
 * @template T - Type whose top-level properties become readonly.
 * @param value - Value returned unchanged.
 * @returns The same `value`, typed as `Readonly<T>`.
 */
const fn = <T>(value: T) => value as Readonly<T>;

export default fn;
