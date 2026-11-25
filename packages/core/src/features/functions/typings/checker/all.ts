import { expandFn } from '#utils/expandFn';
import byType from './byType/all';
import _index from './index';

/**
 * Aggregated type-level checker helpers.
 *
 * Extends the base checker typing function with `byType`.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, { byType });

export default fn;
