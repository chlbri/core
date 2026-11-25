import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T extends Readonly<T>>(_?: T) => _unknown<T>();

export default fn;
