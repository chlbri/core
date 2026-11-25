import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <const T extends any[]>(..._: T) => _unknown<T[number]>();

export default fn;
