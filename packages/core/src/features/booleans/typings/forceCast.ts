import { _unknown } from '#utils/_unknown';

const fn = <T extends boolean>(_: unknown) => _unknown<T>();

export default fn;
