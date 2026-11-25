import { _unknown } from '#utils/_unknown';

/**
 * Produces the canonical readonly object type.
 *
 * Ignores any input and always resolves to `Readonly<object>`, the empty
 * readonly object type. The helper evaluates to `undefined` at runtime.
 *
 * @returns `undefined`, typed as `Readonly<object>`.
 */
const fn = () => _unknown<Readonly<object>>();

export default fn;
