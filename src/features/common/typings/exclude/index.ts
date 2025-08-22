/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from '#utils/_unknown';

const fn = <T, U extends any[]>(_?: T, ...__: U) =>
  _unknown<Exclude<T, U[number]>>();

export default fn;
