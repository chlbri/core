import type { UnionOmit, UnionToTuple } from '#types';

/**
 * Union of the valid indexes of a tuple type.
 *
 * Recursively grows the accumulator `S` until its length equals
 * `T['length']`, then returns `S[number]`. An empty tuple yields `never`.
 * Intended for tuple types: a non-tuple array has a `number` length, so the
 * termination test can never succeed.
 *
 * @template T - Tuple type whose indexes are computed.
 * @template S - Internal accumulator; leave at its default value.
 *
 * @see -- type {@linkcode Permutations}
 */
export type IndexesOfArray<
  T extends readonly unknown[],
  S extends number[] = [],
> = T['length'] extends S['length']
  ? S[number]
  : IndexesOfArray<T, [S['length'], ...S]>;

/**
 * Builds a tuple with `N` copies of `T`.
 *
 * Recursion helper of type {@linkcode TupleOf}: grows the accumulator `R`
 * until its length equals `N`, which must be a numeric literal for the
 * recursion to terminate.
 *
 * @template T - Element type repeated in the tuple.
 * @template N - Number of repetitions.
 * @template R - Internal accumulator; leave at its default value.
 */
type _TupleOf<T, N extends number, R extends unknown[] = []> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [...R, T]>;

/**
 * Builds a fixed-length tuple type from an element type and a length.
 *
 * When `N` is a numeric literal, produces a tuple of exactly `N` elements of
 * type `T`; when `N` is the broad `number` type (the default), falls back to
 * the mutable array `T[]`. Distributes over the members of the union `N`.
 *
 * @template T - Element type of the tuple.
 * @template N - Requested length, either a numeric literal or `number`.
 *
 * @example
 * ```ts
 * type Fixed = TupleOf<string, 3>; // [string, string, string]
 * type Wide = TupleOf<string>; // string[]
 * ```
 *
 * @see -- type {@linkcode _TupleOf}
 */
export type TupleOf<T = any, N extends number = number> = N extends N
  ? number extends N
    ? T[]
    : [..._TupleOf<T, N>]
  : never;

/**
 * Reverses the order of the elements of a tuple type.
 *
 * Recursively moves the head of the tuple to the end of the result. Types that
 * do not match the mutable `[infer Head, ...infer Tail]` pattern, such as
 * arrays and readonly tuples, are returned unchanged.
 *
 * @template T - Tuple type to reverse.
 */
export type ReverseArray<T extends RuA> = T extends any
  ? T extends []
    ? T
    : T extends [infer Head, ...infer Tail]
      ? [...ReverseArray<Tail>, Head]
      : T
  : never;

/**
 * Any readonly array type.
 *
 * Equivalent to `readonly unknown[]`, it accepts tuples as well as readonly
 * arrays of any element type, and serves as the base constraint of the tuple
 * helpers.
 *
 * @see -- type {@linkcode AnyArray}
 */
export type RuA = readonly unknown[];

/**
 * Union of the mutable and readonly array forms of `T`.
 *
 * Matches `T[]` as well as `ReadonlyArray<T>`; the element type defaults to
 * `unknown`.
 *
 * @template T - Element type of the arrays.
 */
export type AnyArray<T = unknown> = ReadonlyArray<T> | T[];

/**
 * Union of the object element types of `T` with the keys `K` removed.
 *
 * Applies type {@linkcode UnionOmit} to `T[number]` and keeps only the object
 * results, discarding primitives. Intermediate step of type
 * {@linkcode NArrayOmit}.
 *
 * @template T - Readonly array whose element types are omitted from.
 * @template K - Keys to remove; defaults to no key.
 */
export type _NArrayOmit<
  T extends readonly object[],
  K extends keyof T[number] = never,
> = Extract<UnionOmit<T[number], K>, object>;

/**
 * Distributes `Omit` over the element types of an array and returns the result
 * as a tuple.
 *
 * Each object member of `T[number]` is first omitted of `K` by
 * {@linkcode UnionOmit}, non-object members are dropped, and the resulting
 * union is converted to a tuple by {@linkcode UnionToTuple}.
 *
 * @template T - Readonly array whose element types are omitted from.
 * @template K - Keys to remove; defaults to no key.
 *
 * @example
 * ```ts
 * type T = NArrayOmit<[{ a: 1; b: 2 }, { a: 3; c: 4 }], 'a'>;
 * // [{ b: 2 }, { c: 4 }], in the union's internal order
 * ```
 */
export type NArrayOmit<
  T extends readonly object[],
  K extends keyof T[number] = never,
> = _NArrayOmit<T, K> extends infer N extends object ? UnionToTuple<N> : never;

