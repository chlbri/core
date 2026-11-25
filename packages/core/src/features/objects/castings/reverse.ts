import type { Keys } from '#types';

/**
 * Swaps the keys and values of a record.
 *
 * Every value of `object` becomes a key of the result, mapping back to the key
 * that held it. The input values must therefore be valid property keys.
 *
 * @template T - Record whose keys and values are both key types.
 * @param object - Record to invert.
 * @returns New record mapping each value of `object` to its former key.
 */
const fn = <T extends Record<Keys, Keys>>(
  object: T,
): { [K in keyof T as T[K]]: K } => {
  const result: any = {};
  for (const key in object) {
    result[object[key]] = key;
  }
  return result;
};

export default fn;
