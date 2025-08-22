/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from '#utils/_unknown';

const fn = <T extends object, R extends Partial<T>>(_?: T, __?: R) =>
  _unknown<T & Required<R>>();

export default fn;
