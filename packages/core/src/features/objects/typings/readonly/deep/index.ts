import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Recursively adds the `readonly` modifier to every object property of `T`.
 *
 * Computed with type {@linkcode DeepReadonly}, which leaves primitives and
 * functions untouched and recurses into nested objects. The helper evaluates
 * to `undefined` at runtime.
 *
 * @template T - Object type to make deeply readonly.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @returns `undefined`, typed as `DeepReadonly<T>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<DeepReadonly<T>>();

export default fn;
