import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';

const forceCast = <T extends any[], R = any>(value: unknown) => {
  return _unknown<Fn<T, R>>(value);
};

export default forceCast;
