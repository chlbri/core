import type { LowerLetters } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper restricted to lowercase English letters.
 *
 * Built with {@linkcode typeFn} over type {@linkcode LowerLetters}, which adds
 * the `forceCast`, `dynamic`, `is` and `type` utilities. Exposed as `lower` on
 * the {@linkcode typings.letters} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<LowerLetters>()();

export default fn;
