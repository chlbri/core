import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Forces a value to a function type at the type level.
 *
 * @template T - Tuple of the function parameters.
 * @template R - Return type of the function.
 * @returns The `undefined` placeholder typed as `Fn<T, R>`.
 */
// oxlint-disable-next-line no-unused-vars
const forceCast = <T extends any[], R = any>(_?: unknown) => {
  return _unknown<Fn<T, R>>();
};

export default forceCast;
