import type { RuA } from '#types';
import { _unknown } from './_unknown';
import { expandFn } from './expandFn';
import { mergeIs } from './is/merge';

export const castFn = <T>() => {
  const _out = <const Tr extends object = object>(extensions?: Tr) => {
    const out = expandFn((arg: T) => arg, {
      ...(extensions as Tr),
      forceCast: (arg: unknown) => {
        return _unknown<T>(arg);
      },
      dynamic: <U extends T>(arg: U) => {
        return arg;
      },
    });
    return out;
  };
  return _out;
};

castFn.withValues = <T extends RuA>(...values: T) => {
  const out = <const Tr extends object = object>(extensions?: Tr) =>
    castFn<T[number]>()({
      ...extensions,
      is: mergeIs(...values),
    });
  return out;
};
