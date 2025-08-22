/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from '#utils/_unknown';

const fn = <const T extends any[]>(..._: T) => _unknown<T[number]>();

export default fn;
