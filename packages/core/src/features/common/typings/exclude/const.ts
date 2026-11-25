import { _unknown } from '#utils/_unknown';

/**
 * Removes the supplied literal types from the inferred type `T`.
 *
 * The `const` type parameters keep `T` and each candidate type narrow, and the
 * candidates are constrained to be assignable to `T`.
 *
 * @template T - Base type to filter, preserved literally.
 * @template U - Tuple of the candidate types to remove, kept narrow.
 * @param _ - Value whose type is captured as `T`; ignored at runtime.
 * @param __ - Values whose types are removed from `T`; ignored at runtime.
 * @returns An `undefined` value typed as `Exclude<T, U[number]>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T, const U extends T[]>(_?: T, ...__: U) =>
  _unknown<Exclude<T, U[number]>>();

export default fn;
