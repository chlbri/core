/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';
import { castFn } from '#utils/castFn';
import { expandFn } from '#utils/expandFn';
import { identity } from '#utils/identity';

const castings = castFn()({
  is: expandFn(
    (value: unknown): value is Fn => {
      return typeof value === 'function';
    },
    {
      strict: <T extends any[] = any[], R = any>(
        fn: (value: Fn<T, R>) => boolean,
      ) => {
        return (value: unknown): value is Fn<T, R> =>
          typeof value === 'function' && fn(value as Fn<T, R>);
      },
    },
  ),

  forceCast: <T extends any[], R = any>(value: unknown) => {
    return _unknown<Fn<T, R>>(value);
  },

  dynamic: <T extends any[], R = any>(..._: [...T, R]) =>
    identity<Fn<T, R>>,
});

export default castings;
