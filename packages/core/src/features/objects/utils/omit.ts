import type { PrimitiveObjectMap } from '#types';
import type { Picker } from './types';

/**
 * Shallowly copies an object without the given keys or values.
 *
 * With `by: 'key'` the matching keys are dropped, with `by: 'element'` the
 * matching values are. Nested objects are copied as-is.
 *
 * @param by - Whether to match on keys or on values.
 * @param object - Object to copy.
 * @param valuesOrKeys - Keys or values to drop.
 * @returns New object without the matched entries.
 */
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
