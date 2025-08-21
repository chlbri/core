/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Checker, Checker2, Fn } from '#types';
import { _unknown } from '#utils/_unknown';
import { expandFn } from '#utils/expandFn';
import { typeFn } from '#utils/typeFn';

export const typings = typeFn<Fn>()({
  dynamic: <T extends any[], R = any>(..._: [...T, R]) =>
    _unknown<Fn<T, R>>(),

  forceCast: <T extends any[], R = any>(_?: unknown) => {
    return _unknown<Fn<T, R>>();
  },

  checker: typeFn<Checker>()({
    byType: expandFn(<T>(_?: Checker2<T>) => _unknown<Checker2<T>>(), {
      forceCast: <T>(_?: Checker) => _unknown<Checker2<T>>(),
    }),
  }),
});
