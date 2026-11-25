import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<NotReadonly<T>>();

export default fn;
