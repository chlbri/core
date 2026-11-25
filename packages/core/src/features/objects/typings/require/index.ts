import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T extends object, R extends object>(_?: T, __?: R) => _unknown<T & R>();

export default fn;
