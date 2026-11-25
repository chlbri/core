import type { KeyTypes } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for the recursive key description {@linkcode KeyTypes}.
 *
 * Exports the builder produced by {@linkcode typeFn} rather than an already
 * built helper: calling it with optional extension members returns the typing
 * function for type {@linkcode KeyTypes}. Exposed as `keyTypes` on the
 * aggregated {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<KeyTypes>();

export default fn;
