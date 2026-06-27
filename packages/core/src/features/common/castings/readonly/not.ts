import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(value: T) => _unknown<NotReadonly<T>>(value);

export default fn;
