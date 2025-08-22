/* eslint-disable @typescript-eslint/no-unused-vars */

import type { JoinString } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends readonly string[], sep extends string = ' '>(
  _?: sep,
  ...__: T
) => _unknown<JoinString<T, sep>>();

export default fn;
