import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T extends object, K extends keyof T>(_?: T, __?: K) => _unknown<T[K]>();

export default fn;
