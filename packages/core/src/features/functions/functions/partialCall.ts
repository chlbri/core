import type { Parts, Fn, PartDiff } from '../types';
import { AnyArray } from '#types';
import { expandFn } from '#utils/expandFn';

/**
 * Signature of the typed, base form of {@linkcode partialCall}.
 *
 * Splits the parameters of `F` into a head tuple `T` and the remaining tail
 * tuple `U`, returning a function that accepts only the tail.
 *
 * @template F - Function being partially applied.
 * @template T - Head arguments supplied eagerly.
 * @template U - Remaining arguments accepted by the returned function.
 */
type PartialCall_F = <
  const F extends Fn,
  const T extends Parts<Parameters<F>> = Parts<Parameters<F>>,
  const U extends PartDiff<Parameters<F>, T> = PartDiff<Parameters<F>, T>,
>(
  f: F,
  ...headArgs: T
) => (...tailArgs: U) => ReturnType<F>;

/**
 * Signature of the array-based {@linkcode partialCall} variants.
 *
 * Accepts a function whose parameters are a head tuple `T` followed by a tail
 * tuple `U`, and returns a function accepting only `U`.
 *
 * @template T - Head arguments supplied eagerly.
 * @template U - Remaining arguments accepted by the returned function.
 * @template R - Return type of the partially applied function.
 */
type PartialCallArray_F = <
  T extends AnyArray = AnyArray,
  U extends AnyArray = AnyArray,
  R = any,
>(
  f: Fn<[...T, ...U], R>,
  ...headArgs: T
) => (...tailArgs: U) => R;

/**
 * Signature of the `build` variant of {@linkcode partialCall}.
 *
 * Returns a function that accepts the tail arguments and may be re-typed
 * through a generic function parameter at call time.
 *
 * @template F - Function being partially applied.
 * @template T - Head arguments supplied eagerly.
 * @template U - Remaining arguments accepted by the returned function.
 */
type PartialCallBuild_F = <
  const F extends Fn,
  const T extends Parts<Parameters<F>> = Parts<Parameters<F>>,
  const U extends PartDiff<Parameters<F>, T> = PartDiff<Parameters<F>, T>,
>(
  f: F,
  ...headArgs: T
) => <const T extends Fn<[...U], ReturnType<F>> = Fn<[...U], ReturnType<F>>>(
  ...tailArgs: Parameters<T>
) => ReturnType<T>;

/**
 * Partially applies a function without type-level tracking.
 *
 * @param f - Function to apply.
 * @param headArgs - Arguments supplied eagerly.
 * @returns Function accepting the remaining arguments.
 */
const __partialCall = (f: Fn, ...headArgs: any[]) => {
  return (...tailArgs: any[]) => f(...headArgs, ...tailArgs);
};

const _partialCall: PartialCall_F = __partialCall;

/**
 * Partially applies a function by fixing its leading arguments.
 *
 * The returned function expects the remaining ("tail") arguments when called.
 * The base form is fully typed, and `expandFn` attaches the `low`,
 * `paramArray`, `array`, `typed` and `build` variants.
 *
 * @see -- type {@linkcode PartialCall_F}
 */
export const partialCall = expandFn(_partialCall, {
  /**
   * Untyped base implementation.
   *
   * Use with caution, as it can lead to type inference issues. Prefer
   * {@linkcode partialCall.typed} for better type safety.
   *
   * @param f - Function to apply.
   * @param headArgs - Arguments supplied eagerly.
   * @returns Function accepting the remaining arguments.
   */
  low: __partialCall,

  /**
   * Partially applies a function whose last parameter is a rest array.
   *
   * Unlike the typed variant, it does not enforce the exact head and tail
   * shapes, which makes it suitable for functions with a variable number of
   * parameters.
   *
   * @param f - Function to apply.
   * @param headArgs - Arguments supplied eagerly.
   * @returns Function accepting the remaining arguments.
   * @example
   * ```ts
   * const concatenate = (separator: string, ...strings: string[]) =>
   *   strings.join(separator);
   * const commaSeparated = partialCall.paramArray(concatenate, ',');
   * commaSeparated('Hello', 'World'); // "Hello,World"
   * ```
   */
  paramArray: __partialCall as PartialCallArray_F,

  /**
   * Alias of {@linkcode partialCall.paramArray}.
   */
  array: __partialCall as PartialCallArray_F,

  /**
   * Flexible, less type-safe partial application.
   *
   * Does not enforce the types of the head and tail arguments. Prefer the base
   * call when strict typing is required.
   *
   * @param f - Function to apply.
   * @param headArgs - Arguments supplied eagerly.
   * @returns Function accepting the remaining arguments.
   * @example
   * ```ts
   * const add = (a: number, b: number) => a + b;
   * const add5 = partialCall.typed(add, 5);
   * add5(10); // 15
   * ```
   */
  typed: _partialCall,

  /**
   * Builds a partial application that can be re-typed at call time.
   *
   * @param f - Function to apply.
   * @param headArgs - Arguments supplied eagerly.
   * @returns Function accepting the tail arguments.
   * @example
   * ```ts
   * const add = (a: number, b: number) => a + b;
   * const add5 = partialCall.build(add, 5);
   * add5(10); // 15
   * ```
   */
  build: ((f, ...headArgs) => {
    const head: any = headArgs ?? [];
    return (...tailArgs) => f(...head, ...tailArgs);
  }) as PartialCallBuild_F,
});
