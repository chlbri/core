import type { Fn } from '#types';
import type { Keys, NotUndefined, Primitive } from '../common/types';
import { AddString } from '../strings/types';

/**
 * Object type that excludes iterable and `SymbolConstructor` properties.
 *
 * Blocks both `Symbol.iterator` and the symbol constructor, so values of this
 * type cannot be spread or iterated, which is how plain objects are expressed.
 *
 * @see -- type {@linkcode Ru}
 */
export type TrueObject = Ru & {
  [Symbol.iterator]?: never;
  //@ts-expect-error - 'SymbolConstructor' does not exist on type 'object'
  [SymbolConstructor]?: never;
};

/**
 * Alias of type {@linkcode TrueObject}.
 */
export type To = TrueObject;

/**
 * Omit of the given keys `K`, constrained to the keys of `T`.
 *
 * @template T - Source object type.
 * @template K - Keys to remove.
 */
export type NOmit<T, K extends keyof T> = Omit<T, K>;

/**
 * Recursively removes the key `K` from `T` and from its nested objects.
 *
 * Function properties are kept untouched, and so are primitives.
 *
 * @template T - Source type.
 * @template K - Key to remove at every level.
 */
export type DeepOmit<T, K extends Keys> = {
  [P in Exclude<keyof T, K>]: T[P] extends Fn
    ? T[P]
    : T[P] extends object
      ? DeepOmit<T[P], K>
      : T[P];
};

/**
 * Record type with its keys and values swapped.
 *
 * Each value of `T` becomes a key of the result, mapping back to the key that
 * held it.
 *
 * @template T - Record whose keys and values are both key types.
 */
export type ReverseMap<T extends Record<Keys, Keys>> = {
  [K in keyof T as T[K]]: K;
};

/**
 * Recursively marks every property of `T` as `readonly`.
 *
 * Primitives and function properties are left unchanged.
 *
 * @template T - Type to freeze at the type level.
 */
export type DeepReadonly<T> = T extends Primitive
  ? T
  : {
      readonly [P in keyof T]: T[P] extends Fn
        ? T[P]
        : T[P] extends object
          ? DeepReadonly<T[P]>
          : T[P];
    };

/**
 * Recursively makes every property of `T` optional.
 *
 * Primitives and function properties are left unchanged.
 *
 * @template T - Type to make deeply partial.
 */
export type DeepPartial<T> = T extends Primitive
  ? T
  : {
      [P in keyof T]?: T[P] extends Fn
        ? T[P]
        : T[P] extends object
          ? DeepPartial<T[P]>
          : T[P];
    };

/**
 * Recursively makes every property of `T` required and removes `undefined`.
 *
 * Primitives and function properties are left unchanged.
 *
 * @template T - Type to make deeply required.
 */
export type DeepRequired<T extends object | undefined> = NotUndefined<{
  [P in keyof T]-?: T[P] extends Fn
    ? T[P]
    : T[P] extends object
      ? DeepRequired<T[P]>
      : T[P];
}>;

/**
 * Removes the `readonly` modifier from the properties of `T`.
 *
 * Only the first level is affected; nested objects keep their modifiers.
 *
 * @template T - Type to unfreeze.
 */
export type NotReadonly<T> = {
  -readonly [P in keyof T]: T[P];
};

/**
 * Recursively removes the `readonly` modifier from `T` and its nested objects.
 *
 * Primitives and function properties are left unchanged.
 *
 * @template T - Object type to unfreeze deeply.
 */
export type DeepNotReadonly<T extends object> = {
  -readonly [P in keyof T]: T[P] extends Fn
    ? T[P]
    : T[P] extends object
      ? DeepNotReadonly<T[P]>
      : T[P];
};

/**
 * Union of the property types of `T` that are assignable to `U`.
 *
 * @template T - Object type to read the values from.
 * @template U - Filter applied to the property types.
 */
export type ValuesOf<T, U = any> = Extract<T[keyof T], U>;

/**
 * Union of the object-valued property types of `T`, excluding arrays.
 *
 * @template T - Object type to read the values from.
 */
export type ObjectValuesOf<T> = Exclude<Extract<ValuesOf<T>, object>, Array<any>>;

/**
 * Rebuilds `T` as a plain mapped type.
 *
 * Every property keeps its own type and modifiers; the result is structurally
 * identical to `T`.
 *
 * @template T - Object type to rebuild.
 */
export type ExpressO<T extends object> = {
  [K in keyof T]: T[K];
};

