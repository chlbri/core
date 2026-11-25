import type { Classe, PrimitiveS, TransformPrimitiveS } from '#types';

/**
 * Builds a guard checking the result of `typeof` against `check`.
 *
 * @template T - Type asserted when the check succeeds.
 * @param check - Expected `typeof` string, such as `'string'`.
 * @returns Guard narrowing the value to `T`.
 */
export const isFn = <const T>(check: T) => {
  return (value?: unknown): value is T => {
    return typeof value === check;
  };
};

/**
 * Builds a guard for one of the primitive type names.
 *
 * @template T - Primitive name to test, used to resolve the narrowed type.
 * @param type - Primitive name compared with `typeof`.
 * @returns Guard narrowing the value to `TransformPrimitiveS<T>`.
 * @see -- type {@linkcode TransformPrimitiveS}
 */
export const isTypeFn = <T extends PrimitiveS>(type: T) => {
  return (value?: unknown): value is TransformPrimitiveS<T> => {
    return typeof value === type;
  };
};

/**
 * Builds an `instanceof` guard.
 *
 * @template T - Class or constructor used for the check.
 * @param instance - Constructor compared with `instanceof`.
 * @returns Guard narrowing the value to `T`.
 * @see -- type {@linkcode Classe}
 */
export const isInstance = <T extends Classe>(instance: T) => {
  return (value?: unknown): value is T => {
    return value instanceof instance;
  };
};
