import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Removes the `readonly` modifier from an object type.
 *
 * Returns the object untouched and only asserts it as type
 * {@linkcode NotReadonly} `<T>` through {@linkcode _unknown}, so the top-level
 * properties become mutable in the type system with no runtime change. The
 * `const` type parameter preserves inferred literal types.
 *
 * @template T - Object type inferred with literal types preserved.
 * @param object - Object returned unchanged.
 * @returns The same `object`, typed as `NotReadonly<T>`.
 */
const fn = <const T extends object>(object: T) => {
  return _unknown<NotReadonly<T>>(object);
};

export default fn;
