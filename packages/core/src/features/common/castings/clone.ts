import { deepClone } from '#features/functions/functions/clone';
import type { PrimitiveObject } from '#types';

/**
 * Returns a deep clone of a primitive object.
 *
 * Delegates to {@linkcode deepClone}, leaving the original object untouched.
 *
 * @template T - Type of the object to clone.
 * @param object - Object to clone.
 * @returns A deep clone of `object`.
 */
const fn = <T extends PrimitiveObject>(object: T): T => {
  return deepClone(object);
};

export default fn;
