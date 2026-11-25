import type { NoExtraKeysStrict } from '#types';

/**
 * Schema validated against itself without extra keys.
 *
 * @template T - Schema type to validate.
 */
type P<T> = NoExtraKeysStrict<T, T>;

/**
 * Builds an identity function restricted to a schema without extra keys.
 *
 * The optional `schema` argument only pins the schema type at compile time. The
 * returned function accepts values that satisfy type {@linkcode NoExtraKeysStrict}
 * against that schema and returns them unchanged.
 *
 * @template Schema - Schema used to validate the accepted values.
 * @param _ - Unused schema marker, present only for type inference.
 * @returns Identity function typed against the schema.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <Schema>(_?: Schema) => {
  return <T extends P<Schema>>(value: T) => value;
};

export default fn;
