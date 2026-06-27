import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<Required<T>>();

export default fn;
