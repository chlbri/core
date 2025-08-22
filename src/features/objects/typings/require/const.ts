/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from '#utils/_unknown';

const fn = <const T extends object, const R extends object>(
  _?: T,
  __?: R,
) => _unknown<T & R>();

export default fn;
