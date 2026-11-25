import type { PrimitiveObjectMap } from '#types';
import { castFn } from '#utils/castFn';
import { isPlainObject } from '#utils/is/object';
import { isPrimitiveObject } from '#utils/is/primitive.object';

/**
 * Identity cast restricted to primitive-valued objects.
 *
 * Built with {@linkcode castFn}, it adds an `is` guard that accepts plain
 * objects whose own values are recursively primitives (arrays included).
 *
 * @see -- type {@linkcode PrimitiveObjectMap}
 */
const fn = castFn<PrimitiveObjectMap>()({
  is: (object: unknown): object is PrimitiveObjectMap => {
    if (!isPlainObject(object)) return false;
    return isPrimitiveObject(object);
  },
});

export default fn;
