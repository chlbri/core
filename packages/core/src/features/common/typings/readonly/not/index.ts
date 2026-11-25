import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper removing `readonly` from an object type.
 *
 * Yields type {@linkcode NotReadonly}: the same object shape as `T` with the
 * `readonly` modifier stripped from every own property. The transform is
 * shallow, so nested objects keep their modifiers. Main call signature of
 * `readonly.not` on the aggregated common {@linkcode typings} helper.
 *
 * @template T - Object type whose properties become mutable.
 * @param _ - Value whose type is transformed; ignored at runtime.
 * @returns The type `NotReadonly<T>`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<NotReadonly<T>>();

export default fn;
