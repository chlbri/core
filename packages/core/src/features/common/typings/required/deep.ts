import type { DeepRequired } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper making every property, at any depth, required.
 *
 * Yields type {@linkcode DeepRequired}: like `Required<T>` applied recursively,
 * so nested optional properties also become required, and `undefined` is
 * additionally removed from the result. Function property values are kept
 * unchanged. Exposed as `deep` on the `required` member of the aggregated
 * common {@linkcode typings} helper.
 *
 * @template T - Object type whose properties become recursively required.
 * @param _ - Value whose type is transformed; ignored at runtime.
 * @returns The type `DeepRequired<T>`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<DeepRequired<T>>();

export default fn;
