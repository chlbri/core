import type { Letters } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level constant for the union of English letters.
 *
 * Returns no runtime value; {@linkcode _unknown} only communicates type
 * {@linkcode Letters}. Exposed as `type` on the
 * {@linkcode typings.letters} helper.
 */
const fn = _unknown<Letters>();

export default fn;