/**
 * Recursively rebuilds `T` through type {@linkcode ExpressO}.
 *
 * Object properties are rebuilt the same way at every nesting level.
 *
 * @template T - Object type to rebuild deeply.
 */
export type DeepExpressO<T extends object> =
  ExpressO<T> extends infer P1
    ? {
        [K in keyof P1]: P1[K] extends object ? DeepExpressO<P1[K]> : P1[K];
      }
    : never;

/**
 * Low-level worker behind type {@linkcode RequiredLow}.
 *
 * Makes the properties of `T` that admit `undefined` required while keeping
 * `undefined` in their types, and leaves the other properties untouched.
 *
 * @template T - Object type to process.
 */
type _RequiredLow<T extends object> =
  Required<SubTypeLow<T, undefined>> extends infer P
    ? {
        [K in keyof P]: P[K] | undefined;
      } & NotSubTypeLow<T, undefined>
    : never;

/**
 * Makes every key of `T` required while preserving `undefined`.
 *
 * The properties that already admitted `undefined` still accept it, the others
 * keep their original type.
 *
 * @template T - Object type to process.
 */
export type RequiredLow<T extends object> = ExpressO<_RequiredLow<T>>;

/**
 * Recursively applies type {@linkcode RequiredLow} to `T` and its nested
 * objects.
 *
 * @template T - Object type to process deeply.
 */
export type DeepRequiredLow<T extends object> =
  RequiredLow<T> extends infer P1
    ? {
        [K1 in keyof P1]: Exclude<P1[K1], undefined> extends infer P2 extends object
          ? DeepRequiredLow<P2>
          : P1[K1];
      }
    : never;

/**
 * Makes the properties `K` of `T` required and keeps the others unchanged.
 *
 * @template T - Source object type.
 * @template K - Keys that become required.
 */
export type Require<T, K extends keyof T> = NOmit<T, K> & Required<Pick<T, K>>;

/**
 * Makes the properties of `T` assignable to `U` required.
 *
 * Properties whose type does not extend `U` are kept with their original
 * modifiers.
 *
 * @template T - Source object type.
 * @template U - Type that selects the properties to require.
 */
export type RequiredBy<T, U> = Required<PickBy<T, U>> & PickNotBy<T, U>;

/**
 * Resolves to the type of the property `K` when it exists on `T`.
 *
 * @template T - Object type to read from.
 * @template K - Key to look up.
 * @returns The property type, or `never` when `K` is not a key of `T`.
 */
export type Prop<T, K> = K extends keyof T ? T[K] : never;

/**
 * Picks the properties of `T` whose keys also belong to `S`.
 *
 * @template T - Source object type.
 * @template S - Candidate keys.
 */
export type PickNoInfer<T, S> = Pick<T, Extract<keyof T, S>>;

/**
 * Sub-object of `T` holding only the properties whose type extends `U`.
 *
 * @template T - Source object type.
 * @template U - Type that selects the properties to keep.
 */
export type PickBy<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: Extract<T[P], U>;
};

/**
 * Union of the keys selected by type {@linkcode PickBy}.
 *
 * @template T - Source object type.
 * @template U - Type that selects the keys.
 */
export type PickKeysBy<T, U> = keyof PickBy<T, U>;

/**
 * Sub-object of `T` holding only the properties whose type does not extend `U`.
 *
 * @template T - Source object type.
 * @template U - Type that selects the properties to drop.
 */
export type PickNotBy<T, U> = {
  [P in keyof T as T[P] extends U ? never : P]: Exclude<T[P], U>;
};

/**
 * Union of the keys selected by type {@linkcode PickNotBy}.
 *
 * @template T - Source object type.
 * @template U - Type that excludes the keys.
 */
export type PickKeysNotBy<T, U> = keyof PickNotBy<T, U>;

/**
 * Augments `T` with an `On<Prop>Changed` method for each function property.
 *
 * Each generated method accepts a callback receiving the new value, typed with
 * the property type.
 *
 * @template T - Object type to augment.
 * @template I - Keys of `T` whose functions receive a handler; defaults to all
 * keys.
 */
export type OnPropChangedMethods<T, I extends keyof T = keyof T> = T & {
  [
    K in Extract<PickKeysBy<T, (...args: any) => any>, I> & string as AddString<
      Capitalize<K>,
      'on',
      'Changed'
    >
  ]: (cb: (newValue: T[K]) => void) => void;
};

