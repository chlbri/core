import type { Checker } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for `Checker`.
 *
 * Built with {@linkcode typeFn}, which adds `forceCast`, `dynamic`, `is` and
 * `type`.
 */
const checker = typeFn<Checker>()();

export default checker;
