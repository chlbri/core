import type { DeepRequired } from '#types';
import { mergeIs } from '#utils/is/merge';
import { isPlainObject } from '#utils/is/object';

/**
 * Type guard checking that a value is deeply non-nullish.
 *
 * Plain objects and arrays are traversed recursively; a `null` or `undefined`
 * found at any depth makes the guard fail. Other values pass unless they are
 * themselves `null` or `undefined`.
 *
 * @param object - Value to inspect.
 * @returns `true` when no `null` or `undefined` is found at any depth.
 */
export const isRequiredDeep = (object: unknown): object is DeepRequired<any> => {
  const isObject = isPlainObject(object);
  if (isObject) {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = (object as any)[key];
        const isPrimitiveMap = isRequiredDeep(element);
        if (!isPrimitiveMap) return false;
      }
    }
    return true;
  }

  const isArray = Array.isArray(object);
  if (isArray) {
    for (const item of object) {
      const isPrimitiveMap = isRequiredDeep(item);
      if (!isPrimitiveMap) return false;
    }
    return true;
  }

  const checker = mergeIs(undefined, null);

  return !checker(object);
};
