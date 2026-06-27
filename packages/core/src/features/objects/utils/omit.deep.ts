import type { PrimitiveObjectMap } from '#types';
import { isPlainObject } from '#utils/is/object';
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
