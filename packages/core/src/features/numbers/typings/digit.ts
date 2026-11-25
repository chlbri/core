import type { Digit } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper restricted to the digit union.
 *
 * Built with {@linkcode typeFn} over type {@linkcode Digit}, which adds the
 * `forceCast`, `dynamic`, `is` and `type` utilities. Exposed as `digit` on the
 * aggregated {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<Digit>()();

export default fn;
