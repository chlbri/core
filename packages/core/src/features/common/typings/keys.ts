import type { Keys } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for the object key union type {@linkcode Keys}.
 *
 * Built with {@linkcode typeFn}, which adds `forceCast`, `dynamic`, `is` and
 * `type` helpers.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<Keys>()();

export default fn;
