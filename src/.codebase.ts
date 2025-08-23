// Analyse automatique de la codebase

export interface ImportInfo {
  moduleSpecifier: string;
  kind: 'default' | 'named' | 'namespace' | 'side-effect';
  namedImports?: string[];
  default?: string;
  isDynamic?: boolean;
}

export interface ExportInfo {
  name: string;
  kind: 'default' | 'named' | 'namespace';
  text?: string;
  moduleSpecifier?: string;
  declarationKind?:
    | 'function'
    | 'class'
    | 'interface'
    | 'type'
    | 'variable'
    | 'const'
    | 'let'
    | 'enum';
}

export interface FileAnalysis {
  relativePath: string;
  imports: ImportInfo[];
  text: string;
}

export interface CodebaseAnalysis {
  [dotNotationKey: string]: FileAnalysis;
}

export const CODEBASE_ANALYSIS: CodebaseAnalysis = {
  'features.arrays.castings.all': {
    relativePath: 'features/arrays/castings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './dynamic',
        kind: 'default',
        default: 'dynamic',
      },
      {
        moduleSpecifier: './exclude',
        kind: 'default',
        default: 'fn',
      },
      {
        moduleSpecifier: './extract',
        kind: 'default',
        default: 'extract',
      },
      {
        moduleSpecifier: './forceCast',
        kind: 'default',
        default: 'forceCast',
      },
      {
        moduleSpecifier: './freeze',
        kind: 'default',
        default: 'freeze',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './indexes',
        kind: 'default',
        default: 'indexes',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './length/all',
        kind: 'default',
        default: '_length',
      },
      {
        moduleSpecifier: './low',
        kind: 'default',
        default: 'low',
      },
      {
        moduleSpecifier: './reduce',
        kind: 'default',
        default: 'reduce',
      },
      {
        moduleSpecifier: './reverse',
        kind: 'default',
        default: 'reverse',
      },
      {
        moduleSpecifier: './toArray',
        kind: 'default',
        default: 'toArray',
      },
      {
        moduleSpecifier: './tuple/all',
        kind: 'default',
        default: 'tuple',
      },
      {
        moduleSpecifier: './type',
        kind: 'default',
        default: 'type',
      },
    ],
    text: `import { expandFn } from '../../../globals/utils/expandFn';
import dynamic from './dynamic';
import fn from './exclude';
import extract from './extract';
import forceCast from './forceCast';
import freeze from './freeze';
import _index from './index';
import indexes from './indexes';
import is from './is';
import _length from './length/all';
import low from './low';
import reduce from './reduce';
import reverse from './reverse';
import toArray from './toArray';
import tuple from './tuple/all';
import type from './type';

/**
 * castings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const castings = expandFn(_index, {
  low,
  is,
  indexes,
  _length,
  tuple,
  reduce,
  toArray,
  reverse,
  freeze,
  extract,
  exclude: fn,
  forceCast,
  dynamic,
  type,
});

    `,
  },
  'features.arrays.castings.dynamic': {
    relativePath: 'features/arrays/castings/dynamic.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['AnyArray'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { AnyArray } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends AnyArray>(value: T) => {
  return _unknown<T>(value);
};

export default fn;

    `,
  },
  'features.arrays.castings.exclude': {
    relativePath: 'features/arrays/castings/exclude.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['ExcludeArray'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { ExcludeArray } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends any[], const Ex extends T[number][]>(
  array: T,
  ...excludes: Ex
) => {
  const out = array.filter(item => !excludes.includes(item));
  return _unknown<ExcludeArray<T, Ex[number]>>(out);
};

export default fn;

    `,
  },
  'features.arrays.castings.extract': {
    relativePath: 'features/arrays/castings/extract.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['ExtractArray'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { ExtractArray } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends any[], const Ex extends T[number][]>(
  array: T,
  ...extractors: Ex
) => {
  const out = array.filter(item => extractors.includes(item));
  return _unknown<ExtractArray<T, Ex[number]>>(out);
};

export default fn;

    `,
  },
  'features.arrays.castings.forceCast': {
    relativePath: 'features/arrays/castings/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(value: unknown) => {
  return _unknown<T[]>(value);
};

export default fn;

    `,
  },
  'features.arrays.castings.freeze': {
    relativePath: 'features/arrays/castings/freeze.ts',
    imports: [
      {
        moduleSpecifier: './tuple',
        kind: 'default',
        default: 'tuple',
      },
    ],
    text: `import tuple from './tuple';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends any[]>(...args: T) =>
  Object.freeze(tuple(...args));

export default fn;

    `,
  },
  'features.arrays.castings.index': {
    relativePath: 'features/arrays/castings/index.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(...values: T[]) => values;

export default fn;
`,
  },
  'features.arrays.castings.indexes': {
    relativePath: 'features/arrays/castings/indexes.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['IndexesOfArray', 'RuA', 'UnionToTuple'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { IndexesOfArray, RuA, UnionToTuple } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends RuA>(...array: T) => {
  const out = array.map((_, index) => index);
  return _unknown<UnionToTuple<IndexesOfArray<T>>>(out);
};

export default fn;

    `,
  },
  'features.arrays.castings.is': {
    relativePath: 'features/arrays/castings/is.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(value: unknown): value is Array<T> => {
  return Array.isArray(value);
};

export default fn;
`,
  },
  'features.arrays.castings.length.all': {
    relativePath: 'features/arrays/castings/length/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './has',
        kind: 'default',
        default: 'has',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import has from './has';
import _index from './index';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, { has });

export default fn;

    `,
  },

  'features.arrays.castings.length.has': {
    relativePath: 'features/arrays/castings/length/has.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['TupleOf'],
      },
      {
        moduleSpecifier: '../is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { TupleOf } from '../../../../globals/types';
import is from '../is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends number>(check: T) => {
  const _out = (value: unknown): value is TupleOf<unknown, T> => {
    return is(value) && value.length === check;
  };

  return _out;
};

export default fn;

    `,
  },
  'features.arrays.castings.length.index': {
    relativePath: 'features/arrays/castings/length/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['RuA'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { RuA } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends RuA>(...array: T) => {
  const out = array.length;
  return _unknown<T['length']>(out);
};

export default fn;

    `,
  },
  'features.arrays.castings.low': {
    relativePath: 'features/arrays/castings/low.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends unknown[]>(...values: T) => values;

export default fn;
`,
  },
  'features.arrays.castings.reduce': {
    relativePath: 'features/arrays/castings/reduce.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(value: T | readonly [T] | [T]) => {
  const out = Array.isArray(value) ? value[0] : value;
  return _unknown<T>(out);
};

export default fn;

    `,
  },
  'features.arrays.castings.reverse': {
    relativePath: 'features/arrays/castings/reverse.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['ReverseArray', 'RuA'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { ReverseArray, RuA } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends RuA>(...args: T) => {
  const out = args.slice().reverse();
  return _unknown<ReverseArray<T>>(out);
};

export default fn;

    `,
  },
  'features.arrays.castings.toArray': {
    relativePath: 'features/arrays/castings/toArray.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['ToArray'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { ToArray } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(value?: T) => {
  if (!value) return [];
  const checkArray = Array.isArray(value);
  const out = checkArray ? value : [value];

  return _unknown<ToArray<T>>(out);
};

export default fn;

    `,
  },
  'features.arrays.castings.tuple.all': {
    relativePath: 'features/arrays/castings/tuple/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: '../is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './multiply',
        kind: 'default',
        default: 'multiply',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import is from '../is';
import _index from './index';
import multiply from './multiply';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  multiply,
  is,
});

export default fn;

    `,
  },
  'features.arrays.castings.tuple.index': {
    relativePath: 'features/arrays/castings/tuple/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['RuA'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { RuA } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends RuA>(...args: T) => {
  const out = args;
  return _unknown<T>(out);
};

export default fn;

    `,
  },
  'features.arrays.castings.tuple.is': {
    relativePath: 'features/arrays/castings/tuple/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Checker2'],
      },
      {
        moduleSpecifier: '../is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { Checker2 } from '../../../../globals/types';
import is from '../is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T>(fn: Checker2<T>) => {
  const _out = (value: unknown): value is Array<T> => {
    return is(value) && value.every(fn);
  };

  return _out;
};

