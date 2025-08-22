/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from '#utils/_unknown';

const fn = <const T extends string>(_?: T) => _unknown<Uppercase<T>>();

export default fn;
