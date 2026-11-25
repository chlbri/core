import { _unknown } from '#utils/_unknown';

/**
 * Force-casts any value to a readonly object.
 *
 * Accepts an untyped value, freezes it with `Object.freeze` and then asserts
 * the result as `Readonly<T>` through {@linkcode _unknown}. Only the top level
 * is frozen and no validation is performed.
 *
 * @template T - Object type asserted on the frozen value.
 * @param object - Value frozen and returned with the asserted type.
 * @returns The frozen `object`, typed as `Readonly<T>`.
 */
const fn = <T extends object>(object: unknown) => {
  const out = Object.freeze(object);
  return _unknown<Readonly<T>>(out);
};

export default fn;
