import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level check evaluating whether an object type is non-readonly.
 *
 * Evaluates whether `T` is assignable to type {@linkcode NotReadonly} applied to
 * `T`, i.e. whether it matches its own mutable form. Exposed as `is` on
 * `readonly.not` of the aggregated common {@linkcode typings} helper.
 *
 * @template T - Object type to test.
 * @param _ - Value whose type is tested; ignored at runtime.
 * @returns The literal `true` or `false`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) =>
  _unknown<T extends NotReadonly<T> ? true : false>();

export default fn;
