import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends object>(object: T) => {
  return _unknown<NotReadonly<T>>(object);
};

export default fn;
