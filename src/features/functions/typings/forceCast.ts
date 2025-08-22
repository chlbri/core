/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';

const forceCast = <T extends any[], R = any>(_?: unknown) => {
  return _unknown<Fn<T, R>>();
};

export default forceCast;
