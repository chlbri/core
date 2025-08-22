import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(object: T) => {
  const out = Object.freeze(object);
  return _unknown<DeepReadonly<T>>(out);
};

export default fn;
