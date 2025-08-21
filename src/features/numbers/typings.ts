/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Digit } from '#types';
import { _unknown } from '#utils/_unknown';
import { typeFn } from '#utils/typeFn';

export const typings = typeFn<number>()({
  getString: <const T extends number>(_: T) => _unknown<`${T}`>(),

  digit: typeFn<Digit>()(),

  type: _unknown<number>(),

  ZERO: _unknown<0>(),

  ONE: _unknown<1>(),

  MINUS_1: _unknown<-1>(),

  bigint: typeFn<bigint>()(),
});
