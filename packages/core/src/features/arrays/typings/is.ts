import { _unknown } from '#utils/_unknown';

/**
 * Type-level check that detects mutable array types.
 *
 * Computes whether `T` extends `unknown[]`. Readonly arrays and readonly
 * tuples are not matched and yield `false`; use
 * {@linkcode typings.tuple.is} to match those.
 *
 * @template T - Type to test.
 * @param _ - Value whose type is tested; ignored at runtime.
 * @returns The type `true` when `T` extends `unknown[]`, otherwise the type
 * `false`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T>(_?: T) => _unknown<T extends unknown[] ? true : false>();

export default fn;
