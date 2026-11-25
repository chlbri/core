/**
 * Checks whether a value is frozen.
 *
 * Type guard built on `Object.isFrozen`, so it reflects the runtime frozen
 * state of the top-level properties and narrows the value to `Readonly<T>`
 * when they cannot be modified. Nested objects are not inspected.
 *
 * @template T - Type of the checked value, narrowed to `Readonly<T>`.
 * @param object - Value whose frozen state is tested.
 * @returns `true` when `object` is frozen at the top level.
 */
const fn = <T>(object: T): object is Readonly<T> => {
  return Object.isFrozen(object);
};

export default fn;
