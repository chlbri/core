import type { Fn, RecursiveArrayOf } from '#types';

/**
 * A single value of `T` or a recursively nested array of `T`.
 *
 * @template T - Type of the single value and of the array leaves.
 *
 * @see -- type {@linkcode RecursiveArrayOf}
 */
export type SingleOrRecursiveArrayOf<T> = T | RecursiveArrayOf<T>;

/**
 * Alias of type {@linkcode SingleOrRecursiveArrayOf}.
 *
 * @template T - Type of the single value and of the array leaves.
 */
export type SoRa<T> = SingleOrRecursiveArrayOf<T>;

/**
 * Primitive scalar types `string`, `number` and `boolean`.
 *
 * Excludes `null` and `undefined`, which are covered by type
 * {@linkcode Primitive}.
 */
export type Primitive2 = string | number | boolean;
/**
 * Primitive value type.
 *
 * Extends type {@linkcode Primitive2} with `undefined` and `null`.
 */
export type Primitive = Primitive2 | undefined | null;

/**
 * A single value of `T`, a mutable array of `T` or a readonly array of `T`.
 *
 * @template T - Element type of the array variants.
 */
export type SingleOrArray<T> = T | T[] | ReadonlyArray<T>;

/**
 * Alias of type {@linkcode SingleOrArray}.
 *
 * @template T - Element type of the array variants.
 */
export type SoA<T> = SingleOrArray<T>;

/**
 * Object whose every key maps to a possibly nested primitive object or an
 * array of them.
 *
 * Recursive building block of type {@linkcode PrimitiveObject}.
 */
export type PrimitiveObjectMap = { [key: Keys]: SoRa<_PrimitiveObject> };

/**
 * Primitive value or a primitive object map.
 *
 * Recursive element type accepted at each nesting level of type
 * {@linkcode PrimitiveObject}.
 */
type _PrimitiveObject = Primitive | PrimitiveObjectMap;

/**
 * Recursive primitive object.
 *
 * Accepts a primitive value, a map of primitives, or any nesting of mutable
 * and readonly arrays of those.
 */
export type PrimitiveObject = SoRa<_PrimitiveObject>;

/**
 * Extracts the members of `T` assignable to `U`.
 *
 * Type-checked variant of {@linkcode NExclude}, where `U` must be assignable
 * to `T`.
 *
 * @template T - Union type to filter.
 * @template U - Type to keep, constrained to `T`.
 */
export type NExtract<T, U extends T> = Extract<T, U>;
/**
 * Removes the members of `T` assignable to `U`.
 *
 * Type-checked variant of {@linkcode NExtract}, where `U` must be assignable
 * to `T`.
 *
 * @template T - Union type to filter.
 * @template U - Type to exclude, constrained to `T`.
 */
export type NExclude<T, U extends T> = Exclude<T, U>;

/**
 * Removes `undefined` from `T`.
 *
 * @template T - Type to narrow.
 */
export type NotUndefined<T> = Exclude<T, undefined>;

/**
 * Alias of type {@linkcode NotUndefined}.
 *
 * @template T - Type to narrow.
 */
export type Nu<T> = NotUndefined<T>;

/**
 * Widens `T` with `undefined`.
 *
 * @template T - Type to widen.
 */
export type Undefiny<T> = T | undefined;

/**
 * Alias of type {@linkcode Undefiny}.
 *
 * @template T - Type to widen.
 */
export type Un<T> = Undefiny<T>;

/**
 * Yields `A` when it extends `B`, otherwise `B`.
 *
 * @template A - Preferred type.
 * @template B - Fallback type and condition.
 */
export type Cast<A, B> = A extends B ? A : B;

/**
 * Union of all valid object key types: `string`, `number` and `symbol`.
 */
export type Keys = keyof any;

/**
 * String literal names produced by the `typeof` operator.
 *
 * Covers the primitive and structural cases returned by `typeof`, without
 * `null`, whose `typeof` result is `object`.
 */
export type TypeStrings =
  | 'string'
  | 'number'
  | 'boolean'
  | 'bigint'
  | 'symbol'
  | 'undefined'
  | 'object'
  | 'function';

/**
 * Recursive description of the expected type of every key.
 *
 * Each key maps to a `typeof` name, a predicate of type {@linkcode Checker2}
 * or a nested key map.
 */
export type KeyTypes = {
  [K in Keys]: TypeStrings | Checker2 | KeyTypes;
};

/**
 * Non-nullable form of `T`.
 *
 * Falls back to `any` when `T` is `undefined` or `null`, and to `NonNullable`
 * otherwise.
 *
 * @template T - Type to narrow.
 */
