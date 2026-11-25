import type { To } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for plain object types.
 *
 * Describes objects that are neither iterable nor carry the
 * `SymbolConstructor` property, as defined by type {@linkcode To}, the alias of
 * type {@linkcode TrueObject}. Built with {@linkcode typeFn}, which adds
 * `forceCast`, `dynamic`, `is` and `type` helpers. Exposed as `trueObject` on
 * the aggregated {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<To>()();

export default fn;
