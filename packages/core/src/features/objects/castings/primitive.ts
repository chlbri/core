import type { PrimitiveObjectMap } from '#types';
import { castFn } from '#utils/castFn';
import { isPlainObject } from '#utils/is/object';
import { isPrimitiveObject } from '#utils/is/primitive.object';

const fn = castFn<PrimitiveObjectMap>()({
  is: (object: unknown): object is PrimitiveObjectMap => {
    if (!isPlainObject(object)) return false;
    return isPrimitiveObject(object);
  },
});

export default fn;
