import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level check evaluating whether an object type is deeply readonly.
 *
 * Evaluates whether `T` is assignable to type {@linkcode DeepReadonly} applied
 * to `T`, i.e. whether the whole nested structure matches its readonly form.
 * Exposed as `is` on `readonly.deep` of the aggregated common
 * {@linkcode typings} helper.
 *
 * @template T - Object type to test.
 * @param _ - Value whose type is tested; ignored at runtime.
 * @returns The literal `true` or `false`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) =>
  _unknown<T extends DeepReadonly<T> ? true : false>();

export default fn;
