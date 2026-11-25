import { _unknown } from '#utils/_unknown';

/**
 * Type-level check that detects boolean types.
 *
 * Computes whether the supplied type `T` extends `boolean`; the value itself
 * is never inspected at runtime.
 *
 * @template T - Type to test.
 * @param _ - Value whose type is tested.
 * @returns The type `true` when `T` extends `boolean`, otherwise the type
 * `false`; the runtime value is `undefined`.
 *
 * @see {@linkcode typings}
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T>(_: T) => _unknown<T extends boolean ? true : false>();

export default fn;
