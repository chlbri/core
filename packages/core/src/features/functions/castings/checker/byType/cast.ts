import type { Checker, Checker2 } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Casts a checker to a different narrowed type.
 *
 * @template T - Type narrowed by the resulting checker.
 * @param value - Checker to cast.
 * @returns `value` typed as `Checker2<T>`.
 */
const fn = <T>(value: Checker) => _unknown<Checker2<T>>(value);

export default fn;