/**
 * Keeps, as a tuple type, the elements of `T` that are assignable to `U`.
 *
 * Walks the tuple head by head, retaining each element that extends `U` and
 * dropping the others. Arrays that are not tuples match no pattern and
 * produce the empty tuple `[]`.
 *
 * @template T - Array or tuple type to filter.
 * @template U - Type the retained elements must be assignable to.
 *
 * @see -- type {@linkcode ExcludeArray}
 */
export type ExtractArray<T extends AnyArray, U> = T extends readonly [
  infer A,
  ...infer B,
]
  ? A extends U
    ? [A, ...ExtractArray<B, U>]
    : [...ExtractArray<B, U>]
  : [];

/**
 * Removes, from a tuple type, the elements of `T` that are assignable to `U`.
 *
 * Walks the tuple head by head, dropping each element that extends `U` and
 * keeping the others. Arrays that are not tuples match no pattern and produce
 * the empty tuple `[]`.
 *
 * @template T - Array or tuple type to filter.
 * @template U - Type that the removed elements must be assignable to.
 */
export type ExcludeArray<T extends AnyArray, U> = T extends readonly [
  infer A,
  ...infer B,
]
  ? A extends U
    ? ExcludeArray<B, U>
    : [A, ...ExcludeArray<B, U>]
  : [];

/**
 * Extracts the element type of an array type.
 *
 * Resolves to `T[number]` when `T` is an array or tuple, and to `T` itself
 * otherwise, acting as an identity on non-array types.
 *
 * @template T - Type to reduce.
 *
 * @see -- type {@linkcode ReduceArrayS}
 */
export type ReduceArray<T> = T extends AnyArray ? T[number] : T;
/**
 * Extracts the first element type of an array type.
 *
 * Resolves to `T[0]` when `T` is an array or tuple, and to `T` itself
 * otherwise.
 *
 * @template T - Type to reduce.
 */
export type ReduceArrayS<T> = T extends AnyArray ? T[0] : T;

/**
 * Recursively unwraps nested array types.
 *
 * Applies {@linkcode ReduceArray} until the result is no longer an array, so
 * `number[][][]` reduces to `number`.
 *
 * @template T - Type to reduce.
 */
export type ReduceDeepArray<T> =
  ReduceArray<T> extends AnyArray ? ReduceDeepArray<ReduceArray<T>> : ReduceArray<T>;

/**
 * Wraps a type in an array unless it already is one.
 *
 * Returns `T` unchanged when it already is an array or tuple, otherwise
 * returns type {@linkcode AnyArray} of `T`.
 *
 * @template T - Type to wrap.
 */
export type ToArray<T> = T extends AnyArray ? T : AnyArray<T>;

/**
 * Array type whose elements may themselves be arrays, to any depth.
 *
 * Each level accepts both mutable arrays and readonly arrays of `T` or of a
 * deeper recursive array, so nested arrays of `T` are accepted without a fixed
 * depth.
 *
 * @template T - Leaf element type.
 *
 * @see -- type {@linkcode _SingleOrRecursiveArrayOf}
 */
export type RecursiveArrayOf<T> =
  | Array<_SingleOrRecursiveArrayOf<T>>
  | ReadonlyArray<_SingleOrRecursiveArrayOf<T>>;

/**
 * Either `T` or a recursive array of `T`.
 *
 * Helper of type {@linkcode RecursiveArrayOf}, describing the element type
 * accepted at each nesting level.
 *
 * @template T - Leaf element type.
 */
type _SingleOrRecursiveArrayOf<T> = T | RecursiveArrayOf<T>;

/**
 * Union of all the orderings of a tuple type.
 *
 * Picks each index `I` of `T` in turn, removes every occurrence of the picked
 * value with {@linkcode ExcludeArray}, and recursively permutes the rest. An
 * empty tuple yields `[]` and a single-element tuple yields a one-element
 * tuple. Repeated values collapse: removing by value discards all the
 * occurrences, so equal elements are not permuted among themselves.
 *
 * @template T - Tuple type to permute.
 * @template I - Internal union of indexes; leave at its default value.
 */
export type Permutations<
  T extends RuA,
  I extends IndexesOfArray<T> = IndexesOfArray<T>,
> = T extends any
  ? I extends I
    ? T['length'] extends 0
      ? []
      : T['length'] extends 1
        ? [T[I]]
        : [
            T[I],
            ...Permutations<
              ExcludeArray<T, T[I]>,
              IndexesOfArray<ExcludeArray<T, T[I]>>
            >,
          ]
    : never
  : never;
