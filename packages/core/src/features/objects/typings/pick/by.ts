import type { SubType } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Keeps only the properties of `T` whose value type is assignable to `K[number]`.
 *
 * The result is computed with type {@linkcode SubType}, which selects the keys
 * accepted by the inclusion condition and drops the others. The helper
 * evaluates to `undefined` at runtime.
 *
 * @template T - Object type to filter.
 * @template K - Tuple of candidate value types used as the inclusion condition.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @param __ - Values describing the types to keep.
 * @returns `undefined`, typed as `SubType<T, K[number]>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object, K extends any[]>(_?: T, ...__: K) =>
  _unknown<SubType<T, K[number]>>();

export default fn;
