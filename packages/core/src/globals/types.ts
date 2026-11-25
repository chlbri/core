import type { PRIMITIVES } from './constants';

export * from '../features/arrays/types';
export * from '../features/common/types';
export * from '../features/functions/types';
export * from '../features/numbers/types';
export * from '../features/objects/types';
export * from '../features/promises/types';
export * from '../features/strings/types';

/**
 * Union of the primitive type names listed in {@linkcode PRIMITIVES}.
 *
 * Used as the input of {@linkcode TransformPrimitiveS} and by the runtime type
 * guards based on `typeof`.
 */
export type PrimitiveS = (typeof PRIMITIVES)[number];

/**
 * Maps a primitive name to the corresponding TypeScript type.
 *
 * @template | {@linkcode PrimitiveS} `T` - Primitive name to transform.
 *
 * @example
 * ```ts
 * TransformPrimitiveS<'string'> // => string
 * TransformPrimitiveS<'null'> // => null
 * ```
 */
export type TransformPrimitiveS<T extends PrimitiveS> = T extends 'string'
  ? string
  : T extends 'number'
    ? number
    : T extends 'boolean'
      ? boolean
      : T extends 'bigint'
        ? bigint
        : T extends 'null'
          ? null
          : T extends 'undefined'
            ? undefined
            : T extends 'symbol'
              ? symbol
              : never;
