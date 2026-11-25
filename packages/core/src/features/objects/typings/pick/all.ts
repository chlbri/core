import { expandFn } from '#utils/expandFn';
import by from './by';
import deep from './deep/all';
import pick from './index';

/**
 * Object typing helper that extracts a subset of a type.
 *
 * Extends the base `pick` typing with the `by` and `deep` variants, reachable
 * as `typings.pick.by` and `typings.pick.deep`. The export only describes a
 * type transformation and evaluates to `undefined` at runtime.
 *
 * @see {@linkcode expandFn}
 */
const pickTyping = expandFn(pick, { by, deep });

export default pickTyping;
