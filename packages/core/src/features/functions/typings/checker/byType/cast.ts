import type { Checker, Checker2 } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Casts a checker type at the type level.
 *
 * @template T - Type narrowed by the resulting checker.
 * @returns The `undefined` placeholder typed as `Checker2<T>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T>(_?: Checker) => _unknown<Checker2<T>>();

export default fn;
