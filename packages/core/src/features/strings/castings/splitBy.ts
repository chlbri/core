import type { SplitStringBy } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const S extends string, By extends string = '.'>(
  value: S,
  by = '.' as By,
) => {
  const out = value.split(by);
  return _unknown<SplitStringBy<S, By>>(out);
};

export default fn;
