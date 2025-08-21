import type { Primitive2, PrimitiveObjectMap } from '#types';
import { isPlainObject } from '#utils/is/primitive';
import type { Picker } from './types';

const __omitDeep = (
  by: Picker,
  object: PrimitiveObjectMap,
  ...valuesOrKeys: any[]
) => {
  const entries = Object.entries(object);
  const result: PrimitiveObjectMap = {};

  entries.forEach(([key, value]) => {
    const isObject = isPlainObject(value);
    if (isObject) {
      const picked = __omitDeep(
        by,
        value as PrimitiveObjectMap,
        ...valuesOrKeys,
      );

      result[key] = picked;
    } else if (by === 'key' && !valuesOrKeys.includes(key)) {
      result[key] = value;
    } else if (
      by === 'element' &&
      !!value &&
      !valuesOrKeys.includes(value)
    ) {
      result[key] = value;
    }
  });

  return result;
};

export const omitDeep = (
  by: Picker,
  object: PrimitiveObjectMap,
  ...valuesOrKeys: any[]
) => {
  const result = __omitDeep(by, object, ...valuesOrKeys);

  return result;
};

export const omitDeepIs = (
  by: Picker,
  object: object,
  ...valuesOrKeys: Primitive2[]
) => {
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    const isObject = isPlainObject(value);
    if (isObject) {
      const isDeep = omitDeepIs(by, value, ...valuesOrKeys);
      if (!isDeep) return false;
    } else {
      const shouldOmit =
        by === 'element'
          ? valuesOrKeys.includes(value)
          : valuesOrKeys.includes(key);
      if (shouldOmit) return false;
    }
  }
  return true;
};
