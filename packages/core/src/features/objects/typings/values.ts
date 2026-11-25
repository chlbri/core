import { _unknown } from '#utils/_unknown';
import { expandFn } from '#utils/expandFn';

/**
 * Type-level helper collecting the values of an object type.
 *
 * Uses {@linkcode expandFn} to extend the base function, which yields
 * `T[keyof T][]`, with:
 * - `union`: the values as a union of the property types.
 *
 * Exposed as `values` on the aggregated {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
// oxlint-disable-next-line no-unused-vars
const fn = expandFn(<T extends object>(_?: T) => _unknown<T[keyof T][]>(), {
  // oxlint-disable-next-line no-unused-vars
  union: <T extends object>(_?: T) => _unknown<T[keyof T]>(),
});

export default fn;
