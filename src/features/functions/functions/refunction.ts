import type { AllowedNames, Ru, SubType } from '#types';
import type { Fn } from '../types';

type KeysFn<T extends object = object> = keyof SubType<T, Fn>;

type Refunction_F = <
  T extends Ru = Ru,
  FnKey extends KeysFn<T> = AllowedNames<T, Fn>,
>(
  object: T,
  fn: FnKey,
) => T[FnKey];

export const refunction: Refunction_F = (object, fn) => {
  const _fn = object[fn];
  const out: any = (...args: any) => (_fn as Fn).bind(object)(...args);
  return out;
};
