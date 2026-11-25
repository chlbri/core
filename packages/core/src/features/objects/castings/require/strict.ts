import type { AllowedNamesLow } from '#types';

/**
 * Assigns values to optional keys of an object.
 *
 * `K` is constrained to type {@linkcode AllowedNamesLow} `<T, undefined>`, so
 * `requires` can only supply the keys of `object` whose values may be
 * `undefined`. Its values are copied onto `object` with `Object.assign`,
 * mutating `object` in place. Unlike the `const` variant, the plain type
 * parameters let TypeScript widen inferred literals as usual.
 *
 * @template T - Type of the object receiving the properties.
 * @template K - Keys of `T` whose values may be `undefined`.
 * @param object - Object mutated in place and returned.
 * @param requires - Values assigned onto the matching keys of `object`.
 * @returns `object` after the properties of `requires` were assigned.
 */
const fn = <T extends object, K extends AllowedNamesLow<T, undefined>>(
  object: T,
  requires: Pick<T, K>,
) => {
  return Object.assign(object, requires);
};

export default fn;
