import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: unknown) => _unknown<Readonly<T>>();

export default fn;
