import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <const T extends string, U extends string>(_?: T, __?: U) =>
  _unknown<T extends `${string}${U}` ? true : false>();

export default fn;
