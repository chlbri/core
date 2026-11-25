import type { Checker, Checker2 } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Casts any value to a typed checker.
 *
 * @template T - Type narrowed by the resulting checker.
 * @param value - Value to cast.
 * @returns `value` typed as `Checker2<T>`.
 */
const forceCast = <T>(value: Checker) => _unknown<Checker2<T>>(value);

export default forceCast;
