import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T, U extends any[]>(_?: T, ...__: U) =>
  _unknown<Exclude<T, U[number]>>();

export default fn;
