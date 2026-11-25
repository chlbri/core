// oxlint-disable no-unused-vars
import { _unknown } from '#utils/_unknown';
import { expandFn } from '#utils/expandFn';

/**
 * Type-level helper listing the keys of an object type as an array.
 *
 * Uses {@linkcode expandFn} to extend the base function, which yields
 * `(keyof T)[]`, with:
 * - `union`: the keys as a union of literals.
 *
 * Exposed as `keys` on the aggregated {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(<T extends object>(_?: T) => _unknown<(keyof T)[]>(), {
  union: <T extends object>(_?: T) => _unknown<keyof T>(),
});

export default fn;
