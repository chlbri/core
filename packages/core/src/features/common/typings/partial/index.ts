import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper making every property of an object type optional.
 *
 * Yields `Partial<T>`: the same object shape as `T` with the optional modifier
 * applied to every own property. The transform is shallow, so nested objects
 * keep their own optionality. Main call signature of the `partial` member of
 * the aggregated common {@linkcode typings} helper.
 *
 * @template T - Object type whose properties become optional.
 * @param _ - Value whose type is transformed; ignored at runtime.
 * @returns The type `Partial<T>`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<Partial<T>>();

export default fn;
