import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends object>(value: T) =>
  _unknown<DeepNotReadonly<T>>(value);

export default fn;
