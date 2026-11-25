import type { Picker } from './types';

/**
 * Shallowly picks keys or values from an object.
 *
 * With `by: 'key'` the matching keys are kept, with `by: 'element'` the
 * matching values are. Nested objects are copied as-is.
 *
 * @param by - Whether to match on keys or on values.
 * @param object - Object to copy from.
 * @param keys - Keys or values to keep.
 * @returns New object holding only the matched entries.
 */
export const pick = (by: Picker, object: object, ...keys: any[]) => {
  const result: any = {};
  const entries = Object.entries(object);

  entries.forEach(([key, value]) => {
    const shouldPick = by === 'element' ? keys.includes(value) : keys.includes(key);

    if (shouldPick) {
      result[key] = value;
    }
  });

  return result;
};
