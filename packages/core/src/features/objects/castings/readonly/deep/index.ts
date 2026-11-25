import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Freezes an object and types it as deeply readonly.
 *
 * Freezes the given object in place with `Object.freeze` and asserts it as
 * type {@linkcode DeepReadonly} `<T>` through {@linkcode _unknown}, making
 * nested properties readonly at every depth in the type system. Only the
 * top-level object is actually frozen.
 *
 * @template T - Object type whose nested properties become readonly.
 * @param object - Object frozen in place and returned.
 * @returns The same `object`, frozen and typed as `DeepReadonly<T>`.
 */
const fn = <T extends object>(object: T) => {
  const out = Object.freeze(object);
  return _unknown<DeepReadonly<T>>(out);
};

export default fn;
