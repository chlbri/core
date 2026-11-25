import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';
import { typeFn } from '#utils/typeFn';

const typings = typeFn<Fn>()({
  // oxlint-disable-next-line no-unused-vars
  dynamic: <T extends any[], R = any>(..._: [...T, R]) => _unknown<Fn<T, R>>(),

  // oxlint-disable-next-line no-unused-vars
  forceCast: <T extends any[], R = any>(_?: unknown) => {
    return _unknown<Fn<T, R>>();
  },
});

export default typings;
