import { expandFn } from '#utils/expandFn';
import const_ from './const';
import exclude from './index';

/**
 * Type-level exclusion helper.
 *
 * Extends the base typing function from `./index` with a `const` variant that
 * keeps the base type and the candidates narrow.
 *
 * @see -- type {@linkcode FnBasic}
 */
const excludeTyping = expandFn(exclude, { const: const_ });

export default excludeTyping;
