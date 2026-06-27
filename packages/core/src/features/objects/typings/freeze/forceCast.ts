import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: unknown) => _unknown<Readonly<T>>();

export default fn;
