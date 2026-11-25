import { partialCall } from '#features/functions/functions';
import stringConcatUtil from './utils';

/**
 * Concatenates strings without any separator.
 *
 * Built with {@linkcode partialCall} by fixing the separator of
 * {@linkcode stringConcatUtil} to the empty string.
 */
const stringConcatLow = partialCall.paramArray(stringConcatUtil, '');
export default stringConcatLow;
