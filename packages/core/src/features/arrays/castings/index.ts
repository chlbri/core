/**
 * Identity array cast that collects the arguments into a new array.
 *
 * The callable base of the aggregated {@linkcode castings} helper; it performs
 * no coercion and simply returns the arguments as a `T[]`. Mirrors the
 * type-level `index` helper of {@linkcode typings}, which yields `T[number][]`.
 *
 * @template T - Element type of the values.
 * @param values - Values collected into the returned array.
 * @returns New array holding `values`.
 */
const fn = <T>(...values: T[]) => values;

export default fn;
