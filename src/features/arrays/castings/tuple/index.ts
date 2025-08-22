import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends RuA>(...args: T) => {
  const out = args;
  return _unknown<T>(out);
};

export default fn;
