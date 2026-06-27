import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends RuA>(...array: T) => {
  const out = array.length;
  return _unknown<T['length']>(out);
};

export default fn;
