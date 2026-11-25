import { _unknown } from '#utils/_unknown';

/**
 * Captures the inferred type of the supplied value.
 *
 * Unlike the `const` variant, literal types widen to their base type.
 *
 * @template T - Inferred type of the value.
 * @param _ - Value whose type is captured; ignored at runtime.
 * @returns An `undefined` value typed as `T`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T>(_?: T) => _unknown<T>();

export default fn;
