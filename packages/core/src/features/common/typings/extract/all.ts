import { expandFn } from '#utils/expandFn';
import const_ from './const';
import extract from './index';

/**
 * Type-level extraction helper.
 *
 * Extends the base typing function from `./index` with a `const` variant that
 * keeps the base type and the candidates narrow.
 *
 * @see -- type {@linkcode FnBasic}
 */
const extractTyping = expandFn(extract, { const: const_ });

export default extractTyping;
