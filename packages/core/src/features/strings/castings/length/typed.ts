import { _unknown } from '#utils/_unknown';
import stringLengthTyped from './low';

/**
 * Function type returning the literal length of a string.
 *
 * The `const` type parameter keeps the literal string type, so the return type
 * `T['length']` resolves to the exact numeric literal length instead of the
 * general `number`.
 *
 * @template T - Literal string type whose length is returned.
 */
type StringLengthTyped_F = <const T extends string>(value: T) => T['length'];

/**
 * Typed variant of the string length reader from `./low`.
 *
 * Runs the plain runtime reader and casts it, through {@linkcode _unknown}, to
 * {@linkcode StringLengthTyped_F} so the literal length is preserved in the
 * type.
 */
export default _unknown<StringLengthTyped_F>(stringLengthTyped);
