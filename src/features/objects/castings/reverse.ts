import type { Keys } from '#types';

const fn = <T extends Record<Keys, Keys>>(
  object: T,
): { [K in keyof T as T[K]]: K } => {
  const result: any = {};
  for (const key in object) {
    result[object[key]] = key;
  }
  return result;
};

export default fn;
