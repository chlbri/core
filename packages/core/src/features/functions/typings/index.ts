import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';
import { typeFn } from '#utils/typeFn';

/**
 * Base type-level helper for `Fn`.
 *
 * Built with {@linkcode typeFn}, which adds `forceCast`, `dynamic`, `is` and
 * `type`, and extended here with:
 * - `dynamic`: exposes a function subtype at the type level;
 * - `forceCast`: forces a value to a function type.
 */
const typings = typeFn<Fn>()({
  /**
   * Exposes a function subtype at the type level.
   *
   * @template T - Tuple of the function parameters.
   * @template R - Return type of the function.
   */
  // oxlint-disable-next-line no-unused-vars
  dynamic: <T extends any[], R = any>(..._: [...T, R]) => _unknown<Fn<T, R>>(),

  /**
   * Forces a value to a function type at the type level.
   *
   * @template T - Tuple of the function parameters.
   * @template R - Return type of the function.
   */
  // oxlint-disable-next-line no-unused-vars
  forceCast: <T extends any[], R = any>(_?: unknown) => {
    return _unknown<Fn<T, R>>();
  },
});

export default typings;
