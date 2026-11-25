import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <const T extends object>(_?: T) =>
  _unknown<T extends NotReadonly<T> ? true : false>();

export default fn;
