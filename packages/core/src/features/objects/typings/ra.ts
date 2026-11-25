import type { Ra } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for permissive record types.
 *
 * Describes objects whose every key maps to `any`, as defined by type
 * {@linkcode Ra}. Built with {@linkcode typeFn}, which adds `forceCast`,
 * `dynamic`, `is` and `type` helpers. Exposed as `ra` on the aggregated
 * {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<Ra>()();

export default fn;
