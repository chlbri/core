/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from 'globals';

const fn = <T>(_: T) =>
  _unknown<T extends null | undefined ? false : true>();

export default fn;
