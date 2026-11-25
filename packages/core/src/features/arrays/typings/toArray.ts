import type { AnyArray } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper wrapping a type in an array form.
 *
 * Yields `T[]` or `ReadonlyArray<T>` for the element type `T` of the supplied
 * value, i.e. type {@linkcode AnyArray} of `T`. Exposed as `toArray` on the
 * aggregated {@linkcode typings} helper.
 *
 * @template T - Element type wrapped in an array.
 * @param _ - Value whose type is wrapped; ignored at runtime.
 * @returns The array form of `T`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T>(_?: T) => _unknown<AnyArray<T>>();

export default fn;
