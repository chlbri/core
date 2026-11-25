import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Shallow mutable cast.
 *
 * Returns the value untouched and only asserts it as type
 * {@linkcode NotReadonly} `<T>` through {@linkcode _unknown}, stripping the
 * `readonly` modifier from the top-level properties without any runtime change.
 *
 * @template T - Object type whose top-level properties become mutable.
 * @param value - Value returned unchanged.
 * @returns The same `value`, typed as `NotReadonly<T>`.
 */
const fn = <T extends object>(value: T) => _unknown<NotReadonly<T>>(value);

export default fn;
