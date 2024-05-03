import { Booleans, Objects, Pipe, Unions } from 'hotscript';
import { AddString } from './strings';

export type NExtract<T, U extends T> = Extract<T, U>;
export type NExclude<T, U extends T> = Exclude<T, U>;
export type NOmit<T, K extends keyof T> = Omit<T, K>;

export type Primitive = string | number | boolean | undefined | null;

export type DeepReadonly<T> = Pipe<T, [Objects.ReadonlyDeep]>;

export type DeepPartial<T> = Pipe<T, [Objects.PartialDeep]>;

// #region SubType

export type SubType<Base, Condition> = Pipe<
  Base,
  [Objects.PickBy<Booleans.Equals<Condition>>]
>;
// #endregion

// #region NotSubType
type NotFilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? never : Key;
};

type NotAllowedNames<Base, Condition> = NotFilterFlags<
  Base,
  Condition
>[keyof Base];

export type NotSubType<Base, Condition> = Pipe<
  Base,
  [Objects.PickBy<Booleans.NotEqual<Condition>>]
>;
// #endregion

export type OnPropChangedMethods<T, I extends keyof T = keyof T> = T & {
  [K in Extract<NotAllowedNames<T, (...args: any) => any>, I> &
    string as AddString<Capitalize<K>, 'on', 'Changed'>]: (
    cb: (newValue: T[K]) => void,
  ) => void;
};

export type Undefiny<T> = NotSubType<T, undefined> &
  Partial<SubType<T, undefined>>;

export type Nullify<T> = NotSubType<T, null> & Partial<SubType<T, null>>;

export type Unionize<T extends Record<string, any>> = Pipe<
  T,
  [Objects.Entries, Unions.Map<Objects.FromEntries>]
>;

// #region StringKeys

export type StringKeys<T extends Record<string, any>> = Pipe<
  T,
  [Objects.AllPaths]
>;
// #endregion

export type StringKeyAndValues<T extends Record<string, any>> = Pipe<
  T,
  [Objects.Entries]
>;

export type UnionToIntersection<U> = Pipe<U, [Unions.ToIntersection]>;
