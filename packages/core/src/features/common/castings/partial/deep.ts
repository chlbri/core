import type { DeepPartial } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Recursive partial cast.
 *
 * Returns the value untouched and only asserts it as `DeepPartial<T>` through
 * {@linkcode _unknown}, making nested object properties optional at every depth
 * while leaving primitives and functions unchanged. No runtime change occurs.
 *
 * @template T - Type whose nested properties become optional.
 * @param value - Value returned unchanged.
 * @returns The same `value`, typed as `DeepPartial<T>`.
 */
const fn = <T>(value: T) => {
  return _unknown<DeepPartial<T>>(value);
};

export default fn;
