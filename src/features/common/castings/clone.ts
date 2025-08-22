import deepClone from '#features/functions/functions/clone';
import type { PrimitiveObject } from '#types';

const fn = <T extends PrimitiveObject>(object: T): T => {
  return deepClone(object);
};

export default fn;
