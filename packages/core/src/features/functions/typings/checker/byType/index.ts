import type { Checker2 } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Exposes a typed checker at the type level.
 *
 * @template T - Type narrowed by the checker.
 * @returns The `undefined` placeholder typed as `Checker2<T>`.
 */
// oxlint-disable-next-line no-unused-vars
const byType = <T>(_?: Checker2<T>) => _unknown<Checker2<T>>();

export default byType;
