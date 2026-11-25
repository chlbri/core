import type { AnyArray } from '#types';
import type { ENGLISH_LETTERS } from './constants';

/**
 * Union of the values that can be interpolated into a template literal type.
 *
 * Includes the primitives `string`, `number`, `bigint` and `boolean`, plus
 * `null` and `undefined`, so that any value accepted by string interpolation
 * is covered. Used as the element type of {@linkcode ArrayS} and as the
 * separator constraint of {@linkcode JoinString}.
 */
export type PossibleString = string | number | bigint | boolean | null | undefined;

/**
 * Array of values accepted by string interpolation.
 *
 * Matches both mutable and readonly arrays whose elements are of type
 * {@linkcode PossibleString}. Serves as the tuple constraint of
 * {@linkcode JoinString}.
 */
export type ArrayS = AnyArray<PossibleString>;

/**
 * Union of the lowercase English letters `a` through `z`.
 *
 * Derived from the {@linkcode ENGLISH_LETTERS} tuple.
 */
export type LowerLetters = (typeof ENGLISH_LETTERS)[number];

/**
 * Union of the uppercase English letters `A` through `Z`.
 *
 * Computed by uppercasing type {@linkcode LowerLetters}.
 */
export type UpperLetters = Uppercase<LowerLetters>;

/**
 * Union of the English letters, in both lowercase and uppercase forms.
 *
 * Combines type {@linkcode UpperLetters} with type {@linkcode LowerLetters}.
 */
export type Letters = UpperLetters | LowerLetters;

/**
 * Template-literal type describing the shape of an email address.
 *
 * Accepts any string containing an `@` followed later by a `.`, such as
 * `user@example.com`; no further validation is applied at the type level.
 */
export type Email = `${string}@${string}.${string}`;

/**
 * Concatenates a tuple of string values, separated by `sep`.
 *
 * An empty tuple yields the empty string, a one-element tuple yields that
 * element alone, and any longer tuple is joined recursively. When `T` is a
 * generic array rather than a tuple, the result falls back to `string`.
 *
 * @template | {@linkcode ArrayS} `T` - Tuple or array of values to join.
 * @template | {@linkcode PossibleString} `sep` - Separator, defaults to `' '`.
 */
export type JoinString<
  T extends ArrayS,
  sep extends PossibleString = ' ',
> = T extends []
  ? ''
  : T extends [PossibleString]
    ? `${T[0]}`
    : T extends [PossibleString, ...infer U extends ArrayS]
      ? `${T[0]}${sep}${JoinString<U, sep>}`
      : string;

/**
 * Wraps the string form of `T` between `Before` and `After`.
 *
 * `T` is intersected with `string`, so non-string values are still accepted
 * and stringified. `Before` and `After` default to the empty string.
 *
 * @template T - Value whose string form is wrapped.
 * @template Before - Prefix prepended to the value, defaulting to `''`.
 * @template After - Suffix appended to the value, defaulting to `''`.
 */
export type AddString<
  T,
  Before extends string = '',
  After extends string = '',
> = `${Before}${T & string}${After}`;

/**
 * Tests at the type level whether `S` ends with `E`.
 *
 * Resolves to an object whose `response` flag states the result. On a match,
 * `prev` holds the part of `S` preceding the suffix; otherwise `prev` is `S`
 * itself. `full` always contains `S` unchanged.
 *
 * @template S - String literal to inspect.
 * @template E - Expected suffix.
 */
export type StringEndWith<
  S extends string,
  E extends string,
> = S extends `${infer Prev}${E}`
  ? { response: true; full: S; prev: Prev }
  : { response: false; full: S; prev: S };

/**
 * Tests at the type level whether `S` starts with `E`.
 *
 * Resolves to an object whose `response` flag states the result. On a match,
 * `next` holds the part of `S` following the prefix; otherwise `next` is `S`
 * itself. `full` always contains `S` unchanged.
 *
 * @template S - String literal to inspect.
 * @template E - Expected prefix.
 */
export type StringStartWith<
  S extends string,
  E extends string,
> = S extends `${E}${infer Next}`
  ? { response: true; full: S; next: Next }
  : { response: false; full: S; next: S };

/**
 * Tests at the type level whether `S` contains `E`.
 *
 * Resolves to an object whose `response` flag states the result. On a match,
 * `prev` and `next` hold the parts of `S` surrounding the matched occurrence
 * of `E`; otherwise they fall back to `string`. `full` always contains `S`
 * unchanged.
 *
 * @template S - String literal to inspect.
 * @template E - Substring to look for.
 */
export type StringContains<
  S extends string,
  E extends string,
> = S extends `${infer Prev}${E}${infer Next}`
  ? { response: true; full: S; prev: Prev; next: Next }
  : { response: false; full: S; prev: string; next: string };

/**
 * Splits the string literal `S` on every occurrence of `By`.
 *
 * A generic `string` yields `string[]`, an empty string yields the empty
 * tuple, and any other literal is split recursively into a tuple of its
 * parts. `By` defaults to `.`.
 *
 * @template S - String literal to split.
 * @template By - Separator used to split the string, defaulting to `.`.
 *
 * @see {@link https://stackoverflow.com/a/70831818/11704485 | Matthieu Riegler}
 */
