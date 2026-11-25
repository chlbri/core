import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Recursive readonly cast.
 *
 * Returns the value untouched and only asserts it as `DeepReadonly<T>` through
 * {@linkcode _unknown}, making nested object properties readonly at every depth
 * while leaving primitives and functions unchanged. The object is not frozen at
 * runtime.
 *
 * @template T - Object type whose nested properties become readonly.
 * @param value - Value returned unchanged.
 * @returns The same `value`, typed as `DeepReadonly<T>`.
 */
const fn = <T extends object>(value: T) => _unknown<DeepReadonly<T>>(value);

export default fn;
