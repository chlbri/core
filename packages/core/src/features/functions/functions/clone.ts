import type { PrimitiveObject } from '#types';

/**
 * Formatting function applied to the keys of a cloned object.
 *
 * @template T - Object whose keys are formatted.
 * @param key - Key to format.
 * @returns The formatted key.
 */
export type FormatKey<T = any> = (key: Extract<keyof T, string>) => string;

/**
 * Creates a deep clone of an object or array.
 *
 * Arrays, plain objects and nested values are copied recursively. Circular
 * references are resolved through `refs`, and frozen or sealed inputs produce
 * frozen or sealed clones. Primitives are returned unchanged.
 *
 * @template I - Type of the value being cloned.
 * @param value - Object, array or primitive to clone.
 * @param refs - Map of already cloned values, used to preserve circular
 * references.
 * @returns A deep clone of `value`.
 * @see {@link https://www.npmjs.com/package/deep-clone|deep-clone}
 */
export function deepClone<I extends PrimitiveObject>(
  value: I,
  refs = new Map<I, I>(),
): I {
  const ref = refs.get(value);
  if (typeof ref !== 'undefined') return ref;

  if (Array.isArray(value)) {
    const clone: any = [];
    refs.set(value, clone);

    for (let i = 0; i < value.length; i++) {
      clone[i] = deepClone(value[i], refs as any);
    }

    return clone as I;
  }

  if (!(value instanceof Object)) return value as unknown as I;

  const clone: Record<string, PrimitiveObject> = {};
  refs.set(value, clone as I);
  const keys = Object.keys(value);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    clone[key] = deepClone((value as any)[keys[i]], refs);
  }

  if (Object.isFrozen(value)) {
    Object.freeze(clone);
  }

  if (Object.isSealed(value)) {
    Object.seal(clone);
  }

  return clone as I;
}
