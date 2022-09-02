declare const TRANSPARENCY_DIGITS: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
declare const COLOR_NUMBER_DIGITS: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255];
declare const COLOR_STRING_DIGITS: readonly ["a", "b", "c", "d", "e", "f"];
declare const CSS_COLORS: readonly ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "goldenrod", "gold", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavenderblush", "lavender", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];
declare const COLOR_DIGITS: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

declare const colors_TRANSPARENCY_DIGITS: typeof TRANSPARENCY_DIGITS;
declare const colors_COLOR_NUMBER_DIGITS: typeof COLOR_NUMBER_DIGITS;
declare const colors_COLOR_STRING_DIGITS: typeof COLOR_STRING_DIGITS;
declare const colors_CSS_COLORS: typeof CSS_COLORS;
declare const colors_COLOR_DIGITS: typeof COLOR_DIGITS;
declare namespace colors {
  export {
    colors_TRANSPARENCY_DIGITS as TRANSPARENCY_DIGITS,
    colors_COLOR_NUMBER_DIGITS as COLOR_NUMBER_DIGITS,
    colors_COLOR_STRING_DIGITS as COLOR_STRING_DIGITS,
    colors_CSS_COLORS as CSS_COLORS,
    colors_COLOR_DIGITS as COLOR_DIGITS,
  };
}

declare const DIGITS: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

declare const numbers_DIGITS: typeof DIGITS;
declare namespace numbers {
  export {
    numbers_DIGITS as DIGITS,
  };
}

declare const LETTERS: readonly ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "à", "â", "ç", "è", "é", "ê", "î", "ô", "ù", "û"];
declare const STATUS_STRINGS: readonly ["information", "success", "redirect", "client-error", "server-error", "permission-error", "timeout-error"];
declare const PERMISSIONS_STRINGS: readonly ["_read", "_update", "_delete"];

declare const strings_LETTERS: typeof LETTERS;
declare const strings_STATUS_STRINGS: typeof STATUS_STRINGS;
declare const strings_PERMISSIONS_STRINGS: typeof PERMISSIONS_STRINGS;
declare namespace strings {
  export {
    strings_LETTERS as LETTERS,
    strings_STATUS_STRINGS as STATUS_STRINGS,
    strings_PERMISSIONS_STRINGS as PERMISSIONS_STRINGS,
  };
}

declare type LowerLetters = typeof LETTERS[number];
declare type UpperLetters = Uppercase<LowerLetters>;
declare type Letters = UpperLetters | LowerLetters;
declare type Digit = typeof DIGITS[number];
declare type StringLocalLitterals = Letters | Digit;
declare type Email = `${string}@${string}.${string}`;
declare type _JoinStringHelper = string | number | boolean | bigint;
declare type JoinString<T extends readonly any[], sep extends string = ' '> = T extends [] ? '' : T extends [_JoinStringHelper] ? `${T[0]}` : T extends [_JoinStringHelper, ...infer U] ? `${T[0]}${sep}${JoinString<U, sep>}` : string;
declare type AddString<T, Before extends string = '', After extends string = ''> = `${Before}${T & string}${After}`;
declare type StatusString = typeof STATUS_STRINGS[number];

