import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T>(_: T | readonly T[] | T[]) => _unknown<T>();

export default fn;
