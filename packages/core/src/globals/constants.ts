/**
 * Runtime names of the JavaScript primitive types, in dependency-free order.
 *
 * `null` is included even though `typeof null` is `'object'`; consumers such as
 * {@linkcode isPrimitive} handle that case separately. The tuple is used to
 * derive the type {@linkcode PrimitiveS}.
 */
export const PRIMITIVES = [
  'string',
  'number',
  'boolean',
  'bigint',
  'symbol',
  'undefined',
  'null',
] as const;
