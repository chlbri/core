import { PRIMITIVES } from '#features/transform/constants';
import type { Primitive, PrimitiveObject } from '#types';
import { mergeIs } from './merge';

export const isPrimitive = (value: unknown): value is Primitive => {
  const isType = mergeIs.type(...PRIMITIVES);
  const isValue = mergeIs(null, undefined);
  return isType(value) || isValue(value);
};

export const isPlainObject = (value: any): value is object => {
  return (
    Object.prototype.toString.call(value) == '[object Object]' &&
    value.constructor &&
    value.constructor.name == 'Object'
  );
};

export const isPrimitiveObject = (
  object: any,
): object is PrimitiveObject => {
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
