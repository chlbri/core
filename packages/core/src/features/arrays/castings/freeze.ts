import tuple from './tuple';

/**
 * Builds a frozen tuple from the given arguments.
 *
 * Delegates tuple construction to {@linkcode tuple} and applies
 * `Object.freeze`, so the returned tuple cannot be mutated at runtime. Mirrors
 * the `freeze` helper of the type-level {@linkcode typings} aggregate, which
 * produces a readonly tuple.
 *
 * @template T - Tuple type built from the arguments.
 * @param args - Values of the tuple.
 * @returns Frozen tuple holding `args`.
 */
const fn = <const T extends any[]>(...args: T) => Object.freeze(tuple(...args));

export default fn;
