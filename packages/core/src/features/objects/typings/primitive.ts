import type { PrimitiveObjectMap } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for nested primitive object types.
 *
 * Describes objects whose every key maps to a primitive object or an array of
 * them, as defined by type {@linkcode PrimitiveObjectMap}. Built with
 * {@linkcode typeFn}, which adds `forceCast`, `dynamic`, `is` and `type`
 * helpers. Exposed as `primitive` on the aggregated {@linkcode typings}
 * helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<PrimitiveObjectMap>()();

export default fn;
