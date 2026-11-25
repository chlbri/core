import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper making every property of an object type required.
 *
 * Yields `Required<T>`: the same object shape as `T` with the optional modifier
 * removed from every own property. The transform is shallow, so nested objects
 * keep their own optionality. Main call signature of the `required` member of
 * the aggregated common {@linkcode typings} helper.
 *
 * @template T - Object type whose properties become required.
 * @param _ - Value whose type is transformed; ignored at runtime.
 * @returns The type `Required<T>`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<Required<T>>();

export default fn;
