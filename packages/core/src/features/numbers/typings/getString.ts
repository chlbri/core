import { _unknown } from '#utils/_unknown';

// oxlint-disable-next-line no-unused-vars
const fn = <const T extends number>(_: T) => _unknown<`${T}`>();

export default fn;
