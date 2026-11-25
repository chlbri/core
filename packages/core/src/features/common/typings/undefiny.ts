import { _unknown } from '#utils/_unknown';

/**
 * Widens the inferred type `T` with `undefined`.
 *
 * @template T - Type to widen.
 * @param _ - Value whose type is captured as `T`; ignored at runtime.
 * @returns An `undefined` value typed as `T | undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T>(_?: T) => _unknown<T | undefined>();

export default fn;
