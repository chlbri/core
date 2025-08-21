/* eslint-disable @typescript-eslint/no-unused-vars */
import { _unknown } from './_unknown';
import { expandFn } from './expandFn';

export const typeFn = <T = any>() => {
  const _out = <Tr extends object = object>(extensions?: Tr) => {
    const out = expandFn((_?: T) => _unknown<T>(), {
      ...(extensions as Tr),
      forceCast: (_?: unknown) => _unknown<T>(),
      dynamic: <U extends T>(_?: U) => _unknown<U>(),
      is: <U>(_?: U) => _unknown<U extends T ? true : false>(),
      type: _unknown<T>(),
    });

    return out;
  };

  return _out;
};
