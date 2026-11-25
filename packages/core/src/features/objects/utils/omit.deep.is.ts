import type { Primitive2 } from '#types';
import { isPlainObject } from '#utils/is/object';
import type { Picker } from './types';

/**
 * Checks that an object holds no key or value that should be omitted.
 *
 * Nested plain objects are inspected recursively. With `by: 'key'` the property
 * keys are compared against `valuesOrKeys`, with `by: 'element'` the primitive
 * values are.
 *
 * @param by - Whether to match on keys or on values.
 * @param object - Object to inspect.
 * @param valuesOrKeys - Keys or values that must not appear.
 * @returns `false` as soon as a match is found, otherwise `true`.
 */
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
        by === 'element' ? valuesOrKeys.includes(value) : valuesOrKeys.includes(key);
      if (shouldOmit) return false;
    }
  }
  return true;
};
