import { _unknown } from '#utils/_unknown';

const fn = <T>(_: T) => _unknown<T extends boolean ? true : false>();

export default fn;
