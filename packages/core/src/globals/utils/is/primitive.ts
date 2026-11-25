import type { Primitive } from '#types';
import { mergeIs } from './merge';

/**
 * Runtime names of the JavaScript primitive types, in dependency-free order.
 *
 * Mirrors the tuple exported from the globals constants module. `null` is
 * included even though `typeof null` is `'object'`, so {@linkcode isPrimitive}
 * also tests it by value.
 */
export const PRIMITIVES = [
  'string',
  'number',
  'boolean',
  'bigint',
  'symbol',
  'undefined',
  'null',
] as const;

/**
 * Checks whether a value is a primitive.
 *
 * Combines a `typeof` check against {@linkcode PRIMITIVES} with an equality
 * check for `null`, which `typeof` reports as `'object'`.
 *
 * @param value - Value to inspect.
 * @returns `true` for `string`, `number`, `boolean`, `bigint`, `symbol`,
 * `undefined` and `null`. The guard narrows to `Primitive`, which covers
 * `string`, `number`, `boolean`, `undefined` and `null`.
 * @see -- type {@linkcode Primitive}
 */
export const isPrimitive = (value?: unknown): value is Primitive => {
  const isType = mergeIs.type(...PRIMITIVES);
  const isValue = mergeIs(null, undefined);
  return isType(value) || isValue(value);
};
