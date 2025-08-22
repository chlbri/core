import type { AddString } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends string, Before extends string, After extends string>(
  value: T,
  before = '' as Before,
  after = '' as After,
) => {
  const out = `${before}${value}${after}`;
  return _unknown<AddString<T, Before, After>>(out);
};

export default fn;
