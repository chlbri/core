/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends Record<Keys, Keys>>(_?: T) => {
  return _unknown<{
    [K in keyof T as T[K]]: K;
  }>();
};

export default fn;
