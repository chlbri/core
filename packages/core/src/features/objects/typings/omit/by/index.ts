import type { NotSubType } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Removes from `T` every property whose value type is assignable to `K[number]`.
 *
 * The result is computed with type {@linkcode NotSubType}, which keeps only the
 * keys whose value type does not extend the exclusion condition. This is the
 * direct typing form; the sibling `is` helper exposes the predicate form. The
 * helper evaluates to `undefined` at runtime.
 *
 * @template T - Object type to filter.
 * @template K - Tuple of candidate value types used as the exclusion condition.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @param __ - Values describing the types to remove.
 * @returns `undefined`, typed as `NotSubType<T, K[number]>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object, K extends any[]>(_?: T, ...__: K) =>
  _unknown<NotSubType<T, K[number]>>();

export default fn;
