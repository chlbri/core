import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper making an object type readonly at every depth.
 *
 * Yields type {@linkcode DeepReadonly}: like `Readonly<T>` applied recursively,
 * so nested objects also have readonly properties, while primitive and function
 * property values are kept unchanged. Main call signature of `freeze.deep` on
 * the aggregated {@linkcode typings} helper.
 *
 * @template T - Object type whose properties become recursively readonly.
 * @param _ - Value whose type is transformed; ignored at runtime.
 * @returns The type `DeepReadonly<T>`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<DeepReadonly<T>>();

export default fn;
