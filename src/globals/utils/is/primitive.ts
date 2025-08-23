import { PRIMITIVES } from '#features/transform/constants';
import type { Primitive } from '#types';
import { mergeIs } from './merge';

export const isPrimitive = (value?: unknown): value is Primitive => {
  const isType = mergeIs.type(...PRIMITIVES);
  const isValue = mergeIs(null, undefined);
  return isType(value) || isValue(value);
};
