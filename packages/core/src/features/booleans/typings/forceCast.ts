import { _unknown } from '#utils/_unknown';

/**
 * Forces the type of a value to a requested boolean subtype.
 *
 * No runtime conversion is performed: the argument is ignored and only the
 * requested type `T` is communicated to the type system.
 *
 * @template T - Boolean type to force.
 * @param _ - Value ignored by the cast.
 * @returns The type `T`; the runtime value is `undefined`.
 *
 * @see {@linkcode typings.forceCast}
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends boolean>(_: unknown) => _unknown<T>();

export default fn;
