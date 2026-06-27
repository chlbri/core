import { _unknown } from '#utils/_unknown';

const fn = <T>(_: T) =>
  _unknown<T extends null | undefined ? false : true>();

export default fn;
