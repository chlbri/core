/* eslint-disable @typescript-eslint/no-unused-vars */

import type { SplitStringBy } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const S extends string, By extends string = '.'>(
  _?: S,
  __?: By,
) => _unknown<SplitStringBy<S, By>>();

export default fn;
