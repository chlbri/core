/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from '#utils/_unknown';

const fn = <T extends unknown[]>(_?: T) => _unknown<T>();

export default fn;
