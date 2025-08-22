import type { JoinString } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends readonly string[], S extends string = ' '>(
  sep = ' ' as S,
  ...args: T
) => {
  const out = args.join(sep);
  return _unknown<JoinString<T, S>>(out);
};

export default fn;
