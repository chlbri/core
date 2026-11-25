import type { Checker2 } from '#types';

/**
 * Identity helper for a typed checker.
 *
 * @template T - Type narrowed by the checker.
 * @param checker - Checker to return unchanged.
 * @returns The same checker.
 */
const byType = <T>(checker: Checker2<T>) => checker;

export default byType;
