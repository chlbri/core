import type { Rn } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for empty record types.
 *
 * Describes objects whose every key maps to `never`, as defined by type
 * {@linkcode Rn}. Built with {@linkcode typeFn}, which adds `forceCast`,
 * `dynamic`, `is` and `type` helpers. Exposed as `rn` on the aggregated
 * {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<Rn>()();

export default fn;
