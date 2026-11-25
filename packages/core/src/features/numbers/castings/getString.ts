/**
 * Converts a number or string to its string form using template literals.
 *
 * The return type mirrors type {@linkcode ToString}, so the literal string type
 * is preserved. Exposed as `getString` on the aggregated {@linkcode castings}
 * helper.
 *
 * @template T - Numeric or string literal type to convert.
 * @param arg - Value to convert.
 * @returns The string representation of `arg`, typed as `` `${T}` ``.
 */
const fn = <T extends number | string>(arg: T): `${T}` => `${arg}`;

export default fn;
