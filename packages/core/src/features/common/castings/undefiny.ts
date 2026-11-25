/**
 * Casting helper that types its result as type {@linkcode Undefiny}.
 *
 * Returns the argument unchanged, with the optional parameter widening the
 * result to `T | undefined`.
 *
 * @template T - Type of the value.
 * @param value - Value returned unchanged.
 * @returns The input value, typed as `T | undefined`.
 */
const fn = <T>(value?: T) => value;

export default fn;
