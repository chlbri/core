import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(object: T) => {
  return _unknown<DeepNotReadonly<T>>(object);
};

export default fn;
