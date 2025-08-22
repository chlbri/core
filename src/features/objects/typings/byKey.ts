/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from '#utils/_unknown';

const fn = <T extends object, K extends keyof T>(_?: T, __?: K) =>
  _unknown<T[K]>();

export default fn;
