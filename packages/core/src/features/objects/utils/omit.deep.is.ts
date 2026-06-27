import type { Primitive2 } from '#types';
import { isPlainObject } from '#utils/is/object';
import type { Picker } from './types';

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
