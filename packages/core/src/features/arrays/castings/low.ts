/**
 * Identity array cast that returns the values as a mutable array.
 *
 * Collects the arguments into an array without coercion and keeps their element
 * type `T`. Mirrors the `low` helper of the type-level {@linkcode typings}
 * aggregate.
 *
 * @template T - Element type of the values.
 * @param values - Values collected into the returned array.
 * @returns Array holding `values`.
 */
const fn = <T extends unknown[]>(...values: T) => values;

export default fn;
