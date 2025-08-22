/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from '#utils/_unknown';

const fn = <const T extends object, K extends (keyof T)[]>(
  _?: T,
  ...__: K
) => _unknown<Omit<T, K[number]>>();

export default fn;