declare type NExtract<T, U extends T> = Extract<T, U>;
declare type NExclude<T, U extends T> = Exclude<T, U>;
declare type NOmit<T, K extends keyof T> = Omit<T, K>;
declare type Primitive = string | number | boolean | undefined | null;
declare type DeepReadonly<T> = T extends Primitive ? T : {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};
declare type DeepPartial<T> = T extends Primitive ? T : {
    [P in keyof T]?: DeepPartial<T[P]>;
};
declare type FilterFlags<Base, Condition> = {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};
declare type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];
declare type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;
declare type NotFilterFlags<Base, Condition> = {
    [Key in keyof Base]: Base[Key] extends Condition ? never : Key;
};
declare type NotAllowedNames<Base, Condition> = NotFilterFlags<Base, Condition>[keyof Base];
declare type NotSubType<Base, Condition> = Pick<Base, NotAllowedNames<Base, Condition>>;
declare type OnPropChangedMethods<T, I extends keyof T = keyof T> = T & {
    [K in Extract<NotAllowedNames<T, (...args: any) => any>, I> & string as AddString<Capitalize<K>, 'on', 'Changed'>]: (cb: (newValue: T[K]) => void) => void;
};
declare type Undefiny<T> = NotSubType<T, undefined> & Partial<SubType<T, undefined>>;
declare type Nullify<T> = NotSubType<T, null> & Partial<SubType<T, null>>;
declare type _OmitWithoutPartial<T, O extends string> = {
    [key in keyof Omit<T, O>]: O extends keyof T[key] ? _OmitWithoutPartial<T[key], O> : T[key];
};
declare type _OmitWithPartial<T, O extends string> = Undefiny<Nullify<_OmitWithoutPartial<T, O>>>;
declare type OmitRecursive<T, O extends string> = {
    [key in keyof _OmitWithPartial<T, O>]: _OmitWithPartial<T[key], O>;
};
declare type Unionize<T extends Record<string, any>> = {
    [P in keyof T]: {
        [Q in P]: T[P];
    };
}[keyof T];
declare type _StringKeys<T extends Record<string, any>> = T extends {
    [key in infer K]: infer TK;
} ? TK extends Record<string, any> ? `${string & K}.${_StringKeys<TK>}` : K : never;
declare type StringKeys<T extends Record<string, any>> = _StringKeys<Unionize<T>>;
declare type _StringKeyAndValues<T extends Record<string, any>> = T extends {
    [key in infer K]: infer TK;
} ? TK extends Record<string, any> ? _StringKeyAndValues<{
    [key2 in keyof TK as `${string & K}.${string & key2}`]: TK[key2];
}> : {
    [key in keyof T]: T[key];
} : never;
declare type StringKeyAndValues<T extends Record<string, any>> = _StringKeyAndValues<Unionize<T>>;
declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

declare type IndexOfArray<T extends readonly unknown[], S extends number[] = []> = T['length'] extends S['length'] ? S[number] : IndexOfArray<T, [S['length'], ...S]>;
declare type _DivideBy<N extends number, T extends readonly any[]> = T['length'] extends N ? [true] : T extends readonly [...TupleOf<T[number], N>, ...infer U] ? [true, ..._DivideBy<N, U>] : never;
declare type DivideTupleLengthBy<N extends number, T extends readonly any[]> = _DivideBy<N, T>['length'];
declare type LengthOf<T> = T extends readonly any[] ? T['length'] : number;
declare type _TupleOf<T, N extends number, R extends unknown[] = []> = R['length'] extends N ? R : _TupleOf<T, N, [...R, T]>;
declare type TupleOf<T = any, N extends number = number> = N extends N ? number extends N ? T[] : [..._TupleOf<T, N>] : never;
declare type GetTupleType<T> = T extends TupleOf<infer U, any> ? U : never;
declare type GetTupleNumber<T> = T extends TupleOf<any, infer U> ? U : never;
declare type _UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
declare type _LastOf<T> = _UnionToIntersection<T extends unknown ? () => T : never> extends () => infer R ? R : never;
declare type _Push<T extends unknown[], V> = [...T, V];
declare type _TuplifyUnionBoolean<T> = [T] extends [never] ? true : false;
declare type TuplifyUnion<T> = true extends _TuplifyUnionBoolean<T> ? [] : _Push<TuplifyUnion<Exclude<T, _LastOf<T>>>, _LastOf<T>>;
declare type Reverse<T> = T extends [] ? T : T extends [infer Head, ...infer Tail] ? [...Reverse<Tail>, Head] : T;
declare type NArrayOmit<T extends any[], K extends keyof T[number] = keyof T[number]> = NOmit<T[number], K>[];

declare type Color1Digit = typeof COLOR_DIGITS[number];
declare type TransparencyDigits = typeof TRANSPARENCY_DIGITS[number];
declare type ColorNumberDigits = typeof COLOR_NUMBER_DIGITS[number];
declare type ColorStringDigits = typeof COLOR_STRING_DIGITS[number];
declare type Color2Digits = `${Color1Digit}${Color1Digit}`;
declare type CssColors = typeof CSS_COLORS[number];
declare type RGBA1 = `#${Color1Digit}${Color1Digit}${Color1Digit}${Color1Digit | ''}`;

interface IUseCase<N extends string = string, F extends (...args: any[]) => any = any> {
    call: F;
    __name: N;
}

