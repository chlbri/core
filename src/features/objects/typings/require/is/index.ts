/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from '#utils/_unknown';

const fn = <T extends object, R extends object>(_?: T, __?: R) =>
  _unknown<T extends T & R ? true : false>();

export default fn;
