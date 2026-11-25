import type { AnyArray } from '#types';
import type { UndefinedHelper } from '../common/types';

/**
 * Generic function type.
 *
 * @template Args - Tuple of the function parameters.
 * @template R - Type returned by the function.
 */
export type Fn<Args extends any[] = any[], R = any> = (...args: Args) => R;

/**
 * Function augmented with extension members.
 *
 * Intersects the extension object `Tr` with the main function type `Main`.
 *
 * @template Main - Base function type.
 * @template Tr - Type of the extension members.
 */
export type FnBasic<Main extends Fn, Tr extends object> = Tr & Main;

/**
 * Predicate over an unknown value.
 *
 * Either a type guard narrowing to `T` or a plain boolean-returning function.
 *
 * @template T - Type narrowed by the guard variant.
 */
export type Checker<T = unknown> =
  | ((value: unknown) => value is T)
  | Fn<[unknown], boolean>;

/**
 * Makes every element of tuple `T` required.
 *
 * Members admitting `undefined` are widened with the class
 * {@linkcode UndefinedHelper} rather than dropped, so the position is kept
 * while becoming required.
 *
 * @template T - Tuple whose members become required.
 */
export type _Requirify<T extends AnyArray> = Required<{
  [K in keyof T]-?: undefined extends T[K] ? T[K] | UndefinedHelper : T[K];
}>;

/**
 * Rebuilds tuple `T`, turning members that include the class
 * {@linkcode UndefinedHelper} into optional elements.
 *
 * Recurses from the head of the tuple, keeping the remaining members intact.
 *
 * @template T - Tuple to transform.
 */
type _UndefinfyTuple<T extends AnyArray> = T extends readonly [
  infer U,
  ...infer Rest,
]
  ? unknown extends U
    ? [U, ..._UndefinfyTuple<Rest>]
    : UndefinedHelper extends U
      ? [Exclude<U, UndefinedHelper>?, ..._UndefinfyTuple<Rest>]
      : [U, ..._UndefinfyTuple<Rest>]
  : T;

/**
 * Every leading prefix of tuple `T`, each made readonly.
 *
 * Starts from the required form produced by the type {@linkcode _Requirify}
 * and adds each shorter prefix. Members marked with the class
 * {@linkcode UndefinedHelper} become optional in the resulting prefixes.
 *
 * @template T - Tuple split into its prefixes.
 * @template R - Accumulator used while recursing over `T`.
 */
export type Parts<T extends AnyArray, R = _Requirify<T>> = R extends readonly [
  ...infer Rest,
  unknown,
]
  ? Parts<Rest> | Readonly<_UndefinfyTuple<R>>
  : Readonly<T>;

/**
 * Given a full readonly tuple `T1` and one of its prefixes `T2`,
 * produces the remaining ordered suffix.
 *
 * @template T1 - Full tuple.
 * @template T2 - Prefix of `T1` whose suffix is computed.
 * @example
 * PartDiff<readonly [1, 2, 3], readonly [1]>
 * // => readonly [2, 3]
 *
 * PartDiff<readonly [1, 2, 3], readonly []>
 * // => readonly [1, 2, 3]
 *
 * PartDiff<[1, 2, 3], [1, 2, 3]>
 * // => readonly []
 */
export type PartDiff<
  T1 extends AnyArray,
  T2 extends Parts<T1>,
> = T1 extends readonly [...T2, ...infer Rest] ? Readonly<Rest> : T1;

/**
 * Promise factory with cancellation and a stable identifier.
 *
 * @template T - Type resolved by the promise.
 */
export interface TimeoutPromise<T = any> {
  /**
   * Creates a new promise.
   *
   * @returns The promise resolved with a value of type `T`.
   */
  (): Promise<T>;
  /** Cancels the pending operation. */
  abort: () => void;
  /** Identifier of the timeout. */
  id: string;
}

/**
 * Resolves the value type produced by the interface
 * {@linkcode TimeoutPromise}.
 *
 * @template T - Promise factory to inspect.
 */
export type TypeFromTimeout<T extends TimeoutPromise> =
  T extends TimeoutPromise<infer U> ? U : never;

/**
 * Resolves the union of values produced by an array of
 * interface {@linkcode TimeoutPromise} factories.
 *
 * @template T - Array or tuple of promise factories.
 */
export type TypeFromTimeouts<T extends TimeoutPromise[]> = TypeFromTimeout<
  T[number]
>;

/**
 * Node-style error-only callback.
 *
 * @param err - Error passed to the callback.
 */
export type CallBackError = (err: any) => void;

/**
 * Node-style callback receiving an error and a result.
 *
 * @template T - Type of the result.
 * @param err - Error passed to the callback.
 * @param result - Result passed to the callback.
 */
export type CallBackResult<T = any> = (err: any, result: T) => void;

/**
 * Union of the type {@linkcode CallBackError} and the type
 * {@linkcode CallBackResult}.
 */
export type Callback = CallBackError | CallBackResult;

/**
 * Resolves the result type carried by a callback.
 *
 * Yields `void` for single-argument error-only callbacks, otherwise the second
 * parameter type.
 *
 * @template Cb - Callback to inspect.
 */
type GetResult<Cb extends Callback> = Parameters<Cb>['length'] extends 2
  ? Parameters<Cb>[1]
  : void;

/**
 * Tuple of arguments ending with a callback.
 */
export type CbParams = [...any[], Callback];

/**
 * Converts a callback-style parameter tuple into a promise-returning function.
 *
 * The trailing callback is removed from the parameters and its result type
 * becomes the resolved value of the returned promise.
 *
 * @template T - Tuple of leading arguments followed by a callback.
 */
export type ResultFrom<T> = T extends [
  ...infer Args extends any[],
  infer Cb extends Callback,
]
  ? Fn<Args, Promise<GetResult<Cb>>>
  : never;
