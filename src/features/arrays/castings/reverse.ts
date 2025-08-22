import type { ReverseArray, RuA } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends RuA>(...args: T) => {
  const out = args.slice().reverse();
  return _unknown<ReverseArray<T>>(out);
};

export default fn;
