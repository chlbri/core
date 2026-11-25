import type { PrimitiveObject } from '#types';
import { isPlainObject } from './object';
import { isPrimitive } from './primitive';

/**
 * Checks whether a value is a primitive, an array of such values, or a plain
 * object whose own property values recursively satisfy the same rule.
 *
 * Primitive values short-circuit as valid. Other values (for example functions
 * or class instances) are rejected.
 *
 * @param object - Value to inspect recursively.
 * @returns `true` when `object` is a primitive or a nested container of
 * primitives.
 */
export const isPrimitiveObject = (object?: unknown): object is PrimitiveObject => {
  const isObject = isPlainObject(object);
  if (isObject) {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = (object as any)[key];
        const isPrimitiveMap = isPrimitiveObject(element);
        if (!isPrimitiveMap) return false;
      }
    }
    return true;
  }

  const isArray = Array.isArray(object);
  if (isArray) {
    for (const item of object) {
      const isPrimitiveMap = isPrimitiveObject(item);
      if (!isPrimitiveMap) return false;
    }
    return true;
  }

  return isPrimitive(object);
};
