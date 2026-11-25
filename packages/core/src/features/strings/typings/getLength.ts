import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <const T extends string>(_?: T) => _unknown<T['length']>();

export default fn;
