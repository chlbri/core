import { _unknown } from '#utils/_unknown';

/**
 * Keeps only the supplied literal types that belong to the inferred type `T`.
 *
 * The `const` type parameters keep `T` and each candidate type narrow, and the
 * candidates are constrained to be assignable to `T`.
 *
 * @template T - Base type to filter, preserved literally.
 * @template U - Tuple of the candidate types to keep, kept narrow.
 * @param _ - Value whose type is captured as `T`; ignored at runtime.
 * @param __ - Values whose types are kept from `T`; ignored at runtime.
 * @returns An `undefined` value typed as `Extract<T, U[number]>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T, const U extends T[]>(_?: T, ...__: U) =>
  _unknown<Extract<T, U[number]>>();

export default fn;
