import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level check evaluating whether an object type is deeply non-readonly.
 *
 * Evaluates whether `T` is assignable to type {@linkcode DeepNotReadonly}
 * applied to `T`, i.e. whether the whole nested structure matches its mutable
 * form. Exposed as `is` on `readonly.deep.not` of the aggregated common
 * {@linkcode typings} helper.
 *
 * @template T - Object type to test.
 * @param _ - Value whose type is tested; ignored at runtime.
 * @returns The literal `true` or `false`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) =>
  _unknown<T extends DeepNotReadonly<T> ? true : false>();

export default fn;
