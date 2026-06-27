import type { KeyTypes } from '#types';

export const checkEntries = (keys: KeyTypes, object: object) => {
  const entries = Object.entries(keys);
  return entries.every(([key, type]) => {
    const check1 = key in object;
    if (!check1) return false;

    const value = (object as any)[key];
    if (typeof type === 'string') {
      return typeof value === type;
    } else if (typeof type === 'function') {
      return type(value);
    }
    return false;
  });
};
