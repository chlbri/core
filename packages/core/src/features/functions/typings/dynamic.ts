import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Exposes a function subtype at the type level.
 *
 * @template T - Tuple of the function parameters.
 * @template R - Return type of the function.
 * @returns The `undefined` placeholder typed as `Fn<T, R>`.
 */
// oxlint-disable-next-line no-unused-vars
const dynamic = <T extends any[], R = any>(..._: [...T, R]) => _unknown<Fn<T, R>>();

export default dynamic;
