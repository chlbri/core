import { isRequiredDeep } from '../../../utils/require';

/**
 * Checks recursively that no nested value is `undefined` or `null`.
 *
 * Alias of {@linkcode isRequiredDeep}, which walks plain objects and arrays
 * recursively and narrows the value to type {@linkcode DeepRequired} `<any>`
 * only when every checked value is defined. Exposed as `deep` on the
 * aggregated `is` helper.
 */
const fn = isRequiredDeep;

export default fn;
