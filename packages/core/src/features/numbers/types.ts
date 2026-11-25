import type { DIGITS } from './constants';

/**
 * Template-literal type that converts the numeric or string literal type `T`
 * into its string representation.
 *
 * @template T - Numeric or string literal type to stringify.
 */
export type ToString<T extends number | string> = `${T}`;

/**
 * Union of the single decimal digits `0` through `9`.
 *
 * Derived from the {@linkcode DIGITS} tuple.
 */
export type Digit = (typeof DIGITS)[number];
