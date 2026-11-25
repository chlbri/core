import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Removes the `readonly` modifier from every property of `T`.
 *
 * Computed with type {@linkcode NotReadonly}, which is shallow: nested objects
 * are left untouched. `T` is a `const` type parameter, so object literals
 * retain their literal value types during inference. The helper evaluates to
 * `undefined` at runtime.
 *
 * @template T - Object type to make mutable.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @returns `undefined`, typed as `NotReadonly<T>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends object>(_?: T) => _unknown<NotReadonly<T>>();

export default fn;
