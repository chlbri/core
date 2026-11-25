import { _unknown } from '#utils/_unknown';

/**
 * Keeps only the supplied types that belong to the inferred type `T`.
 *
 * @template T - Base type to filter.
 * @template U - Tuple of the candidate types to keep.
 * @param _ - Value whose type is captured as `T`; ignored at runtime.
 * @param __ - Values whose types are kept from `T`; ignored at runtime.
 * @returns An `undefined` value typed as `Extract<T, U[number]>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T, U extends any[]>(_?: T, ...__: U) =>
  _unknown<Extract<T, U[number]>>();

export default fn;
