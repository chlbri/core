import type { Fn } from '#types';
import { identity } from '#utils/identity';

/**
 * Exposes a function subtype unchanged.
 *
 * @template T - Tuple of the function parameters.
 * @template R - Return type of the function.
 * @returns An identity function typed as `Fn<T, R>`.
 */
// oxlint-disable-next-line no-unused-vars
const dynamic = <T extends any[], R = any>(..._: [...T, R]) => identity<Fn<T, R>>;

export default dynamic;
