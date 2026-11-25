import { identity } from '#utils/identity';

/**
 * Identity casting helper.
 *
 * Alias of {@linkcode identity}, which returns its argument unchanged while
 * letting the caller choose the exposed return type.
 */
const fn = identity;

export default fn;
