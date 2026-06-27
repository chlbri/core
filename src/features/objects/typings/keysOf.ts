/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from '#utils/_unknown';
import { expandFn } from '#utils/expandFn';

const fn = expandFn(<T extends object>(_?: T) => _unknown<(keyof T)[]>(), {
  union: <T extends object>(_?: T) => _unknown<keyof T>(),
});

export default fn;
