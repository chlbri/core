import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Removes the `readonly` modifier recursively from an object type.
 *
 * Returns the object untouched and only asserts it as type
 * {@linkcode DeepNotReadonly} `<T>` through {@linkcode _unknown}, making
 * nested properties mutable at every depth without any runtime change.
 *
 * @template T - Object type whose nested properties become mutable.
 * @param object - Object returned unchanged.
 * @returns The same `object`, typed as `DeepNotReadonly<T>`.
 */
const fn = <T extends object>(object: T) => {
  return _unknown<DeepNotReadonly<T>>(object);
};

export default fn;
