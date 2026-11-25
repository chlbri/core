import type { DeepRequired } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level check evaluating whether an object type is deeply required.
 *
 * Evaluates whether `T` is assignable to type {@linkcode DeepRequired} applied
 * to `T`, i.e. whether every nested property is required. Exposed as `deep` on
 * `require.is` of the aggregated {@linkcode typings} helper.
 *
 * @template T - Object type to test.
 * @param _ - Value whose type is tested; ignored at runtime.
 * @returns The literal `true` or `false`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) =>
  _unknown<T extends DeepRequired<T> ? true : false>();

export default fn;
