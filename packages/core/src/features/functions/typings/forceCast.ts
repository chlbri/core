import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const forceCast = <T extends any[], R = any>(_?: unknown) => {
  return _unknown<Fn<T, R>>();
};

export default forceCast;
