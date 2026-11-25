/**
 * Identity function usable as a typed placeholder.
 *
 * Returns the argument unchanged at runtime, while letting the caller choose the
 * exposed return type `R`.
 *
 * @template T - Type of the input value.
 * @template R - Type exposed for the returned value.
 * @param a - Value to return unchanged.
 * @returns The input value, typed as `R`.
 */
export const identity = <T, R = T>(a: T): R => a as any;
