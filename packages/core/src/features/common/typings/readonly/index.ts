import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper making an object type readonly.
 *
 * Yields `Readonly<T>`, adding the `readonly` modifier to every own property of
 * `T`. The transform is shallow, so nested objects keep their mutability. Main
 * call signature of the `readonly` member of the aggregated common
 * {@linkcode typings} helper.
 *
 * @template T - Object type whose properties become readonly.
 * @param _ - Value whose type is transformed; ignored at runtime.
 * @returns The type `Readonly<T>`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<Readonly<T>>();

export default fn;
