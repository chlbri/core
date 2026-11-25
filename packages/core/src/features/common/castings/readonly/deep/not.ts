import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Recursive mutable cast.
 *
 * Returns the value untouched and only asserts it as `DeepNotReadonly<T>`
 * through {@linkcode _unknown}, stripping the `readonly` modifier from nested
 * properties at every depth. The `const` type parameter preserves literal
 * types, and no runtime change occurs.
 *
 * @template T - Object type whose nested properties become mutable.
 * @param value - Value returned unchanged.
 * @returns The same `value`, typed as `DeepNotReadonly<T>`.
 */
const fn = <const T extends object>(value: T) => _unknown<DeepNotReadonly<T>>(value);

export default fn;
