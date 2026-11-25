import { _unknown } from '#utils/_unknown';

/**
 * Removes the supplied types from the inferred type `T` at the type level.
 *
 * @template T - Base type to filter.
 * @template U - Tuple of the candidate types to remove.
 * @param _ - Value whose type is captured as `T`; ignored at runtime.
 * @param __ - Values whose types are removed from `T`; ignored at runtime.
 * @returns An `undefined` value typed as `Exclude<T, U[number]>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T, U extends any[]>(_?: T, ...__: U) =>
  _unknown<Exclude<T, U[number]>>();

export default fn;