/**
 * Makes the properties of `T` that admit `undefined` optional.
 *
 * Properties whose type does not include `undefined` stay required.
 *
 * @template T - Source object type.
 */
export type PartialUndefiny<T> = PickNotBy<T, undefined> &
  Partial<PickBy<T, undefined>>;

/**
 * Makes the properties of `T` that admit `null` optional.
 *
 * Properties whose type does not include `null` stay required.
 *
 * @template T - Source object type.
 */
export type Nullify<T> = PickNotBy<T, null> & Partial<PickBy<T, null>>;

/**
 * Recursive worker that drops the key `O` at every level.
 *
 * Descends into properties whose own key set still includes `O`.
 *
 * @template T - Type currently being processed.
 * @template O - Key to drop.
 */
type _OmitWithoutPartial<T, O extends string> = {
  [key in keyof Omit<T, O>]: O extends keyof T[key]
    ? _OmitWithoutPartial<T[key], O>
    : T[key];
};

/**
 * Wraps {@linkcode _OmitWithoutPartial} so that nullish properties become
 * optional.
 *
 * Properties admitting `null` or `undefined` lose their required status after
 * the recursive omission.
 *
 * @template T - Type to process.
 * @template O - Key to drop.
 */
type _OmitWithPartial<T, O extends string> = PartialUndefiny<
  Nullify<_OmitWithoutPartial<T, O>>
>;

/**
 * Recursively drops the key `O` from `T` and its nested objects.
 *
 * Properties that admit `null` or `undefined` become optional at every level.
 *
 * @template T - Source type.
 * @template O - Key to drop.
 */
export type OmitRecursive<T, O extends string> = {
  [key in keyof _OmitWithPartial<T, O>]: _OmitWithPartial<T[key], O>;
};

/**
 * Turns a record into the union of its single-key records.
 *
 * @template T - Record to unionize.
 */
export type Unionize<T extends Record<string, any>> = {
  [P in keyof T]: { [Q in P]: T[P] };
}[keyof T];

/**
 * Local helper keeping or dropping the `_omit` keys of `T`.
 *
 * Returns `T` untouched when `_withChildren` is `true`, otherwise omits the keys
 * `_omit`.
 *
 * @template T - Type to process.
 * @template _omit - Keys to omit.
 * @template _withChildren - Whether the omitted keys are kept.
 */
type WithChildren<
  T,
  _omit extends string,
  _withChildren extends boolean = false,
> = _withChildren extends true ? T : Omit<T, _omit>;

/**
 * Local helper falling back to a default key.
 *
 * Returns `D` when the accumulated key `S` is the empty string, otherwise `S`.
 *
 * @template S - Accumulated key path.
 * @template D - Delimiter used as the fallback key.
 */
type DefaultK<S extends string, D extends string> = S extends '' ? D : S;

// #region type _FlatMapByKey
/**
 * Flattens the nested object reachable through the property `_omit` into a
 * record keyed by delimited key paths.
 *
 * Every level of the hierarchy is mapped to a record whose key is the
 * accumulated path, and recursion continues into the nested object.
 *
 * @template T - Type currently being flattened.
 * @template _omit - Property holding the nested object to walk.
 * @template _withChildren - Whether the `_omit` property is kept in the output.
 * @template Delimiter - Separator inserted between key path segments.
 * @template Keys - Accumulated key path; leave at its default value.
 * @template K - Key currently being explored; leave at its default value.
 */
export type _FlatMapByKey<
  T extends object,
  _omit extends PickKeysBy<T, object>,
  _withChildren extends boolean = false,
  Delimiter extends string = '.',
  Keys extends string = '',
  K extends string = keyof T[_omit] & string,
> = T extends {
  [Key in _omit]?: any;
}
  ? K extends keyof T[_omit]
    ? T[_omit][K] extends infer TK extends object
      ? | _FlatMapByKey<
            TK,
            _omit,
            _withChildren,
            Delimiter,
            `${Keys}${Delimiter}${K}`
          >
        | {
            [key in DefaultK<Keys, Delimiter>]: WithChildren<
              T,
              _omit,
              _withChildren
            >;
          }
      : {
          [key in DefaultK<Keys, Delimiter>]: WithChildren<T, _omit, _withChildren>;
        }
    : never
  : {
      [key in DefaultK<Keys, Delimiter>]: WithChildren<T, _omit, _withChildren>;
    };

