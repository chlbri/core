import { _unknown } from './_unknown';
import { expandFn } from './expandFn';

/**
 * Creates a type-only helper for `T`.
 *
 * The returned builder wraps a function that ignores its argument and returns
 * `undefined` at runtime, while the type system sees `T`. The builder accepts
 * optional extensions and always adds:
 * - `forceCast`: casts an arbitrary value to `T`;
 * - `dynamic`: exposes a subtype `U` of `T` as the produced value;
 * - `is`: yields the literal `true` or `false` depending on whether a type
 *   extends `T`, without a runtime check;
 * - `type`: the typed `undefined` value used by the helpers.
 *
 * @template T - Type described by the helper.
 * @returns Builder accepting optional extensions and returning the augmented
 * typing function.
 * @see -- type {@linkcode FnBasic}
 */
export const typeFn = <T = any>() => {
  /**
   * Builds the typing function for `T` with the supplied extension members.
   *
   * @template Tr - Type of the extension members.
   * @param extensions - Members to attach to the typing function.
   * @returns The typing function augmented with the extension members.
   */
  const _out = <Tr extends object = object>(extensions?: Tr) => {
    // oxlint-disable-next-line no-unused-vars
    const out = expandFn((_?: T) => _unknown<T>(), {
      ...(extensions as Tr),
      // oxlint-disable-next-line no-unused-vars
      forceCast: (_?: unknown) => _unknown<T>(),
      // oxlint-disable-next-line no-unused-vars
      dynamic: <U extends T>(_?: U) => _unknown<U>(),
      // oxlint-disable-next-line no-unused-vars
      is: <U>(_?: U) => _unknown<U extends T ? true : false>(),
      type: _unknown<T>(),
    });

    return out;
  };

  return _out;
};