export default fn;

    `,
  },
  'features.arrays.castings.tuple.multiply': {
    relativePath: 'features/arrays/castings/tuple/multiply.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['TupleOf'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { TupleOf } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T, N extends number>(data: T, times: N) => {
  const out = Array.from({ length: times }, () => data);
  return _unknown<TupleOf<T, N>>(out);
};

export default fn;

    `,
  },

  'features.arrays.castings.type': {
    relativePath: 'features/arrays/castings/type.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = Array;

export default fn;
`,
  },
  'features.arrays.index': {
    relativePath: 'features/arrays/index.ts',
    imports: [],
    text: `export * from './castings/all';
export * from './types';
export * from './typings/all';
`,
  },
  'features.arrays.types': {
    relativePath: 'features/arrays/types.ts',
    imports: [
      {
        moduleSpecifier: '../../globals/types',
        kind: 'named',
        namedImports: ['UnionOmit', 'UnionToTuple'],
      },
    ],
    text: `import { UnionOmit, UnionToTuple } from '../../globals/types';

/**
 * IndexesOfArray type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type IndexesOfArray<
  T extends readonly unknown[],
  S extends number[] = [],
> = T['length'] extends S['length']
  ? S[number]
  : IndexesOfArray<T, [S['length'], ...S]>;

// type _DivideBy<
//   N extends number,
//   T extends readonly any[],
// > = T['length'] extends N
//   ? [true]
//   : T extends readonly [...TupleOf<T[number], N>, ...infer U]
//     ? [true, ..._DivideBy<N, U>]
//     : never;

// export type DivideTupleLengthBy<
//   N extends number,
//   T extends readonly any[],
// > = _DivideBy<N, T>['length'];

type _TupleOf<
  T,
  N extends number,
  R extends unknown[] = [],
> = R['length'] extends N ? R : _TupleOf<T, N, [...R, T]>;

/**
 * TupleOf type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type TupleOf<T = any, N extends number = number> = N extends N
  ? number extends N
    ? T[]
    : [..._TupleOf<T, N>]
  : never;

/**
 * ReverseArray type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type ReverseArray<T extends RuA> = T extends any
  ? T extends []
    ? T
    : T extends [infer Head, ...infer Tail]
      ? [...ReverseArray<Tail>, Head]
      : T
  : never;

/**
 * RuA type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type RuA = readonly unknown[];

/**
 * AnyArray type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type AnyArray<T = unknown> = ReadonlyArray<T> | T[];

/**
 * _NArrayOmit type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type _NArrayOmit<
  T extends readonly object[],
  K extends keyof T[number] = never,
> = Extract<UnionOmit<T[number], K>, object>;

/**
 * NArrayOmit type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type NArrayOmit<
  T extends readonly object[],
  K extends keyof T[number] = never,
> =
  _NArrayOmit<T, K> extends infer N extends object
    ? UnionToTuple<N>
    : never;

/**
 * ExtractArray type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
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
 * ExcludeArray type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
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
 * ReduceArray type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type ReduceArray<T> = T extends AnyArray ? T[number] : T;
/**
 * ReduceArrayS type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type ReduceArrayS<T> = T extends AnyArray ? T[0] : T;

/**
 * ReduceDeepArray type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type ReduceDeepArray<T> =
  ReduceArray<T> extends AnyArray
    ? ReduceDeepArray<ReduceArray<T>>
    : ReduceArray<T>;

/**
 * ToArray type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type ToArray<T> = T extends AnyArray ? T : AnyArray<T>;

/**
 * RecursiveArrayOf type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type RecursiveArrayOf<T> =
  | Array<_SingleOrRecursiveArrayOf<T>>
  | ReadonlyArray<_SingleOrRecursiveArrayOf<T>>;

type _SingleOrRecursiveArrayOf<T> = T | RecursiveArrayOf<T>;

    `,
  },
  'features.arrays.typings._length': {
    relativePath: 'features/arrays/typings/_length.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['RuA'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { RuA } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends RuA>(_?: T) => _unknown<T['length']>();

export default fn;

    `,
  },
  'features.arrays.typings.all': {
    relativePath: 'features/arrays/typings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
      {
        moduleSpecifier: './dynamic',
        kind: 'default',
        default: 'dynamic',
      },
      {
        moduleSpecifier: './exclude',
        kind: 'default',
        default: 'exclude',
      },
      {
        moduleSpecifier: './extract',
        kind: 'default',
        default: 'extract',
      },
      {
        moduleSpecifier: './forceCast',
        kind: 'default',
        default: 'forceCast',
      },
      {
        moduleSpecifier: './freeze',
        kind: 'default',
        default: 'freeze',
      },
      {
        moduleSpecifier: './indexes/all',
        kind: 'default',
        default: 'indexes',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './length',
        kind: 'default',
        default: '_length',
      },
      {
        moduleSpecifier: './low',
        kind: 'default',
        default: 'low',
      },
      {
        moduleSpecifier: './reduce/all',
        kind: 'default',
        default: 'reduce',
      },
      {
        moduleSpecifier: './reverse',
        kind: 'default',
        default: 'reverse',
      },
      {
        moduleSpecifier: './toArray',
        kind: 'default',
        default: 'toArray',
      },
      {
        moduleSpecifier: './tuple/all',
        kind: 'default',
        default: 'tuple',
      },
      {
        moduleSpecifier: './type',
        kind: 'default',
        default: 'type',
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';
import dynamic from './dynamic';
import exclude from './exclude';
import extract from './extract';
import forceCast from './forceCast';
import freeze from './freeze';
import indexes from './indexes/all';
import is from './is';
import _length from './length';
import low from './low';
import reduce from './reduce/all';
import reverse from './reverse';
import toArray from './toArray';
import tuple from './tuple/all';
import type from './type';

/**
 * typings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const typings = typeFn<Array<unknown>>()({
  low,
  is,
  indexes,
  _length,
  tuple,
  reduce,
  reverse,
  toArray,
  freeze,
  extract,
  exclude,
  forceCast,
  dynamic,
  type,
});

    `,
  },
  'features.arrays.typings.dynamic': {
    relativePath: 'features/arrays/typings/dynamic.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends unknown[]>(_?: T) => _unknown<T>();

export default fn;

    `,
  },
  'features.arrays.typings.exclude': {
    relativePath: 'features/arrays/typings/exclude.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['AnyArray', 'ExcludeArray'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { AnyArray, ExcludeArray } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends AnyArray, const U extends T[number][]>(
  _?: T,
  ...__: U
) => _unknown<ExcludeArray<T, U[number]>>();

export default fn;

    `,
  },
  'features.arrays.typings.extract': {
    relativePath: 'features/arrays/typings/extract.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['AnyArray', 'ExtractArray'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { AnyArray, ExtractArray } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends AnyArray, const U extends T[number][]>(
  _?: T,
  ...__: U
) => _unknown<ExtractArray<T, U[number]>>();

export default fn;

    `,
  },
  'features.arrays.typings.forceCast': {
    relativePath: 'features/arrays/typings/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = (_?: unknown) => _unknown<unknown[]>();

export default fn;

    `,
  },
  'features.arrays.typings.freeze': {
    relativePath: 'features/arrays/typings/freeze.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['RuA'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { RuA } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends RuA>(..._: T) => _unknown<Readonly<T>>();

export default fn;

    `,
  },

  'features.arrays.typings.index': {
    relativePath: 'features/arrays/typings/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['AnyArray'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { AnyArray } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends AnyArray>(..._: T) => _unknown<T[number][]>();

export default fn;

    `,
  },
  'features.arrays.typings.indexes.all': {
    relativePath: 'features/arrays/typings/indexes/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './union',
        kind: 'default',
        default: 'union',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import _index from './index';
import union from './union';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  union,
});

export default fn;

    `,
  },
  'features.arrays.typings.indexes.index': {
    relativePath: 'features/arrays/typings/indexes/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['IndexesOfArray', 'RuA', 'UnionToTuple'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { IndexesOfArray, RuA, UnionToTuple } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends RuA>(..._: T) =>
  _unknown<UnionToTuple<IndexesOfArray<T>>>();

export default fn;

    `,
  },
  'features.arrays.typings.indexes.union': {
    relativePath: 'features/arrays/typings/indexes/union.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['IndexesOfArray', 'RuA'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { IndexesOfArray, RuA } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends RuA>(..._: T) => _unknown<IndexesOfArray<T>>();

export default fn;

    `,
  },
  'features.arrays.typings.is': {
    relativePath: 'features/arrays/typings/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(_?: T) => _unknown<T extends unknown[] ? true : false>();

export default fn;

    `,
  },
  'features.arrays.typings.length': {
    relativePath: 'features/arrays/typings/length.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './_length',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { expandFn } from '../../../globals/utils/expandFn';
import _index from './_length';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {});

export default fn;

    `,
  },
  'features.arrays.typings.low': {
    relativePath: 'features/arrays/typings/low.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(..._: T[]) => _unknown<T[]>();

export default fn;

    `,
  },
  'features.arrays.typings.reduce.all': {
    relativePath: 'features/arrays/typings/reduce/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './deep',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import deep from './deep';
import _index from './index';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  deep,
});

export default fn;

    `,
  },
  'features.arrays.typings.reduce.deep': {
    relativePath: 'features/arrays/typings/reduce/deep.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['ReduceDeepArray'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { ReduceDeepArray } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(_?: T) => _unknown<ReduceDeepArray<T>>();

export default fn;

    `,
  },
  'features.arrays.typings.reduce.index': {
    relativePath: 'features/arrays/typings/reduce/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(_: T | readonly T[] | T[]) => _unknown<T>();

export default fn;

    `,
  },

  'features.arrays.typings.reverse': {
    relativePath: 'features/arrays/typings/reverse.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['ReverseArray', 'RuA'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { ReverseArray, RuA } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends RuA>(..._: T) => _unknown<ReverseArray<T>>();

export default fn;

    `,
  },
  'features.arrays.typings.toArray': {
    relativePath: 'features/arrays/typings/toArray.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['AnyArray'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { AnyArray } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(_?: T) => _unknown<AnyArray<T>>();

export default fn;

    `,
  },
  'features.arrays.typings.tuple.all': {
    relativePath: 'features/arrays/typings/tuple/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './multiply',
        kind: 'default',
        default: 'multiply',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';
import multiply from './multiply';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  number: multiply,
  is,
});

export default fn;

    `,
  },
  'features.arrays.typings.tuple.index': {
    relativePath: 'features/arrays/typings/tuple/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['RuA'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { RuA } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends RuA>(..._: T) => _unknown<T>();

export default fn;

    `,
  },
  'features.arrays.typings.tuple.is': {
    relativePath: 'features/arrays/typings/tuple/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['RuA'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { RuA } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T>(_?: T) => _unknown<T extends RuA ? true : false>();

export default fn;

    `,
  },
  'features.arrays.typings.tuple.multiply': {
    relativePath: 'features/arrays/typings/tuple/multiply.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['TupleOf'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
    ],
    text: `import { TupleOf } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';
import { expandFn } from '../../../../globals/utils/expandFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(
  <const T, N extends number>(_?: T, __?: N) => _unknown<TupleOf<T, N>>(),
  {
    is: <const U, N extends number>(_?: U, __?: N) => {
      const _out = <T>(_?: T) =>
        _unknown<T extends TupleOf<U, N> ? true : false>();
      return _out;
    },
  },
);

export default fn;

    `,
  },
  'features.arrays.typings.type': {
    relativePath: 'features/arrays/typings/type.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = _unknown<unknown[]>();

export default fn;

    `,
  },
  'features.booleans.castings.all': {
    relativePath: 'features/booleans/castings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: './false',
        kind: 'default',
        default: '_false',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './true',
        kind: 'default',
        default: '_true',
      },
      {
        moduleSpecifier: './type',
        kind: 'default',
        default: 'type',
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';
import _false from './false';
import _index from './index';
import _true from './true';
import type from './type';

/**
 * castings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const castings = castFn<boolean>()({
  is: _index,
  type,
  true: _true,
  false: _false,
});

    `,
  },
  'features.booleans.castings.false': {
    relativePath: 'features/booleans/castings/false.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/is/_default',
        kind: 'named',
        namedImports: ['isFn'],
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';
import { isFn } from '../../../globals/utils/is/_default';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<false>()({
  CONST: false,
  is: isFn(false),
});

export default fn;

    `,
  },
  'features.booleans.castings.index': {
    relativePath: 'features/booleans/castings/index.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = (data: unknown) => typeof data === 'boolean';

export default fn;
`,
  },

  'features.booleans.castings.true': {
    relativePath: 'features/booleans/castings/true.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/is/_default',
        kind: 'named',
        namedImports: ['isFn'],
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';
import { isFn } from '../../../globals/utils/is/_default';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<true>()({
  CONST: true,
  is: isFn(true),
});

export default fn;

    `,
  },
  'features.booleans.castings.type': {
    relativePath: 'features/booleans/castings/type.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = Boolean;

export default fn;
`,
  },
  'features.booleans.index': {
    relativePath: 'features/booleans/index.ts',
    imports: [],
    text: `export * from './castings/all';
export * from './types';
export * from './typings/all';
`,
  },
  'features.booleans.types': {
    relativePath: 'features/booleans/types.ts',
    imports: [],
    text: `export {};
`,
  },
  'features.booleans.typings.all': {
    relativePath: 'features/booleans/typings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './false',
        kind: 'default',
        default: '_false',
      },
      {
        moduleSpecifier: './forceCast',
        kind: 'default',
        default: 'forceCast',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './true',
        kind: 'default',
        default: '_true',
      },
      {
        moduleSpecifier: './type',
        kind: 'default',
        default: 'type',
      },
    ],
    text: `import { expandFn } from '../../../globals/utils/expandFn';
import _false from './false';
import forceCast from './forceCast';
import _index from './index';
import is from './is';
import _true from './true';
import type from './type';

/**
 * typings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const typings = expandFn(_index, {
  forceCast,
  is,
  type,
  true: _true,
  false: _false,
});

    `,
  },
  'features.booleans.typings.false': {
    relativePath: 'features/booleans/typings/false.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<false>()();

export default fn;

    `,
  },
  'features.booleans.typings.forceCast': {
    relativePath: 'features/booleans/typings/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends boolean>(_: unknown) => _unknown<T>();

export default fn;

    `,
  },
  'features.booleans.typings.index': {
    relativePath: 'features/booleans/typings/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends boolean>(_: T) => _unknown<T>();

export default fn;

    `,
  },
  'features.booleans.typings.is': {
    relativePath: 'features/booleans/typings/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(_: T) => _unknown<T extends boolean ? true : false>();

export default fn;

    `,
  },
  'features.booleans.typings.true': {
    relativePath: 'features/booleans/typings/true.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<true>()();

export default fn;

    `,
  },

  'features.booleans.typings.type': {
    relativePath: 'features/booleans/typings/type.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = _unknown<boolean>();

export default fn;

    `,
  },
  'features.common.castings._unknown': {
    relativePath: 'features/common/castings/_unknown.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = _unknown;

export default fn;

    `,
  },
  'features.common.castings.all': {
    relativePath: 'features/common/castings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './_unknown',
        kind: 'default',
        default: '_unknown',
      },
      {
        moduleSpecifier: './any',
        kind: 'default',
        default: 'any',
      },
      {
        moduleSpecifier: './clone',
        kind: 'default',
        default: 'clone',
      },
      {
        moduleSpecifier: './const',
        kind: 'default',
        default: '_const',
      },
      {
        moduleSpecifier: './date/all',
        kind: 'default',
        default: 'date',
      },
      {
        moduleSpecifier: './defaulted/all',
        kind: 'default',
        default: 'defaulted',
      },
      {
        moduleSpecifier: './identity',
        kind: 'default',
        default: 'identity',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is/all',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './never',
        kind: 'default',
        default: 'never',
      },
      {
        moduleSpecifier: './neverify',
        kind: 'default',
        default: 'neverify',
      },
      {
        moduleSpecifier: './null',
        kind: 'default',
        default: '_null',
      },
      {
        moduleSpecifier: './partial/all',
        kind: 'default',
        default: 'partial',
      },
      {
        moduleSpecifier: './primitive/all',
        kind: 'default',
        default: 'primitive',
      },
      {
        moduleSpecifier: './readonly/all',
        kind: 'default',
        default: 'readonly',
      },
      {
        moduleSpecifier: './required/all',
        kind: 'default',
        default: 'required',
      },
      {
        moduleSpecifier: './symbol/all',
        kind: 'default',
        default: 'symbol',
      },
      {
        moduleSpecifier: './undefined',
        kind: 'default',
        default: '_undefined',
      },
      {
        moduleSpecifier: './undefiny',
        kind: 'default',
        default: 'undefiny',
      },
    ],
    text: `import { expandFn } from '../../../globals/utils/expandFn';
import _unknown from './_unknown';
import any from './any';
import clone from './clone';
import _const from './const';
import date from './date/all';
import defaulted from './defaulted/all';
import identity from './identity';
import _index from './index';
import is from './is/all';
import never from './never';
import neverify from './neverify';
import _null from './null';
import partial from './partial/all';
import primitive from './primitive/all';
import readonly from './readonly/all';
import required from './required/all';
import symbol from './symbol/all';
import _undefined from './undefined';
import undefiny from './undefiny';

/**
 * castings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const castings = expandFn(_index, {
  partial,
  const: _const,
  identity,
  clone,
  unknown: _unknown,
  neverify,
  readonly,
  required,
  date,
  primitive,
  symbol,
  any,
  is,
  null: _null,
  undefined: _undefined,
  undefiny,
  never,
  defaulted,
});

    `,
  },
  'features.common.castings.any': {
    relativePath: 'features/common/castings/any.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<any>()();

export default fn;

    `,
  },
  'features.common.castings.clone': {
    relativePath: 'features/common/castings/clone.ts',
    imports: [
      {
        moduleSpecifier: '../../functions/functions/clone',
        kind: 'default',
        default: 'deepClone',
      },
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['PrimitiveObject'],
      },
    ],
    text: `import deepClone from '../../functions/functions/clone';
import { PrimitiveObject } from '../../../globals/types';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends PrimitiveObject>(object: T): T => {
  return deepClone(object);
};

export default fn;

    `,
  },
  'features.common.castings.const': {
    relativePath: 'features/common/castings/const.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T>(value: T) => value;

export default fn;
`,
  },
  'features.common.castings.date.all': {
    relativePath: 'features/common/castings/date/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  is,
});

export default fn;

    `,
  },
  'features.common.castings.date.index': {
    relativePath: 'features/common/castings/date/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { castFn } from '../../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<Date>()();

export default fn;

    `,
  },
  'features.common.castings.date.is': {
    relativePath: 'features/common/castings/date/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/is/_default',
        kind: 'named',
        namedImports: ['isInstance'],
      },
    ],
    text: `import { isInstance } from '../../../../globals/utils/is/_default';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = isInstance(Date);

export default fn;

    `,
  },
  'features.common.castings.defaulted.all': {
    relativePath: 'features/common/castings/defaulted/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './runtime',
        kind: 'default',
        default: 'runtime',
      },
      {
        moduleSpecifier: './typings',
        kind: 'default',
        default: 'typings',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import runtime from './runtime';
import typings from './typings';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(runtime, { runtime, typings });

export default fn;

    `,
  },

  'features.common.castings.defaulted.index': {
    relativePath: 'features/common/castings/defaulted/index.ts',
    imports: [
      {
        moduleSpecifier: './runtime',
        kind: 'default',
        default: 'runtime',
      },
    ],
    text: `import runtime from './runtime';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = runtime;

export default fn;

    `,
  },
  'features.common.castings.defaulted.runtime': {
    relativePath: 'features/common/castings/defaulted/runtime.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['NonN'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { NonN } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T, U extends NonN<T>>(value: T, defaultValue: U) => {
  const out = value === undefined || value === null ? defaultValue : value;
  return _unknown<NonN<T>>(out);
};

export default fn;

    `,
  },
  'features.common.castings.defaulted.typings': {
    relativePath: 'features/common/castings/defaulted/typings.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Defaulted', 'NonN'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Defaulted, NonN } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T, const U extends NonN<T>>(value: T, defaultValue: U) => {
  const out = value === undefined || value === null ? defaultValue : value;
  return _unknown<Defaulted<T, U>>(out);
};

export default fn;

    `,
  },
  'features.common.castings.identity': {
    relativePath: 'features/common/castings/identity.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    text: `import { identity } from '../../../globals/utils/identity';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = identity;

export default fn;

    `,
  },
  'features.common.castings.index': {
    relativePath: 'features/common/castings/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<unknown>()();

export default fn;

    `,
  },
  'features.common.castings.is.all': {
    relativePath: 'features/common/castings/is/all.ts',
    imports: [
      {
        moduleSpecifier: './defined',
        kind: 'default',
        default: 'defined',
      },
      {
        moduleSpecifier: './notDefined',
        kind: 'default',
        default: 'notDefined',
      },
      {
        moduleSpecifier: './notNull',
        kind: 'default',
        default: 'notNull',
      },
      {
        moduleSpecifier: './notNullish',
        kind: 'default',
        default: 'notNullish',
      },
      {
        moduleSpecifier: './notUndefined',
        kind: 'default',
        default: 'notUndefined',
      },
      {
        moduleSpecifier: './null',
        kind: 'default',
        default: 'null_',
      },
      {
        moduleSpecifier: './nullish',
        kind: 'default',
        default: 'nullish',
      },
      {
        moduleSpecifier: './symbol',
        kind: 'default',
        default: 'symbol',
      },
      {
        moduleSpecifier: './undefined',
        kind: 'default',
        default: 'undefined_',
      },
    ],
    text: `import defined from './defined';
import notDefined from './notDefined';
import notNull from './notNull';
import notNullish from './notNullish';
import notUndefined from './notUndefined';
import null_ from './null';
import nullish from './nullish';
import symbol from './symbol';
import undefined_ from './undefined';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = {
  defined,
  notDefined,
  notNull,
  notNullish,
  nullish,
  notUndefined,
  null: null_,
  undefined: undefined_,
  symbol,
};

export default fn;

    `,
  },
  'features.common.castings.is.defined': {
    relativePath: 'features/common/castings/is/defined.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(value?: T): value is NonNullable<T> => {
  return value !== undefined && value !== null;
};

export default fn;
`,
  },
  'features.common.castings.is.index': {
    relativePath: 'features/common/castings/is/index.ts',
    imports: [
      {
        moduleSpecifier: './defined',
        kind: 'default',
        default: 'defined',
      },
    ],
    text: `import defined from './defined';

export default defined;

    `,
  },
  'features.common.castings.is.notDefined': {
    relativePath: 'features/common/castings/is/notDefined.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = (value: unknown) => {
  return value !== undefined && value !== null;
};

export default fn;
`,
  },
  'features.common.castings.is.notNull': {
    relativePath: 'features/common/castings/is/notNull.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = (value: unknown) => {
  return value !== null;
};

export default fn;
`,
  },

  'features.common.castings.is.notNullish': {
    relativePath: 'features/common/castings/is/notNullish.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = (value: unknown) => {
  return value !== null && value !== undefined;
};

export default fn;
`,
  },
  'features.common.castings.is.notUndefined': {
    relativePath: 'features/common/castings/is/notUndefined.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = (value: unknown) => {
  return value !== undefined;
};

export default fn;
`,
  },
  'features.common.castings.is.null': {
    relativePath: 'features/common/castings/is/null.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = (value: unknown): value is null => {
  return value === null;
};

export default fn;
`,
  },
  'features.common.castings.is.nullish': {
    relativePath: 'features/common/castings/is/nullish.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = (value: unknown): value is null | undefined => {
  return value === null || value === undefined;
};

export default fn;
`,
  },
  'features.common.castings.is.symbol': {
    relativePath: 'features/common/castings/is/symbol.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = (value: unknown): value is symbol => {
  return typeof value === 'symbol';
};

export default fn;
`,
  },
  'features.common.castings.is.undefined': {
    relativePath: 'features/common/castings/is/undefined.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = (value: unknown): value is undefined => {
  return value === undefined;
};

export default fn;
`,
  },
  'features.common.castings.never': {
    relativePath: 'features/common/castings/never.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/is/_default',
        kind: 'named',
        namedImports: ['isInstance'],
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';
import { isInstance } from '../../../globals/utils/is/_default';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<never>()({ is: isInstance(Error) });

export default fn;

    `,
  },
  'features.common.castings.neverify': {
    relativePath: 'features/common/castings/neverify.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Neverify'],
      },
      {
        moduleSpecifier: './_unknown',
        kind: 'default',
        default: '_unknown',
      },
    ],
    text: `import { Neverify } from '../../../globals/types';
import _unknown from './_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(value: T) => {
  return _unknown<Neverify<T>>(value);
};

export default fn;

    `,
  },
  'features.common.castings.null': {
    relativePath: 'features/common/castings/null.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/is/_default',
        kind: 'named',
        namedImports: ['isFn'],
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';
import { isFn } from '../../../globals/utils/is/_default';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<null>()({ is: isFn(null) });

export default fn;

    `,
  },
  'features.common.castings.partial.all': {
    relativePath: 'features/common/castings/partial/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './deep',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import deep from './deep';
import _index from './index';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  deep,
});

export default fn;

    `,
  },

  'features.common.castings.partial.deep': {
    relativePath: 'features/common/castings/partial/deep.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepPartial'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepPartial } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(value: T) => {
  return _unknown<DeepPartial<T>>(value);
};

export default fn;

    `,
  },
  'features.common.castings.partial.index': {
    relativePath: 'features/common/castings/partial/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(value: T) => {
  return _unknown<Partial<T>>(value);
};

export default fn;

    `,
  },
  'features.common.castings.primitive.all': {
    relativePath: 'features/common/castings/primitive/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './object/all',
        kind: 'default',
        default: 'object',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';
import object from './object/all';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  is,
  object,
});

export default fn;

    `,
  },
  'features.common.castings.primitive.index': {
    relativePath: 'features/common/castings/primitive/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Primitive'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { Primitive } from '../../../../globals/types';
import { castFn } from '../../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<Primitive>()();

export default fn;

    `,
  },
  'features.common.castings.primitive.is': {
    relativePath: 'features/common/castings/primitive/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/is/primitive',
        kind: 'named',
        namedImports: ['isPrimitive'],
      },
    ],
    text: `import { isPrimitive } from '../../../../globals/utils/is/primitive';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = isPrimitive;

export default fn;

    `,
  },
  'features.common.castings.primitive.object.all': {
    relativePath: 'features/common/castings/primitive/object/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  is,
});

export default fn;

    `,
  },
  'features.common.castings.primitive.object.index': {
    relativePath: 'features/common/castings/primitive/object/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['PrimitiveObject'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { PrimitiveObject } from '../../../../../globals/types';
import { castFn } from '../../../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<PrimitiveObject>()();

export default fn;

    `,
  },
  'features.common.castings.primitive.object.is': {
    relativePath: 'features/common/castings/primitive/object/is.ts',
    imports: [
      {
        moduleSpecifier:
          '../../../../../globals/utils/is/primitive.object',
        kind: 'named',
        namedImports: ['isPrimitiveObject'],
      },
    ],
    text: `import { isPrimitiveObject } from '../../../../../globals/utils/is/primitive.object';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = isPrimitiveObject;

export default fn;

    `,
  },
  'features.common.castings.readonly.all': {
    relativePath: 'features/common/castings/readonly/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './deep/all',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './not',
        kind: 'default',
        default: 'not',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import deep from './deep/all';
import _index from './index';
import not from './not';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  deep,
  not,
});

export default fn;

    `,
  },
  'features.common.castings.readonly.deep.all': {
    relativePath: 'features/common/castings/readonly/deep/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './not',
        kind: 'default',
        default: 'not',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import _index from './index';
import not from './not';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  not,
});

export default fn;

    `,
  },

  'features.common.castings.readonly.deep.index': {
    relativePath: 'features/common/castings/readonly/deep/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(value: T) =>
  _unknown<DeepReadonly<T>>(value);

export default fn;

    `,
  },
  'features.common.castings.readonly.deep.not': {
    relativePath: 'features/common/castings/readonly/deep/not.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepNotReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends object>(value: T) =>
  _unknown<DeepNotReadonly<T>>(value);

export default fn;

    `,
  },
  'features.common.castings.readonly.index': {
    relativePath: 'features/common/castings/readonly/index.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(value: T) => value as Readonly<T>;

export default fn;
`,
  },
  'features.common.castings.readonly.not': {
    relativePath: 'features/common/castings/readonly/not.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { NotReadonly } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(value: T) => _unknown<NotReadonly<T>>(value);

export default fn;

    `,
  },
  'features.common.castings.required.all': {
    relativePath: 'features/common/castings/required/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './deep',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import deep from './deep';
import _index from './index';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  deep,
});

export default fn;

    `,
  },
  'features.common.castings.required.deep': {
    relativePath: 'features/common/castings/required/deep.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepRequired'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepRequired } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object | undefined>(value: T) => {
  return _unknown<DeepRequired<T>>(value);
};

export default fn;

    `,
  },
  'features.common.castings.required.index': {
    relativePath: 'features/common/castings/required/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['NotUndefined'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { NotUndefined } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(value: T) => {
  return _unknown<NotUndefined<T>>(value);
};

export default fn;

    `,
  },
  'features.common.castings.symbol.all': {
    relativePath: 'features/common/castings/symbol/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  is,
});

export default fn;

    `,
  },
  'features.common.castings.symbol.index': {
    relativePath: 'features/common/castings/symbol/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { castFn } from '../../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<symbol>()();

export default fn;

    `,
  },
  'features.common.castings.symbol.is': {
    relativePath: 'features/common/castings/symbol/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/is/_default',
        kind: 'named',
        namedImports: ['isTypeFn'],
      },
    ],
    text: `import { isTypeFn } from '../../../../globals/utils/is/_default';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = isTypeFn('symbol');

export default fn;

    `,
  },

  'features.common.castings.undefined': {
    relativePath: 'features/common/castings/undefined.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/is/_default',
        kind: 'named',
        namedImports: ['isFn'],
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';
import { isFn } from '../../../globals/utils/is/_default';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<undefined>()({ is: isFn(undefined) });

export default fn;

    `,
  },
  'features.common.castings.undefiny': {
    relativePath: 'features/common/castings/undefiny.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(value?: T) => value;

export default fn;
`,
  },
  'features.common.index': {
    relativePath: 'features/common/index.ts',
    imports: [],
    text: `export * from './castings/all';
export * from './types';
export * from './typings/all';
`,
  },
  'features.common.types': {
    relativePath: 'features/common/types.ts',
    imports: [
      {
        moduleSpecifier: '../transform/types',
        kind: 'named',
        namedImports: ['TransformO'],
      },
      {
        moduleSpecifier: '../../globals/types',
        kind: 'named',
        namedImports: ['Fn', 'RecursiveArrayOf'],
      },
    ],
    text: `import { TransformO } from '../transform/types';
import { Fn, RecursiveArrayOf } from '../../globals/types';

/**
 * SingleOrRecursiveArrayOf type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type SingleOrRecursiveArrayOf<T> = T | RecursiveArrayOf<T>;

/**
 * SoRa type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type SoRa<T> = SingleOrRecursiveArrayOf<T>;

/**
 * Primitive2 type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Primitive2 = string | number | boolean;
/**
 * Primitive type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Primitive = Primitive2 | undefined | null;

/**
 * SingleOrArray type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type SingleOrArray<T> = T | T[] | ReadonlyArray<T>;

/**
 * SoA type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type SoA<T> = SingleOrArray<T>;

/**
 * PrimitiveObjectMap type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type PrimitiveObjectMap = {
  [key: Keys]: SoRa<_PrimitiveObject>;
};

type _PrimitiveObject = Primitive | PrimitiveObjectMap;

/**
 * A type that represents a primitive object, which can be a primitive value or an object
 *
 * @remark
 */
/**
 * PrimitiveObject type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type PrimitiveObject = SoRa<_PrimitiveObject>;

/**
 * NExtract type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type NExtract<T, U extends T> = Extract<T, U>;
/**
 * NExclude type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type NExclude<T, U extends T> = Exclude<T, U>;

/**
 * NotUndefined type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type NotUndefined<T> = Exclude<T, undefined>;

/**
 * Nu type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Nu<T> = NotUndefined<T>;

/**
 * Undefiny type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Undefiny<T> = T | undefined;

/**
 * Un type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Un<T> = Undefiny<T>;

/**
 * Cast type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Cast<A, B> = A extends B ? A : B;

/**
 * Keys type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Keys = keyof any;

/**
 * TypeStrings type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
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
 * KeyTypes type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type KeyTypes = {
  [K in Keys]: TypeStrings | Checker2 | KeyTypes;
};

/**
 * KeyTypesFrom type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type KeyTypesFrom<T extends KeyTypes> = {
  [K in keyof T]: T[K] extends KeyTypes
    ? KeyTypesFrom<T[K]>
    : T[K] extends TypeStrings
      ? TransformO<T[K]>
      : T[K] extends Checker2<infer R>
        ? R
        : unknown;
};

/**
 * NonN type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type NonN<T> = T extends undefined | null ? any : NonNullable<T>;

/**
 * Defaulted type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Defaulted<T, U extends NonN<T>> = undefined extends T
  ? U
  : null extends T
    ? U
    : never extends T
      ? U
      : T;

// export type Defaulted<T, U extends NonN<T>> = T extends
//   | undefined
//   | never
//   | null
//   ? U
//   : T;

/**
 * UnionKeys type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type UnionKeys<U> = U extends Record<infer K, any> ? K : never;

/**
 * _UnionToIntersection1 type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type _UnionToIntersection1<U> = boolean extends U
  ? U
  : (U extends any ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

/**
 * _UnionToIntersection2 type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type _UnionToIntersection2<U> = {
  [K in UnionKeys<U>]: U extends Record<K, infer T> ? T : never;
};

/**
 * UnionToIntersection type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type UnionToIntersection<U> = _UnionToIntersection2<
  _UnionToIntersection1<U>
>;

/**
 * UnionOmit type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type UnionOmit<T, K extends Keys> = T extends any
  ? Omit<T, K>
  : never;

/**
 * UnionNOmit type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type UnionNOmit<T, K extends keyof T> = UnionOmit<T, K>;

/**
 * LastOfUnion type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type LastOfUnion<T> = (
  (T extends any ? (x: () => T) => void : never) extends (
    x: infer I,
  ) => void
    ? I
    : never
) extends () => infer U
  ? U
  : never;

/**
 * UnionToTuple type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type UnionToTuple<T, A extends any[] = []> = [T] extends [never]
  ? A
  : UnionToTuple<Exclude<T, LastOfUnion<T>>, [LastOfUnion<T>, ...A]>;

// #endregion

/**
 * Checker2 type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Checker2<T = unknown> = (value: unknown) => value is T;
// | ((value: unknown) => boolean);

/**
 * Equals type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Equals<T, U> = T extends U
  ? U extends T
    ? true
    : false
  : false;

/**
 * Classe type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Classe = {
  [Symbol.hasInstance]: Fn<any, boolean>;
};

    `,
  },
  'features.common.typings.all': {
    relativePath: 'features/common/typings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './any',
        kind: 'default',
        default: 'any',
      },
      {
        moduleSpecifier: './const',
        kind: 'default',
        default: '_const',
      },
      {
        moduleSpecifier: './date',
        kind: 'default',
        default: 'date',
      },
      {
        moduleSpecifier: './defaulted',
        kind: 'default',
        default: 'defaulted',
      },
      {
        moduleSpecifier: './exclude/all',
        kind: 'default',
        default: 'exclude',
      },
      {
        moduleSpecifier: './extract/all',
        kind: 'default',
        default: 'extract',
      },
      {
        moduleSpecifier: './identity',
        kind: 'default',
        default: 'identity',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './keys',
        kind: 'default',
        default: 'keys',
      },
      {
        moduleSpecifier: './never',
        kind: 'default',
        default: 'never',
      },
      {
        moduleSpecifier: './neverify',
        kind: 'default',
        default: 'neverify',
      },
      {
        moduleSpecifier: './null',
        kind: 'default',
        default: '_null',
      },
      {
        moduleSpecifier: './partial/all',
        kind: 'default',
        default: 'partial',
      },
      {
        moduleSpecifier: './primitive/all',
        kind: 'default',
        default: 'primitive',
      },
      {
        moduleSpecifier: './readonly/all',
        kind: 'default',
        default: 'readonly',
      },
      {
        moduleSpecifier: './required/all',
        kind: 'default',
        default: 'required',
      },
      {
        moduleSpecifier: './symbol',
        kind: 'default',
        default: 'symbol',
      },
      {
        moduleSpecifier: './undefined',
        kind: 'default',
        default: '_undefined',
      },
      {
        moduleSpecifier: './undefiny',
        kind: 'default',
        default: 'undefiny',
      },
      {
        moduleSpecifier: './union',
        kind: 'default',
        default: 'union',
      },
      {
        moduleSpecifier: './unknown',
        kind: 'default',
        default: 'unknown',
      },
    ],
    text: `import { expandFn } from '../../../globals/utils/expandFn';
import any from './any';
import _const from './const';
import date from './date';
import defaulted from './defaulted';
import exclude from './exclude/all';
import extract from './extract/all';
import identity from './identity';
import _index from './index';
import keys from './keys';
import never from './never';
import neverify from './neverify';
import _null from './null';
import partial from './partial/all';
import primitive from './primitive/all';
import readonly from './readonly/all';
import required from './required/all';
import symbol from './symbol';
import _undefined from './undefined';
import undefiny from './undefiny';
import union from './union';
import unknown from './unknown';

/**
 * typings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const typings = expandFn(_index, {
  partial,
  const: _const,
  identity,
  unknown,
  neverify,
  any,
  required,
  readonly,
  primitive,
  symbol,
  date,
  undefiny,
  extract,
  exclude,
  union,
  null: _null,
  undefined: _undefined,
  never,
  keys,
  defaulted,
});

    `,
  },
  'features.common.typings.any': {
    relativePath: 'features/common/typings/any.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<any>()();

export default fn;

    `,
  },
  'features.common.typings.const': {
    relativePath: 'features/common/typings/const.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T>(_?: T) => _unknown<T>();

export default fn;

    `,
  },
  'features.common.typings.date': {
    relativePath: 'features/common/typings/date.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<Date>()();

export default fn;

    `,
  },
  'features.common.typings.defaulted': {
    relativePath: 'features/common/typings/defaulted.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Defaulted', 'NonN'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Defaulted, NonN } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T, U extends NonN<T>>(_?: T, __?: U) =>
  _unknown<Defaulted<T, U>>();

export default fn;

    `,
  },
  'features.common.typings.exclude.all': {
    relativePath: 'features/common/typings/exclude/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './const',
        kind: 'default',
        default: 'const_',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'exclude',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import const_ from './const';
import exclude from './index';

/**
 * excludeTyping const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const excludeTyping = expandFn(exclude, {
  const: const_,
});

export default excludeTyping;

    `,
  },

  'features.common.typings.exclude.const': {
    relativePath: 'features/common/typings/exclude/const.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T, const U extends T[]>(_?: T, ...__: U) =>
  _unknown<Exclude<T, U[number]>>();

export default fn;

    `,
  },
  'features.common.typings.exclude.index': {
    relativePath: 'features/common/typings/exclude/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T, U extends any[]>(_?: T, ...__: U) =>
  _unknown<Exclude<T, U[number]>>();

export default fn;

    `,
  },
  'features.common.typings.extract.all': {
    relativePath: 'features/common/typings/extract/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './const',
        kind: 'default',
        default: 'const_',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'extract',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import const_ from './const';
import extract from './index';

/**
 * extractTyping const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const extractTyping = expandFn(extract, {
  const: const_,
});

export default extractTyping;

    `,
  },
  'features.common.typings.extract.const': {
    relativePath: 'features/common/typings/extract/const.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T, const U extends T[]>(_?: T, ...__: U) =>
  _unknown<Extract<T, U[number]>>();

export default fn;

    `,
  },
  'features.common.typings.extract.index': {
    relativePath: 'features/common/typings/extract/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T, U extends any[]>(_?: T, ...__: U) =>
  _unknown<Extract<T, U[number]>>();

export default fn;

    `,
  },
  'features.common.typings.identity': {
    relativePath: 'features/common/typings/identity.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(_?: T) => _unknown<T>();

export default fn;

    `,
  },
  'features.common.typings.index': {
    relativePath: 'features/common/typings/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<unknown>()();

export default fn;

    `,
  },
  'features.common.typings.keys': {
    relativePath: 'features/common/typings/keys.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Keys'],
      },
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { Keys } from '../../../globals/types';
import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<Keys>()();

export default fn;

    `,
  },
  'features.common.typings.never': {
    relativePath: 'features/common/typings/never.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<never>()();

export default fn;

    `,
  },
  'features.common.typings.neverify': {
    relativePath: 'features/common/typings/neverify.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(_?: T) => _unknown<T extends never ? true : false>();

export default fn;

    `,
  },

  'features.common.typings.null': {
    relativePath: 'features/common/typings/null.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<null>()();

export default fn;

    `,
  },
  'features.common.typings.partial.all': {
    relativePath: 'features/common/typings/partial/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './deep',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import deep from './deep';
import _index from './index';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  deep,
});

export default fn;

    `,
  },
  'features.common.typings.partial.deep': {
    relativePath: 'features/common/typings/partial/deep.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepPartial'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepPartial } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<DeepPartial<T>>();

export default fn;

    `,
  },
  'features.common.typings.partial.index': {
    relativePath: 'features/common/typings/partial/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<Partial<T>>();

export default fn;

    `,
  },
  'features.common.typings.primitive.all': {
    relativePath: 'features/common/typings/primitive/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './object',
        kind: 'default',
        default: 'object',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import _index from './index';
import object from './object';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, { object });

export default fn;

    `,
  },
  'features.common.typings.primitive.index': {
    relativePath: 'features/common/typings/primitive/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Primitive'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { Primitive } from '../../../../globals/types';
import { typeFn } from '../../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<Primitive>()();

export default fn;

    `,
  },
  'features.common.typings.primitive.object': {
    relativePath: 'features/common/typings/primitive/object.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['PrimitiveObject'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { PrimitiveObject } from '../../../../globals/types';
import { typeFn } from '../../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<PrimitiveObject>()();

export default fn;

    `,
  },
  'features.common.typings.readonly.all': {
    relativePath: 'features/common/typings/readonly/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './deep/all',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './not/all',
        kind: 'default',
        default: 'not',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import deep from './deep/all';
import _index from './index';
import is from './is';
import not from './not/all';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  deep,
  not,
  is,
});

export default fn;

    `,
  },
  'features.common.typings.readonly.deep.all': {
    relativePath: 'features/common/typings/readonly/deep/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'deepReadonly',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './not/all',
        kind: 'default',
        default: 'not',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import deepReadonly from './index';
import is from './is';
import not from './not/all';

/**
 * deep const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const deep = expandFn(deepReadonly, {
  not,
  is,
});

export default deep;

    `,
  },
  'features.common.typings.readonly.deep.index': {
    relativePath: 'features/common/typings/readonly/deep/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<DeepReadonly<T>>();

export default fn;

    `,
  },

  'features.common.typings.readonly.deep.is': {
    relativePath: 'features/common/typings/readonly/deep/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) =>
  _unknown<T extends DeepReadonly<T> ? true : false>();

export default fn;

    `,
  },
  'features.common.typings.readonly.deep.not.all': {
    relativePath: 'features/common/typings/readonly/deep/not/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';

/**
 * deepNot const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const deepNot = expandFn(_index, {
  is,
});

export default deepNot;

    `,
  },
  'features.common.typings.readonly.deep.not.index': {
    relativePath: 'features/common/typings/readonly/deep/not/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '../../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepNotReadonly } from '../../../../../../globals/types';
import { _unknown } from '../../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<DeepNotReadonly<T>>();

export default fn;

    `,
  },
  'features.common.typings.readonly.deep.not.is': {
    relativePath: 'features/common/typings/readonly/deep/not/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '../../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepNotReadonly } from '../../../../../../globals/types';
import { _unknown } from '../../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) =>
  _unknown<T extends DeepNotReadonly<T> ? true : false>();

export default fn;

    `,
  },
  'features.common.typings.readonly.index': {
    relativePath: 'features/common/typings/readonly/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<Readonly<T>>();

export default fn;

    `,
  },
  'features.common.typings.readonly.is': {
    relativePath: 'features/common/typings/readonly/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) =>
  _unknown<T extends Readonly<T> ? true : false>();

export default fn;

    `,
  },
  'features.common.typings.readonly.not.all': {
    relativePath: 'features/common/typings/readonly/not/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';

/**
 * not const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const not = expandFn(_index, {
  is,
});

export default not;

    `,
  },
  'features.common.typings.readonly.not.index': {
    relativePath: 'features/common/typings/readonly/not/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { NotReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<NotReadonly<T>>();

export default fn;

    `,
  },
  'features.common.typings.readonly.not.is': {
    relativePath: 'features/common/typings/readonly/not/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { NotReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) =>
  _unknown<T extends NotReadonly<T> ? true : false>();

export default fn;

    `,
  },
  'features.common.typings.required.all': {
    relativePath: 'features/common/typings/required/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './deep',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'required',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import deep from './deep';
import required from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(required, {
  deep,
  is,
});

export default fn;

    `,
  },

  'features.common.typings.required.deep': {
    relativePath: 'features/common/typings/required/deep.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepRequired'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepRequired } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<DeepRequired<T>>();

export default fn;

    `,
  },
  'features.common.typings.required.index': {
    relativePath: 'features/common/typings/required/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<Required<T>>();

export default fn;

    `,
  },
  'features.common.typings.required.is': {
    relativePath: 'features/common/typings/required/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(_: T) =>
  _unknown<T extends null | undefined ? false : true>();

export default fn;

    `,
  },
  'features.common.typings.symbol': {
    relativePath: 'features/common/typings/symbol.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<symbol>()();

export default fn;

    `,
  },
  'features.common.typings.undefined': {
    relativePath: 'features/common/typings/undefined.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<undefined>()();

export default fn;

    `,
  },
  'features.common.typings.undefiny': {
    relativePath: 'features/common/typings/undefiny.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(_?: T) => _unknown<T | undefined>();

export default fn;

    `,
  },
  'features.common.typings.union': {
    relativePath: 'features/common/typings/union.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends any[]>(..._: T) => _unknown<T[number]>();

export default fn;

    `,
  },
  'features.common.typings.unknown': {
    relativePath: 'features/common/typings/unknown.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<unknown>()();

export default fn;

    `,
  },
  'features.functions.castings': {
    relativePath: 'features/functions/castings.ts',
    imports: [
      {
        moduleSpecifier: '../../globals/types',
        kind: 'named',
        namedImports: ['Checker', 'Checker2', 'Fn'],
      },
      {
        moduleSpecifier: '../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: '../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: '../../globals/utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    text: `import { Checker, Checker2, Fn } from '../../globals/types';
import { _unknown } from '../../globals/utils/_unknown';
import { castFn } from '../../globals/utils/castFn';
import { expandFn } from '../../globals/utils/expandFn';
import { identity } from '../../globals/utils/identity';

/**
 * castings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const castings = castFn()({
  is: expandFn(
    (value: unknown): value is Fn => {
      return typeof value === 'function';
    },
    {
      strict: <T extends any[] = any[], R = any>(
        fn: Checker<Fn<T, R>>,
      ) => {
        return (value: unknown): value is Fn<T, R> =>
          typeof value === 'function' && fn(value);
      },
    },
  ),

  forceCast: <T extends any[], R = any>(value: unknown) => {
    return _unknown<Fn<T, R>>(value);
  },

  dynamic: <T extends any[], R = any>(..._: [...T, R]) =>
    identity<Fn<T, R>>,

  checker: castFn<Checker>()({
    /**
     * Very low
     * Checks if value is a function with one argument
     * @param value value to check
     * @returns true if value is a function with one argument
     */
    is: <T = unknown>(value: unknown): value is Checker2<T> => {
      return (
        typeof value === 'function' &&
        value.length === 1 &&
        !/^-|||-s*class-|||-s+/.test(value.toString())
      );
    },

    byType: expandFn(<T>(checker: Checker2<T>) => checker, {
      forceCast: <T>(value: Checker) => _unknown<Checker2<T>>(value),
    }),
  }),
});

    `,
  },
  'features.functions.castings.all': {
    relativePath: 'features/functions/castings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './checker/all',
        kind: 'default',
        default: 'checker',
      },
      {
        moduleSpecifier: './dynamic',
        kind: 'default',
        default: 'dynamic',
      },
      {
        moduleSpecifier: './forceCast',
        kind: 'default',
        default: 'forceCast',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is/all',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../globals/utils/expandFn';
import checker from './checker/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import _index from './index';
import is from './is/all';

/**
 * castings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const castings = expandFn(_index, {
  is,
  forceCast,
  dynamic,
  checker,
});

export default castings;

    `,
  },

  'features.functions.castings.checker.all': {
    relativePath: 'features/functions/castings/checker/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './byType/all',
        kind: 'default',
        default: 'byType',
      },
      {
        moduleSpecifier: './forceCast',
        kind: 'default',
        default: 'forceCast',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import byType from './byType/all';
import forceCast from './forceCast';
import _index from './index';
import is from './is';

/**
 * checker const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const checker = expandFn(_index, {
  forceCast,
  byType,
  is,
});

export default checker;

    `,
  },
  'features.functions.castings.checker.byType.all': {
    relativePath: 'features/functions/castings/checker/byType/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './cast',
        kind: 'default',
        default: 'cast',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import cast from './cast';
import _index from './index';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  cast,
});

export default fn;

    `,
  },
  'features.functions.castings.checker.byType.cast': {
    relativePath: 'features/functions/castings/checker/byType/cast.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['Checker', 'Checker2'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Checker, Checker2 } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(value: Checker) => _unknown<Checker2<T>>(value);

export default fn;

    `,
  },
  'features.functions.castings.checker.byType.index': {
    relativePath: 'features/functions/castings/checker/byType/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['Checker2'],
      },
    ],
    text: `import { Checker2 } from '../../../../../globals/types';

/**
 * byType const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const byType = <T>(checker: Checker2<T>) => checker;

export default byType;

    `,
  },
  'features.functions.castings.checker.forceCast': {
    relativePath: 'features/functions/castings/checker/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Checker', 'Checker2'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Checker, Checker2 } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * forceCast const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const forceCast = <T>(value: Checker) => _unknown<Checker2<T>>(value);

export default forceCast;

    `,
  },
  'features.functions.castings.checker.index': {
    relativePath: 'features/functions/castings/checker/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Checker'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { Checker } from '../../../../globals/types';
import { castFn } from '../../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<Checker>()();

export default fn;

    `,
  },
  'features.functions.castings.checker.is': {
    relativePath: 'features/functions/castings/checker/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Checker2'],
      },
    ],
    text: `import { Checker2 } from '../../../../globals/types';

/**
 * Very low
 * Checks if value is a function with one argument
 * @param value value to check
 * @returns true if value is a function with one argument
 */
/**
 * is const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const is = <T = unknown>(value: unknown): value is Checker2<T> => {
  return (
    typeof value === 'function' &&
    value.length === 1 &&
    !/^-|||-s*class-|||-s+/.test(value.toString())
  );
};

export default is;

    `,
  },
  'features.functions.castings.dynamic': {
    relativePath: 'features/functions/castings/dynamic.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Fn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    text: `import { Fn } from '../../../globals/types';
import { identity } from '../../../globals/utils/identity';

/**
 * dynamic const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const dynamic = <T extends any[], R = any>(..._: [...T, R]) =>
  identity<Fn<T, R>>;

export default dynamic;

    `,
  },
  'features.functions.castings.forceCast': {
    relativePath: 'features/functions/castings/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Fn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Fn } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * forceCast const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const forceCast = <T extends any[], R = any>(value: unknown) => {
  return _unknown<Fn<T, R>>(value);
};

export default forceCast;

    `,
  },
  'features.functions.castings.index': {
    relativePath: 'features/functions/castings/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Fn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    text: `import { Fn } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';
import { castFn } from '../../../globals/utils/castFn';
import { expandFn } from '../../../globals/utils/expandFn';
import { identity } from '../../../globals/utils/identity';

/**
 * castings const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const castings = castFn()({
  is: expandFn(
    (value: unknown): value is Fn => {
      return typeof value === 'function';
    },
    {
      strict: <T extends any[] = any[], R = any>(
        fn: (value: Fn<T, R>) => boolean,
      ) => {
        return (value: unknown): value is Fn<T, R> =>
          typeof value === 'function' && fn(value as Fn<T, R>);
      },
    },
  ),

  forceCast: <T extends any[], R = any>(value: unknown) => {
    return _unknown<Fn<T, R>>(value);
  },

  dynamic: <T extends any[], R = any>(..._: [...T, R]) =>
    identity<Fn<T, R>>,
});

export default castings;

    `,
  },

  'features.functions.castings.is.all': {
    relativePath: 'features/functions/castings/is/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './strict',
        kind: 'default',
        default: 'strict',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import _index from './index';
import strict from './strict';

/**
 * is const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const is = expandFn(_index, {
  strict,
});

export default is;

    `,
  },
  'features.functions.castings.is.index': {
    relativePath: 'features/functions/castings/is/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Fn'],
      },
    ],
    text: `import { Fn } from '../../../../globals/types';

/**
 * is const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const is = (value: unknown): value is Fn => {
  return typeof value === 'function';
};

export default is;

    `,
  },
  'features.functions.castings.is.strict': {
    relativePath: 'features/functions/castings/is/strict.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Fn'],
      },
    ],
    text: `import { Fn } from '../../../../globals/types';

/**
 * strict const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const strict = <T extends any[] = any[], R = any>(
  fn: (value: Fn<T, R>) => boolean,
) => {
  return (value: unknown): value is Fn<T, R> =>
    typeof value === 'function' && fn(value as Fn<T, R>);
};

export default strict;

    `,
  },
  'features.functions.functions.clone': {
    relativePath: 'features/functions/functions/clone.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['PrimitiveObject'],
      },
    ],
    text: `import { PrimitiveObject } from '../../../globals/types';

/**
 * FormatKey type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type FormatKey<T = any> = (key: Extract<keyof T, string>) => string;

/**
 * Creates a deep clone of an object or array, preserving its structure and values.
 *
 *
 * @param value of type {@linkcode PrimitiveObject} The value to deep clone, which can be an object, array, or primitive.
 * @param formatKey A function to format the keys of the cloned object. If not provided, keys will remain unchanged.
 * @param refs A map to keep track of already cloned objects to handle circular references.
 * This is used to prevent infinite loops when cloning objects that reference each other.
 * @returns A deep clone of the input value, preserving the structure and values of the original object or array.
 *
 * Inspired by the "deep-clone" npm {@link https://www.npmjs.com/package/deep-clone|library},
 * @see the {@link https://github.com/thebearingedge/deep-clone/blob/main/src/deep-clone.ts|implementation} for more details.
 */
/**
 * default function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export default function deepClone<I extends PrimitiveObject>(
  value: I,
  refs = new Map<I, I>(),
): I {
  const ref = refs.get(value);
  if (typeof ref !== 'undefined') return ref;

  if (Array.isArray(value)) {
    const clone: any = [];
    refs.set(value, clone);

    for (let i = 0; i < value.length; i++) {
      clone[i] = deepClone(value[i], refs as any);
    }

    return clone as I;
  }

  if (!(value instanceof Object)) return value as unknown as I;

  const clone: Record<string, PrimitiveObject> = {};
  refs.set(value, clone as I);
  const keys = Object.keys(value);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    clone[key] = deepClone((value as any)[keys[i]], refs);
  }

  if (Object.isFrozen(value)) {
    Object.freeze(clone);
  }

  if (Object.isSealed(value)) {
    Object.seal(clone);
  }

  return clone as I;
}

    `,
  },
  'features.functions.functions.index': {
    relativePath: 'features/functions/functions/index.ts',
    imports: [],
    text: `export * from './clone';
export * from './partialCall';
`,
  },
  'features.functions.functions.partialCall': {
    relativePath: 'features/functions/functions/partialCall.ts',
    imports: [
      {
        moduleSpecifier: '../../arrays/types',
        kind: 'named',
        namedImports: ['AnyArray'],
      },
      {
        moduleSpecifier: '../types',
        kind: 'named',
        namedImports: ['Fn'],
      },
    ],
    text: `import { AnyArray } from '../../arrays/types';
import { Fn } from '../types';

type PartialCall_F = <
  T extends AnyArray = AnyArray,
  U extends AnyArray = AnyArray,
  R = any,
>(
  f: Fn<[...T, ...U], R>,
  ...headArgs: T
) => (...tailArgs: U) => R;

/**
 * partialCall variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const partialCall: PartialCall_F = (f, ...headArgs) => {
  return (...tailArgs) => f(...headArgs, ...tailArgs);
};

    `,
  },
  'features.functions.index': {
    relativePath: 'features/functions/index.ts',
    imports: [],
    text: `export * from './castings';
export * as functions from './functions';
export * from './types';
export * from './typings';
`,
  },
  'features.functions.types': {
    relativePath: 'features/functions/types.ts',
    imports: [],
    text: `/**
 * Fn type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Fn<Args extends any[] = any[], R = any> = (...args: Args) => R;

/**
 * FnBasic type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type FnBasic<Main extends Fn, Tr extends object> = Tr & Main;

/**
 * Checker type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Checker<T = unknown> =
  | ((value: unknown) => value is T)
  | Fn<[unknown], boolean>;
`,
  },
  'features.functions.typings': {
    relativePath: 'features/functions/typings.ts',
    imports: [],
    text: `export { typings } from './typings/all';
`,
  },
  'features.functions.typings.all': {
    relativePath: 'features/functions/typings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './checker/all',
        kind: 'default',
        default: 'checker',
      },
      {
        moduleSpecifier: './dynamic',
        kind: 'default',
        default: 'dynamic',
      },
      {
        moduleSpecifier: './forceCast',
        kind: 'default',
        default: 'forceCast',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { expandFn } from '../../../globals/utils/expandFn';
import checker from './checker/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import _index from './index';

/**
 * typings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const typings = expandFn(_index, {
  dynamic,
  forceCast,
  checker,
});

    `,
  },

  'features.functions.typings.checker.all': {
    relativePath: 'features/functions/typings/checker/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './byType/all',
        kind: 'default',
        default: 'byType',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import byType from './byType/all';
import _index from './index';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  byType,
});

export default fn;

    `,
  },
  'features.functions.typings.checker.byType.all': {
    relativePath: 'features/functions/typings/checker/byType/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './cast',
        kind: 'default',
        default: 'cast',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import cast from './cast';
import _index from './index';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  cast,
});

export default fn;

    `,
  },
  'features.functions.typings.checker.byType.cast': {
    relativePath: 'features/functions/typings/checker/byType/cast.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['Checker', 'Checker2'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Checker, Checker2 } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(_?: Checker) => _unknown<Checker2<T>>();

export default fn;

    `,
  },
  'features.functions.typings.checker.byType.index': {
    relativePath: 'features/functions/typings/checker/byType/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['Checker2'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Checker2 } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * byType const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const byType = <T>(_?: Checker2<T>) => _unknown<Checker2<T>>();

export default byType;

    `,
  },
  'features.functions.typings.checker.index': {
    relativePath: 'features/functions/typings/checker/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Checker'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { Checker } from '../../../../globals/types';
import { typeFn } from '../../../../globals/utils/typeFn';

/**
 * checker const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const checker = typeFn<Checker>()();

export default checker;

    `,
  },
  'features.functions.typings.dynamic': {
    relativePath: 'features/functions/typings/dynamic.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Fn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Fn } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * dynamic const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const dynamic = <T extends any[], R = any>(..._: [...T, R]) =>
  _unknown<Fn<T, R>>();

export default dynamic;

    `,
  },
  'features.functions.typings.forceCast': {
    relativePath: 'features/functions/typings/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Fn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Fn } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * forceCast const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const forceCast = <T extends any[], R = any>(_?: unknown) => {
  return _unknown<Fn<T, R>>();
};

export default forceCast;

    `,
  },
  'features.functions.typings.index': {
    relativePath: 'features/functions/typings/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Fn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { Fn } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';
import { typeFn } from '../../../globals/utils/typeFn';

/**
 * typings const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const typings = typeFn<Fn>()({
  dynamic: <T extends any[], R = any>(..._: [...T, R]) =>
    _unknown<Fn<T, R>>(),

  forceCast: <T extends any[], R = any>(_?: unknown) => {
    return _unknown<Fn<T, R>>();
  },
});

export default typings;

    `,
  },
  'features.index': {
    relativePath: 'features/index.ts',
    imports: [],
    text: `export * as arrays from './arrays';
export * as booleans from './booleans';
export * as common from './common';
export * as functions from './functions';
export * as numbers from './numbers';
export * as objects from './objects';
export * as promises from './promises';
export * as strings from './strings';
export * as transformers from './transform';
export * as typescript from './typescript';
`,
  },
  'features.numbers.castings.MINUS_1': {
    relativePath: 'features/numbers/castings/MINUS_1.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    text: `import { identity } from '../../../globals/utils/identity';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = identity(-1);

export default fn;

    `,
  },

  'features.numbers.castings.ONE': {
    relativePath: 'features/numbers/castings/ONE.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    text: `import { identity } from '../../../globals/utils/identity';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = identity(1);

export default fn;

    `,
  },
  'features.numbers.castings.ZERO': {
    relativePath: 'features/numbers/castings/ZERO.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    text: `import { identity } from '../../../globals/utils/identity';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = identity(0);

export default fn;

    `,
  },
  'features.numbers.castings.all': {
    relativePath: 'features/numbers/castings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './bigint',
        kind: 'default',
        default: 'bigint',
      },
      {
        moduleSpecifier: './digit',
        kind: 'default',
        default: 'digit',
      },
      {
        moduleSpecifier: './getString',
        kind: 'default',
        default: 'getString',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './MINUS_1',
        kind: 'default',
        default: 'MINUS_1',
      },
      {
        moduleSpecifier: './ONE',
        kind: 'default',
        default: 'ONE',
      },
      {
        moduleSpecifier: './type',
        kind: 'default',
        default: 'type',
      },
      {
        moduleSpecifier: './ZERO',
        kind: 'default',
        default: 'ZERO',
      },
    ],
    text: `import { expandFn } from '../../../globals/utils/expandFn';
import bigint from './bigint';
import digit from './digit';
import getString from './getString';
import _index from './index';
import is from './is';
import MINUS_1 from './MINUS_1';
import ONE from './ONE';
import type from './type';
import ZERO from './ZERO';

/**
 * castings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const castings = expandFn(_index, {
  is,
  getString,
  digit,
  type,
  ZERO,
  ONE,
  MINUS_1,
  bigint,
});

    `,
  },
  'features.numbers.castings.bigint': {
    relativePath: 'features/numbers/castings/bigint.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/is/_default',
        kind: 'named',
        namedImports: ['isTypeFn'],
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';
import { isTypeFn } from '../../../globals/utils/is/_default';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<bigint>()({
  is: isTypeFn('bigint'),
});

export default fn;

    `,
  },
  'features.numbers.castings.digit': {
    relativePath: 'features/numbers/castings/digit.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '../constants',
        kind: 'named',
        namedImports: ['DIGITS'],
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';
import { DIGITS } from '../constants';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn.withValues(...DIGITS);

export default fn;

    `,
  },
  'features.numbers.castings.getString': {
    relativePath: 'features/numbers/castings/getString.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends number | string>(arg: T): \`$-|||-{T}\` => \`$-|||-{arg}\`;

export default fn;
`,
  },
  'features.numbers.castings.index': {
    relativePath: 'features/numbers/castings/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<number>()();

export default fn;

    `,
  },
  'features.numbers.castings.is': {
    relativePath: 'features/numbers/castings/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/is/_default',
        kind: 'named',
        namedImports: ['isTypeFn'],
      },
    ],
    text: `import { isTypeFn } from '../../../globals/utils/is/_default';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = isTypeFn('number');

export default fn;

    `,
  },
  'features.numbers.castings.type': {
    relativePath: 'features/numbers/castings/type.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = Number;

export default fn;
`,
  },
  'features.numbers.constants': {
    relativePath: 'features/numbers/constants.ts',
    imports: [],
    text: `/**
 * DIGITS variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
`,
  },

  'features.numbers.index': {
    relativePath: 'features/numbers/index.ts',
    imports: [],
    text: `export * from './castings/all';
export * from './types';
export * from './typings/all';
`,
  },
  'features.numbers.types': {
    relativePath: 'features/numbers/types.ts',
    imports: [
      {
        moduleSpecifier: './constants',
        kind: 'named',
        namedImports: ['DIGITS'],
      },
    ],
    text: `import { DIGITS } from './constants';

/**
 * ToString type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type ToString<T extends number | string> = \`$-|||-{T}\`;

/**
 * Digit type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Digit = (typeof DIGITS)[number];

    `,
  },
  'features.numbers.typings.MINUS_1': {
    relativePath: 'features/numbers/typings/MINUS_1.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = () => _unknown<-1>();

export default fn;

    `,
  },
  'features.numbers.typings.ONE': {
    relativePath: 'features/numbers/typings/ONE.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = () => _unknown<1>();

export default fn;

    `,
  },
  'features.numbers.typings.ZERO': {
    relativePath: 'features/numbers/typings/ZERO.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = () => _unknown<0>();

export default fn;

    `,
  },
  'features.numbers.typings.all': {
    relativePath: 'features/numbers/typings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './bigint',
        kind: 'default',
        default: 'bigint',
      },
      {
        moduleSpecifier: './digit',
        kind: 'default',
        default: 'digit',
      },
      {
        moduleSpecifier: './getString',
        kind: 'default',
        default: 'getString',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './MINUS_1',
        kind: 'default',
        default: 'MINUS_1',
      },
      {
        moduleSpecifier: './ONE',
        kind: 'default',
        default: 'ONE',
      },
      {
        moduleSpecifier: './ZERO',
        kind: 'default',
        default: 'ZERO',
      },
    ],
    text: `import { expandFn } from '../../../globals/utils/expandFn';
import bigint from './bigint';
import digit from './digit';
import getString from './getString';
import _index from './index';
import MINUS_1 from './MINUS_1';
import ONE from './ONE';
import ZERO from './ZERO';

/**
 * typings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const typings = expandFn(_index, {
  getString,
  digit,
  ZERO,
  ONE,
  MINUS_1,
  bigint,
});

    `,
  },
  'features.numbers.typings.bigint': {
    relativePath: 'features/numbers/typings/bigint.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<bigint>()();

export default fn;

    `,
  },
  'features.numbers.typings.digit': {
    relativePath: 'features/numbers/typings/digit.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Digit'],
      },
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { Digit } from '../../../globals/types';
import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<Digit>()();

export default fn;

    `,
  },
  'features.numbers.typings.getString': {
    relativePath: 'features/numbers/typings/getString.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends number>(_: T) => _unknown<\`$-|||-{T}\`>();

export default fn;

    `,
  },
  'features.numbers.typings.index': {
    relativePath: 'features/numbers/typings/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<number>()();

export default fn;

    `,
  },

  'features.objects.castings.all': {
    relativePath: 'features/objects/castings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './byKey',
        kind: 'default',
        default: 'byKey',
      },
      {
        moduleSpecifier: './entries',
        kind: 'default',
        default: 'entries',
      },
      {
        moduleSpecifier: './freeze/all',
        kind: 'default',
        default: 'freeze',
      },
      {
        moduleSpecifier: './hasKeys/all',
        kind: 'default',
        default: 'hasKeys',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './keyTypes/all',
        kind: 'default',
        default: 'keyTypes',
      },
      {
        moduleSpecifier: './keysOf',
        kind: 'default',
        default: 'keys',
      },
      {
        moduleSpecifier: './omit/all',
        kind: 'default',
        default: 'omit',
      },
      {
        moduleSpecifier: './pick/all',
        kind: 'default',
        default: 'pick',
      },
      {
        moduleSpecifier: './primitive',
        kind: 'default',
        default: 'primitive',
      },
      {
        moduleSpecifier: './ra',
        kind: 'default',
        default: 'ra',
      },
      {
        moduleSpecifier: './readonly/all',
        kind: 'default',
        default: 'readonly',
      },
      {
        moduleSpecifier: './require/all',
        kind: 'default',
        default: 'require',
      },
      {
        moduleSpecifier: './reverse',
        kind: 'default',
        default: 'reverse',
      },
      {
        moduleSpecifier: './ru',
        kind: 'default',
        default: 'ru',
      },
      {
        moduleSpecifier: './trueObject',
        kind: 'default',
        default: 'trueObject',
      },
      {
        moduleSpecifier: './type',
        kind: 'default',
        default: 'type',
      },
      {
        moduleSpecifier: './values',
        kind: 'default',
        default: 'values',
      },
    ],
    text: `import { expandFn } from '../../../globals/utils/expandFn';
import byKey from './byKey';
import entries from './entries';
import freeze from './freeze/all';
import hasKeys from './hasKeys/all';
import _index from './index';
import keyTypes from './keyTypes/all';
import keys from './keysOf';
import omit from './omit/all';
import pick from './pick/all';
import primitive from './primitive';
import ra from './ra';
import readonly from './readonly/all';
import require from './require/all';
import reverse from './reverse';
import ru from './ru';
import trueObject from './trueObject';
import type from './type';
import values from './values';

/**
 * castings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const castings = expandFn(_index, {
  trueObject,
  type,
  keys,
  values,
  entries,
  byKey,
  hasKeys,
  keyTypes,
  omit,
  reverse,
  readonly,
  freeze,
  require,
  pick,
  ru,
  ra,
  primitive,
});

    `,
  },
  'features.objects.castings.byKey': {
    relativePath: 'features/objects/castings/byKey.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, K extends keyof T>(
  object: T,
  key: K,
): T[K] => {
  return object[key];
};

export default fn;
`,
  },
  'features.objects.castings.entries': {
    relativePath: 'features/objects/castings/entries.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(object: T): [keyof T, T[keyof T]][] => {
  return Object.entries(object) as any;
};

export default fn;
`,
  },
  'features.objects.castings.freeze.all': {
    relativePath: 'features/objects/castings/freeze/all.ts',
    imports: [],
    text: `export { default } from '#features/objects/castings/readonly/all';
`,
  },
  'features.objects.castings.freeze.deep.all': {
    relativePath: 'features/objects/castings/freeze/deep/all.ts',
    imports: [],
    text: `export { default } from '#features/objects/castings/readonly/deep/all';
`,
  },
  'features.objects.castings.freeze.deep.index': {
    relativePath: 'features/objects/castings/freeze/deep/index.ts',
    imports: [],
    text: `export { default } from '#features/objects/castings/readonly/deep/index';
`,
  },
  'features.objects.castings.freeze.deep.not': {
    relativePath: 'features/objects/castings/freeze/deep/not.ts',
    imports: [],
    text: `export { default } from '#features/objects/castings/readonly/deep/not';
`,
  },
  'features.objects.castings.freeze.dynamic': {
    relativePath: 'features/objects/castings/freeze/dynamic.ts',
    imports: [],
    text: `export { default } from '#features/objects/castings/readonly/dynamic';
`,
  },
  'features.objects.castings.freeze.forceCast': {
    relativePath: 'features/objects/castings/freeze/forceCast.ts',
    imports: [],
    text: `export { default } from '#features/objects/castings/readonly/forceCast';
`,
  },
  'features.objects.castings.freeze.index': {
    relativePath: 'features/objects/castings/freeze/index.ts',
    imports: [],
    text: `export { default } from '#features/objects/castings/readonly/index';
`,
  },

  'features.objects.castings.freeze.is': {
    relativePath: 'features/objects/castings/freeze/is.ts',
    imports: [],
    text: `export { default } from '#features/objects/castings/readonly/is';
`,
  },
  'features.objects.castings.freeze.not': {
    relativePath: 'features/objects/castings/freeze/not.ts',
    imports: [],
    text: `export { default } from '#features/objects/castings/readonly/not';
`,
  },
  'features.objects.castings.hasKeys._all.all': {
    relativePath: 'features/objects/castings/hasKeys/_all/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './typings',
        kind: 'default',
        default: 'typings',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import _index from './index';
import typings from './typings';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  typings,
});

export default fn;

    `,
  },
  'features.objects.castings.hasKeys._all.index': {
    relativePath: 'features/objects/castings/hasKeys/_all/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['Keys'],
      },
    ],
    text: `import { Keys } from '../../../../../globals/types';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <K extends Keys[]>(
  object: object,
  ...keys: K
): object is Record<K[number], unknown> => {
  return (
    Object.keys(object).every(key => keys.includes(key)) &&
    keys.every(key => key in object)
  );
};

export default fn;

    `,
  },
  'features.objects.castings.hasKeys._all.typings': {
    relativePath: 'features/objects/castings/hasKeys/_all/typings.ts',
    imports: [
      {
        moduleSpecifier: '../../../utils/entries',
        kind: 'named',
        namedImports: ['checkEntries'],
      },
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['KeyTypes', 'KeyTypesFrom'],
      },
    ],
    text: `import { checkEntries } from '../../../utils/entries';
import { KeyTypes, KeyTypesFrom } from '../../../../../globals/types';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <K extends KeyTypes>(
  object: object,
  keys: K,
): object is KeyTypesFrom<K> => {
  const check0 =
    Object.keys(object).every(key => key in keys) &&
    Object.keys(keys).every(key => key in object);

  if (!check0) return false;

  return checkEntries(keys, object);
};

export default fn;

    `,
  },
  'features.objects.castings.hasKeys.all': {
    relativePath: 'features/objects/castings/hasKeys/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './_all/all',
        kind: 'default',
        default: 'all',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './typings',
        kind: 'default',
        default: 'typings',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import all from './_all/all';
import _index from './index';
import typings from './typings';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  typings,
  all,
});

export default fn;

    `,
  },
  'features.objects.castings.hasKeys.index': {
    relativePath: 'features/objects/castings/hasKeys/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Keys'],
      },
    ],
    text: `import { Keys } from '../../../../globals/types';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <K extends Keys[]>(
  object: object,
  ...keys: K
): object is Record<K[number], unknown> => {
  return keys.every(key => key in object);
};

export default fn;

    `,
  },
  'features.objects.castings.hasKeys.typings': {
    relativePath: 'features/objects/castings/hasKeys/typings.ts',
    imports: [
      {
        moduleSpecifier: '../../utils/entries',
        kind: 'named',
        namedImports: ['checkEntries'],
      },
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['KeyTypes', 'KeyTypesFrom'],
      },
    ],
    text: `import { checkEntries } from '../../utils/entries';
import { KeyTypes, KeyTypesFrom } from '../../../../globals/types';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <K extends KeyTypes>(
  object: object,
  keys: K,
): object is KeyTypesFrom<K> => {
  return checkEntries(keys, object);
};

export default fn;

    `,
  },
  'features.objects.castings.index': {
    relativePath: 'features/objects/castings/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<object>()();

export default fn;

    `,
  },
  'features.objects.castings.keyTypes.all': {
    relativePath: 'features/objects/castings/keyTypes/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './from',
        kind: 'default',
        default: 'from',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import from from './from';
import _index from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  from,
  is,
});

export default fn;

    `,
  },

  'features.objects.castings.keyTypes.from': {
    relativePath: 'features/objects/castings/keyTypes/from.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['KeyTypes', 'KeyTypesFrom'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { KeyTypes, KeyTypesFrom } from '../../../../globals/types';
import { castFn } from '../../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends KeyTypes>(keyType: T) => {
  return castFn<KeyTypesFrom<T>>()({
    is: (value: unknown): value is KeyTypesFrom<T> => {
      return typeof value === (keyType as unknown as string);
    },
  });
};

export default fn;

    `,
  },
  'features.objects.castings.keyTypes.index': {
    relativePath: 'features/objects/castings/keyTypes/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['KeyTypes'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { KeyTypes } from '../../../../globals/types';
import { castFn } from '../../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<KeyTypes>()({});

export default fn;

    `,
  },
  'features.objects.castings.keyTypes.is': {
    relativePath: 'features/objects/castings/keyTypes/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['KeyTypes'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
    ],
    text: `import { KeyTypes } from '../../../../globals/types';
import { isPlainObject } from '../../../../globals/utils/is/object';

/**
 * is const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const is = (value: unknown): value is KeyTypes => {
  const isObject = isPlainObject(value);
  if (!isObject) return false;
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol'
  );
};

export default is;

    `,
  },
  'features.objects.castings.keysOf': {
    relativePath: 'features/objects/castings/keysOf.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(object: T): (keyof T)[] => {
  return Object.keys(object) as any;
};

export default fn;
`,
  },
  'features.objects.castings.omit.all': {
    relativePath: 'features/objects/castings/omit/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './by/all',
        kind: 'default',
        default: 'by',
      },
      {
        moduleSpecifier: './const/all',
        kind: 'default',
        default: '_const',
      },
      {
        moduleSpecifier: './deep/all',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './strict/all',
        kind: 'default',
        default: 'strict',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import by from './by/all';
import _const from './const/all';
import deep from './deep/all';
import _index from './index';
import is from './is';
import strict from './strict/all';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  strict,
  const: _const,
  is,
  by,
  deep,
});

export default fn;

    `,
  },
  'features.objects.castings.omit.by.all': {
    relativePath: 'features/objects/castings/omit/by/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  is,
});

export default fn;

    `,
  },
  'features.objects.castings.omit.by.index': {
    relativePath: 'features/objects/castings/omit/by/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['SubType'],
      },
      {
        moduleSpecifier: '../../../utils/omit',
        kind: 'named',
        namedImports: ['omit'],
      },
    ],
    text: `import { partialCall } from '../../../../functions/functions/partialCall';
import { SubType } from '../../../../../globals/types';
import { omit } from '../../../utils/omit';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(omit, 'element') as <
  T extends object,
  K extends any[],
>(
  object: T,
  ...values: K
) => SubType<T, K[number]>;

export default fn;

    `,
  },
  'features.objects.castings.omit.by.is': {
    relativePath: 'features/objects/castings/omit/by/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../utils/omit.is',
        kind: 'named',
        namedImports: ['omitIs'],
      },
    ],
    text: `import { partialCall } from '../../../../functions/functions/partialCall';
import { omitIs } from '../../../utils/omit.is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(omitIs, 'element');

export default fn;

    `,
  },
  'features.objects.castings.omit.const.all': {
    relativePath: 'features/objects/castings/omit/const/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  is,
});

export default fn;

    `,
  },
  'features.objects.castings.omit.const.index': {
    relativePath: 'features/objects/castings/omit/const/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../utils/omit',
        kind: 'named',
        namedImports: ['omit'],
      },
    ],
    text: `import { partialCall } from '../../../../functions/functions/partialCall';
import { omit } from '../../../utils/omit';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(omit, 'key') as <
  const T extends object,
  K extends (keyof T)[],
>(
  object: T,
  ...keys: K
) => Omit<T, K[number]>;

export default fn;

    `,
  },

  'features.objects.castings.omit.const.is': {
    relativePath: 'features/objects/castings/omit/const/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../utils/omit.is',
        kind: 'named',
        namedImports: ['omitIs'],
      },
    ],
    text: `import { partialCall } from '../../../../functions/functions/partialCall';
import { omitIs } from '../../../utils/omit.is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(omitIs, 'key') as <
  const T extends object,
  K extends (keyof T)[],
>(
  object: T,
  ...keys: K
) => boolean;

export default fn;

    `,
  },
  'features.objects.castings.omit.deep.all': {
    relativePath: 'features/objects/castings/omit/deep/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './by/all',
        kind: 'default',
        default: 'by',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import by from './by/all';
import _index from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  by,
  is,
});

export default fn;

    `,
  },
  'features.objects.castings.omit.deep.by.all': {
    relativePath: 'features/objects/castings/omit/deep/by/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  is,
});

export default fn;

    `,
  },
  'features.objects.castings.omit.deep.by.index': {
    relativePath: 'features/objects/castings/omit/deep/by/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../../../../globals/types',
        kind: 'named',
        namedImports: ['Keys', 'NotSubType', 'PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: '../../../../utils/omit.deep',
        kind: 'named',
        namedImports: ['omitDeep'],
      },
    ],
    text: `import { partialCall } from '../../../../../functions/functions/partialCall';
import { Keys, NotSubType, PrimitiveObjectMap } from '../../../../../../globals/types';
import { omitDeep } from '../../../../utils/omit.deep';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(omitDeep, 'element') as <
  T extends PrimitiveObjectMap,
  K extends Keys[],
>(
  object: T,
  ...values: K
) => NotSubType<T, K[number]>;

export default fn;

    `,
  },
  'features.objects.castings.omit.deep.by.is': {
    relativePath: 'features/objects/castings/omit/deep/by/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../../utils/omit.deep.is',
        kind: 'named',
        namedImports: ['omitDeepIs'],
      },
    ],
    text: `import { partialCall } from '../../../../../functions/functions/partialCall';
import { omitDeepIs } from '../../../../utils/omit.deep.is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(omitDeepIs, 'element');

export default fn;

    `,
  },
  'features.objects.castings.omit.deep.index': {
    relativePath: 'features/objects/castings/omit/deep/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepOmit', 'Keys', 'PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: '../../../utils/omit.deep',
        kind: 'named',
        namedImports: ['omitDeep'],
      },
    ],
    text: `import { partialCall } from '../../../../functions/functions/partialCall';
import { DeepOmit, Keys, PrimitiveObjectMap } from '../../../../../globals/types';
import { omitDeep } from '../../../utils/omit.deep';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(omitDeep, 'key') as <
  T extends PrimitiveObjectMap,
  K extends Keys[],
>(
  object: T,
  ...keys: K
) => DeepOmit<T, K[number]>;

export default fn;

    `,
  },
  'features.objects.castings.omit.deep.is': {
    relativePath: 'features/objects/castings/omit/deep/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../utils/omit.deep.is',
        kind: 'named',
        namedImports: ['omitDeepIs'],
      },
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['Keys', 'PrimitiveObjectMap'],
      },
    ],
    text: `import { partialCall } from '../../../../functions/functions/partialCall';
import { omitDeepIs } from '../../../utils/omit.deep.is';
import { Keys, PrimitiveObjectMap } from '../../../../../globals/types';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(omitDeepIs, 'key') as (
  object: PrimitiveObjectMap,
  ...keys: Keys[]
) => boolean;

export default fn;

    `,
  },
  'features.objects.castings.omit.index': {
    relativePath: 'features/objects/castings/omit/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: '../../utils/omit',
        kind: 'named',
        namedImports: ['omit'],
      },
    ],
    text: `import { partialCall } from '../../../functions/functions/partialCall';
import { PrimitiveObjectMap } from '../../../../globals/types';
import { omit } from '../../utils/omit';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(omit, 'key') as <
  T extends PrimitiveObjectMap,
  K extends any[],
>(
  object: T,
  ...keys: K
) => Omit<T, K[number]>;

export default fn;

    `,
  },
  'features.objects.castings.omit.is': {
    relativePath: 'features/objects/castings/omit/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../utils/omit.is',
        kind: 'named',
        namedImports: ['omitIs'],
      },
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Keys', 'PrimitiveObjectMap'],
      },
    ],
    text: `import { partialCall } from '../../../functions/functions/partialCall';
import { omitIs } from '../../utils/omit.is';
import { Keys, PrimitiveObjectMap } from '../../../../globals/types';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(omitIs, 'key') as <K extends Keys[]>(
  object: PrimitiveObjectMap,
  ...keys: K
) => boolean;

export default fn;

    `,
  },
  'features.objects.castings.omit.strict.all': {
    relativePath: 'features/objects/castings/omit/strict/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  is,
});

export default fn;

    `,
  },

  'features.objects.castings.omit.strict.index': {
    relativePath: 'features/objects/castings/omit/strict/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../utils/omit',
        kind: 'named',
        namedImports: ['omit'],
      },
    ],
    text: `import { partialCall } from '../../../../functions/functions/partialCall';
import { omit } from '../../../utils/omit';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(omit, 'key') as <
  T extends object,
  K extends (keyof T)[],
>(
  object: T,
  ...keys: K
) => Omit<T, K[number]>;

export default fn;

    `,
  },
  'features.objects.castings.omit.strict.is': {
    relativePath: 'features/objects/castings/omit/strict/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../utils/omit.is',
        kind: 'named',
        namedImports: ['omitIs'],
      },
    ],
    text: `import { partialCall } from '../../../../functions/functions/partialCall';
import { omitIs } from '../../../utils/omit.is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(omitIs, 'key') as <
  T extends object,
  K extends (keyof T)[],
>(
  object: T,
  ...keys: K
) => boolean;

export default fn;

    `,
  },
  'features.objects.castings.pick.all': {
    relativePath: 'features/objects/castings/pick/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './by',
        kind: 'default',
        default: 'by',
      },
      {
        moduleSpecifier: './deep/all',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import by from './by';
import deep from './deep/all';
import _index from './index';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  deep,
  by,
});

export default fn;

    `,
  },
  'features.objects.castings.pick.by': {
    relativePath: 'features/objects/castings/pick/by.ts',
    imports: [
      {
        moduleSpecifier: '../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['SubType'],
      },
      {
        moduleSpecifier: '../../utils/pick',
        kind: 'named',
        namedImports: ['pick'],
      },
    ],
    text: `import { partialCall } from '../../../functions/functions/partialCall';
import { SubType } from '../../../../globals/types';
import { pick } from '../../utils/pick';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(pick, 'element') as <
  T extends object,
  K extends any[],
>(
  object: T,
  ...keys: K
) => SubType<T, K[number]>;

export default fn;

    `,
  },
  'features.objects.castings.pick.deep.all': {
    relativePath: 'features/objects/castings/pick/deep/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './by',
        kind: 'default',
        default: 'by',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import by from './by';
import _index from './index';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  by,
});

export default fn;

    `,
  },
  'features.objects.castings.pick.deep.by': {
    relativePath: 'features/objects/castings/pick/deep/by.ts',
    imports: [
      {
        moduleSpecifier: '../../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../utils/pick.deep',
        kind: 'named',
        namedImports: ['pickDeep'],
      },
    ],
    text: `import { partialCall } from '../../../../functions/functions/partialCall';
import { pickDeep } from '../../../utils/pick.deep';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(pickDeep, 'element');

export default fn;

    `,
  },
  'features.objects.castings.pick.deep.index': {
    relativePath: 'features/objects/castings/pick/deep/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../utils/pick.deep',
        kind: 'named',
        namedImports: ['pickDeep'],
      },
    ],
    text: `import { partialCall } from '../../../../functions/functions/partialCall';
import { pickDeep } from '../../../utils/pick.deep';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(pickDeep, 'key');

export default fn;

    `,
  },
  'features.objects.castings.pick.index': {
    relativePath: 'features/objects/castings/pick/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../utils/pick',
        kind: 'named',
        namedImports: ['pick'],
      },
    ],
    text: `import { partialCall } from '../../../functions/functions/partialCall';
import { pick } from '../../utils/pick';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = partialCall(pick, 'key') as <T extends object, K extends any[]>(
  object: T,
  ...keys: K
) => Pick<T, K[number]>;

export default fn;

    `,
  },
  'features.objects.castings.primitive': {
    relativePath: 'features/objects/castings/primitive.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
      {
        moduleSpecifier: '../../../globals/utils/is/primitive.object',
        kind: 'named',
        namedImports: ['isPrimitiveObject'],
      },
    ],
    text: `import { PrimitiveObjectMap } from '../../../globals/types';
import { castFn } from '../../../globals/utils/castFn';
import { isPlainObject } from '../../../globals/utils/is/object';
import { isPrimitiveObject } from '../../../globals/utils/is/primitive.object';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<PrimitiveObjectMap>()({
  is: (object: unknown): object is PrimitiveObjectMap => {
    if (!isPlainObject(object)) return false;
    return isPrimitiveObject(object);
  },
});

export default fn;

    `,
  },
  'features.objects.castings.ra': {
    relativePath: 'features/objects/castings/ra.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Ra'],
      },
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { Ra } from '../../../globals/types';
import { castFn } from '../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<Ra>()();

export default fn;

    `,
  },

  'features.objects.castings.readonly.all': {
    relativePath: 'features/objects/castings/readonly/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './deep/all',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './dynamic',
        kind: 'default',
        default: 'dynamic',
      },
      {
        moduleSpecifier: './forceCast',
        kind: 'default',
        default: 'forceCast',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './not',
        kind: 'default',
        default: 'not',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import deep from './deep/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import _index from './index';
import is from './is';
import not from './not';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  forceCast,
  dynamic,
  is,
  not,
  deep,
});

export default fn;

    `,
  },
  'features.objects.castings.readonly.deep.all': {
    relativePath: 'features/objects/castings/readonly/deep/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './not',
        kind: 'default',
        default: 'not',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import _index from './index';
import not from './not';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  not,
});

export default fn;

    `,
  },
  'features.objects.castings.readonly.deep.index': {
    relativePath: 'features/objects/castings/readonly/deep/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(object: T) => {
  const out = Object.freeze(object);
  return _unknown<DeepReadonly<T>>(out);
};

export default fn;

    `,
  },
  'features.objects.castings.readonly.deep.not': {
    relativePath: 'features/objects/castings/readonly/deep/not.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepNotReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(object: T) => {
  return _unknown<DeepNotReadonly<T>>(object);
};

export default fn;

    `,
  },
  'features.objects.castings.readonly.dynamic': {
    relativePath: 'features/objects/castings/readonly/dynamic.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <U extends object>(object: U) => {
  return Object.freeze(object);
};

export default fn;
`,
  },
  'features.objects.castings.readonly.forceCast': {
    relativePath: 'features/objects/castings/readonly/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(object: unknown) => {
  const out = Object.freeze(object);
  return _unknown<Readonly<T>>(out);
};

export default fn;

    `,
  },
  'features.objects.castings.readonly.index': {
    relativePath: 'features/objects/castings/readonly/index.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(object: T) => {
  return Object.freeze(object);
};

export default fn;
`,
  },
  'features.objects.castings.readonly.is': {
    relativePath: 'features/objects/castings/readonly/is.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T>(object: T): object is Readonly<T> => {
  return Object.isFrozen(object);
};

export default fn;
`,
  },
  'features.objects.castings.readonly.not': {
    relativePath: 'features/objects/castings/readonly/not.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { NotReadonly } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends object>(object: T) => {
  return _unknown<NotReadonly<T>>(object);
};

export default fn;

    `,
  },
  'features.objects.castings.require.all': {
    relativePath: 'features/objects/castings/require/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './const',
        kind: 'default',
        default: '_const',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is/all',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './strict',
        kind: 'default',
        default: 'strict',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import _const from './const';
import _index from './index';
import is from './is/all';
import strict from './strict';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  strict,
  const: _const,
  is,
});

export default fn;

    `,
  },

  'features.objects.castings.require.const': {
    relativePath: 'features/objects/castings/require/const.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['AllowedNamesLow'],
      },
    ],
    text: `import { AllowedNamesLow } from '../../../../globals/types';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <
  const T extends object,
  K extends AllowedNamesLow<T, undefined>,
>(
  object: T,
  requires: Pick<T, K>,
) => {
  return Object.assign(object, requires);
};

export default fn;

    `,
  },
  'features.objects.castings.require.index': {
    relativePath: 'features/objects/castings/require/index.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(object: T, requires: object) => {
  return Object.assign(object, requires);
};

export default fn;
`,
  },
  'features.objects.castings.require.is.all': {
    relativePath: 'features/objects/castings/require/is/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './deep',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import deep from './deep';
import _index from './index';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  deep,
});

export default fn;

    `,
  },
  'features.objects.castings.require.is.deep': {
    relativePath: 'features/objects/castings/require/is/deep.ts',
    imports: [
      {
        moduleSpecifier: '../../../utils/require',
        kind: 'named',
        namedImports: ['isRequiredDeep'],
      },
    ],
    text: `import { isRequiredDeep } from '../../../utils/require';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = isRequiredDeep;

export default fn;

    `,
  },
  'features.objects.castings.require.is.index': {
    relativePath: 'features/objects/castings/require/is/index.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(object: T): object is Required<T> => {
  const values = Object.values(object);
  return values.every(value => value !== undefined && value !== null);
};

export default fn;
`,
  },
  'features.objects.castings.require.strict': {
    relativePath: 'features/objects/castings/require/strict.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['AllowedNamesLow'],
      },
    ],
    text: `import { AllowedNamesLow } from '../../../../globals/types';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, K extends AllowedNamesLow<T, undefined>>(
  object: T,
  requires: Pick<T, K>,
) => {
  return Object.assign(object, requires);
};

export default fn;

    `,
  },
  'features.objects.castings.reverse': {
    relativePath: 'features/objects/castings/reverse.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Keys'],
      },
    ],
    text: `import { Keys } from '../../../globals/types';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends Record<Keys, Keys>>(
  object: T,
): { [K in keyof T as T[K]]: K } => {
  const result: any = {};
  for (const key in object) {
    result[object[key]] = key;
  }
  return result;
};

export default fn;

    `,
  },
  'features.objects.castings.ru': {
    relativePath: 'features/objects/castings/ru.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Ru'],
      },
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { Ru } from '../../../globals/types';
import { castFn } from '../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<Ru>()();

export default fn;

    `,
  },
  'features.objects.castings.trueObject': {
    relativePath: 'features/objects/castings/trueObject.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['To'],
      },
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
    ],
    text: `import { To } from '../../../globals/types';
import { castFn } from '../../../globals/utils/castFn';
import { isPlainObject } from '../../../globals/utils/is/object';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<To>()({ is: isPlainObject });

export default fn;

    `,
  },
  'features.objects.castings.type': {
    relativePath: 'features/objects/castings/type.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = Object;

export default fn;
`,
  },

  'features.objects.castings.values': {
    relativePath: 'features/objects/castings/values.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(object: T): T[keyof T][] => {
  return Object.values(object) as any;
};

export default fn;
`,
  },
  'features.objects.index': {
    relativePath: 'features/objects/index.ts',
    imports: [],
    text: `export * from './castings/all';
export * from './types';
export * from './typings/all';
`,
  },
  'features.objects.types': {
    relativePath: 'features/objects/types.ts',
    imports: [
      {
        moduleSpecifier: '../../globals/types',
        kind: 'named',
        namedImports: ['Fn'],
      },
      {
        moduleSpecifier: '../common/types',
        kind: 'named',
        namedImports: ['Keys', 'NotUndefined', 'Primitive'],
      },
      {
        moduleSpecifier: '../strings/types',
        kind: 'named',
        namedImports: ['AddString'],
      },
    ],
    text: `import { Fn } from '../../globals/types';
import { Keys, NotUndefined, Primitive } from '../common/types';
import { AddString } from '../strings/types';

/**
 * A type that represents a true object, which is an object that does not have
 * any iterable properties or the \`SymbolConstructor\` property.
 *
 * @remarks This type is useful to ensure that the object is a plain object
 * without any special properties.
 *
 * @see {@linkcode Ru} for a utility type that represents a true object.
 * @see {@linkcode SymbolConstructor} for the symbol constructor type.
 */
/**
 * TrueObject type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type TrueObject = Ru & {
  [Symbol.iterator]?: never;
  //@ts-expect-error - 'SymbolConstructor' does not exist on type 'object'
  [SymbolConstructor]?: never;
};

/**
 * Alias of {@linkcode TrueObject}
 */
/**
 * To type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type To = TrueObject;

/**
 * NOmit type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type NOmit<T, K extends keyof T> = Omit<T, K>;

/**
 * DeepOmit type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type DeepOmit<T, K extends Keys> = {
  [P in Exclude<keyof T, K>]: T[P] extends Fn
    ? T[P]
    : T[P] extends object
      ? DeepOmit<T[P], K>
      : T[P];
};

/**
 * ReverseMap type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type ReverseMap<T extends Record<Keys, Keys>> = {
  [K in keyof T as T[K]]: K;
};

/**
 * DeepReadonly type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
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
 * DeepPartial type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
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
 * DeepRequired type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type DeepRequired<T extends object | undefined> = NotUndefined<{
  [P in keyof T]-?: T[P] extends Fn
    ? T[P]
    : T[P] extends object
      ? DeepRequired<T[P]>
      : T[P];
}>;

/**
 * NotReadonly type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type NotReadonly<T extends object> = {
  -readonly [P in keyof T]: T[P];
};

/**
 * DeepNotReadonly type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type DeepNotReadonly<T extends object> = {
  -readonly [P in keyof T]: T[P] extends Fn
    ? T[P]
    : T[P] extends object
      ? DeepNotReadonly<T[P]>
      : T[P];
};

// type TT = {
//   readonly a: string;
//   readonly b: {
//     readonly c: number;
//     readonly d: {
//       readonly e: boolean;
//       readonly f: {
//         readonly g: string[];
//       };
//     };
//   };
//   readonly h: () => void;
//   readonly i: {
//     readonly j: {
//       readonly k: string;
//       readonly l: {
//         readonly m: number;
//       };
//     };
//   };
// };

/**
 * ValuesOf type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type ValuesOf<T, U = any> = Extract<T[keyof T], U>;
/**
 * ObjectValuesOf type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type ObjectValuesOf<T> = Exclude<
  Extract<ValuesOf<T>, object>,
  Array<any>
>;

/**
 * ExpressO type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type ExpressO<T extends object> = {
  [K in keyof T]: T[K];
};

/**
 * DeepExpressO type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type DeepExpressO<T extends object> =
  ExpressO<T> extends infer P1
    ? {
        [K in keyof P1]: P1[K] extends object
          ? DeepExpressO<P1[K]>
          : P1[K];
      }
    : never;

type _RequiredLow<T extends object> =
  Required<SubTypeLow<T, undefined>> extends infer P
    ? {
        [K in keyof P]: P[K] | undefined;
      } & NotSubTypeLow<T, undefined>
    : never;

/**
 * RequiredLow type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type RequiredLow<T extends object> = ExpressO<_RequiredLow<T>>;

/**
 * DeepRequiredLow type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type DeepRequiredLow<T extends object> =
  RequiredLow<T> extends infer P1
    ? {
        [K1 in keyof P1]: Exclude<
          P1[K1],
          undefined
        > extends infer P2 extends object
          ? DeepRequiredLow<P2>
          : P1[K1];
      }
    : never;

/**
 * Require type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Require<T, K extends keyof T> = NOmit<T, K> &
  Required<Pick<T, K>>;

/**
 * RequiredBy type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type RequiredBy<T, U> = Required<PickBy<T, U>> & PickNotBy<T, U>;

/**
 * Prop type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Prop<T, K> = K extends keyof T ? T[K] : never;

/**
 * PickNoInfer type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type PickNoInfer<T, S> = Pick<T, Extract<keyof T, S>>;

/**
 * PickBy type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type PickBy<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: Extract<T[P], U>;
};

/**
 * PickKeysBy type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type PickKeysBy<T, U> = keyof PickBy<T, U>;

/**
 * PickNotBy type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type PickNotBy<T, U> = {
  [P in keyof T as T[P] extends U ? never : P]: Exclude<T[P], U>;
};

/**
 * PickKeysNotBy type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type PickKeysNotBy<T, U> = keyof PickNotBy<T, U>;

/**
 * OnPropChangedMethods type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type OnPropChangedMethods<T, I extends keyof T = keyof T> = T & {
  [K in Extract<PickKeysBy<T, (...args: any) => any>, I> &
    string as AddString<Capitalize<K>, 'on', 'Changed'>]: (
    cb: (newValue: T[K]) => void,
  ) => void;
};

/**
 * PartialUndefiny type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type PartialUndefiny<T> = PickNotBy<T, undefined> &
  Partial<PickBy<T, undefined>>;

/**
 * Nullify type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Nullify<T> = PickNotBy<T, null> & Partial<PickBy<T, null>>;

type _OmitWithoutPartial<T, O extends string> = {
  [key in keyof Omit<T, O>]: O extends keyof T[key]
    ? _OmitWithoutPartial<T[key], O>
    : T[key];
};

type _OmitWithPartial<T, O extends string> = PartialUndefiny<
  Nullify<_OmitWithoutPartial<T, O>>
>;

/**
 * OmitRecursive type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type OmitRecursive<T, O extends string> = {
  [key in keyof _OmitWithPartial<T, O>]: _OmitWithPartial<T[key], O>;
};

/**
 * Unionize type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Unionize<T extends Record<string, any>> = {
  [P in keyof T]: { [Q in P]: T[P] };
}[keyof T];

type WithChildren<
  T,
  _omit extends string,
  _withChildren extends boolean = false,
> = _withChildren extends true ? T : Omit<T, _omit>;

type DefaultK<S extends string, D extends string> = S extends '' ? D : S;

// #region type _FlatMapByKey
/**
 * _FlatMapByKey type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
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
      ?
          | _FlatMapByKey<
              TK,
              _omit,
              _withChildren,
              Delimiter,
              \`$-|||-{Keys}$-|||-{Delimiter}$-|||-{K}\`
            >
          | {
              [key in DefaultK<Keys, Delimiter>]: WithChildren<
                T,
                _omit,
                _withChildren
              >;
            }
      : {
          [key in DefaultK<Keys, Delimiter>]: WithChildren<
            T,
            _omit,
            _withChildren
          >;
        }
    : never
  : {
      [key in DefaultK<Keys, Delimiter>]: WithChildren<
        T,
        _omit,
        _withChildren
      >;
    };

// #region SubTypes
type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};

type NotFilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? never : Key;
};

type FilterFlagsLow<Base, Condition> = {
  [Key in keyof Base]: Condition extends Base[Key] ? Key : never;
};

type NotFilterFlagsLow<Base, Condition> = {
  [Key in keyof Base]: Condition extends Base[Key] ? never : Key;
};

/**
 * AllowedNames type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type AllowedNames<Base, Condition> = FilterFlags<
  Base,
  Condition
>[keyof Base];

/**
 * NotAllowedNames type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type NotAllowedNames<Base, Condition> = NotFilterFlags<
  Base,
  Condition
>[keyof Base];

/**
 * AllowedNamesLow type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type AllowedNamesLow<Base, Condition> = FilterFlagsLow<
  Base,
  Condition
>[keyof Base];

/**
 * NotAllowedNamesLow type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type NotAllowedNamesLow<Base, Condition> = NotFilterFlagsLow<
  Base,
  Condition
>[keyof Base];

/**
 * SubType type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type SubType<Base extends object, Condition> = Pick<
  Base,
  AllowedNames<Base, Condition>
>;

/**
 * DeepSubType type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type DeepSubType<Base extends object, Condition> = {
  [K in keyof Base as K extends AllowedNames<Base, Condition>
    ? K
    : never]: Base[K] extends object
    ? DeepSubType<Base[K], Condition>
    : Base[K];
};

/**
 * NotSubType type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type NotSubType<Base extends object, Condition> = Pick<
  Base,
  NotAllowedNames<Base, Condition>
>;

/**
 * DeepNotSubType type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type DeepNotSubType<Base extends object, Condition> = {
  [K in keyof Base as K extends NotAllowedNames<Base, Condition>
    ? K
    : never]: Base[K] extends object
    ? DeepNotSubType<Base[K], Condition>
    : Base[K];
};

/**
 * SubTypeLow type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type SubTypeLow<Base extends object, Condition> = Pick<
  Base,
  AllowedNamesLow<Base, Condition>
>;

/**
 * NotSubTypeLow type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type NotSubTypeLow<Base extends object, Condition> = Pick<
  Base,
  NotAllowedNamesLow<Base, Condition>
>;

// #endregion

interface _Never {
  [key: Keys]: DeepNever;
}

/**
 * DeepNever type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type DeepNever = never | _Never;

/**
 * Dn type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Dn = DeepNever;

/**
 * Neverify type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Neverify<T> = T extends DeepNever ? never : T;

/**
 * Ru type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Ru = Record<Keys, unknown>;

/**
 * Rn type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Rn = Record<Keys, never>;

/**
 * Ra type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Ra = Record<Keys, any>;

    `,
  },
  'features.objects.typings.all': {
    relativePath: 'features/objects/typings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
      {
        moduleSpecifier: './byKey',
        kind: 'default',
        default: 'byKey',
      },
      {
        moduleSpecifier: './entries',
        kind: 'default',
        default: 'entries',
      },
      {
        moduleSpecifier: './freeze/all',
        kind: 'default',
        default: 'freeze',
      },
      {
        moduleSpecifier: './hasKeys/all',
        kind: 'default',
        default: 'hasKeys',
      },
      {
        moduleSpecifier: './keyTypes/all',
        kind: 'default',
        default: 'keyTypes',
      },
      {
        moduleSpecifier: './keysOf',
        kind: 'default',
        default: 'keys',
      },
      {
        moduleSpecifier: './omit/all',
        kind: 'default',
        default: 'omit',
      },
      {
        moduleSpecifier: './pick/all',
        kind: 'default',
        default: 'pick',
      },
      {
        moduleSpecifier: './primitive',
        kind: 'default',
        default: 'primitive',
      },
      {
        moduleSpecifier: './ra',
        kind: 'default',
        default: 'ra',
      },
      {
        moduleSpecifier: './readonly/all',
        kind: 'default',
        default: 'readonly',
      },
      {
        moduleSpecifier: './require/all',
        kind: 'default',
        default: 'require',
      },
      {
        moduleSpecifier: './reverse',
        kind: 'default',
        default: 'reverse',
      },
      {
        moduleSpecifier: './rn',
        kind: 'default',
        default: 'rn',
      },
      {
        moduleSpecifier: './ru',
        kind: 'default',
        default: 'ru',
      },
      {
        moduleSpecifier: './trueObject',
        kind: 'default',
        default: 'trueObject',
      },
      {
        moduleSpecifier: './values',
        kind: 'default',
        default: 'values',
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';
import byKey from './byKey';
import entries from './entries';
import freeze from './freeze/all';
import hasKeys from './hasKeys/all';
import keyTypes from './keyTypes/all';
import keys from './keysOf';
import omit from './omit/all';
import pick from './pick/all';
import primitive from './primitive';
import ra from './ra';
import readonly from './readonly/all';
import require from './require/all';
import reverse from './reverse';
import rn from './rn';
import ru from './ru';
import trueObject from './trueObject';
import values from './values';

/**
 * typings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const typings = typeFn<object>()({
  trueObject,
  keys,
  values,
  entries,
  byKey,
  keyTypes,
  hasKeys,
  omit,
  pick,
  reverse,
  readonly,
  freeze,
  require,
  ru,
  rn,
  ra,
  primitive,
});

    `,
  },
  'features.objects.typings.byKey': {
    relativePath: 'features/objects/typings/byKey.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, K extends keyof T>(_?: T, __?: K) =>
  _unknown<T[K]>();

export default fn;

    `,
  },
  'features.objects.typings.entries': {
    relativePath: 'features/objects/typings/entries.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) =>
  _unknown<[keyof T, T[keyof T]][]>();

export default fn;

    `,
  },
  'features.objects.typings.freeze.all': {
    relativePath: 'features/objects/typings/freeze/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './deep/all',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './dynamic',
        kind: 'default',
        default: 'dynamic',
      },
      {
        moduleSpecifier: './forceCast',
        kind: 'default',
        default: 'forceCast',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'freeze',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './not',
        kind: 'default',
        default: 'not',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import deep from './deep/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import freeze from './index';
import is from './is';
import not from './not';

/**
 * freezeTyping const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const freezeTyping = expandFn(freeze, {
  dynamic,
  forceCast,
  is,
  not,
  deep,
});

export default freezeTyping;

    `,
  },
  'features.objects.typings.freeze.deep.all': {
    relativePath: 'features/objects/typings/freeze/deep/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'deepFreeze',
      },
      {
        moduleSpecifier: './not',
        kind: 'default',
        default: 'not',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import deepFreeze from './index';
import not from './not';

/**
 * deep const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const deep = expandFn(deepFreeze, {
  not,
});

export default deep;

    `,
  },
  'features.objects.typings.freeze.deep.index': {
    relativePath: 'features/objects/typings/freeze/deep/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<DeepReadonly<T>>();

export default fn;

    `,
  },
  'features.objects.typings.freeze.deep.not': {
    relativePath: 'features/objects/typings/freeze/deep/not.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepNotReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<DeepNotReadonly<T>>();

export default fn;

    `,
  },

  'features.objects.typings.freeze.dynamic': {
    relativePath: 'features/objects/typings/freeze/dynamic.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends Readonly<T>>(_?: T) => _unknown<T>();

export default fn;

    `,
  },
  'features.objects.typings.freeze.forceCast': {
    relativePath: 'features/objects/typings/freeze/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: unknown) => _unknown<Readonly<T>>();

export default fn;

    `,
  },
  'features.objects.typings.freeze.index': {
    relativePath: 'features/objects/typings/freeze/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<Readonly<T>>();

export default fn;

    `,
  },
  'features.objects.typings.freeze.is': {
    relativePath: 'features/objects/typings/freeze/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) =>
  _unknown<T extends Readonly<T> ? true : false>();

export default fn;

    `,
  },
  'features.objects.typings.freeze.not': {
    relativePath: 'features/objects/typings/freeze/not.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { NotReadonly } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<NotReadonly<T>>();

export default fn;

    `,
  },
  'features.objects.typings.hasKeys._all': {
    relativePath: 'features/objects/typings/hasKeys/_all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Equals', 'Keys'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Equals, Keys } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, K extends Keys[]>(_?: T, ...__: K) =>
  _unknown<Equals<K[number], keyof T>>();

export default fn;

    `,
  },
  'features.objects.typings.hasKeys.all': {
    relativePath: 'features/objects/typings/hasKeys/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './_all',
        kind: 'default',
        default: 'all',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './typings',
        kind: 'default',
        default: 'typings',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import all from './_all';
import _index from './index';
import typings from './typings';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  typings,
  all,
});

export default fn;

    `,
  },
  'features.objects.typings.hasKeys.index': {
    relativePath: 'features/objects/typings/hasKeys/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Keys'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Keys } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, K extends Keys[]>(_?: T, ...__: K) =>
  _unknown<K[number] extends keyof T ? true : false>();

export default fn;

    `,
  },
  'features.objects.typings.hasKeys.typings': {
    relativePath: 'features/objects/typings/hasKeys/typings.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['KeyTypes', 'KeyTypesFrom'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { KeyTypes, KeyTypesFrom } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <K extends KeyTypes>(_?: K) => {
  const _out = <T extends object>(_?: T) =>
    _unknown<T extends KeyTypesFrom<K> ? true : false>();

  return _out;
};

export default fn;

    `,
  },
  'features.objects.typings.keyTypes.all': {
    relativePath: 'features/objects/typings/keyTypes/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['KeyTypes'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
      {
        moduleSpecifier: './from',
        kind: 'default',
        default: 'from',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
    ],
    text: `import { KeyTypes } from '../../../../globals/types';
import { typeFn } from '../../../../globals/utils/typeFn';
import from from './from';
import _index from './index';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<KeyTypes>()({
  is: _index,
  from,
});

export default fn;

    `,
  },

  'features.objects.typings.keyTypes.from': {
    relativePath: 'features/objects/typings/keyTypes/from.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['KeyTypes', 'KeyTypesFrom'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { KeyTypes, KeyTypesFrom } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends KeyTypes>(_?: T) => _unknown<KeyTypesFrom<T>>();

export default fn;

    `,
  },
  'features.objects.typings.keyTypes.index': {
    relativePath: 'features/objects/typings/keyTypes/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['KeyTypes'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { KeyTypes } from '../../../../globals/types';
import { typeFn } from '../../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<KeyTypes>()();

export default fn;

    `,
  },
  'features.objects.typings.keysOf': {
    relativePath: 'features/objects/typings/keysOf.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';
import { expandFn } from '../../../globals/utils/expandFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(<T extends object>(_?: T) => _unknown<(keyof T)[]>(), {
  union: <T extends object>(_?: T) => _unknown<keyof T>(),
});

export default fn;

    `,
  },
  'features.objects.typings.omit.all': {
    relativePath: 'features/objects/typings/omit/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './by/all',
        kind: 'default',
        default: 'by',
      },
      {
        moduleSpecifier: './const/all',
        kind: 'default',
        default: '_const',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import by from './by/all';
import _const from './const/all';
import _index from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  const: _const,
  is,
  by,
});

export default fn;

    `,
  },
  'features.objects.typings.omit.by.all': {
    relativePath: 'features/objects/typings/omit/by/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './const/all',
        kind: 'default',
        default: '_const',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import _const from './const/all';
import _index from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  is,
  const: _const,
});

export default fn;

    `,
  },
  'features.objects.typings.omit.by.const.all': {
    relativePath: 'features/objects/typings/omit/by/const/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  is,
});

export default fn;

    `,
  },
  'features.objects.typings.omit.by.const.index': {
    relativePath: 'features/objects/typings/omit/by/const/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../../globals/types',
        kind: 'named',
        namedImports: ['NotSubType', 'ValuesOf'],
      },
      {
        moduleSpecifier: '../../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { NotSubType, ValuesOf } from '../../../../../../globals/types';
import { _unknown } from '../../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends object, K extends ValuesOf<T>[]>(
  _?: T,
  ...__: K
) => _unknown<NotSubType<T, K[number]>>();

export default fn;

    `,
  },
  'features.objects.typings.omit.by.const.is': {
    relativePath: 'features/objects/typings/omit/by/const/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../../globals/types',
        kind: 'named',
        namedImports: ['NotSubType', 'ValuesOf'],
      },
      {
        moduleSpecifier: '../../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { NotSubType, ValuesOf } from '../../../../../../globals/types';
import { _unknown } from '../../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends object, K extends ValuesOf<T>[]>(
  _?: T,
  ...__: K
) => {
  const _out = <U>(_?: U) =>
    _unknown<U extends NotSubType<T, K[number]> ? true : false>();

  return _out;
};

export default fn;

    `,
  },
  'features.objects.typings.omit.by.index': {
    relativePath: 'features/objects/typings/omit/by/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['NotSubType'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { NotSubType } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, K extends any[]>(_?: T, ...__: K) =>
  _unknown<NotSubType<T, K[number]>>();

export default fn;

    `,
  },
  'features.objects.typings.omit.by.is': {
    relativePath: 'features/objects/typings/omit/by/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['NotSubType'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { NotSubType } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, K extends any[]>(_?: T, ...__: K) => {
  const _out = <U>(_?: U) =>
    _unknown<U extends NotSubType<T, K[number]> ? true : false>();
  return _out;
};

export default fn;

    `,
  },

  'features.objects.typings.omit.const.all': {
    relativePath: 'features/objects/typings/omit/const/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  is,
});

export default fn;

    `,
  },
  'features.objects.typings.omit.const.index': {
    relativePath: 'features/objects/typings/omit/const/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends object, K extends (keyof T)[]>(
  _?: T,
  ...__: K
) => _unknown<Omit<T, K[number]>>();

export default fn;

    `,
  },
  'features.objects.typings.omit.const.is': {
    relativePath: 'features/objects/typings/omit/const/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T, K extends (keyof T)[]>(_?: T, ...__: K) => {
  const _out = <U>(_?: U) =>
    _unknown<U extends Omit<T, K[number]> ? true : false>();

  return _out;
};

export default fn;

    `,
  },
  'features.objects.typings.omit.index': {
    relativePath: 'features/objects/typings/omit/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Keys'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Keys } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T, K extends Keys[]>(_?: T, ...__: K) =>
  _unknown<Omit<T, K[number]>>();

export default fn;

    `,
  },
  'features.objects.typings.omit.is': {
    relativePath: 'features/objects/typings/omit/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Keys'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Keys } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T, K extends Keys[]>(_?: T, ...__: K) => {
  const _out = <U>(_?: U) =>
    _unknown<U extends Omit<T, K[number]> ? true : false>();

  return _out;
};

export default fn;

    `,
  },
  'features.objects.typings.pick.all': {
    relativePath: 'features/objects/typings/pick/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './by',
        kind: 'default',
        default: 'by',
      },
      {
        moduleSpecifier: './deep/all',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'pick',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import by from './by';
import deep from './deep/all';
import pick from './index';

/**
 * pickTyping const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const pickTyping = expandFn(pick, {
  by,
  deep,
});

export default pickTyping;

    `,
  },
  'features.objects.typings.pick.by': {
    relativePath: 'features/objects/typings/pick/by.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['SubType'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { SubType } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, K extends any[]>(_?: T, ...__: K) =>
  _unknown<SubType<T, K[number]>>();

export default fn;

    `,
  },
  'features.objects.typings.pick.deep.all': {
    relativePath: 'features/objects/typings/pick/deep/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './by',
        kind: 'default',
        default: 'by',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'deepPick',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import by from './by';
import deepPick from './index';

/**
 * deep const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const deep = expandFn(deepPick, {
  by,
});

export default deep;

    `,
  },
  'features.objects.typings.pick.deep.by': {
    relativePath: 'features/objects/typings/pick/deep/by.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['SubType'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { SubType } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, K extends any[]>(_?: T, ...__: K) =>
  _unknown<SubType<T, K[number]>>();

export default fn;

    `,
  },
  'features.objects.typings.pick.deep.index': {
    relativePath: 'features/objects/typings/pick/deep/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, K extends keyof T>(_?: T, ...__: K[]) =>
  _unknown<Pick<T, K>>();

export default fn;

    `,
  },

  'features.objects.typings.pick.index': {
    relativePath: 'features/objects/typings/pick/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, K extends keyof T>(_?: T, ...__: K[]) =>
  _unknown<Pick<T, K>>();

export default fn;

    `,
  },
  'features.objects.typings.primitive': {
    relativePath: 'features/objects/typings/primitive.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { PrimitiveObjectMap } from '../../../globals/types';
import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<PrimitiveObjectMap>()();

export default fn;

    `,
  },
  'features.objects.typings.ra': {
    relativePath: 'features/objects/typings/ra.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Ra'],
      },
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { Ra } from '../../../globals/types';
import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<Ra>()();

export default fn;

    `,
  },
  'features.objects.typings.readonly.all': {
    relativePath: 'features/objects/typings/readonly/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './deep/all',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './dynamic',
        kind: 'default',
        default: 'dynamic',
      },
      {
        moduleSpecifier: './forceCast',
        kind: 'default',
        default: 'forceCast',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'readonly',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './not/all',
        kind: 'default',
        default: 'not',
      },
      {
        moduleSpecifier: './type',
        kind: 'default',
        default: 'type_',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import deep from './deep/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import readonly from './index';
import is from './is';
import not from './not/all';
import type_ from './type';

/**
 * _readonly const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const _readonly = expandFn(readonly, {
  forceCast,
  dynamic,
  type: type_,
  is,
  not,
  deep,
});

export default _readonly;

    `,
  },
  'features.objects.typings.readonly.deep.all': {
    relativePath: 'features/objects/typings/readonly/deep/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'deepReadonly',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './not/all',
        kind: 'default',
        default: 'not',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import deepReadonly from './index';
import is from './is';
import not from './not/all';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(deepReadonly, {
  not,
  is,
});

export default fn;

    `,
  },
  'features.objects.typings.readonly.deep.index': {
    relativePath: 'features/objects/typings/readonly/deep/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<DeepReadonly<T>>();

export default fn;

    `,
  },
  'features.objects.typings.readonly.deep.is': {
    relativePath: 'features/objects/typings/readonly/deep/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) =>
  _unknown<T extends DeepReadonly<T> ? true : false>();

export default fn;

    `,
  },
  'features.objects.typings.readonly.deep.not.all': {
    relativePath: 'features/objects/typings/readonly/deep/not/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'deepNotReadonly',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../../../globals/utils/expandFn';
import deepNotReadonly from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(deepNotReadonly, {
  is,
});

export default fn;

    `,
  },
  'features.objects.typings.readonly.deep.not.index': {
    relativePath: 'features/objects/typings/readonly/deep/not/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '../../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepNotReadonly } from '../../../../../../globals/types';
import { _unknown } from '../../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends object>(_?: T) =>
  _unknown<DeepNotReadonly<T>>();

export default fn;

    `,
  },
  'features.objects.typings.readonly.deep.not.is': {
    relativePath: 'features/objects/typings/readonly/deep/not/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '../../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepNotReadonly } from '../../../../../../globals/types';
import { _unknown } from '../../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends object>(_?: T) =>
  _unknown<T extends DeepNotReadonly<T> ? true : false>();

export default fn;

    `,
  },

  'features.objects.typings.readonly.dynamic': {
    relativePath: 'features/objects/typings/readonly/dynamic.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends Readonly<T>>(_?: T) => _unknown<T>();

export default fn;

    `,
  },
  'features.objects.typings.readonly.forceCast': {
    relativePath: 'features/objects/typings/readonly/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: unknown) => _unknown<Readonly<T>>();

export default fn;

    `,
  },
  'features.objects.typings.readonly.index': {
    relativePath: 'features/objects/typings/readonly/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) => _unknown<Readonly<T>>();

export default fn;

    `,
  },
  'features.objects.typings.readonly.is': {
    relativePath: 'features/objects/typings/readonly/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) =>
  _unknown<T extends Readonly<T> ? true : false>();

export default fn;

    `,
  },
  'features.objects.typings.readonly.not.all': {
    relativePath: 'features/objects/typings/readonly/not/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'notReadonly',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import notReadonly from './index';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(notReadonly, {
  is,
});

export default fn;

    `,
  },
  'features.objects.typings.readonly.not.index': {
    relativePath: 'features/objects/typings/readonly/not/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { NotReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends object>(_?: T) => _unknown<NotReadonly<T>>();

export default fn;

    `,
  },
  'features.objects.typings.readonly.not.is': {
    relativePath: 'features/objects/typings/readonly/not/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { NotReadonly } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends object>(_?: T) =>
  _unknown<T extends NotReadonly<T> ? true : false>();

export default fn;

    `,
  },
  'features.objects.typings.readonly.type': {
    relativePath: 'features/objects/typings/readonly/type.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = () => _unknown<Readonly<object>>();

export default fn;

    `,
  },
  'features.objects.typings.require.all': {
    relativePath: 'features/objects/typings/require/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './const',
        kind: 'default',
        default: 'const_',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'require',
      },
      {
        moduleSpecifier: './is/all',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './strict',
        kind: 'default',
        default: 'strict',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import const_ from './const';
import require from './index';
import is from './is/all';
import strict from './strict';

/**
 * requireTyping const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const requireTyping = expandFn(require, {
  const: const_,
  strict,
  is,
});

export default requireTyping;

    `,
  },
  'features.objects.typings.require.const': {
    relativePath: 'features/objects/typings/require/const.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends object, const R extends object>(
  _?: T,
  __?: R,
) => _unknown<T & R>();

export default fn;

    `,
  },

  'features.objects.typings.require.index': {
    relativePath: 'features/objects/typings/require/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, R extends object>(_?: T, __?: R) =>
  _unknown<T & R>();

export default fn;

    `,
  },
  'features.objects.typings.require.is.all': {
    relativePath: 'features/objects/typings/require/is/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './deep',
        kind: 'default',
        default: 'deep',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: 'requireIs',
      },
    ],
    text: `import { expandFn } from '../../../../../globals/utils/expandFn';
import deep from './deep';
import requireIs from './index';

/**
 * is const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const is = expandFn(requireIs, {
  deep,
});

export default is;

    `,
  },
  'features.objects.typings.require.is.deep': {
    relativePath: 'features/objects/typings/require/is/deep.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/types',
        kind: 'named',
        namedImports: ['DeepRequired'],
      },
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { DeepRequired } from '../../../../../globals/types';
import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object>(_?: T) =>
  _unknown<T extends DeepRequired<T> ? true : false>();

export default fn;

    `,
  },
  'features.objects.typings.require.is.index': {
    relativePath: 'features/objects/typings/require/is/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, R extends object>(_?: T, __?: R) =>
  _unknown<T extends T & R ? true : false>();

export default fn;

    `,
  },
  'features.objects.typings.require.strict': {
    relativePath: 'features/objects/typings/require/strict.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends object, R extends Partial<T>>(_?: T, __?: R) =>
  _unknown<T & Required<R>>();

export default fn;

    `,
  },
  'features.objects.typings.reverse': {
    relativePath: 'features/objects/typings/reverse.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Keys'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Keys } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends Record<Keys, Keys>>(_?: T) => {
  return _unknown<{
    [K in keyof T as T[K]]: K;
  }>();
};

export default fn;

    `,
  },
  'features.objects.typings.rn': {
    relativePath: 'features/objects/typings/rn.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Rn'],
      },
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { Rn } from '../../../globals/types';
import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<Rn>()();

export default fn;

    `,
  },
  'features.objects.typings.ru': {
    relativePath: 'features/objects/typings/ru.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Ru'],
      },
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { Ru } from '../../../globals/types';
import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<Ru>()();

export default fn;

    `,
  },
  'features.objects.typings.trueObject': {
    relativePath: 'features/objects/typings/trueObject.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['To'],
      },
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { To } from '../../../globals/types';
import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<To>()();

export default fn;

    `,
  },
  'features.objects.typings.values': {
    relativePath: 'features/objects/typings/values.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';
import { expandFn } from '../../../globals/utils/expandFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(
  <T extends object>(_?: T) => _unknown<T[keyof T][]>(),
  {
    union: <T extends object>(_?: T) => _unknown<T[keyof T]>(),
  },
);

export default fn;

    `,
  },

  'features.objects.utils.entries': {
    relativePath: 'features/objects/utils/entries.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['KeyTypes'],
      },
    ],
    text: `import { KeyTypes } from '../../../globals/types';

/**
 * checkEntries variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const checkEntries = (keys: KeyTypes, object: object) => {
  const entries = Object.entries(keys);
  return entries.every(([key, type]) => {
    const check1 = key in object;
    if (!check1) return false;

    const value = (object as any)[key];
    if (typeof type === 'string') {
      return typeof value === type;
    } else if (typeof type === 'function') {
      return type(value);
    }
    return false;
  });
};

    `,
  },
  'features.objects.utils.omit': {
    relativePath: 'features/objects/utils/omit.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: './types',
        kind: 'named',
        namedImports: ['Picker'],
      },
    ],
    text: `import { PrimitiveObjectMap } from '../../../globals/types';
import { Picker } from './types';

/**
 * omit variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const omit = (
  by: Picker,
  object: PrimitiveObjectMap,
  ...valuesOrKeys: any[]
) => {
  const result: any = {};

  const entries = Object.entries(object);
  entries.forEach(([key, value]) => {
    const checkKey = by === 'key' && !valuesOrKeys.includes(key);
    const checkElement = by === 'element' && !valuesOrKeys.includes(value);
    if (checkKey) {
      result[key] = value;
    } else if (checkElement) {
      result[key] = value;
    }
  });

  return result;
};

    `,
  },
  'features.objects.utils.omit.deep': {
    relativePath: 'features/objects/utils/omit.deep.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: '../../../globals/utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
      {
        moduleSpecifier: './types',
        kind: 'named',
        namedImports: ['Picker'],
      },
    ],
    text: `import { PrimitiveObjectMap } from '../../../globals/types';
import { isPlainObject } from '../../../globals/utils/is/object';
import { Picker } from './types';

const __omitDeep = (
  by: Picker,
  object: PrimitiveObjectMap,
  ...valuesOrKeys: any[]
) => {
  const entries = Object.entries(object);
  const result: PrimitiveObjectMap = {};

  entries.forEach(([key, value]) => {
    const isObject = isPlainObject(value);
    if (isObject) {
      const picked = __omitDeep(
        by,
        value as PrimitiveObjectMap,
        ...valuesOrKeys,
      );

      result[key] = picked;
    } else if (by === 'key' && !valuesOrKeys.includes(key)) {
      result[key] = value;
    } else if (
      by === 'element' &&
      !!value &&
      !valuesOrKeys.includes(value)
    ) {
      result[key] = value;
    }
  });

  return result;
};

/**
 * omitDeep variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const omitDeep = (
  by: Picker,
  object: PrimitiveObjectMap,
  ...valuesOrKeys: any[]
) => {
  const result = __omitDeep(by, object, ...valuesOrKeys);

  return result;
};

    `,
  },
  'features.objects.utils.omit.deep.is': {
    relativePath: 'features/objects/utils/omit.deep.is.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Primitive2'],
      },
      {
        moduleSpecifier: '../../../globals/utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
      {
        moduleSpecifier: './types',
        kind: 'named',
        namedImports: ['Picker'],
      },
    ],
    text: `import { Primitive2 } from '../../../globals/types';
import { isPlainObject } from '../../../globals/utils/is/object';
import { Picker } from './types';

/**
 * omitDeepIs variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const omitDeepIs = (
  by: Picker,
  object: object,
  ...valuesOrKeys: Primitive2[]
) => {
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    const isObject = isPlainObject(value);
    if (isObject) {
      const isDeep = omitDeepIs(by, value, ...valuesOrKeys);
      if (!isDeep) return false;
    } else {
      const shouldOmit =
        by === 'element'
          ? valuesOrKeys.includes(value)
          : valuesOrKeys.includes(key);
      if (shouldOmit) return false;
    }
  }
  return true;
};

    `,
  },
  'features.objects.utils.omit.is': {
    relativePath: 'features/objects/utils/omit.is.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: './types',
        kind: 'named',
        namedImports: ['Picker'],
      },
    ],
    text: `import { PrimitiveObjectMap } from '../../../globals/types';
import { Picker } from './types';

/**
 * omitIs variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const omitIs = (
  by: Picker,
  object: PrimitiveObjectMap,
  ...valuesOrKeys: any[]
) => {
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    const checkKey = by === 'key' && valuesOrKeys.includes(key);
    const checkElement = by === 'element' && valuesOrKeys.includes(value);
    if (checkKey) {
      return false;
    } else if (checkElement) {
      return false;
    }
  }
  return true;
};

    `,
  },
  'features.objects.utils.pick': {
    relativePath: 'features/objects/utils/pick.ts',
    imports: [
      {
        moduleSpecifier: './types',
        kind: 'named',
        namedImports: ['Picker'],
      },
    ],
    text: `import { Picker } from './types';

/**
 * pick variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const pick = (by: Picker, object: object, ...keys: any[]) => {
  const result: any = {};
  const entries = Object.entries(object);

  entries.forEach(([key, value]) => {
    const shouldPick =
      by === 'element' ? keys.includes(value) : keys.includes(key);

    if (shouldPick) {
      result[key] = value;
    }
  });

  return result;
};

    `,
  },
  'features.objects.utils.pick.deep': {
    relativePath: 'features/objects/utils/pick.deep.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
      {
        moduleSpecifier: './types',
        kind: 'named',
        namedImports: ['Picker'],
      },
    ],
    text: `import { isPlainObject } from '../../../globals/utils/is/object';
import { Picker } from './types';

/**
 * pickDeep variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const pickDeep = (
  by: Picker,
  object: object,
  ...valuesOrKeys: any[]
) => {
  const result: any = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const element = (object as any)[key];
      const isObject = isPlainObject(element);

      if (isObject) {
        const picked = pickDeep(by, element, ...valuesOrKeys);
        if (Object.keys(picked).length > 0) {
          result[key] = picked;
        }
      } else {
        const shouldPick =
          by === 'element'
            ? valuesOrKeys.includes(element)
            : valuesOrKeys.includes(key);
        if (shouldPick) result[key] = element;
      }
    }
  }

  return result;
};

    `,
  },
  'features.objects.utils.require': {
    relativePath: 'features/objects/utils/require.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['DeepRequired'],
      },
      {
        moduleSpecifier: '../../../globals/utils/is/merge',
        kind: 'named',
        namedImports: ['mergeIs'],
      },
      {
        moduleSpecifier: '../../../globals/utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
    ],
    text: `import { DeepRequired } from '../../../globals/types';
import { mergeIs } from '../../../globals/utils/is/merge';
import { isPlainObject } from '../../../globals/utils/is/object';

/**
 * isRequiredDeep variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const isRequiredDeep = (
  object: unknown,
): object is DeepRequired<any> => {
  const isObject = isPlainObject(object);
  if (isObject) {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = (object as any)[key];
        const isPrimitiveMap = isRequiredDeep(element);
        if (!isPrimitiveMap) return false;
      }
    }
    return true;
  }

  const isArray = Array.isArray(object);
  if (isArray) {
    for (const item of object) {
      const isPrimitiveMap = isRequiredDeep(item);
      if (!isPrimitiveMap) return false;
    }
    return true;
  }

  const checker = mergeIs(undefined, null);

  return !checker(object);
};

    `,
  },
  'features.objects.utils.types': {
    relativePath: 'features/objects/utils/types.ts',
    imports: [],
    text: `/**
 * Picker type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Picker = 'element' | 'key';
`,
  },
  'features.promises.index': {
    relativePath: 'features/promises/index.ts',
    imports: [],
    text: `export * from './types';
`,
  },

  'features.promises.types': {
    relativePath: 'features/promises/types.ts',
    imports: [],
    text: `/**
 * PromisifyMethod type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type PromisifyMethod<T> = T extends (...args: infer P) => infer R
  ? R extends Promise<any>
    ? T
    : (...args: P) => Promise<R>
  : never;

/**
 * PromisifyObject type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type PromisifyObject<T extends Record<string, unknown>> = T & {
  [P in keyof T as PromisifyMethod<T[P]> extends never
    ? never
    : \`$-|||-{string & P}Async\`]: PromisifyMethod<T[P]>;
};
`,
  },
  'features.strings.castings.add': {
    relativePath: 'features/strings/castings/add.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['AddString'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { AddString } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends string, Before extends string, After extends string>(
  value: T,
  before = '' as Before,
  after = '' as After,
) => {
  const out = \`$-|||-{before}$-|||-{value}$-|||-{after}\`;
  return _unknown<AddString<T, Before, After>>(out);
};

export default fn;

    `,
  },
  'features.strings.castings.all': {
    relativePath: 'features/strings/castings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: '../constants',
        kind: 'named',
        namedImports: ['DEFAULT_DELIMITER'],
      },
      {
        moduleSpecifier: './add',
        kind: 'default',
        default: 'add',
      },
      {
        moduleSpecifier: './contains',
        kind: 'default',
        default: 'contains',
      },
      {
        moduleSpecifier: './endsWith',
        kind: 'default',
        default: 'endsWith',
      },
      {
        moduleSpecifier: './getLength',
        kind: 'default',
        default: 'getLength',
      },
      {
        moduleSpecifier: './includes',
        kind: 'default',
        default: 'includes',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './instance',
        kind: 'default',
        default: 'instance',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './join',
        kind: 'default',
        default: 'join',
      },
      {
        moduleSpecifier: './letters/all',
        kind: 'default',
        default: 'letters',
      },
      {
        moduleSpecifier: './splitBy',
        kind: 'default',
        default: 'splitBy',
      },
      {
        moduleSpecifier: './startsWith',
        kind: 'default',
        default: 'startsWith',
      },
      {
        moduleSpecifier: './toLowerCase',
        kind: 'default',
        default: 'toLowerCase',
      },
      {
        moduleSpecifier: './toUpperCase',
        kind: 'default',
        default: 'toUpperCase',
      },
      {
        moduleSpecifier: './type',
        kind: 'default',
        default: 'type',
      },
    ],
    text: `import { expandFn } from '../../../globals/utils/expandFn';
import { DEFAULT_DELIMITER } from '../constants';
import add from './add';
import contains from './contains';
import endsWith from './endsWith';
import getLength from './getLength';
import includes from './includes';
import _index from './index';
import instance from './instance';
import is from './is';
import join from './join';
import letters from './letters/all';
import splitBy from './splitBy';
import startsWith from './startsWith';
import toLowerCase from './toLowerCase';
import toUpperCase from './toUpperCase';
import type from './type';

/**
 * castings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const castings = expandFn(_index, {
  is,
  instance,
  type,
  getLength,
  startsWith,
  endsWith,
  includes,
  contains,
  toLowerCase,
  toUpperCase,
  letters,
  add,
  join,
  splitBy,
  DEFAULT_DELIMITER,
});

    `,
  },
  'features.strings.castings.contains': {
    relativePath: 'features/strings/castings/contains.ts',
    imports: [
      {
        moduleSpecifier: './includes',
        kind: 'default',
        default: 'includes',
      },
    ],
    text: `import includes from './includes';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <U extends string[]>(
  value: unknown,
  ...segments: U
): value is \`$-|||-{string}$-|||-{U[number]}$-|||-{string}\` =>
  includes(value, ...segments);

export default fn;

    `,
  },
  'features.strings.castings.endsWith': {
    relativePath: 'features/strings/castings/endsWith.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/is/_default',
        kind: 'named',
        namedImports: ['isTypeFn'],
      },
    ],
    text: `import { isTypeFn } from '../../../globals/utils/is/_default';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <U extends string>(
  value: unknown,
  suffix: U,
): value is \`$-|||-{string}$-|||-{U}\` => {
  return isTypeFn('string')(value) && value.endsWith(suffix);
};

export default fn;

    `,
  },
  'features.strings.castings.getLength': {
    relativePath: 'features/strings/castings/getLength.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends string>(value: T) => {
  const out = value.length;
  return _unknown<T['length']>(out);
};

export default fn;

    `,
  },
  'features.strings.castings.includes': {
    relativePath: 'features/strings/castings/includes.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <U extends string[]>(
  value: unknown,
  ...segments: U
): value is \`$-|||-{string}$-|||-{U[number]}$-|||-{string}\` => {
  if (typeof value !== 'string') return false;

  // Check if the string contains any of the segments
  for (const seg of segments) {
    if (value.includes(seg)) {
      return true;
    }
  }
  return false;
};

export default fn;
`,
  },
  'features.strings.castings.index': {
    relativePath: 'features/strings/castings/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<string>()();

export default fn;

    `,
  },
  'features.strings.castings.instance': {
    relativePath: 'features/strings/castings/instance.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { castFn } from '../../../globals/utils/castFn';

// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<String>()({
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  is: (value: unknown): value is String => {
    return value instanceof String;
  },
});

export default fn;

    `,
  },
  'features.strings.castings.is': {
    relativePath: 'features/strings/castings/is.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/is/_default',
        kind: 'named',
        namedImports: ['isTypeFn'],
      },
    ],
    text: `import { isTypeFn } from '../../../globals/utils/is/_default';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = isTypeFn('string');

export default fn;

    `,
  },

  'features.strings.castings.join': {
    relativePath: 'features/strings/castings/join.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['JoinString'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { JoinString } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends readonly string[], S extends string = ' '>(
  sep = ' ' as S,
  ...args: T
) => {
  const out = args.join(sep);
  return _unknown<JoinString<T, S>>(out);
};

export default fn;

    `,
  },
  'features.strings.castings.letters.all': {
    relativePath: 'features/strings/castings/letters/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
      {
        moduleSpecifier: './lower',
        kind: 'default',
        default: 'lower',
      },
      {
        moduleSpecifier: './upper',
        kind: 'default',
        default: 'upper',
      },
    ],
    text: `import { expandFn } from '../../../../globals/utils/expandFn';
import _index from './index';
import is from './is';
import lower from './lower';
import upper from './upper';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = expandFn(_index, {
  lower,
  upper,
  is,
});

export default fn;

    `,
  },
  'features.strings.castings.letters.index': {
    relativePath: 'features/strings/castings/letters/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Letters'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    text: `import { Letters } from '../../../../globals/types';
import { castFn } from '../../../../globals/utils/castFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<Letters>()();

export default fn;

    `,
  },
  'features.strings.castings.letters.is': {
    relativePath: 'features/strings/castings/letters/is.ts',
    imports: [
      {
        moduleSpecifier: '../../constants',
        kind: 'named',
        namedImports: ['ENGLISH_LETTERS'],
      },
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Letters'],
      },
    ],
    text: `import { ENGLISH_LETTERS } from '../../constants';
import { Letters } from '../../../../globals/types';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = (value: unknown): value is Letters => {
  if (typeof value !== 'string') return false;
  if (value.length === 0) return false;

  // Check if all characters are English letters
  for (const char of value.toLowerCase()) {
    if (!ENGLISH_LETTERS.includes(char as any)) {
      return false;
    }
  }
  return true;
};

export default fn;

    `,
  },
  'features.strings.castings.letters.lower': {
    relativePath: 'features/strings/castings/letters/lower.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['LowerLetters'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { LowerLetters } from '../../../../globals/types';
import { castFn } from '../../../../globals/utils/castFn';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<LowerLetters>()({
  is: (value: unknown): value is LowerLetters => {
    return (
      typeof value === 'string' &&
      is(value) &&
      value === value.toLowerCase()
    );
  },
});

export default fn;

    `,
  },
  'features.strings.castings.letters.upper': {
    relativePath: 'features/strings/castings/letters/upper.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['UpperLetters'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    text: `import { UpperLetters } from '../../../../globals/types';
import { castFn } from '../../../../globals/utils/castFn';
import is from './is';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = castFn<UpperLetters>()({
  is: (value: unknown): value is UpperLetters => {
    return (
      typeof value === 'string' &&
      is(value) &&
      value === value.toUpperCase()
    );
  },
});

export default fn;

    `,
  },
  'features.strings.castings.splitBy': {
    relativePath: 'features/strings/castings/splitBy.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['SplitStringBy'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { SplitStringBy } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const S extends string, By extends string = '.'>(
  value: S,
  by = '.' as By,
) => {
  const out = value.split(by);
  return _unknown<SplitStringBy<S, By>>(out);
};

export default fn;

    `,
  },
  'features.strings.castings.startsWith': {
    relativePath: 'features/strings/castings/startsWith.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/is/_default',
        kind: 'named',
        namedImports: ['isTypeFn'],
      },
    ],
    text: `import { isTypeFn } from '../../../globals/utils/is/_default';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <U extends string>(
  value: unknown,
  prefix: U,
): value is \`$-|||-{U}$-|||-{string}\` => {
  return isTypeFn('string')(value) && value.startsWith(prefix);
};

export default fn;

    `,
  },
  'features.strings.castings.toLowerCase': {
    relativePath: 'features/strings/castings/toLowerCase.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends string>(value: T) => {
  const out = value.toLowerCase();
  return _unknown<Lowercase<T>>(out);
};

export default fn;

    `,
  },
  'features.strings.castings.toUpperCase': {
    relativePath: 'features/strings/castings/toUpperCase.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends string>(value: T) => {
  const out = value.toUpperCase();
  return _unknown<Uppercase<T>>(out);
};

export default fn;

    `,
  },

  'features.strings.castings.type': {
    relativePath: 'features/strings/castings/type.ts',
    imports: [],
    text: `/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = String;

export default fn;
`,
  },
  'features.strings.constants': {
    relativePath: 'features/strings/constants.ts',
    imports: [],
    text: `/**
 * ENGLISH_LETTERS variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const ENGLISH_LETTERS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
] as const;

/**
 * DEFAULT_DELIMITER variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const DEFAULT_DELIMITER = '.';
`,
  },
  'features.strings.index': {
    relativePath: 'features/strings/index.ts',
    imports: [],
    text: `export * from './castings/all';
export * as CONSTANTS from './constants';
export * from './types';
export * from './typings/all';
`,
  },
  'features.strings.types': {
    relativePath: 'features/strings/types.ts',
    imports: [
      {
        moduleSpecifier: './constants',
        kind: 'named',
        namedImports: ['ENGLISH_LETTERS'],
      },
    ],
    text: `import { ENGLISH_LETTERS } from './constants';

/**
 * LowerLetters type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type LowerLetters = (typeof ENGLISH_LETTERS)[number];

/**
 * UpperLetters type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type UpperLetters = Uppercase<LowerLetters>;

/**
 * Letters type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Letters = UpperLetters | LowerLetters;

// export type StringLocalLitterals = Letters | Digit;

/**
 * Email type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Email = \`$-|||-{string}@$-|||-{string}.$-|||-{string}\`;

/**
 * _JoinStringHelper type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type _JoinStringHelper = string | number | boolean | bigint;

/**
 * JoinString type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type JoinString<
  T extends readonly string[],
  sep extends string = ' ',
> = T extends []
  ? ''
  : T extends [_JoinStringHelper]
    ? \`$-|||-{T[0]}\`
    : T extends [_JoinStringHelper, ...infer U extends readonly string[]]
      ? \`$-|||-{T[0]}$-|||-{sep}$-|||-{JoinString<U, sep>}\`
      : string;

/**
 * AddString type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type AddString<
  T,
  Before extends string = '',
  After extends string = '',
> = \`$-|||-{Before}$-|||-{T & string}$-|||-{After}\`;

/**
 * StringEndWith type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type StringEndWith<
  S extends string,
  E extends string,
> = S extends \`$-|||-{infer Prev}$-|||-{E}\`
  ? { response: true; full: S; prev: Prev }
  : { response: false; full: S; prev: S };

/**
 * StringStartWith type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type StringStartWith<
  S extends string,
  E extends string,
> = S extends \`$-|||-{E}$-|||-{infer Next}\`
  ? { response: true; full: S; next: Next }
  : { response: false; full: S; next: S };

/**
 * StringContains type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type StringContains<
  S extends string,
  E extends string,
> = S extends \`$-|||-{infer Prev}$-|||-{E}$-|||-{infer Next}\`
  ? { response: true; full: S; prev: Prev; next: Next }
  : { response: false; full: S; prev: string; next: string };

/**
 * Credit to {@link https://stackoverflow.com/a/70831818/11704485 | Matthieu Riegler}
 */
/**
 * SplitStringBy type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type SplitStringBy<
  S extends string,
  By extends string = '.',
> = string extends S
  ? string[]
  : S extends ''
    ? []
    : S extends \`$-|||-{infer T}$-|||-{By}$-|||-{infer U}\`
      ? [T, ...SplitStringBy<U, By>]
      : [S];

/**
 * ExtractS type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type ExtractS<T> = Extract<T, string>;

    `,
  },
  'features.strings.typings.add': {
    relativePath: 'features/strings/typings/add.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['AddString'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { AddString } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends string, Before extends string, After extends string>(
  _?: T,
  __?: Before,
  ___?: After,
) => _unknown<AddString<T, Before, After>>();

export default fn;

    `,
  },
  'features.strings.typings.all': {
    relativePath: 'features/strings/typings/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './add',
        kind: 'default',
        default: 'add',
      },
      {
        moduleSpecifier: './contains',
        kind: 'default',
        default: 'contains',
      },
      {
        moduleSpecifier: './email',
        kind: 'default',
        default: 'email',
      },
      {
        moduleSpecifier: './endsWith',
        kind: 'default',
        default: 'endsWith',
      },
      {
        moduleSpecifier: './getLength',
        kind: 'default',
        default: 'getLength',
      },
      {
        moduleSpecifier: './includes',
        kind: 'default',
        default: 'includes',
      },
      {
        moduleSpecifier: './index',
        kind: 'default',
        default: '_index',
      },
      {
        moduleSpecifier: './instance',
        kind: 'default',
        default: 'instance',
      },
      {
        moduleSpecifier: './join',
        kind: 'default',
        default: 'join',
      },
      {
        moduleSpecifier: './letters/all',
        kind: 'default',
        default: 'letters',
      },
      {
        moduleSpecifier: './splitBy',
        kind: 'default',
        default: 'splitBy',
      },
      {
        moduleSpecifier: './startsWith',
        kind: 'default',
        default: 'startsWith',
      },
      {
        moduleSpecifier: './toLowerCase',
        kind: 'default',
        default: 'toLowerCase',
      },
      {
        moduleSpecifier: './toUpperCase',
        kind: 'default',
        default: 'toUpperCase',
      },
    ],
    text: `import { expandFn } from '../../../globals/utils/expandFn';
import add from './add';
import contains from './contains';
import email from './email';
import endsWith from './endsWith';
import getLength from './getLength';
import includes from './includes';
import _index from './index';
import instance from './instance';
import join from './join';
import letters from './letters/all';
import splitBy from './splitBy';
import startsWith from './startsWith';
import toLowerCase from './toLowerCase';
import toUpperCase from './toUpperCase';

/**
 * typings variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const typings = expandFn(_index, {
  add,
  contains,
  email,
  endsWith,
  getLength,
  includes,
  instance,
  join,
  letters,
  splitBy,
  startsWith,
  toLowerCase,
  toUpperCase,
});

    `,
  },
  'features.strings.typings.contains': {
    relativePath: 'features/strings/typings/contains.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends string, U extends string[]>(_?: T, ...__: U) =>
  _unknown<T extends \`$-|||-{string}$-|||-{U[number]}$-|||-{string}\` ? true : false>();

export default fn;

    `,
  },
  'features.strings.typings.email': {
    relativePath: 'features/strings/typings/email.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['Email'],
      },
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { Email } from '../../../globals/types';
import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<Email>()();

export default fn;

    `,
  },
  'features.strings.typings.endsWith': {
    relativePath: 'features/strings/typings/endsWith.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends string, U extends string>(_?: T, __?: U) =>
  _unknown<T extends \`$-|||-{string}$-|||-{U}\` ? true : false>();

export default fn;

    `,
  },
  'features.strings.typings.getLength': {
    relativePath: 'features/strings/typings/getLength.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends string>(_?: T) => _unknown<T['length']>();

export default fn;

    `,
  },

  'features.strings.typings.includes': {
    relativePath: 'features/strings/typings/includes.ts',
    imports: [
      {
        moduleSpecifier: './contains',
        kind: 'default',
        default: 'contains',
      },
    ],
    text: `import contains from './contains';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = contains;

export default fn;

    `,
  },
  'features.strings.typings.index': {
    relativePath: 'features/strings/typings/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<string>()();

export default fn;

    `,
  },
  'features.strings.typings.instance': {
    relativePath: 'features/strings/typings/instance.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { typeFn } from '../../../globals/utils/typeFn';

// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<String>()();

export default fn;

    `,
  },
  'features.strings.typings.join': {
    relativePath: 'features/strings/typings/join.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['JoinString'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { JoinString } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <T extends readonly string[], sep extends string = ' '>(
  _?: sep,
  ...__: T
) => _unknown<JoinString<T, sep>>();

export default fn;

    `,
  },
  'features.strings.typings.letters.all': {
    relativePath: 'features/strings/typings/letters/all.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Letters'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
      {
        moduleSpecifier: './lower',
        kind: 'default',
        default: 'lower',
      },
      {
        moduleSpecifier: './upper',
        kind: 'default',
        default: 'upper',
      },
    ],
    text: `import { Letters } from '../../../../globals/types';
import { typeFn } from '../../../../globals/utils/typeFn';
import lower from './lower';
import upper from './upper';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<Letters>()({
  lower,
  upper,
});

export default fn;

    `,
  },
  'features.strings.typings.letters.index': {
    relativePath: 'features/strings/typings/letters/index.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Letters'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { Letters } from '../../../../globals/types';
import { typeFn } from '../../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<Letters>()();

export default fn;

    `,
  },
  'features.strings.typings.letters.lower': {
    relativePath: 'features/strings/typings/letters/lower.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['LowerLetters'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { LowerLetters } from '../../../../globals/types';
import { typeFn } from '../../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<LowerLetters>()();

export default fn;

    `,
  },
  'features.strings.typings.letters.type': {
    relativePath: 'features/strings/typings/letters/type.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['Letters'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { Letters } from '../../../../globals/types';
import { _unknown } from '../../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = _unknown<Letters>();

export default fn;

    `,
  },
  'features.strings.typings.letters.upper': {
    relativePath: 'features/strings/typings/letters/upper.ts',
    imports: [
      {
        moduleSpecifier: '../../../../globals/types',
        kind: 'named',
        namedImports: ['UpperLetters'],
      },
      {
        moduleSpecifier: '../../../../globals/utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    text: `import { UpperLetters } from '../../../../globals/types';
import { typeFn } from '../../../../globals/utils/typeFn';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = typeFn<UpperLetters>()();

export default fn;

    `,
  },
  'features.strings.typings.splitBy': {
    relativePath: 'features/strings/typings/splitBy.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/types',
        kind: 'named',
        namedImports: ['SplitStringBy'],
      },
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { SplitStringBy } from '../../../globals/types';
import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const S extends string, By extends string = '.'>(
  _?: S,
  __?: By,
) => _unknown<SplitStringBy<S, By>>();

export default fn;

    `,
  },

  'features.strings.typings.startsWith': {
    relativePath: 'features/strings/typings/startsWith.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends string, U extends string>(_?: T, __?: U) =>
  _unknown<T extends \`$-|||-{U}$-|||-{string}\` ? true : false>();

export default fn;

    `,
  },
  'features.strings.typings.toLowerCase': {
    relativePath: 'features/strings/typings/toLowerCase.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends string>(_?: T) => _unknown<Lowercase<T>>();

export default fn;

    `,
  },
  'features.strings.typings.toUpperCase': {
    relativePath: 'features/strings/typings/toUpperCase.ts',
    imports: [
      {
        moduleSpecifier: '../../../globals/utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    text: `import { _unknown } from '../../../globals/utils/_unknown';

/**
 * fn const - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
const fn = <const T extends string>(_?: T) => _unknown<Uppercase<T>>();

export default fn;

    `,
  },
  'features.transform.constants': {
    relativePath: 'features/transform/constants.ts',
    imports: [],
    text: `/**
 * PRIMITIVES variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const PRIMITIVES = [
  'string',
  'number',
  'boolean',
  'bigint',
  'symbol',
  'undefined',
  'null',
] as const;

/**
 * PRIMITIVE_OBJECTS variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const PRIMITIVE_OBJECTS = ['object', 'date', 'primitive'] as const;

/**
 * CUSTOM variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const CUSTOM = '$$app-ts => custom$$' as const;
/**
 * PARTIAL variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const PARTIAL = '$$app-ts => partial$$' as const;
`,
  },
  'features.transform.functions': {
    relativePath: 'features/transform/functions.ts',
    imports: [
      {
        moduleSpecifier: '../../globals/utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './constants',
        kind: 'named',
        namedImports: [
          'CUSTOM',
          'PARTIAL',
          'PRIMITIVE_OBJECTS',
          'PRIMITIVES',
        ],
      },
      {
        moduleSpecifier: './types',
        kind: 'named',
        namedImports: ['Custom', 'ObjectS', 'PartialCustom', 'TransformO'],
      },
    ],
    text: `import { expandFn } from '../../globals/utils/expandFn';
import { CUSTOM, PARTIAL, PRIMITIVE_OBJECTS, PRIMITIVES } from './constants';
import { Custom, ObjectS, PartialCustom, TransformO } from './types';

const _transform = <T>(object?: any): T => {
  let out: any;

  const isArray = Array.isArray(object);
  if (isArray) {
    out = object.map(_transform);
    return out;
  }

  const isObject = typeof object === 'object';

  if (isObject) {
    out = {};

    const entries = Object.entries(object).filter(
      ([key]) => key !== PARTIAL,
    );
    if (entries.length === 0) return out;

    const isCustom = Object.keys(object).every(key => key === CUSTOM);

    if (isCustom) return out;

    entries.forEach(([key, value]) => {
      out[key] = _transform(value);
    });

    return out;
  }

  for (const primitive of PRIMITIVES) {
    if (object === primitive) return out;
  }

  for (const primitive of PRIMITIVE_OBJECTS.filter(
    value => value !== 'date',
  )) {
    if (object === primitive) {
      out = {};
      return out;
    }
  }

  return out;
};

/**
 * transform variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const transform = expandFn(
  <T extends ObjectS>(object?: T) => _transform<TransformO<T>>(object),
  {
    const: <const T extends ObjectS>(object?: T) => {
      return _transform<TransformO<T>>(object);
    },
    custom: <T = any>(_?: T): Custom<T> => {
      const out: any = {};
      out[CUSTOM] = undefined;
      return out;
    },
    partial: <T extends ObjectS>(value: T): T & PartialCustom => {
      const entries = Object.entries(value).filter(
        ([key]) => key !== PARTIAL,
      );
      const out: any = {};

      entries.forEach(([key, value]) => {
        out[key] = value;
      });

      out[PARTIAL] = undefined;

      return out;
    },

    tuple: <T extends ObjectS[]>(...els: T) => transform<T>(els),

    union: <T extends ObjectS[]>(..._: T) => transform<T[number]>(),
  },
);

    `,
  },
  'features.transform.index': {
    relativePath: 'features/transform/index.ts',
    imports: [],
    text: `export * from './constants';
export * from './functions';
export * from './types';
`,
  },
  'features.transform.types': {
    relativePath: 'features/transform/types.ts',
    imports: [
      {
        moduleSpecifier: '../../globals/types',
        kind: 'named',
        namedImports: [
          'AnyArray',
          'Fn',
          'NOmit',
          'PrimitiveObject',
          'SoRa',
        ],
      },
      {
        moduleSpecifier: './constants',
        kind: 'named',
        namedImports: [
          'CUSTOM',
          'PARTIAL',
          'PRIMITIVE_OBJECTS',
          'PRIMITIVES',
        ],
      },
    ],
    text: `import { AnyArray, Fn, NOmit, PrimitiveObject, SoRa } from '../../globals/types';
import { CUSTOM, PARTIAL, PRIMITIVE_OBJECTS, PRIMITIVES } from './constants';

/**
 * PrimitiveS type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type PrimitiveS = (typeof PRIMITIVES)[number];

/**
 * TransformS type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type TransformS<T extends PrimitiveS> = T extends 'string'
  ? string
  : T extends 'number'
    ? number
    : T extends 'boolean'
      ? boolean
      : T extends 'bigint'
        ? bigint
        : T extends 'symbol'
          ? symbol
          : T extends 'undefined'
            ? undefined
            : T extends 'null'
              ? null
              : never;

/**
 * MapS type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type MapS = {
  [key: string]: ObjectS;
};

/**
 * Custom type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type Custom<T = any> = {
  [CUSTOM]: T;
};

/**
 * PartialCustom type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type PartialCustom = {
  [PARTIAL]: undefined;
};

/**
 * _ObjectS type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type _ObjectS =
  | MapS
  | PrimitiveS
  | Custom
  | PartialCustom
  | (typeof PRIMITIVE_OBJECTS)[number];

/**
 * ObjectS type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type ObjectS = SoRa<_ObjectS>;

/**
 * TransformO type - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export type TransformO<T> = T extends 'function'
  ? Fn
  : T extends PrimitiveS
    ? TransformS<T>
    : T extends 'date'
      ? Date
      : T extends 'object'
        ? // eslint-disable-next-line @typescript-eslint/no-empty-object-type
          {}
        : T extends 'primitive'
          ? PrimitiveObject
          : T extends PartialCustom
            ? Partial<TransformO<NOmit<T, typeof PARTIAL>>>
            : T extends AnyArray<any>
              ? T[number] extends infer TKN extends ObjectS
                ? TransformO<TKN>[]
                : never
              : {
                  [K in keyof T]: TransformO<T[K]>;
                };

    `,
  },
  'globals.castings': {
    relativePath: 'globals/castings.ts',
    imports: [],
    text: `export { castings as arrays } from '../features/arrays/castings/all';
export { castings as common } from '../features/common/castings/all';
// export { castings as functions } from '../features/functions/castings/all';
export { castings as numbers } from '../features/numbers/castings/all';
export { castings as objects } from '../features/objects/castings/all';
// export { castings as promises } from '../features/promises/castings/all';
export { castings as strings } from '../features/strings/castings/all';
`,
  },
  'globals.types': {
    relativePath: 'globals/types.ts',
    imports: [],
    text: `export * from '../features/arrays/types';
export * from '../features/common/types';
export * from '../features/functions/types';
export * from '../features/numbers/types';
export * from '../features/objects/types';
export * from '../features/promises/types';
export * from '../features/strings/types';
`,
  },
  'globals.typings': {
    relativePath: 'globals/typings.ts',
    imports: [],
    text: `export { typings as arrays } from '../features/arrays/typings/all';
export { typings as common } from '../features/common/typings/all';
// export { typings as functions } from '../features/functions/typings/all';
export { typings as numbers } from '../features/numbers/typings/all';
export { typings as objects } from '../features/objects/typings/all';
// export { typings as promises } from '../features/promises/typings/all';
export { typings as strings } from '../features/strings/typings/all';
`,
  },

  'globals.utils._unknown': {
    relativePath: 'globals/utils/_unknown.ts',
    imports: [],
    text: `/**
 * _unknown variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const _unknown = <T>(value?: unknown) => value as T;
`,
  },
  'globals.utils.castFn': {
    relativePath: 'globals/utils/castFn.ts',
    imports: [
      {
        moduleSpecifier: '../types',
        kind: 'named',
        namedImports: ['RuA'],
      },
      {
        moduleSpecifier: './_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: './expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './is/merge',
        kind: 'named',
        namedImports: ['mergeIs'],
      },
    ],
    text: `import { RuA } from '../types';
import { _unknown } from './_unknown';
import { expandFn } from './expandFn';
import { mergeIs } from './is/merge';

/**
 * castFn variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const castFn = <T>() => {
  const _out = <const Tr extends object = object>(extensions?: Tr) => {
    const out = expandFn((arg: T) => arg, {
      ...(extensions as Tr),
      forceCast: (arg: unknown) => {
        return _unknown<T>(arg);
      },
      dynamic: <U extends T>(arg: U) => {
        return arg;
      },
    });
    return out;
  };
  return _out;
};

castFn.withValues = <T extends RuA>(...values: T) => {
  const out = <const Tr extends object = object>(extensions?: Tr) =>
    castFn<T[number]>()({
      ...extensions,
      is: mergeIs(...values),
    });
  return out;
};

    `,
  },
  'globals.utils.expandFn': {
    relativePath: 'globals/utils/expandFn.ts',
    imports: [
      {
        moduleSpecifier: '../../features/functions/types',
        kind: 'named',
        namedImports: ['Fn', 'FnBasic'],
      },
    ],
    text: `import { Fn, FnBasic } from '../../features/functions/types';

/**
 * expandFn variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const expandFn = <
  Main extends Fn,
  const Tr extends object = object,
>(
  main: Main,
  extensions?: Tr,
): FnBasic<Main, Tr> => {
  const out: any = main;

  if (extensions) {
    Object.assign(out, extensions);
  }

  return out;
};

    `,
  },
  'globals.utils.identity': {
    relativePath: 'globals/utils/identity.ts',
    imports: [],
    text: `/**
 * identity variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const identity = <T>(value: T) => value;
`,
  },
  'globals.utils.index': {
    relativePath: 'globals/utils/index.ts',
    imports: [],
    text: `export * from './_unknown';
export * from './castFn';
export * from './expandFn';
export * from './identity';
export * from './is';
export * from './typeFn';
`,
  },
  'globals.utils.is._default': {
    relativePath: 'globals/utils/is/_default.ts',
    imports: [
      {
        moduleSpecifier: '../../../features/transform/types',
        kind: 'named',
        namedImports: ['PrimitiveS', 'TransformO'],
      },
      {
        moduleSpecifier: '../../types',
        kind: 'named',
        namedImports: ['Classe'],
      },
    ],
    text: `import { PrimitiveS, TransformO } from '../../../features/transform/types';
import { Classe } from '../../types';

/**
 * isFn variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const isFn = <const T>(check: T) => {
  return (value?: unknown): value is T => {
    return typeof value === check;
  };
};

/**
 * isTypeFn variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const isTypeFn = <T extends PrimitiveS | 'object'>(type: T) => {
  return (value?: unknown): value is TransformO<T> => {
    return typeof value === type;
  };
};

/**
 * isInstance variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const isInstance = <T extends Classe>(instance: T) => {
  return (value?: unknown): value is T => {
    return value instanceof instance;
  };
};

    `,
  },
  'globals.utils.is.index': {
    relativePath: 'globals/utils/is/index.ts',
    imports: [],
    text: `export * from './_default';
export * from './merge';
export * from './object';
export * from './primitive';
export * from './primitive.object';
`,
  },
  'globals.utils.is.merge': {
    relativePath: 'globals/utils/is/merge.ts',
    imports: [
      {
        moduleSpecifier: '../expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
    ],
    text: `import { expandFn } from '../expandFn';

/**
 * mergeIs variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const mergeIs = expandFn(
  <const T extends unknown[]>(...checks: T) => {
    return (value?: unknown): value is T[number] => {
      return checks.some(check => value === check);
    };
  },
  {
    type: <const T extends unknown[]>(...checks: T) => {
      return (value?: unknown): value is T[number] => {
        return checks.some(check => typeof value === check);
      };
    },
  },
);

    `,
  },
  'globals.utils.is.object': {
    relativePath: 'globals/utils/is/object.ts',
    imports: [],
    text: `/**
 * isPlainObject variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const isPlainObject = (value?: any): value is object => {
  return (
    Object.prototype.toString.call(value) == '[object Object]' &&
    value.constructor &&
    value.constructor.name == 'Object'
  );
};
`,
  },
  'globals.utils.is.primitive': {
    relativePath: 'globals/utils/is/primitive.ts',
    imports: [
      {
        moduleSpecifier: '../../../features/transform/constants',
        kind: 'named',
        namedImports: ['PRIMITIVES'],
      },
      {
        moduleSpecifier: '../../types',
        kind: 'named',
        namedImports: ['Primitive'],
      },
      {
        moduleSpecifier: './merge',
        kind: 'named',
        namedImports: ['mergeIs'],
      },
    ],
    text: `import { PRIMITIVES } from '../../../features/transform/constants';
import { Primitive } from '../../types';
import { mergeIs } from './merge';

/**
 * isPrimitive variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const isPrimitive = (value?: unknown): value is Primitive => {
  const isType = mergeIs.type(...PRIMITIVES);
  const isValue = mergeIs(null, undefined);
  return isType(value) || isValue(value);
};

    `,
  },

  'globals.utils.is.primitive.object': {
    relativePath: 'globals/utils/is/primitive.object.ts',
    imports: [
      {
        moduleSpecifier: '../../types',
        kind: 'named',
        namedImports: ['PrimitiveObject'],
      },
      {
        moduleSpecifier: './object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
      {
        moduleSpecifier: './primitive',
        kind: 'named',
        namedImports: ['isPrimitive'],
      },
    ],
    text: `import { PrimitiveObject } from '../../types';
import { isPlainObject } from './object';
import { isPrimitive } from './primitive';

/**
 * isPrimitiveObject variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const isPrimitiveObject = (
  object?: unknown,
): object is PrimitiveObject => {
  const isObject = isPlainObject(object);
  if (isObject) {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = (object as any)[key];
        const isPrimitiveMap = isPrimitiveObject(element);
        if (!isPrimitiveMap) return false;
      }
    }
    return true;
  }

  const isArray = Array.isArray(object);
  if (isArray) {
    for (const item of object) {
      const isPrimitiveMap = isPrimitiveObject(item);
      if (!isPrimitiveMap) return false;
    }
    return true;
  }

  return isPrimitive(object);
};

    `,
  },
  'globals.utils.typeFn': {
    relativePath: 'globals/utils/typeFn.ts',
    imports: [
      {
        moduleSpecifier: './_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: './expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
    ],
    text: `import { _unknown } from './_unknown';
import { expandFn } from './expandFn';

/**
 * typeFn variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const typeFn = <T = any>() => {
  const _out = <Tr extends object = object>(extensions?: Tr) => {
    const out = expandFn((_?: T) => _unknown<T>(), {
      ...(extensions as Tr),
      forceCast: (_?: unknown) => _unknown<T>(),
      dynamic: <U extends T>(_?: U) => _unknown<U>(),
      is: <U>(_?: U) => _unknown<U extends T ? true : false>(),
      type: _unknown<T>(),
    });

    return out;
  };

  return _out;
};

    `,
  },
  index: {
    relativePath: 'index.ts',
    imports: [],
    text: `export * from '#utils/index';
export * from './features';
`,
  },
};

// Statistiques de l'analyse
export const ANALYSIS_STATS = {
  totalFiles: 423,
  totalImports: 887,
  totalExports: 920,
};
