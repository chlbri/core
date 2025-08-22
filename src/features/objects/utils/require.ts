import type { DeepRequired } from '#types';
import { mergeIs } from '#utils/is/merge';
import { isPlainObject } from '#utils/is/object';

export const isRequiredDeep = (
  object: unknown,
): object is DeepRequired<any> => {
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
