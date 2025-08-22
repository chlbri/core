/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from '#utils/_unknown';

const fn = <T>(_?: T) => _unknown<T extends unknown[] ? true : false>();

export default fn;
