/**
 * Runtime type guard that detects arrays.
 *
 * Wraps {@linkcode Array.isArray}; the element type `T` is not checked at
 * runtime. Mirrors the `is` helper of the type-level {@linkcode typings}
 * aggregate, which only resolves to `true` for array types.
 *
 * @template T - Element type assumed when the guard succeeds.
 * @param value - Value to test.
 * @returns `true` when `value` is an array, otherwise `false`.
 */
const fn = <T>(value: unknown): value is Array<T> => {
  return Array.isArray(value);
};

export default fn;
