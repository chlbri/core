import type { PrimitiveObjectMap } from '#types';
import { castFn } from '#utils/castFn';
import { isPlainObject, isPrimitiveObject } from '#utils/is/primitive';

const fn = castFn<PrimitiveObjectMap>()({
  is: (object: unknown): object is PrimitiveObjectMap => {
    if (!isPlainObject(object)) return false;
    return isPrimitiveObject(object);
  },
});

export default fn;
