import type { PrimitiveObjectMap } from '#types';
import type { Picker } from './types';

export const omitIs = (
  by: Picker,
  object: PrimitiveObjectMap,
  ...valuesOrKeys: any[]
) => {
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    const checkKey = by === 'key' && valuesOrKeys.includes(key);
    const checkElement = by === 'element' && valuesOrKeys.includes(value);
    if (checkKey) {
      return false;
    } else if (checkElement) {
      return false;
    }
  }
  return true;
};

export const omit = (
  by: Picker,
  object: PrimitiveObjectMap,
  ...valuesOrKeys: any[]
) => {
  const result: any = {};

  const entries = Object.entries(object);
  entries.forEach(([key, value]) => {
    const checkKey = by === 'key' && !valuesOrKeys.includes(key);
    const checkElement = by === 'element' && !valuesOrKeys.includes(value);
    if (checkKey) {
      result[key] = value;
    } else if (checkElement) {
      result[key] = value;
    }
  });

  return result;
};
