/**
 * Casting helper that preserves the literal type of its argument.
 *
 * Uses a `const` type parameter so literal values keep their narrow inferred
 * type while the value is returned unchanged.
 *
 * @template T - Type of the value, inferred as a literal whenever possible.
 * @param value - Value returned unchanged.
 * @returns The input value, typed as `T`.
 */
const fn = <const T>(value: T) => value;

export default fn;
