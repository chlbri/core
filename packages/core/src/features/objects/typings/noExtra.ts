import type { NoExtraKeysStrict } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Bound type used by the `noExtra` helper.
 *
 * Routes the schema through {@linkcode NoExtraKeysStrict} with the schema as
 * both the validated type and the reference, which makes the schema's own shape
 * the constraint applied to the validated value.
 *
 * @template T - Schema type used as validated type and reference.
 */
type P<T> = NoExtraKeysStrict<T, T>;

/**
 * Type-level helper validating that a value has no keys beyond a schema.
 *
 * Curried helper: the first call captures the schema `Schema` and returns a
 * function accepting a value of type `T`, where `T` is bounded by the schema
 * shape computed through {@linkcode NoExtraKeysStrict}. The value type is
 * yielded unchanged. Exposed as `noExtra` on the aggregated
 * {@linkcode typings} helper.
 *
 * @template Schema - Schema describing the allowed keys.
 * @param _ - Schema carrier; ignored at runtime.
 * @returns Function typing the validated value as `T`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <Schema>(_?: Schema) => {
  /**
   * Validates a value against the captured schema.
   *
   * @template T - Type of the validated value, constrained to the schema.
   * @param _ - Value to validate; ignored at runtime.
   * @returns The type `T`; the runtime value is `undefined`.
   */
  // oxlint-disable-next-line no-unused-vars
  return <T extends P<Schema>>(_?: T) => _unknown<T>();
};

export default fn;
