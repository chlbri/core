/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';
import { typeFn } from '#utils/typeFn';

const typings = typeFn<Fn>()({
  dynamic: <T extends any[], R = any>(..._: [...T, R]) =>
    _unknown<Fn<T, R>>(),

  forceCast: <T extends any[], R = any>(_?: unknown) => {
    return _unknown<Fn<T, R>>();
  },
});

export default typings;
