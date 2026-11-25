import { _unknown } from './_unknown';
import { expandFn } from './expandFn';

export const typeFn = <T = any>() => {
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
