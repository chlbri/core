import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T extends object, R extends Partial<T>>(_?: T, __?: R) =>
  _unknown<T & Required<R>>();

export default fn;
