import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T extends Record<Keys, Keys>>(_?: T) => {
  return _unknown<{
    [K in keyof T as T[K]]: K;
  }>();
};

export default fn;
