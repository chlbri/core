/* eslint-disable @typescript-eslint/no-unused-vars */

import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T>(_?: T) => _unknown<T extends RuA ? true : false>();

export default fn;
