import type { AnyArray } from "#types";
import type { ENGLISH_LETTERS } from "./constants";

export type PossibleString =
  | string
  | number
  | bigint
  | boolean
  | null
  | undefined;

export type ArrayS = AnyArray<PossibleString>;

export type LowerLetters = (typeof ENGLISH_LETTERS)[number];
export type UpperLetters = Uppercase<LowerLetters>;
export type Letters = UpperLetters | LowerLetters;
export type Email = `${string}@${string}.${string}`;

export type JoinString<
  T extends ArrayS,
  sep extends PossibleString = " ",
> = T extends []
  ? ""
  : T extends [PossibleString]
    ? `${T[0]}`
    : T extends [PossibleString, ...infer U extends ArrayS]
      ? `${T[0]}${sep}${JoinString<U, sep>}`
      : string;

export type AddString<
  T,
  Before extends string = "",
  After extends string = "",
> = `${Before}${T & string}${After}`;

export type StringEndWith<
  S extends string,
  E extends string,
> = S extends `${infer Prev}${E}`
  ? { response: true; full: S; prev: Prev }
  : { response: false; full: S; prev: S };

export type StringStartWith<
  S extends string,
  E extends string,
> = S extends `${E}${infer Next}`
  ? { response: true; full: S; next: Next }
  : { response: false; full: S; next: S };

export type StringContains<
  S extends string,
  E extends string,
> = S extends `${infer Prev}${E}${infer Next}`
  ? { response: true; full: S; prev: Prev; next: Next }
  : { response: false; full: S; prev: string; next: string };

/**
 * Credit to {@link https://stackoverflow.com/a/70831818/11704485 | Matthieu Riegler}
 */
export type SplitStringBy<
  S extends string,
  By extends string = ".",
> = string extends S
  ? string[]
  : S extends ""
    ? []
    : S extends `${infer T}${By}${infer U}`
      ? [T, ...SplitStringBy<U, By>]
      : [S];

export type ExtractS<T> = Extract<T, string>;

export type StringLength<
  T extends string,
  Counter extends number[] = [],
> = T extends `${string}${infer Tail}`
  ? StringLength<Tail, [...Counter, 0]>
  : Counter["length"];

export type StringCompare<
  First extends number,
  Second extends number,
  Counter extends number[] = [],
> = First extends Second
  ? 0
  : Counter["length"] extends First
    ? -1
    : Counter["length"] extends Second
      ? 1
      : StringCompare<First, Second, [...Counter, 0]>;

export type StringCompareWith<
  First extends string,
  Second extends string,
> = StringCompare<StringLength<First>, StringLength<Second>>;

export type ExactLength<Exact extends number, T extends string> =
  StringCompare<StringLength<T>, Exact> extends 0 ? T : never;

export type MaxLength<Max extends number, T extends string> =
  StringCompare<StringLength<T>, Max> extends -1 ? T : never;

export type MaxOrEqualLength<Max extends number, T extends string> =
  | MaxLength<Max, T>
  | ExactLength<Max, T>;

export type MinLength<Min extends number, T extends string> =
  StringCompare<StringLength<T>, Min> extends 1 ? T : never;

export type MinOrEqualLength<Min extends number, T extends string> =
  | MinLength<Min, T>
  | ExactLength<Min, T>;

export type InRangeExclusive<
  Min extends number,
  Max extends number,
  T extends string,
> = MinLength<Min, T> & MaxLength<Max, T>;

export type InRangeInclusive<
  Min extends number,
  Max extends number,
  T extends string,
> = MinOrEqualLength<Min, T> & MaxOrEqualLength<Max, T>;
