import { castFn } from '#utils/castFn';
import { identity } from '#utils/identity';
import { isTypeFn } from '#utils/is/_default';
import { DIGITS } from './constants';

export const castings = castFn<number>()({
  is: (arg: unknown): arg is number => typeof arg === 'number',

  getString: <T extends number | string>(arg: T): `${T}` => `${arg}`,

  digit: castFn.withValues(...DIGITS),

  type: Number,

  ZERO: identity(0),

  ONE: identity(1),

  MINUS_1: identity(-1),

  bigint: castFn<bigint>()({
    is: isTypeFn('bigint'),
  }),
});
