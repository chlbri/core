import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper removing `readonly`, at any depth, from an object type.
 *
 * Yields type {@linkcode DeepNotReadonly}: the same object shape as `T` with
 * the `readonly` modifier stripped recursively from every property, while
 * primitive and function property values are kept unchanged. Main call
 * signature of `freeze.deep.not` on the aggregated {@linkcode typings} helper.
 *
 * @template T - Object type whose properties become recursively mutable.
 * @param _ - Value whose type is transformed; ignored at runtime.
 * @returns The type `DeepNotReadonly<T>`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<DeepNotReadonly<T>>();

export default fn;
