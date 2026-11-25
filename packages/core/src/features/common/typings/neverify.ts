import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <T>(_?: T) => _unknown<T extends never ? true : false>();

export default fn;
