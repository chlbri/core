import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper making every property, at any depth, readonly.
 *
 * Yields type {@linkcode DeepReadonly}: like `Readonly<T>` applied recursively,
 * so nested objects also have readonly properties. Function and primitive
 * property values are kept unchanged. Main call signature of `readonly.deep` on
 * the aggregated common {@linkcode typings} helper.
 *
 * @template T - Object type whose properties become recursively readonly.
 * @param _ - Value whose type is transformed; ignored at runtime.
 * @returns The type `DeepReadonly<T>`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<DeepReadonly<T>>();

export default fn;