// #region SubTypes
/**
 * Maps each key of `Base` to itself when its value extends `Condition`.
 *
 * Keys that do not match are mapped to `never`.
 *
 * @template Base - Object type to filter.
 * @template Condition - Type the property values are checked against.
 */
type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};

/**
 * Complement of type {@linkcode FilterFlags}.
 *
 * Maps each key of `Base` to itself when its value does not extend `Condition`.
 *
 * @template Base - Object type to filter.
 * @template Condition - Type the property values are checked against.
 */
type NotFilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? never : Key;
};

/**
 * Reverse-assignability variant of type {@linkcode FilterFlags}.
 *
 * Maps each key of `Base` to itself when `Condition` extends its value.
 *
 * @template Base - Object type to filter.
 * @template Condition - Type checked against the property values.
 */
type FilterFlagsLow<Base, Condition> = {
  [Key in keyof Base]: Condition extends Base[Key] ? Key : never;
};

/**
 * Complement of type {@linkcode FilterFlagsLow}.
 *
 * Maps each key of `Base` to itself when `Condition` does not extend its value.
 *
 * @template Base - Object type to filter.
 * @template Condition - Type checked against the property values.
 */
type NotFilterFlagsLow<Base, Condition> = {
  [Key in keyof Base]: Condition extends Base[Key] ? never : Key;
};

/**
 * Union of the keys of `Base` whose property type extends `Condition`.
 *
 * @template Base - Object type to inspect.
 * @template Condition - Type the property values must extend.
 */
export type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];

/**
 * Union of the keys of `Base` whose property type does not extend `Condition`.
 *
 * @template Base - Object type to inspect.
 * @template Condition - Type the property values must not extend.
 */
export type NotAllowedNames<Base, Condition> = NotFilterFlags<
  Base,
  Condition
>[keyof Base];

/**
 * Union of the keys of `Base` whose property type is extended by `Condition`.
 *
 * @template Base - Object type to inspect.
 * @template Condition - Type checked against the property values.
 */
export type AllowedNamesLow<Base, Condition> = FilterFlagsLow<
  Base,
  Condition
>[keyof Base];

/**
 * Union of the keys of `Base` whose property type is not extended by
 * `Condition`.
 *
 * @template Base - Object type to inspect.
 * @template Condition - Type checked against the property values.
 */
export type NotAllowedNamesLow<Base, Condition> = NotFilterFlagsLow<
  Base,
  Condition
>[keyof Base];

/**
 * Sub-object of `Base` holding only the properties whose type extends
 * `Condition`.
 *
 * @template Base - Object type to filter.
 * @template Condition - Type the kept properties must extend.
 */
export type SubType<Base extends object, Condition> = Pick<
  Base,
  AllowedNames<Base, Condition>
>;

/**
 * Recursive variant of type {@linkcode SubType}.
 *
 * Nested objects of the kept properties are filtered with the same condition.
 *
 * @template Base - Object type to filter.
 * @template Condition - Type the kept properties must extend.
 */
export type DeepSubType<Base extends object, Condition> = {
  [
    K in keyof Base as K extends AllowedNames<Base, Condition> ? K : never
  ]: Base[K] extends object ? DeepSubType<Base[K], Condition> : Base[K];
};

/**
 * Sub-object of `Base` holding only the properties whose type does not extend
 * `Condition`.
 *
 * @template Base - Object type to filter.
 * @template Condition - Type the dropped properties must extend.
 */
export type NotSubType<Base extends object, Condition> = Pick<
  Base,
  NotAllowedNames<Base, Condition>
>;

/**
 * Recursive variant of type {@linkcode NotSubType}.
 *
 * Nested objects of the kept properties are filtered with the same condition.
 *
 * @template Base - Object type to filter.
 * @template Condition - Type the dropped properties must extend.
 */
export type DeepNotSubType<Base extends object, Condition> = {
  [
    K in keyof Base as K extends NotAllowedNames<Base, Condition> ? K : never
  ]: Base[K] extends object ? DeepNotSubType<Base[K], Condition> : Base[K];
};

/**
 * Sub-object of `Base` holding only the properties whose type is extended by
 * `Condition`.
 *
 * Unlike type {@linkcode SubType}, the assignability test is reversed.
 *
 * @template Base - Object type to filter.
 * @template Condition - Type checked against the property values.
 */
export type SubTypeLow<Base extends object, Condition> = Pick<
  Base,
  AllowedNamesLow<Base, Condition>
>;

/**
 * Sub-object of `Base` holding only the properties whose type is not extended
 * by `Condition`.
 *
 * @template Base - Object type to filter.
 * @template Condition - Type checked against the property values.
 */
