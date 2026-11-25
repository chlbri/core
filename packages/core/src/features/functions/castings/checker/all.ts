import { expandFn } from '#utils/expandFn';
import byType from './byType/all';
import forceCast from './forceCast';
import _index from './index';
import is from './is';

/**
 * Aggregated checker helpers.
 *
 * Extends the base checker cast with `forceCast`, `byType` and `is`.
 *
 * @see -- type {@linkcode FnBasic}
 */
const checker = expandFn(_index, { forceCast, byType, is });

export default checker;
