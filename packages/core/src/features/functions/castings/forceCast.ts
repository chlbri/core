import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Casts any value to a function type without validation.
 *
 * @template T - Tuple of the function parameters.
 * @template R - Return type of the function.
 * @param value - Value to cast.
 * @returns `value` typed as `Fn<T, R>`.
 */
const forceCast = <T extends any[], R = any>(value: unknown) => {
  return _unknown<Fn<T, R>>(value);
};

export default forceCast;
