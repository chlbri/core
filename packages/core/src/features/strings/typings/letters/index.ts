import type { Letters } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Base type-level helper for English letters.
 *
 * Built with {@linkcode typeFn} over type {@linkcode Letters}, which adds the
 * `forceCast`, `dynamic`, `is` and `type` utilities. Serves as the main
 * function of the {@linkcode typings.letters} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<Letters>()();

export default fn;
