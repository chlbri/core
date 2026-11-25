import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<[keyof T, T[keyof T]][]>();

export default fn;
