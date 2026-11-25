import type { PrimitiveObjectMap } from '#types';
import type { Picker } from './types';

/**
 * Checks that none of the given keys or values are present on an object.
 *
 * Only the first level of `object` is inspected: with `by: 'key'` the property
 * keys are compared against `valuesOrKeys`, with `by: 'element'` the property
 * values are.
 *
 * @param by - Whether to match on keys or on values.
 * @param object - Object to inspect.
 * @param valuesOrKeys - Keys or values that must not appear.
 * @returns `true` when no entry matches, otherwise `false`.
 */
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
