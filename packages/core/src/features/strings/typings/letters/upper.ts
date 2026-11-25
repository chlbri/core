import type { UpperLetters } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Type-level helper restricted to uppercase English letters.
 *
 * Built with {@linkcode typeFn} over type {@linkcode UpperLetters}, which adds
 * the `forceCast`, `dynamic`, `is` and `type` utilities. Exposed as `upper` on
 * the {@linkcode typings.letters} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<UpperLetters>()();

export default fn;
