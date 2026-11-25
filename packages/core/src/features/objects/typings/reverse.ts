import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper swapping the keys and values of a record type.
 *
 * Yields the type `{ [K in keyof T as T[K]]: K }`, the same computation as
 * type {@linkcode ReverseMap}, so former values become keys and former keys
 * become values. Exposed as `reverse` on the aggregated {@linkcode typings}
 * helper.
 *
 * @template T - Record type whose key and value roles are swapped.
 * @param _ - Record type carrier; ignored at runtime.
 * @returns The reversed record type; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends Record<Keys, Keys>>(_?: T) => {
  return _unknown<{
    [K in keyof T as T[K]]: K;
  }>();
};

export default fn;