export type SplitStringBy<
  S extends string,
  By extends string = '.',
> = string extends S
  ? string[]
  : S extends ''
    ? []
    : S extends `${infer T}${By}${infer U}`
      ? [T, ...SplitStringBy<U, By>]
      : [S];

/**
 * Keeps only the string members of the union `T`.
 *
 * Equivalent to `Extract<T, string>`.
 *
 * @template T - Union to filter.
 */
export type ExtractS<T> = Extract<T, string>;

/**
 * Computes the length of the string literal `T` as a numeric literal type.
 *
 * Consumes the string one character at a time, growing the `Counter` tuple, so
 * the final length is read from `Counter['length']`.
 *
 * @template T - String literal whose length is measured.
 * @template Counter - Accumulator tuple; not meant to be supplied directly.
 */
export type StringLength<
  T extends string,
  Counter extends number[] = [],
> = T extends `${string}${infer Tail}`
  ? StringLength<Tail, [...Counter, 0]>
  : Counter['length'];

/**
 * Compares two non-negative integer types at the type level.
 *
 * Resolves to `0` when `First` and `Second` are equal, to `-1` when `First` is
 * smaller and to `1` when `First` is greater. Comparison is performed by
 * growing the `Counter` tuple alongside both operands.
 *
 * @template First - Left operand of the comparison.
 * @template Second - Right operand of the comparison.
 * @template Counter - Accumulator tuple; not meant to be supplied directly.
 */
export type StringCompare<
  First extends number,
  Second extends number,
  Counter extends number[] = [],
> = First extends Second
  ? 0
  : Counter['length'] extends First
    ? -1
    : Counter['length'] extends Second
      ? 1
      : StringCompare<First, Second, [...Counter, 0]>;

/**
 * Compares the lengths of two string literals at the type level.
 *
 * Delegates to {@linkcode StringCompare} using the values produced by
 * {@linkcode StringLength}, yielding `0`, `-1` or `1`.
 *
 * @template First - Left string literal.
 * @template Second - Right string literal.
 */
export type StringCompareWith<
  First extends string,
  Second extends string,
> = StringCompare<StringLength<First>, StringLength<Second>>;

/**
 * Keeps `T` when its length is exactly `Exact`, otherwise resolves to `never`.
 *
 * @template Exact - Required string length.
 * @template T - String literal to check.
 */
export type ExactLength<Exact extends number, T extends string> =
  StringCompare<StringLength<T>, Exact> extends 0 ? T : never;

/**
 * Keeps `T` when its length is strictly less than `Max`, otherwise resolves to
 * `never`.
 *
 * @template Max - Exclusive maximum length.
 * @template T - String literal to check.
 */
export type MaxLength<Max extends number, T extends string> =
  StringCompare<StringLength<T>, Max> extends -1 ? T : never;

/**
 * Keeps `T` when its length is less than or equal to `Max`, otherwise resolves
 * to `never`.
 *
 * @template Max - Inclusive maximum length.
 * @template T - String literal to check.
 *
 * @see -- type {@linkcode MaxLength}
 */
export type MaxOrEqualLength<Max extends number, T extends string> =
  | MaxLength<Max, T>
  | ExactLength<Max, T>;

/**
 * Keeps `T` when its length is strictly greater than `Min`, otherwise resolves
 * to `never`.
 *
 * @template Min - Exclusive minimum length.
 * @template T - String literal to check.
 */
export type MinLength<Min extends number, T extends string> =
  StringCompare<StringLength<T>, Min> extends 1 ? T : never;

/**
 * Keeps `T` when its length is greater than or equal to `Min`, otherwise
 * resolves to `never`.
 *
 * @template Min - Inclusive minimum length.
 * @template T - String literal to check.
 *
 * @see -- type {@linkcode MinLength}
 */
export type MinOrEqualLength<Min extends number, T extends string> =
  | MinLength<Min, T>
  | ExactLength<Min, T>;

/**
 * Keeps `T` when its length lies strictly between `Min` and `Max`.
 *
 * Intersects the exclusive lower bound of {@linkcode MinLength} with the
 * exclusive upper bound of {@linkcode MaxLength}, so both limits are excluded.
 *
 * @template Min - Exclusive minimum length.
 * @template Max - Exclusive maximum length.
 * @template T - String literal to check.
 */
export type InRangeExclusive<
  Min extends number,
  Max extends number,
  T extends string,
> = MinLength<Min, T> & MaxLength<Max, T>;

/**
 * Keeps `T` when its length lies between `Min` and `Max`, both included.
 *
 * Intersects the inclusive lower bound of {@linkcode MinOrEqualLength} with the
 * inclusive upper bound of {@linkcode MaxOrEqualLength}.
 *
 * @template Min - Inclusive minimum length.
 * @template Max - Inclusive maximum length.
 * @template T - String literal to check.
 */
export type InRangeInclusive<
  Min extends number,
  Max extends number,
  T extends string,
> = MinOrEqualLength<Min, T> & MaxOrEqualLength<Max, T>;
