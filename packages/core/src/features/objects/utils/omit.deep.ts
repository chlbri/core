import type { PrimitiveObjectMap } from '#types';
import { isPlainObject } from '#utils/is/object';
import type { Picker } from './types';

/**
 * Recursive worker behind {@linkcode omitDeep}.
 *
 * Walks the nested plain objects of `object` and copies the entries that do not
 * match `valuesOrKeys`.
 *
 * @param by - Whether to match on keys or on values.
 * @param object - Object currently being processed.
 * @param valuesOrKeys - Keys or values to drop.
 * @returns New object without the matched entries.
 */
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
      const picked = __omitDeep(by, value as PrimitiveObjectMap, ...valuesOrKeys);

      result[key] = picked;
    } else if (by === 'key' && !valuesOrKeys.includes(key)) {
      result[key] = value;
    } else if (by === 'element' && !!value && !valuesOrKeys.includes(value)) {
      result[key] = value;
    }
  });

  return result;
};

/**
 * Recursively copies an object without the given keys or values.
 *
 * Nested plain objects are processed with the same rule. With `by: 'key'` the
 * matching keys are dropped, with `by: 'element'` the matching truthy values
 * are.
 *
 * @param by - Whether to match on keys or on values.
 * @param object - Object to copy.
 * @param valuesOrKeys - Keys or values to drop.
 * @returns New object without the matched entries.
 */
export const omitDeep = (
  by: Picker,
  object: PrimitiveObjectMap,
  ...valuesOrKeys: any[]
) => {
  const result = __omitDeep(by, object, ...valuesOrKeys);

  return result;
};
