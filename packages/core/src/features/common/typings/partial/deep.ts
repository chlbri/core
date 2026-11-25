import type { DeepPartial } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper making every property, at any depth, optional.
 *
 * Yields type {@linkcode DeepPartial}: like `Partial<T>` applied recursively,
 * so nested objects also get optional properties. Function and primitive
 * property values are kept unchanged. Exposed as `deep` on the `partial`
 * member of the aggregated common {@linkcode typings} helper.
 *
 * @template T - Object type whose properties become recursively optional.
 * @param _ - Value whose type is transformed; ignored at runtime.
 * @returns The type `DeepPartial<T>`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<DeepPartial<T>>();

export default fn;
