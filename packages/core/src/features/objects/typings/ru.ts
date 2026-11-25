import type { Ru } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for open record types.
 *
 * Describes objects whose every key maps to `unknown`, as defined by type
 * {@linkcode Ru}. Built with {@linkcode typeFn}, which adds `forceCast`,
 * `dynamic`, `is` and `type` helpers. Exposed as `ru` on the aggregated
 * {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<Ru>()();

export default fn;
