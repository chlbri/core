import type { Email } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper for the email shape.
 *
 * Built with {@linkcode typeFn} over type {@linkcode Email}, which adds the
 * `forceCast`, `dynamic`, `is` and `type` utilities. Exposed as `email` on the
 * aggregated {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<Email>()();

export default fn;
