import type { ReduceDeepArray } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper recursively unwrapping nested arrays.
 *
 * Yields the deepest element type of a nested array type, for example
 * `number` for `number[][][]`. Exposed as `deep` on the `reduce` member of the
 * aggregated {@linkcode typings} helper.
 *
 * @template T - Type to reduce.
 * @param _ - Value whose nested array type is resolved; ignored at runtime.
 * @returns The fully unwrapped element type; the runtime value is `undefined`.
 *
 * @see -- type {@linkcode ReduceDeepArray}
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T>(_?: T) => _unknown<ReduceDeepArray<T>>();

export default fn;
