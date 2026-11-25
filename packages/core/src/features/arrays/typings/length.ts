import { expandFn } from '#utils/expandFn';
import _index from './_length';

/**
 * Type-level helper computing the length of a tuple.
 *
 * Built with {@linkcode expandFn} from the base implementation, without extra
 * members, and exposed as `_length` on the aggregated {@linkcode typings}
 * helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = expandFn(_index, {});

export default fn;
