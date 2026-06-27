import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(value: T) =>
  _unknown<DeepReadonly<T>>(value);

export default fn;
