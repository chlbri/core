import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Tests whether a type is deeply mutable.
 *
 * Resolves to the literal `true` when `T` extends `DeepNotReadonly<T>`, and to
 * `false` otherwise. The helper evaluates to `undefined` at runtime.
 *
 * @template T - Object type to test.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @returns `undefined`, typed as the literal `true` or `false`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends object>(_?: T) =>
  _unknown<T extends DeepNotReadonly<T> ? true : false>();

export default fn;