export type NonN<T> = T extends undefined | null ? any : NonNullable<T>;

/**
 * Chooses `U` when `T` may be `undefined`, `null` or `never`, otherwise keeps
 * `T`.
 *
 * @template T - Type to test.
 * @template U - Fallback type, constrained to type {@linkcode NonN} of `T`.
 */
export type Defaulted<T, U extends NonN<T>> = undefined extends T
  ? U
  : null extends T
    ? U
    : never extends T
      ? U
      : T;

/**
 * Union of the keys of every member of union `U`.
 *
 * @template U - Union type to inspect.
 */
export type UnionKeys<U> = U extends Record<infer K, any> ? K : never;

/**
 * Converts union `U` into an intersection.
 *
 * Uses contravariant inference, and leaves `boolean` unchanged since it is
 * both `true` and `false`.
 *
 * @template U - Union type to convert.
 */
export type _UnionToIntersection1<U> = boolean extends U
  ? U
  : (U extends any ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

/**
 * Builds the intersection of union `U` from its keys.
 *
 * Intersects the property types of every member for each key produced by type
 * {@linkcode UnionKeys}.
 *
 * @template U - Union type to convert.
 */
export type _UnionToIntersection2<U> = {
  [K in UnionKeys<U>]: U extends Record<K, infer T> ? T : never;
};

/**
 * Converts union `U` into an intersection.
 *
 * Combines type {@linkcode _UnionToIntersection1} and type
 * {@linkcode _UnionToIntersection2}, preserving `boolean`.
 *
 * @template U - Union type to convert.
 */
export type UnionToIntersection<U> = _UnionToIntersection2<_UnionToIntersection1<U>>;

/**
 * Applies `Omit` to every member of union `T`.
 *
 * @template T - Union type whose members are trimmed.
 * @template K - Keys to remove, constrained to all key types.
 */
export type UnionOmit<T, K extends Keys> = T extends any ? Omit<T, K> : never;

/**
 * `Omit` applied across a union, with keys constrained to the keys of `T`.
 *
 * @template T - Union type whose members are trimmed.
 * @template K - Keys to remove, constrained to the keys of `T`.
 *
 * @see -- type {@linkcode UnionOmit}
 */
export type UnionNOmit<T, K extends keyof T> = UnionOmit<T, K>;

/**
 * Extracts the last member of union `T`.
 *
 * Uses contravariant inference over thunks to order the members.
 *
 * @template T - Union type to inspect.
 */
export type LastOfUnion<T> = (
  (T extends any ? (x: () => T) => void : never) extends (x: infer I) => void
    ? I
    : never
) extends () => infer U
  ? U
  : never;

/**
 * Converts union `T` into a tuple of its members.
 *
 * Repeatedly peels the last member with type {@linkcode LastOfUnion} until the
 * union is empty, so the resulting order is implementation-defined.
 *
 * @template T - Union type to convert.
 * @template A - Accumulator tuple; leave at its default value.
 */
export type UnionToTuple<T, A extends any[] = []> = [T] extends [never]
  ? A
  : UnionToTuple<Exclude<T, LastOfUnion<T>>, [LastOfUnion<T>, ...A]>;

// #endregion

/**
 * Predicate over an unknown value.
 *
 * A type guard narrowing `unknown` to `T`.
 *
 * @template T - Type narrowed by the guard.
 */
export type Checker2<T = unknown> = (value: unknown) => value is T;
// | ((value: unknown) => boolean);

/**
 * Yields `true` when `T` and `U` are mutually assignable, otherwise `false`.
 *
 * @template T - First type to compare.
 * @template U - Second type to compare.
 */
export type Equals<T, U> = T extends U ? (U extends T ? true : false) : false;

/**
 * Class-like value exposing a `Symbol.hasInstance` method.
 *
 * Matches anything usable on the right-hand side of `instanceof`.
 */
export type Classe = { [Symbol.hasInstance]: Fn<any, boolean> };

/**
 * Nominal marker type used as a sentinel by type-level tuple helpers.
 *
 * The constructor is private and the class carries a unique
 * {@linkcode UndefinedHelper.__NO_TYPE__} property, so it describes a type no
 * real value can satisfy.
 */
export class UndefinedHelper {
  /**
   * Sentinel string identifying the marker.
   *
   * Its unique literal type makes {@linkcode UndefinedHelper} distinct from
   * every other class.
   */
  readonly __NO_TYPE__ = '@bemedev/addons/NO_TYPE';
  /**
   * Prevents instantiation, so the class is only usable as a nominal marker
   * type.
   */
  private constructor() {}
}
