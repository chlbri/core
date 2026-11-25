import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper checking that keys belong to an object type.
 *
 * Accepts an object type `T` followed by candidate keys `K`, and yields the
 * literal `true` when the union `K[number]` is assignable to `keyof T`, and the
 * literal `false` otherwise. Exposed as `hasKeys` on the aggregated
 * {@linkcode typings} helper.
 *
 * @template T - Object type whose keys are tested.
 * @template K - Tuple of the candidate key types.
 * @param _ - Object type carrier; ignored at runtime.
 * @param __ - Candidate keys; ignored at runtime.
 * @returns The literal `true` or `false`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object, K extends Keys[]>(_?: T, ...__: K) =>
  _unknown<K[number] extends keyof T ? true : false>();

export default fn;
