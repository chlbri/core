/* eslint-disable @typescript-eslint/no-unused-vars */

import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_value: T) => _unknown<T>();

export default fn;