declare type _SetEntityForDatabase<T, K extends keyof T, Before extends string = '', After extends string = ''> = {
    [key in T[K] as AddString<key, Before, After>]: T[];
};
declare type _SetEntityForUseCase<T, K extends keyof T, Before extends string = '', After extends string = ''> = {
    [key in T[K] as AddString<key, Before, After>]: T;
};
declare type _ReadAU = ReadonlyArray<unknown>;
declare type CoreDataBaseSchema<T extends _ReadAU, K extends keyof T[number], Before extends string = '', After extends string = 's'> = T extends [infer T1, ...infer U1] ? U1[0] extends undefined ? _SetEntityForDatabase<T1, K, Before, After> : U1 extends _ReadAU ? _SetEntityForDatabase<T1, K, Before, After> & CoreDataBaseSchema<U1, K, Before, After> : never : never;
declare type DomainUseCaseSchema<T extends _ReadAU, K extends keyof T[number], Before extends string = '', After extends string = ''> = T extends [infer T1, ...infer U1] ? U1[0] extends undefined ? _SetEntityForUseCase<T1, K, Before, After> : U1 extends _ReadAU ? _SetEntityForUseCase<T1, K, Before, After> & DomainUseCaseSchema<U1, K, Before, After> : never : {
    [key: string]: T[number];
};
declare type Domain<T extends IUseCase[] = IUseCase[]> = DomainUseCaseSchema<T, '__name'>;

declare type NFunction<I extends any[] = any[], O = any> = (...arg: I) => O;

declare type Nullish<T = unknown> = T | null | undefined;
declare type NullishString = Nullish<string>;
declare type NullishNumber = Nullish<number>;
declare type NullishBoolean = Nullish<boolean>;
declare type NullishDate = Nullish<Date>;

declare type ToString<T extends number | string> = `${T}`;

declare type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;
declare type PromisifyMethod<T> = T extends (...args: infer P) => infer R ? R extends Promise<any> ? T : (...args: P) => Promise<R> : never;
declare type PromisifyObject<T extends Record<string, unknown>> = T & {
    [P in keyof T as PromisifyMethod<T[P]> extends never ? never : `${string & P}Async`]: PromisifyMethod<T[P]>;
};

declare function isArray<T>(value: unknown): value is Array<T>;
declare function sliceArray<T extends readonly any[], N extends number>(array: T, splicer: N): TupleOf<TupleOf<T[number], N>>;
declare function compareShallowArray(arg1?: any[], arg2?: any[]): boolean;

declare function rgba(red: ColorNumberDigits, green: ColorNumberDigits, blue: ColorNumberDigits, alpha: TransparencyDigits): string;
declare function colorHex1(red: Color1Digit, green: Color1Digit, blue: Color1Digit, alpha?: Color1Digit): RGBA1;
declare function colorHex2(red: Color2Digits, green: Color2Digits, blue: Color2Digits, alpha?: Color2Digits): string;

declare function identity<T>(arg: T): T;

declare function log<T>(name: string, data: T): void;

declare function isNullish(val: unknown): val is undefined | null;

declare function dataCompare(arg1: any, arg2: any): boolean;

declare function sleep(millis: number): Promise<unknown>;

declare function capitalize(value: string): string;

declare function isClean(value: string): boolean;
declare function clean(value: string): string;

declare function getAllIndexes<T extends readonly string[]>(arr: T, val: string): number[];

declare function getReferences<T extends readonly string[]>(args: T): {
    [key in T[number]]: number[];
};

declare function isOneOf(checkers: string[] | readonly string[], ...toChecks: string[]): boolean;

declare function isStatusString(value: string): value is StatusString;

declare function toString<T extends any[]>(...args: T): string[];

declare function useCase<D extends Domain, K extends keyof D = keyof D>(domain: D, use: K): D[K]['call'];

export { AddString, colors as COLORS, Color1Digit, Color2Digits, ColorNumberDigits, ColorStringDigits, CoreDataBaseSchema, CssColors, DeepPartial, DeepReadonly, Digit, DivideTupleLengthBy, Domain, DomainUseCaseSchema, Email, GetTupleNumber, GetTupleType, IUseCase, IndexOfArray, JoinString, LengthOf, Letters, LowerLetters, NArrayOmit, NExclude, NExtract, NFunction, NOmit, numbers as NUMBERS, NotSubType, Nullify, Nullish, NullishBoolean, NullishDate, NullishNumber, NullishString, OmitRecursive, OnPropChangedMethods, Primitive, PromisifyMethod, PromisifyObject, RGBA1, Reverse, strings as STRINGS, StatusString, StringKeyAndValues, StringKeys, StringLocalLitterals, SubType, ThenArg, ToString, TransparencyDigits, TupleOf, TuplifyUnion, Undefiny, UnionToIntersection, Unionize, UpperLetters, _JoinStringHelper, capitalize, clean, colorHex1, colorHex2, compareShallowArray, dataCompare, getAllIndexes, getReferences, identity, isArray, isClean, isNullish, isOneOf, isStatusString, log, rgba, sleep, sliceArray, toString, useCase };
