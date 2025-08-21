import { isPlainObject } from '#utils/is/primitive';
import type { Picker } from './types';

export const pickDeep = (
  by: Picker,
  object: object,
  ...valuesOrKeys: any[]
) => {
  const result: any = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const element = (object as any)[key];
      const isObject = isPlainObject(element);

      if (isObject) {
        const picked = pickDeep(by, element, ...valuesOrKeys);
        if (Object.keys(picked).length > 0) {
          result[key] = picked;
        }
      } else {
        const shouldPick =
          by === 'element'
            ? valuesOrKeys.includes(element)
            : valuesOrKeys.includes(key);
        if (shouldPick) result[key] = element;
      }
    }
  }

  return result;
};

export const pick = (by: Picker, object: object, ...keys: any[]) => {
  const result: any = {};
  const entries = Object.entries(object);

  entries.forEach(([key, value]) => {
    const shouldPick =
      by === 'element' ? keys.includes(value) : keys.includes(key);

    if (shouldPick) {
      result[key] = value;
    }
  });

  return result;
};
