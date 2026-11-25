import { _unknown } from '#utils/_unknown';
import { expandFn } from '#utils/expandFn';

// oxlint-disable-next-line no-unused-vars
const fn = expandFn(<T extends object>(_?: T) => _unknown<T[keyof T][]>(), {
  // oxlint-disable-next-line no-unused-vars
  union: <T extends object>(_?: T) => _unknown<T[keyof T]>(),
});

export default fn;
