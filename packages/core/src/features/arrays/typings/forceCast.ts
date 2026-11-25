import { _unknown } from '#utils/_unknown';

/**
 * Forces the type of any value to `unknown[]`.
 *
 * No runtime conversion happens: the argument is ignored and only the type
 * `unknown[]` is communicated to the type system.
 *
 * @param _ - Value ignored by the cast.
 * @returns The type `unknown[]`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = (_?: unknown) => _unknown<unknown[]>();

export default fn;