export type NotSubTypeLow<Base extends object, Condition> = Pick<
  Base,
  NotAllowedNamesLow<Base, Condition>
>;

// #endregion

/**
 * Object shape whose every key maps to type {@linkcode DeepNever}.
 */
interface _Never {
  [key: Keys]: DeepNever;
}

/**
 * Type that is either `never` or an object whose every property is itself
 * deeply `never`.
 *
 * Recursive building block used to detect values that must be rejected.
 */
export type DeepNever = never | _Never;

/**
 * Alias of type {@linkcode DeepNever}.
 */
export type Dn = DeepNever;

/**
 * Reduces values assignable to type {@linkcode DeepNever} to `never`.
 *
 * @template T - Type to normalize.
 */
export type Neverify<T> = T extends DeepNever ? never : T;

/**
 * Open record type mapping any key to `unknown`.
 *
 * Serves as the base of type {@linkcode TrueObject}.
 */
export type Ru = Record<Keys, unknown>;

/**
 * Open record type mapping any key to `never`.
 */
export type Rn = Record<Keys, never>;

/**
 * Open record type mapping any key to `any`.
 */
export type Ra = Record<Keys, any>;

// #region NoExtraKeys

/**
 * Extracts keys from type T that represent object properties which should be
 * recursively processed for no-extra-keys validation.
 *
 * @template T - The type to extract recursive keys from.
 * @template Schema - The schema type to compare against.
 */
type RecursiveObjectKeys<T, Schema> = {
  [K in keyof T & keyof Schema]: T[K] extends TrueObject ? K : never;
}[keyof T & keyof Schema];

/**
 * Generic type that restricts extra keys deeply on any object type.
 * Works with partial objects and ensures all keys match the schema exactly.
 *
 * @template T - The type to validate (the actual value type).
 * @template Schema - The schema type that defines allowed keys.
 *
 * @remarks
 * This type performs deep validation ensuring:
 * 1. No extra keys are present at the top level
 * 2. All nested object properties are recursively validated
 * 3. Works with partial/optional properties
 * 4. Preserves readonly modifiers
 *
 * @example
 * ```typescript
 * type MySchema = {
 *   name: string;
 *   config?: {
 *     value: number;
 *     nested?: {
 *       deep: boolean;
 *     };
 *   };
 * };
 *
 * // Valid - all keys match schema
 * type Valid = NoExtraKeys<{ name: 'test'; config: { value: 1 } }, MySchema>;
 *
 * // Invalid - 'extra' key is not in schema, will be typed as 'never'
 * type Invalid = NoExtraKeys<{ name: 'test'; extra: true }, MySchema>;
 * ```
 *
 * @see {@linkcode NoExtraKeysStrict} for a stricter version that requires exact match.
 */
export type NoExtraKeys<T, Schema> = T & {
  [K in Exclude<keyof T, keyof Schema>]: never;
} & {
  [K in RecursiveObjectKeys<T, Schema>]: NoExtraKeys<
    NotUndefined<T[K]>,
    NotUndefined<Schema[K]>
  >;
};

/**
 * A stricter version of {@linkcode NoExtraKeys} that also validates
 * that all keys in the schema are present in the type T.
 *
 * @template T - The type to validate (the actual value type).
 * @template Schema - The schema type that defines allowed keys.
 *
 * @remarks
 * Use this when you want to ensure not only that there are no extra keys,
 * but also that all required keys from the schema are present.
 *
 * @example
 * ```typescript
 * type MySchema = {
 *   name: string;
 *   value: number;
 * };
 *
 * // T must have both 'name' and 'value'
 * type Strict = NoExtraKeysStrict<{ name: 'test'; value: 1 }, MySchema>;
 * ```
 */
export type NoExtraKeysStrict<T extends Schema, Schema> = NoExtraKeys<T, Schema>;

/**
 * State value: a leaf state name or a nested map of state values.
 */
export type StateValue = string | StateValueMap;

/**
 * Map of string keys to state values, describing nested states.
 */
export interface StateValueMap {
  [key: string]: StateValue;
}

// #endregion NoExtraKeys

/**
 * Adds the identifier property `__id` to object types.
 *
 * Non-object values are returned unchanged. The misspelling of the name is
 * intentional and part of the public API.
 *
 * @template T - Type to identify.
 */
export type Identitfy<T> = T extends object ? T & { __id: string } : T;
