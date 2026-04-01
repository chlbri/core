import { UndefinedHelper } from '../common/types';

export type Fn<Args extends any[] = any[], R = any> = (
  ...args: Args
) => R;

export type FnBasic<Main extends Fn, Tr extends object> = Tr & Main;

export type Checker<T = unknown> =
  | ((value: unknown) => value is T)
  | Fn<[unknown], boolean>;

export type _Requirify<T extends readonly unknown[]> = Required<{
  [K in keyof T]-?: undefined extends T[K]
    ? T[K] | UndefinedHelper
    : T[K];
}>;

type _UndefinfyTuple<T extends readonly unknown[]> =
  T extends readonly [infer U, ...infer Rest]
    ? unknown extends U
      ? [U, ..._UndefinfyTuple<Rest>]
      : UndefinedHelper extends U
        ? [Exclude<U, UndefinedHelper>?, ..._UndefinfyTuple<Rest>]
        : [U, ..._UndefinfyTuple<Rest>]
    : T;

export type Parts<
  T extends readonly unknown[],
  R = _Requirify<T>,
> = R extends readonly [...infer Rest, unknown]
  ? Parts<Rest> | _UndefinfyTuple<R>
  : T;

/**
 * Given a full readonly tuple `T1` and one of its prefixes `T2`,
 * produces the remaining ordered suffix.
 *
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
  T1 extends readonly unknown[],
  T2 extends Parts<T1>,
> = T1 extends readonly [...T2, ...infer Rest] ? Readonly<Rest> : T1;
