import { isTypeFn } from '#utils/is/_default';

/**
 * Type guard narrowed to `string`.
 *
 * Built with {@linkcode isTypeFn}, it checks `typeof value === 'string'`.
 * Exposed as `is` on the aggregated `castings` helper.
 */
const fn = isTypeFn('string');

export default fn;
