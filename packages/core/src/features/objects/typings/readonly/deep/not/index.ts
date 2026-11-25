import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Recursively removes the `readonly` modifier from every property of `T`.
 *
 * Computed with type {@linkcode DeepNotReadonly}, which recurses into nested
 * objects and leaves functions untouched. `T` is a `const` type parameter, so
 * object literals retain their literal value types during inference. The helper
 * evaluates to `undefined` at runtime.
 *
 * @template T - Object type to make deeply mutable.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @returns `undefined`, typed as `DeepNotReadonly<T>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends object>(_?: T) => _unknown<DeepNotReadonly<T>>();

export default fn;
