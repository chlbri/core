import { _unknown } from '#utils/_unknown';

/**
 * Tests whether the inferred type `T` is `never`.
 *
 * @template T - Type under test.
 * @param _ - Value whose type is captured as `T`; ignored at runtime.
 * @returns The literal `true` when `T` is `never`, otherwise `false`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T>(_?: T) => _unknown<T extends never ? true : false>();

export default fn;
