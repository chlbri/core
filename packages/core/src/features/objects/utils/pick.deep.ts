import { isPlainObject } from '#utils/is/object';
import type { Picker } from './types';

/**
 * Recursively picks keys or values from an object.
 *
 * Nested plain objects are traversed with the same rule; a nested branch is
 * kept only when it still holds at least one picked entry.
 *
 * @param by - Whether to match on keys or on values.
 * @param object - Object to copy from.
 * @param valuesOrKeys - Keys or values to keep.
 * @returns New object holding only the matched entries.
 */
export const pickDeep = (by: Picker, object: object, ...valuesOrKeys: any[]) => {
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
