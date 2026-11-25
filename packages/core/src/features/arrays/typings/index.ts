import type { AnyArray } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Base type-level helper for arrays.
 *
 * Types its arguments as a mutable array of their common element type: given
 * `T`, yields `T[number][]`. Serves as the main call signature of the
 * aggregated {@linkcode typings} helper.
 *
 * @template T - Array or tuple type whose elements are collected.
 * @param _ - Elements whose common type is collected; ignored at runtime.
 * @returns The type `T[number][]`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends AnyArray>(..._: T) => _unknown<T[number][]>();

export default fn;
