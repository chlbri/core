/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Checker, Checker2, Fn } from '#types';
import { _unknown } from '#utils/_unknown';
import { castFn } from '#utils/castFn';
import { expandFn } from '#utils/expandFn';
import { identity } from '#utils/identity';

export const castings = castFn()({
  is: expandFn(
    (value: unknown): value is Fn => {
      return typeof value === 'function';
    },
    {
      strict: <T extends any[] = any[], R = any>(
        fn: Checker<Fn<T, R>>,
      ) => {
        return (value: unknown): value is Fn<T, R> =>
          typeof value === 'function' && fn(value);
      },
    },
  ),

  forceCast: <T extends any[], R = any>(value: unknown) => {
    return _unknown<Fn<T, R>>(value);
  },

  dynamic: <T extends any[], R = any>(..._: [...T, R]) =>
    identity<Fn<T, R>>,

  checker: castFn<Checker>()({
    /**
     * Very low
     * Checks if value is a function with one argument
     * @param value value to check
     * @returns true if value is a function with one argument
     */
    is: <T = unknown>(value: unknown): value is Checker2<T> => {
      return (
        typeof value === 'function' &&
        value.length === 1 &&
        !/^\s*class\s+/.test(value.toString())
      );
    },

    byType: expandFn(<T>(checker: Checker2<T>) => checker, {
      forceCast: <T>(value: Checker) => _unknown<Checker2<T>>(value),
    }),
  }),
});
