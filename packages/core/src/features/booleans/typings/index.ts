import { _unknown } from '#utils/_unknown';

/**
 * Base type-level helper for the `boolean` type.
 *
 * Preserves the literal type `T` of the supplied boolean, and serves as the
 * main function of the aggregated {@linkcode typings} helper.
 *
 * @template T - Boolean literal type to preserve.
 * @param _ - Boolean whose type is preserved.
 * @returns The type `T`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends boolean>(_: T) => _unknown<T>();

export default fn;
