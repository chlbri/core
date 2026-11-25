import { expandFn } from '#utils/expandFn';
import by from './by';
import deepPick from './index';

/**
 * Object typing helper that extracts a subset of a type under the `deep`
 * namespace.
 *
 * Extends the base `deep` typing with its `by` variant, reachable as
 * `typings.pick.deep.by`. The export only describes a type transformation and
 * evaluates to `undefined` at runtime.
 *
 * @see {@linkcode expandFn}
 */
const deep = expandFn(deepPick, { by });

export default deep;
