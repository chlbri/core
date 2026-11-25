import type { AddString } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends string, Before extends string, After extends string>(
  // oxlint-disable-next-line no-unused-vars
  _?: T,
  __?: Before,
  ___?: After,
) => _unknown<AddString<T, Before, After>>();

export default fn;
