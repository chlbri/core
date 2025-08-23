// Analyse automatique du codebase généré le 2025-08-23T02:07:44.245Z

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
  exports: ExportInfo[];
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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'castings',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  low,\n  is,\n  indexes,\n  _length,\n  tuple,\n  reduce,\n  toArray,\n  reverse,\n  freeze,\n  extract,\n  exclude,\n  forceCast,\n  dynamic,\n  type,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import dynamic from './dynamic';
import exclude from './exclude';
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
  exclude,
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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['AnyArray'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends AnyArray>(value: T) => {\n  return _unknown<T>(value);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { AnyArray } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['ExcludeArray'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'exclude = <const T extends any[], const Ex extends T[number][]>(\n  array: T,\n  ...excludes: Ex\n) => {\n  const out = array.filter(item => !excludes.includes(item));\n  return _unknown<ExcludeArray<T, Ex[number]>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { ExcludeArray } from '#types';
import { _unknown } from '#utils/_unknown';

const exclude = <const T extends any[], const Ex extends T[number][]>(
  array: T,
  ...excludes: Ex
) => {
  const out = array.filter(item => !excludes.includes(item));
  return _unknown<ExcludeArray<T, Ex[number]>>(out);
};

export default exclude;
`,
  },
  'features.arrays.castings.extract': {
    relativePath: 'features/arrays/castings/extract.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['ExtractArray'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends any[], const Ex extends T[number][]>(\n  array: T,\n  ...extractors: Ex\n) => {\n  const out = array.filter(item => extractors.includes(item));\n  return _unknown<ExtractArray<T, Ex[number]>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { ExtractArray } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(value: unknown) => {\n  return _unknown<T[]>(value);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends any[]>(...args: T) =>\n  Object.freeze(tuple(...args))',
        declarationKind: 'variable',
      },
    ],
    text: `import tuple from './tuple';

const fn = <const T extends any[]>(...args: T) =>
  Object.freeze(tuple(...args));

export default fn;
`,
  },
  'features.arrays.castings.index': {
    relativePath: 'features/arrays/castings/index.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(...values: T[]) => values',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T>(...values: T[]) => values;

export default fn;
`,
  },
  'features.arrays.castings.indexes': {
    relativePath: 'features/arrays/castings/indexes.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['IndexesOfArray', 'RuA', 'UnionToTuple'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends RuA>(...array: T) => {\n  const out = array.map((_, index) => index);\n  return _unknown<UnionToTuple<IndexesOfArray<T>>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { IndexesOfArray, RuA, UnionToTuple } from '#types';
import { _unknown } from '#utils/_unknown';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(value: unknown): value is Array<T> => {\n  return Array.isArray(value);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T>(value: unknown): value is Array<T> => {
  return Array.isArray(value);
};

export default fn;
`,
  },
  'features.arrays.castings.length.all': {
    relativePath: 'features/arrays/castings/length/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, { has })',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import has from './has';
import _index from './index';

const fn = expandFn(_index, { has });

export default fn;
`,
  },

  'features.arrays.castings.length.has': {
    relativePath: 'features/arrays/castings/length/has.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['TupleOf'],
      },
      {
        moduleSpecifier: '../is',
        kind: 'default',
        default: 'is',
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends number>(check: T) => {\n  const _out = (value: unknown): value is TupleOf<unknown, T> => {\n    return is(value) && value.length === check;\n  };\n\n  return _out;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { TupleOf } from '#types';
import is from '../is';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['RuA'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = <T extends RuA>(...array: T) => {\n  const out = array.length;\n  return _unknown<T['length']>(out);\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends unknown[]>(...values: T) => values',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T extends unknown[]>(...values: T) => values;

export default fn;
`,
  },
  'features.arrays.castings.reduce': {
    relativePath: 'features/arrays/castings/reduce.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(value: T | readonly [T] | [T]) => {\n  const out = Array.isArray(value) ? value[0] : value;\n  return _unknown<T>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['ReverseArray', 'RuA'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends RuA>(...args: T) => {\n  const out = args.slice().reverse();\n  return _unknown<ReverseArray<T>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { ReverseArray, RuA } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['ToArray'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(value?: T) => {\n  if (!value) return [];\n  const checkArray = Array.isArray(value);\n  const out = checkArray ? value : [value];\n\n  return _unknown<ToArray<T>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { ToArray } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  multiply,\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import is from '../is';
import _index from './index';
import multiply from './multiply';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['RuA'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends RuA>(...args: T) => {\n  const out = args;\n  return _unknown<T>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Checker2'],
      },
      {
        moduleSpecifier: '../is',
        kind: 'default',
        default: 'is',
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T>(fn: Checker2<T>) => {\n  const _out = (value: unknown): value is Array<T> => {\n    return is(value) && value.every(fn);\n  };\n\n  return _out;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Checker2 } from '#types';
import is from '../is';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['TupleOf'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T, N extends number>(data: T, times: N) => {\n  const out = Array.from({ length: times }, () => data);\n  return _unknown<TupleOf<T, N>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { TupleOf } from '#types';
import { _unknown } from '#utils/_unknown';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = Array',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = Array;

export default fn;
`,
  },
  'features.arrays.index': {
    relativePath: 'features/arrays/index.ts',
    imports: [],
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './castings/all';",
        moduleSpecifier: './castings/all',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './types';",
        moduleSpecifier: './types',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './typings/all';",
        moduleSpecifier: './typings/all',
      },
      {
        name: 'castings',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  low,\n  is,\n  indexes,\n  _length,\n  tuple,\n  reduce,\n  toArray,\n  reverse,\n  freeze,\n  extract,\n  exclude,\n  forceCast,\n  dynamic,\n  type,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'IndexesOfArray',
        kind: 'named',
        text: "export type IndexesOfArray<\n  T extends readonly unknown[],\n  S extends number[] = [],\n> = T['length'] extends S['length']\n  ? S[number]\n  : IndexesOfArray<T, [S['length'], ...S]>;",
        declarationKind: 'type',
      },
      {
        name: 'TupleOf',
        kind: 'named',
        text: 'export type TupleOf<T = any, N extends number = number> = N extends N\n  ? number extends N\n    ? T[]\n    : [..._TupleOf<T, N>]\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'ReverseArray',
        kind: 'named',
        text: 'export type ReverseArray<T extends RuA> = T extends any\n  ? T extends []\n    ? T\n    : T extends [infer Head, ...infer Tail]\n      ? [...ReverseArray<Tail>, Head]\n      : T\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'RuA',
        kind: 'named',
        text: 'export type RuA = readonly unknown[];',
        declarationKind: 'type',
      },
      {
        name: 'AnyArray',
        kind: 'named',
        text: 'export type AnyArray<T = unknown> = ReadonlyArray<T> | T[];',
        declarationKind: 'type',
      },
      {
        name: '_NArrayOmit',
        kind: 'named',
        text: 'export type _NArrayOmit<\n  T extends readonly object[],\n  K extends keyof T[number] = never,\n> = Extract<UnionOmit<T[number], K>, object>;',
        declarationKind: 'type',
      },
      {
        name: 'NArrayOmit',
        kind: 'named',
        text: 'export type NArrayOmit<\n  T extends readonly object[],\n  K extends keyof T[number] = never,\n> =\n  _NArrayOmit<T, K> extends infer N extends object\n    ? UnionToTuple<N>\n    : never;',
        declarationKind: 'type',
      },
      {
        name: 'ExtractArray',
        kind: 'named',
        text: 'export type ExtractArray<T extends AnyArray, U> = T extends readonly [\n  infer A,\n  ...infer B,\n]\n  ? A extends U\n    ? [A, ...ExtractArray<B, U>]\n    : [...ExtractArray<B, U>]\n  : [];',
        declarationKind: 'type',
      },
      {
        name: 'ExcludeArray',
        kind: 'named',
        text: 'export type ExcludeArray<T extends AnyArray, U> = T extends readonly [\n  infer A,\n  ...infer B,\n]\n  ? A extends U\n    ? ExcludeArray<B, U>\n    : [A, ...ExcludeArray<B, U>]\n  : [];',
        declarationKind: 'type',
      },
      {
        name: 'ReduceArray',
        kind: 'named',
        text: 'export type ReduceArray<T> = T extends AnyArray ? T[number] : T;',
        declarationKind: 'type',
      },
      {
        name: 'ReduceArrayS',
        kind: 'named',
        text: 'export type ReduceArrayS<T> = T extends AnyArray ? T[0] : T;',
        declarationKind: 'type',
      },
      {
        name: 'ReduceDeepArray',
        kind: 'named',
        text: 'export type ReduceDeepArray<T> =\n  ReduceArray<T> extends AnyArray\n    ? ReduceDeepArray<ReduceArray<T>>\n    : ReduceArray<T>;',
        declarationKind: 'type',
      },
      {
        name: 'ToArray',
        kind: 'named',
        text: 'export type ToArray<T> = T extends AnyArray ? T : AnyArray<T>;',
        declarationKind: 'type',
      },
      {
        name: 'RecursiveArrayOf',
        kind: 'named',
        text: 'export type RecursiveArrayOf<T> =\n  | Array<_SingleOrRecursiveArrayOf<T>>\n  | ReadonlyArray<_SingleOrRecursiveArrayOf<T>>;',
        declarationKind: 'type',
      },
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = typeFn<Array<unknown>>()({\n  low,\n  is,\n  indexes,\n  _length,\n  tuple,\n  reduce,\n  reverse,\n  toArray,\n  freeze,\n  extract,\n  exclude,\n  forceCast,\n  dynamic,\n  type,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `export * from './castings/all';
export * from './types';
export * from './typings/all';
`,
  },
  'features.arrays.types': {
    relativePath: 'features/arrays/types.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['UnionOmit', 'UnionToTuple'],
      },
    ],
    exports: [
      {
        name: 'IndexesOfArray',
        kind: 'named',
        text: "export type IndexesOfArray<\n  T extends readonly unknown[],\n  S extends number[] = [],\n> = T['length'] extends S['length']\n  ? S[number]\n  : IndexesOfArray<T, [S['length'], ...S]>;",
        declarationKind: 'type',
      },
      {
        name: 'TupleOf',
        kind: 'named',
        text: 'export type TupleOf<T = any, N extends number = number> = N extends N\n  ? number extends N\n    ? T[]\n    : [..._TupleOf<T, N>]\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'ReverseArray',
        kind: 'named',
        text: 'export type ReverseArray<T extends RuA> = T extends any\n  ? T extends []\n    ? T\n    : T extends [infer Head, ...infer Tail]\n      ? [...ReverseArray<Tail>, Head]\n      : T\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'RuA',
        kind: 'named',
        text: 'export type RuA = readonly unknown[];',
        declarationKind: 'type',
      },
      {
        name: 'AnyArray',
        kind: 'named',
        text: 'export type AnyArray<T = unknown> = ReadonlyArray<T> | T[];',
        declarationKind: 'type',
      },
      {
        name: '_NArrayOmit',
        kind: 'named',
        text: 'export type _NArrayOmit<\n  T extends readonly object[],\n  K extends keyof T[number] = never,\n> = Extract<UnionOmit<T[number], K>, object>;',
        declarationKind: 'type',
      },
      {
        name: 'NArrayOmit',
        kind: 'named',
        text: 'export type NArrayOmit<\n  T extends readonly object[],\n  K extends keyof T[number] = never,\n> =\n  _NArrayOmit<T, K> extends infer N extends object\n    ? UnionToTuple<N>\n    : never;',
        declarationKind: 'type',
      },
      {
        name: 'ExtractArray',
        kind: 'named',
        text: 'export type ExtractArray<T extends AnyArray, U> = T extends readonly [\n  infer A,\n  ...infer B,\n]\n  ? A extends U\n    ? [A, ...ExtractArray<B, U>]\n    : [...ExtractArray<B, U>]\n  : [];',
        declarationKind: 'type',
      },
      {
        name: 'ExcludeArray',
        kind: 'named',
        text: 'export type ExcludeArray<T extends AnyArray, U> = T extends readonly [\n  infer A,\n  ...infer B,\n]\n  ? A extends U\n    ? ExcludeArray<B, U>\n    : [A, ...ExcludeArray<B, U>]\n  : [];',
        declarationKind: 'type',
      },
      {
        name: 'ReduceArray',
        kind: 'named',
        text: 'export type ReduceArray<T> = T extends AnyArray ? T[number] : T;',
        declarationKind: 'type',
      },
      {
        name: 'ReduceArrayS',
        kind: 'named',
        text: 'export type ReduceArrayS<T> = T extends AnyArray ? T[0] : T;',
        declarationKind: 'type',
      },
      {
        name: 'ReduceDeepArray',
        kind: 'named',
        text: 'export type ReduceDeepArray<T> =\n  ReduceArray<T> extends AnyArray\n    ? ReduceDeepArray<ReduceArray<T>>\n    : ReduceArray<T>;',
        declarationKind: 'type',
      },
      {
        name: 'ToArray',
        kind: 'named',
        text: 'export type ToArray<T> = T extends AnyArray ? T : AnyArray<T>;',
        declarationKind: 'type',
      },
      {
        name: 'RecursiveArrayOf',
        kind: 'named',
        text: 'export type RecursiveArrayOf<T> =\n  | Array<_SingleOrRecursiveArrayOf<T>>\n  | ReadonlyArray<_SingleOrRecursiveArrayOf<T>>;',
        declarationKind: 'type',
      },
    ],
    text: `import type { UnionOmit, UnionToTuple } from '#types';

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

export type TupleOf<T = any, N extends number = number> = N extends N
  ? number extends N
    ? T[]
    : [..._TupleOf<T, N>]
  : never;

export type ReverseArray<T extends RuA> = T extends any
  ? T extends []
    ? T
    : T extends [infer Head, ...infer Tail]
      ? [...ReverseArray<Tail>, Head]
      : T
  : never;

export type RuA = readonly unknown[];

export type AnyArray<T = unknown> = ReadonlyArray<T> | T[];

export type _NArrayOmit<
  T extends readonly object[],
  K extends keyof T[number] = never,
> = Extract<UnionOmit<T[number], K>, object>;

export type NArrayOmit<
  T extends readonly object[],
  K extends keyof T[number] = never,
> =
  _NArrayOmit<T, K> extends infer N extends object
    ? UnionToTuple<N>
    : never;

export type ExtractArray<T extends AnyArray, U> = T extends readonly [
  infer A,
  ...infer B,
]
  ? A extends U
    ? [A, ...ExtractArray<B, U>]
    : [...ExtractArray<B, U>]
  : [];

export type ExcludeArray<T extends AnyArray, U> = T extends readonly [
  infer A,
  ...infer B,
]
  ? A extends U
    ? ExcludeArray<B, U>
    : [A, ...ExcludeArray<B, U>]
  : [];

export type ReduceArray<T> = T extends AnyArray ? T[number] : T;
export type ReduceArrayS<T> = T extends AnyArray ? T[0] : T;

export type ReduceDeepArray<T> =
  ReduceArray<T> extends AnyArray
    ? ReduceDeepArray<ReduceArray<T>>
    : ReduceArray<T>;

export type ToArray<T> = T extends AnyArray ? T : AnyArray<T>;

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['RuA'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = <const T extends RuA>(_?: T) => _unknown<T['length']>()",
        declarationKind: 'variable',
      },
    ],
    text: `import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends RuA>(_?: T) => _unknown<T['length']>();

export default fn;
`,
  },
  'features.arrays.typings.all': {
    relativePath: 'features/arrays/typings/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/typeFn',
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
    exports: [
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = typeFn<Array<unknown>>()({\n  low,\n  is,\n  indexes,\n  _length,\n  tuple,\n  reduce,\n  reverse,\n  toArray,\n  freeze,\n  extract,\n  exclude,\n  forceCast,\n  dynamic,\n  type,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';
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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends unknown[]>(_?: T) => _unknown<T>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends unknown[]>(_?: T) => _unknown<T>();

export default fn;
`,
  },
  'features.arrays.typings.exclude': {
    relativePath: 'features/arrays/typings/exclude.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['AnyArray', 'ExcludeArray'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends AnyArray, const U extends T[number][]>(\n  _?: T,\n  ...__: U\n) => _unknown<ExcludeArray<T, U[number]>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { AnyArray, ExcludeArray } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['AnyArray', 'ExtractArray'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends AnyArray, const U extends T[number][]>(\n  _?: T,\n  ...__: U\n) => _unknown<ExtractArray<T, U[number]>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { AnyArray, ExtractArray } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = (_?: unknown) => _unknown<unknown[]>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = (_?: unknown) => _unknown<unknown[]>();

export default fn;
`,
  },
  'features.arrays.typings.freeze': {
    relativePath: 'features/arrays/typings/freeze.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['RuA'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends RuA>(..._: T) => _unknown<Readonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends RuA>(..._: T) => _unknown<Readonly<T>>();

export default fn;
`,
  },

  'features.arrays.typings.index': {
    relativePath: 'features/arrays/typings/index.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['AnyArray'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends AnyArray>(..._: T) => _unknown<T[number][]>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { AnyArray } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends AnyArray>(..._: T) => _unknown<T[number][]>();

export default fn;
`,
  },
  'features.arrays.typings.indexes.all': {
    relativePath: 'features/arrays/typings/indexes/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  union,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import union from './union';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['IndexesOfArray', 'RuA', 'UnionToTuple'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends RuA>(..._: T) =>\n  _unknown<UnionToTuple<IndexesOfArray<T>>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { IndexesOfArray, RuA, UnionToTuple } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends RuA>(..._: T) =>
  _unknown<UnionToTuple<IndexesOfArray<T>>>();

export default fn;
`,
  },
  'features.arrays.typings.indexes.union': {
    relativePath: 'features/arrays/typings/indexes/union.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['IndexesOfArray', 'RuA'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends RuA>(..._: T) => _unknown<IndexesOfArray<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { IndexesOfArray, RuA } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends RuA>(..._: T) => _unknown<IndexesOfArray<T>>();

export default fn;
`,
  },
  'features.arrays.typings.is': {
    relativePath: 'features/arrays/typings/is.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(_?: T) => _unknown<T extends unknown[] ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T>(_?: T) => _unknown<T extends unknown[] ? true : false>();

export default fn;
`,
  },
  'features.arrays.typings.length': {
    relativePath: 'features/arrays/typings/length.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: './_length',
        kind: 'default',
        default: '_index',
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './_length';

const fn = expandFn(_index, {});

export default fn;
`,
  },
  'features.arrays.typings.low': {
    relativePath: 'features/arrays/typings/low.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(..._: T[]) => _unknown<T[]>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T>(..._: T[]) => _unknown<T[]>();

export default fn;
`,
  },
  'features.arrays.typings.reduce.all': {
    relativePath: 'features/arrays/typings/reduce/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  deep,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deep from './deep';
import _index from './index';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['ReduceDeepArray'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(_?: T) => _unknown<ReduceDeepArray<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { ReduceDeepArray } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T>(_?: T) => _unknown<ReduceDeepArray<T>>();

export default fn;
`,
  },
  'features.arrays.typings.reduce.index': {
    relativePath: 'features/arrays/typings/reduce/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(_: T | readonly T[] | T[]) => _unknown<T>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T>(_: T | readonly T[] | T[]) => _unknown<T>();

export default fn;
`,
  },

  'features.arrays.typings.reverse': {
    relativePath: 'features/arrays/typings/reverse.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['ReverseArray', 'RuA'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends RuA>(..._: T) => _unknown<ReverseArray<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { ReverseArray, RuA } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends RuA>(..._: T) => _unknown<ReverseArray<T>>();

export default fn;
`,
  },
  'features.arrays.typings.toArray': {
    relativePath: 'features/arrays/typings/toArray.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['AnyArray'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(_?: T) => _unknown<AnyArray<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { AnyArray } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T>(_?: T) => _unknown<AnyArray<T>>();

export default fn;
`,
  },
  'features.arrays.typings.tuple.all': {
    relativePath: 'features/arrays/typings/tuple/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  number: multiply,\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';
import multiply from './multiply';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['RuA'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends RuA>(..._: T) => _unknown<T>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends RuA>(..._: T) => _unknown<T>();

export default fn;
`,
  },
  'features.arrays.typings.tuple.is': {
    relativePath: 'features/arrays/typings/tuple/is.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['RuA'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T>(_?: T) => _unknown<T extends RuA ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T>(_?: T) => _unknown<T extends RuA ? true : false>();

export default fn;
`,
  },
  'features.arrays.typings.tuple.multiply': {
    relativePath: 'features/arrays/typings/tuple/multiply.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['TupleOf'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: '#utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(\n  <const T, N extends number>(_?: T, __?: N) => _unknown<TupleOf<T, N>>(),\n  {\n    is: <const U, N extends number>(_?: U, __?: N) => {\n      const _out = <T>(_?: T) =>\n        _unknown<T extends TupleOf<U, N> ? true : false>();\n      return _out;\n    },\n  },\n)',
        declarationKind: 'variable',
      },
    ],
    text: `import type { TupleOf } from '#types';
import { _unknown } from '#utils/_unknown';
import { expandFn } from '#utils/expandFn';

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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = _unknown<unknown[]>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = _unknown<unknown[]>();

export default fn;
`,
  },
  'features.booleans.castings.all': {
    relativePath: 'features/booleans/castings/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/castFn',
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
    exports: [
      {
        name: 'castings',
        kind: 'named',
        text: 'castings = castFn<boolean>()({\n  is: _index,\n  type,\n  true: _true,\n  false: _false,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';
import _false from './false';
import _index from './index';
import _true from './true';
import type from './type';

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
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '#utils/is/_default',
        kind: 'named',
        namedImports: ['isFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<false>()({\n  CONST: false,\n  is: isFn(false),\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';
import { isFn } from '#utils/is/_default';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = (data: unknown) => typeof data === 'boolean'",
        declarationKind: 'variable',
      },
    ],
    text: `const fn = (data: unknown) => typeof data === 'boolean';

export default fn;
`,
  },

  'features.booleans.castings.true': {
    relativePath: 'features/booleans/castings/true.ts',
    imports: [
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '#utils/is/_default',
        kind: 'named',
        namedImports: ['isFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<true>()({\n  CONST: true,\n  is: isFn(true),\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';
import { isFn } from '#utils/is/_default';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = Boolean',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = Boolean;

export default fn;
`,
  },
  'features.booleans.index': {
    relativePath: 'features/booleans/index.ts',
    imports: [],
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './castings/all';",
        moduleSpecifier: './castings/all',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './types';",
        moduleSpecifier: './types',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './typings/all';",
        moduleSpecifier: './typings/all',
      },
      {
        name: 'castings',
        kind: 'named',
        text: 'castings = castFn<boolean>()({\n  is: _index,\n  type,\n  true: _true,\n  false: _false,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  forceCast,\n  is,\n  type,\n  true: _true,\n  false: _false,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `export * from './castings/all';
export * from './types';
export * from './typings/all';
`,
  },
  'features.booleans.types': {
    relativePath: 'features/booleans/types.ts',
    imports: [],
    exports: [],
    text: `export {};
`,
  },
  'features.booleans.typings.all': {
    relativePath: 'features/booleans/typings/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  forceCast,\n  is,\n  type,\n  true: _true,\n  false: _false,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _false from './false';
import forceCast from './forceCast';
import _index from './index';
import is from './is';
import _true from './true';
import type from './type';

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
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<false>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

const fn = typeFn<false>()();

export default fn;
`,
  },
  'features.booleans.typings.forceCast': {
    relativePath: 'features/booleans/typings/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends boolean>(_: unknown) => _unknown<T>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends boolean>(_: unknown) => _unknown<T>();

export default fn;
`,
  },
  'features.booleans.typings.index': {
    relativePath: 'features/booleans/typings/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends boolean>(_: T) => _unknown<T>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends boolean>(_: T) => _unknown<T>();

export default fn;
`,
  },
  'features.booleans.typings.is': {
    relativePath: 'features/booleans/typings/is.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(_: T) => _unknown<T extends boolean ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T>(_: T) => _unknown<T extends boolean ? true : false>();

export default fn;
`,
  },
  'features.booleans.typings.true': {
    relativePath: 'features/booleans/typings/true.ts',
    imports: [
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<true>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

const fn = typeFn<true>()();

export default fn;
`,
  },

  'features.booleans.typings.type': {
    relativePath: 'features/booleans/typings/type.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = _unknown<boolean>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = _unknown<boolean>();

export default fn;
`,
  },
  'features.common.castings._unknown': {
    relativePath: 'features/common/castings/_unknown.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = _unknown',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = _unknown;

export default fn;
`,
  },
  'features.common.castings.all': {
    relativePath: 'features/common/castings/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'castings',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  partial,\n  const: _const,\n  identity,\n  clone,\n  unknown: _unknown,\n  neverify,\n  readonly,\n  required,\n  date,\n  primitive,\n  symbol,\n  any,\n  is,\n  null: _null,\n  undefined: _undefined,\n  undefiny,\n  never,\n  defaulted,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
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
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<any>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';

const fn = castFn<any>()();

export default fn;
`,
  },
  'features.common.castings.clone': {
    relativePath: 'features/common/castings/clone.ts',
    imports: [
      {
        moduleSpecifier: '#features/functions/functions/clone',
        kind: 'default',
        default: 'deepClone',
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['PrimitiveObject'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends PrimitiveObject>(object: T): T => {\n  return deepClone(object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import deepClone from '#features/functions/functions/clone';
import type { PrimitiveObject } from '#types';

const fn = <T extends PrimitiveObject>(object: T): T => {
  return deepClone(object);
};

export default fn;
`,
  },
  'features.common.castings.const': {
    relativePath: 'features/common/castings/const.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T>(value: T) => value',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <const T>(value: T) => value;

export default fn;
`,
  },
  'features.common.castings.date.all': {
    relativePath: 'features/common/castings/date/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<Date>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';

const fn = castFn<Date>()();

export default fn;
`,
  },
  'features.common.castings.date.is': {
    relativePath: 'features/common/castings/date/is.ts',
    imports: [
      {
        moduleSpecifier: '#utils/is/_default',
        kind: 'named',
        namedImports: ['isInstance'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = isInstance(Date)',
        declarationKind: 'variable',
      },
    ],
    text: `import { isInstance } from '#utils/is/_default';

const fn = isInstance(Date);

export default fn;
`,
  },
  'features.common.castings.defaulted.all': {
    relativePath: 'features/common/castings/defaulted/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(runtime, { runtime, typings })',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import runtime from './runtime';
import typings from './typings';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = runtime',
        declarationKind: 'variable',
      },
    ],
    text: `import runtime from './runtime';

const fn = runtime;

export default fn;
`,
  },
  'features.common.castings.defaulted.runtime': {
    relativePath: 'features/common/castings/defaulted/runtime.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['NonN'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T, U extends NonN<T>>(value: T, defaultValue: U) => {\n  const out = value === undefined || value === null ? defaultValue : value;\n  return _unknown<NonN<T>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { NonN } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Defaulted', 'NonN'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T, const U extends NonN<T>>(value: T, defaultValue: U) => {\n  const out = value === undefined || value === null ? defaultValue : value;\n  return _unknown<Defaulted<T, U>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Defaulted, NonN } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = identity',
        declarationKind: 'variable',
      },
    ],
    text: `import { identity } from '#utils/identity';

const fn = identity;

export default fn;
`,
  },
  'features.common.castings.index': {
    relativePath: 'features/common/castings/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<unknown>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = {\n  defined,\n  notDefined,\n  notNull,\n  notNullish,\n  nullish,\n  notUndefined,\n  null: null_,\n  undefined: undefined_,\n  symbol,\n}',
        declarationKind: 'variable',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(value?: T): value is NonNullable<T> => {\n  return value !== undefined && value !== null;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T>(value?: T): value is NonNullable<T> => {
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(value?: T): value is NonNullable<T> => {\n  return value !== undefined && value !== null;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import defined from './defined';

export default defined;
`,
  },
  'features.common.castings.is.notDefined': {
    relativePath: 'features/common/castings/is/notDefined.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = (value: unknown) => {\n  return value !== undefined && value !== null;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = (value: unknown) => {
  return value !== undefined && value !== null;
};

export default fn;
`,
  },
  'features.common.castings.is.notNull': {
    relativePath: 'features/common/castings/is/notNull.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = (value: unknown) => {\n  return value !== null;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = (value: unknown) => {
  return value !== null;
};

export default fn;
`,
  },

  'features.common.castings.is.notNullish': {
    relativePath: 'features/common/castings/is/notNullish.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = (value: unknown) => {\n  return value !== null && value !== undefined;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = (value: unknown) => {
  return value !== null && value !== undefined;
};

export default fn;
`,
  },
  'features.common.castings.is.notUndefined': {
    relativePath: 'features/common/castings/is/notUndefined.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = (value: unknown) => {\n  return value !== undefined;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = (value: unknown) => {
  return value !== undefined;
};

export default fn;
`,
  },
  'features.common.castings.is.null': {
    relativePath: 'features/common/castings/is/null.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = (value: unknown): value is null => {\n  return value === null;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = (value: unknown): value is null => {
  return value === null;
};

export default fn;
`,
  },
  'features.common.castings.is.nullish': {
    relativePath: 'features/common/castings/is/nullish.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = (value: unknown): value is null | undefined => {\n  return value === null || value === undefined;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = (value: unknown): value is null | undefined => {
  return value === null || value === undefined;
};

export default fn;
`,
  },
  'features.common.castings.is.symbol': {
    relativePath: 'features/common/castings/is/symbol.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = (value: unknown): value is symbol => {\n  return typeof value === 'symbol';\n}",
        declarationKind: 'variable',
      },
    ],
    text: `const fn = (value: unknown): value is symbol => {
  return typeof value === 'symbol';
};

export default fn;
`,
  },
  'features.common.castings.is.undefined': {
    relativePath: 'features/common/castings/is/undefined.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = (value: unknown): value is undefined => {\n  return value === undefined;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = (value: unknown): value is undefined => {
  return value === undefined;
};

export default fn;
`,
  },
  'features.common.castings.never': {
    relativePath: 'features/common/castings/never.ts',
    imports: [
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '#utils/is/_default',
        kind: 'named',
        namedImports: ['isInstance'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<never>()({ is: isInstance(Error) })',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';
import { isInstance } from '#utils/is/_default';

const fn = castFn<never>()({ is: isInstance(Error) });

export default fn;
`,
  },
  'features.common.castings.neverify': {
    relativePath: 'features/common/castings/neverify.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Neverify'],
      },
      {
        moduleSpecifier: './_unknown',
        kind: 'default',
        default: '_unknown',
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(value: T) => {\n  return _unknown<Neverify<T>>(value);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Neverify } from '#types';
import _unknown from './_unknown';

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
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '#utils/is/_default',
        kind: 'named',
        namedImports: ['isFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<null>()({ is: isFn(null) })',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';
import { isFn } from '#utils/is/_default';

const fn = castFn<null>()({ is: isFn(null) });

export default fn;
`,
  },
  'features.common.castings.partial.all': {
    relativePath: 'features/common/castings/partial/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  deep,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deep from './deep';
import _index from './index';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepPartial'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(value: T) => {\n  return _unknown<DeepPartial<T>>(value);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepPartial } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(value: T) => {\n  return _unknown<Partial<T>>(value);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  is,\n  object,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';
import object from './object/all';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Primitive'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<Primitive>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Primitive } from '#types';
import { castFn } from '#utils/castFn';

const fn = castFn<Primitive>()();

export default fn;
`,
  },
  'features.common.castings.primitive.is': {
    relativePath: 'features/common/castings/primitive/is.ts',
    imports: [
      {
        moduleSpecifier: '#utils/is/primitive',
        kind: 'named',
        namedImports: ['isPrimitive'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = isPrimitive',
        declarationKind: 'variable',
      },
    ],
    text: `import { isPrimitive } from '#utils/is/primitive';

const fn = isPrimitive;

export default fn;
`,
  },
  'features.common.castings.primitive.object.all': {
    relativePath: 'features/common/castings/primitive/object/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['PrimitiveObject'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<PrimitiveObject>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { PrimitiveObject } from '#types';
import { castFn } from '#utils/castFn';

const fn = castFn<PrimitiveObject>()();

export default fn;
`,
  },
  'features.common.castings.primitive.object.is': {
    relativePath: 'features/common/castings/primitive/object/is.ts',
    imports: [
      {
        moduleSpecifier: '#utils/is/primitive.object',
        kind: 'named',
        namedImports: ['isPrimitiveObject'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = isPrimitiveObject',
        declarationKind: 'variable',
      },
    ],
    text: `import { isPrimitiveObject } from '#utils/is/primitive.object';

const fn = isPrimitiveObject;

export default fn;
`,
  },
  'features.common.castings.readonly.all': {
    relativePath: 'features/common/castings/readonly/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  deep,\n  not,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import _index from './index';
import not from './not';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  not,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import not from './not';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(value: T) =>\n  _unknown<DeepReadonly<T>>(value)',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(value: T) =>
  _unknown<DeepReadonly<T>>(value);

export default fn;
`,
  },
  'features.common.castings.readonly.deep.not': {
    relativePath: 'features/common/castings/readonly/deep/not.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends object>(value: T) =>\n  _unknown<DeepNotReadonly<T>>(value)',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends object>(value: T) =>
  _unknown<DeepNotReadonly<T>>(value);

export default fn;
`,
  },
  'features.common.castings.readonly.index': {
    relativePath: 'features/common/castings/readonly/index.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(value: T) => value as Readonly<T>',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T>(value: T) => value as Readonly<T>;

export default fn;
`,
  },
  'features.common.castings.readonly.not': {
    relativePath: 'features/common/castings/readonly/not.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(value: T) => _unknown<NotReadonly<T>>(value)',
        declarationKind: 'variable',
      },
    ],
    text: `import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(value: T) => _unknown<NotReadonly<T>>(value);

export default fn;
`,
  },
  'features.common.castings.required.all': {
    relativePath: 'features/common/castings/required/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  deep,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deep from './deep';
import _index from './index';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepRequired'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object | undefined>(value: T) => {\n  return _unknown<DeepRequired<T>>(value);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepRequired } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['NotUndefined'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(value: T) => {\n  return _unknown<NotUndefined<T>>(value);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { NotUndefined } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<symbol>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';

const fn = castFn<symbol>()();

export default fn;
`,
  },
  'features.common.castings.symbol.is': {
    relativePath: 'features/common/castings/symbol/is.ts',
    imports: [
      {
        moduleSpecifier: '#utils/is/_default',
        kind: 'named',
        namedImports: ['isTypeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = isTypeFn('symbol')",
        declarationKind: 'variable',
      },
    ],
    text: `import { isTypeFn } from '#utils/is/_default';

const fn = isTypeFn('symbol');

export default fn;
`,
  },

  'features.common.castings.undefined': {
    relativePath: 'features/common/castings/undefined.ts',
    imports: [
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '#utils/is/_default',
        kind: 'named',
        namedImports: ['isFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<undefined>()({ is: isFn(undefined) })',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';
import { isFn } from '#utils/is/_default';

const fn = castFn<undefined>()({ is: isFn(undefined) });

export default fn;
`,
  },
  'features.common.castings.undefiny': {
    relativePath: 'features/common/castings/undefiny.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(value?: T) => value',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T>(value?: T) => value;

export default fn;
`,
  },
  'features.common.index': {
    relativePath: 'features/common/index.ts',
    imports: [],
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './castings/all';",
        moduleSpecifier: './castings/all',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './types';",
        moduleSpecifier: './types',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './typings/all';",
        moduleSpecifier: './typings/all',
      },
      {
        name: 'castings',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  partial,\n  const: _const,\n  identity,\n  clone,\n  unknown: _unknown,\n  neverify,\n  readonly,\n  required,\n  date,\n  primitive,\n  symbol,\n  any,\n  is,\n  null: _null,\n  undefined: _undefined,\n  undefiny,\n  never,\n  defaulted,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'SingleOrRecursiveArrayOf',
        kind: 'named',
        text: 'export type SingleOrRecursiveArrayOf<T> = T | RecursiveArrayOf<T>;',
        declarationKind: 'type',
      },
      {
        name: 'SoRa',
        kind: 'named',
        text: 'export type SoRa<T> = SingleOrRecursiveArrayOf<T>;',
        declarationKind: 'type',
      },
      {
        name: 'Primitive2',
        kind: 'named',
        text: 'export type Primitive2 = string | number | boolean;',
        declarationKind: 'type',
      },
      {
        name: 'Primitive',
        kind: 'named',
        text: 'export type Primitive = Primitive2 | undefined | null;',
        declarationKind: 'type',
      },
      {
        name: 'SingleOrArray',
        kind: 'named',
        text: 'export type SingleOrArray<T> = T | T[] | ReadonlyArray<T>;',
        declarationKind: 'type',
      },
      {
        name: 'SoA',
        kind: 'named',
        text: 'export type SoA<T> = SingleOrArray<T>;',
        declarationKind: 'type',
      },
      {
        name: 'PrimitiveObjectMap',
        kind: 'named',
        text: 'export type PrimitiveObjectMap = {\n  [key: Keys]: SoRa<_PrimitiveObject>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'PrimitiveObject',
        kind: 'named',
        text: 'export type PrimitiveObject = SoRa<_PrimitiveObject>;',
        declarationKind: 'type',
      },
      {
        name: 'NExtract',
        kind: 'named',
        text: 'export type NExtract<T, U extends T> = Extract<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'NExclude',
        kind: 'named',
        text: 'export type NExclude<T, U extends T> = Exclude<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'NotUndefined',
        kind: 'named',
        text: 'export type NotUndefined<T> = Exclude<T, undefined>;',
        declarationKind: 'type',
      },
      {
        name: 'Nu',
        kind: 'named',
        text: 'export type Nu<T> = NotUndefined<T>;',
        declarationKind: 'type',
      },
      {
        name: 'Undefiny',
        kind: 'named',
        text: 'export type Undefiny<T> = T | undefined;',
        declarationKind: 'type',
      },
      {
        name: 'Un',
        kind: 'named',
        text: 'export type Un<T> = Undefiny<T>;',
        declarationKind: 'type',
      },
      {
        name: 'Cast',
        kind: 'named',
        text: 'export type Cast<A, B> = A extends B ? A : B;',
        declarationKind: 'type',
      },
      {
        name: 'Keys',
        kind: 'named',
        text: 'export type Keys = keyof any;',
        declarationKind: 'type',
      },
      {
        name: 'TypeStrings',
        kind: 'named',
        text: "export type TypeStrings =\n  | 'string'\n  | 'number'\n  | 'boolean'\n  | 'bigint'\n  | 'symbol'\n  | 'undefined'\n  | 'object'\n  | 'function';",
        declarationKind: 'type',
      },
      {
        name: 'KeyTypes',
        kind: 'named',
        text: 'export type KeyTypes = {\n  [K in Keys]: TypeStrings | Checker2 | KeyTypes;\n};',
        declarationKind: 'type',
      },
      {
        name: 'KeyTypesFrom',
        kind: 'named',
        text: 'export type KeyTypesFrom<T extends KeyTypes> = {\n  [K in keyof T]: T[K] extends KeyTypes\n    ? KeyTypesFrom<T[K]>\n    : T[K] extends TypeStrings\n      ? TransformO<T[K]>\n      : T[K] extends Checker2<infer R>\n        ? R\n        : unknown;\n};',
        declarationKind: 'type',
      },
      {
        name: 'NonN',
        kind: 'named',
        text: 'export type NonN<T> = T extends undefined | null ? any : NonNullable<T>;',
        declarationKind: 'type',
      },
      {
        name: 'Defaulted',
        kind: 'named',
        text: 'export type Defaulted<T, U extends NonN<T>> = undefined extends T\n  ? U\n  : null extends T\n    ? U\n    : never extends T\n      ? U\n      : T;',
        declarationKind: 'type',
      },
      {
        name: 'UnionKeys',
        kind: 'named',
        text: 'export type UnionKeys<U> = U extends Record<infer K, any> ? K : never;',
        declarationKind: 'type',
      },
      {
        name: '_UnionToIntersection1',
        kind: 'named',
        text: 'export type _UnionToIntersection1<U> = boolean extends U\n  ? U\n  : (U extends any ? (k: U) => void : never) extends (k: infer I) => void\n    ? I\n    : never;',
        declarationKind: 'type',
      },
      {
        name: '_UnionToIntersection2',
        kind: 'named',
        text: 'export type _UnionToIntersection2<U> = {\n  [K in UnionKeys<U>]: U extends Record<K, infer T> ? T : never;\n};',
        declarationKind: 'type',
      },
      {
        name: 'UnionToIntersection',
        kind: 'named',
        text: 'export type UnionToIntersection<U> = _UnionToIntersection2<\n  _UnionToIntersection1<U>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'UnionOmit',
        kind: 'named',
        text: 'export type UnionOmit<T, K extends Keys> = T extends any\n  ? Omit<T, K>\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'UnionNOmit',
        kind: 'named',
        text: 'export type UnionNOmit<T, K extends keyof T> = UnionOmit<T, K>;',
        declarationKind: 'type',
      },
      {
        name: 'LastOfUnion',
        kind: 'named',
        text: 'export type LastOfUnion<T> = (\n  (T extends any ? (x: () => T) => void : never) extends (\n    x: infer I,\n  ) => void\n    ? I\n    : never\n) extends () => infer U\n  ? U\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'UnionToTuple',
        kind: 'named',
        text: 'export type UnionToTuple<T, A extends any[] = []> = [T] extends [never]\n  ? A\n  : UnionToTuple<Exclude<T, LastOfUnion<T>>, [LastOfUnion<T>, ...A]>;',
        declarationKind: 'type',
      },
      {
        name: 'Checker2',
        kind: 'named',
        text: 'export type Checker2<T = unknown> = (value: unknown) => value is T;',
        declarationKind: 'type',
      },
      {
        name: 'Equals',
        kind: 'named',
        text: 'export type Equals<T, U> = T extends U\n  ? U extends T\n    ? true\n    : false\n  : false;',
        declarationKind: 'type',
      },
      {
        name: 'Classe',
        kind: 'named',
        text: 'export type Classe = {\n  [Symbol.hasInstance]: Fn<any, boolean>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  partial,\n  const: _const,\n  identity,\n  unknown,\n  neverify,\n  any,\n  required,\n  readonly,\n  primitive,\n  symbol,\n  date,\n  undefiny,\n  extract,\n  exclude,\n  union,\n  null: _null,\n  undefined: _undefined,\n  never,\n  keys,\n  defaulted,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `export * from './castings/all';
export * from './types';
export * from './typings/all';
`,
  },
  'features.common.types': {
    relativePath: 'features/common/types.ts',
    imports: [
      {
        moduleSpecifier: '#features/transform',
        kind: 'named',
        namedImports: ['TransformO'],
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Fn', 'RecursiveArrayOf'],
      },
    ],
    exports: [
      {
        name: 'SingleOrRecursiveArrayOf',
        kind: 'named',
        text: 'export type SingleOrRecursiveArrayOf<T> = T | RecursiveArrayOf<T>;',
        declarationKind: 'type',
      },
      {
        name: 'SoRa',
        kind: 'named',
        text: 'export type SoRa<T> = SingleOrRecursiveArrayOf<T>;',
        declarationKind: 'type',
      },
      {
        name: 'Primitive2',
        kind: 'named',
        text: 'export type Primitive2 = string | number | boolean;',
        declarationKind: 'type',
      },
      {
        name: 'Primitive',
        kind: 'named',
        text: 'export type Primitive = Primitive2 | undefined | null;',
        declarationKind: 'type',
      },
      {
        name: 'SingleOrArray',
        kind: 'named',
        text: 'export type SingleOrArray<T> = T | T[] | ReadonlyArray<T>;',
        declarationKind: 'type',
      },
      {
        name: 'SoA',
        kind: 'named',
        text: 'export type SoA<T> = SingleOrArray<T>;',
        declarationKind: 'type',
      },
      {
        name: 'PrimitiveObjectMap',
        kind: 'named',
        text: 'export type PrimitiveObjectMap = {\n  [key: Keys]: SoRa<_PrimitiveObject>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'PrimitiveObject',
        kind: 'named',
        text: 'export type PrimitiveObject = SoRa<_PrimitiveObject>;',
        declarationKind: 'type',
      },
      {
        name: 'NExtract',
        kind: 'named',
        text: 'export type NExtract<T, U extends T> = Extract<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'NExclude',
        kind: 'named',
        text: 'export type NExclude<T, U extends T> = Exclude<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'NotUndefined',
        kind: 'named',
        text: 'export type NotUndefined<T> = Exclude<T, undefined>;',
        declarationKind: 'type',
      },
      {
        name: 'Nu',
        kind: 'named',
        text: 'export type Nu<T> = NotUndefined<T>;',
        declarationKind: 'type',
      },
      {
        name: 'Undefiny',
        kind: 'named',
        text: 'export type Undefiny<T> = T | undefined;',
        declarationKind: 'type',
      },
      {
        name: 'Un',
        kind: 'named',
        text: 'export type Un<T> = Undefiny<T>;',
        declarationKind: 'type',
      },
      {
        name: 'Cast',
        kind: 'named',
        text: 'export type Cast<A, B> = A extends B ? A : B;',
        declarationKind: 'type',
      },
      {
        name: 'Keys',
        kind: 'named',
        text: 'export type Keys = keyof any;',
        declarationKind: 'type',
      },
      {
        name: 'TypeStrings',
        kind: 'named',
        text: "export type TypeStrings =\n  | 'string'\n  | 'number'\n  | 'boolean'\n  | 'bigint'\n  | 'symbol'\n  | 'undefined'\n  | 'object'\n  | 'function';",
        declarationKind: 'type',
      },
      {
        name: 'KeyTypes',
        kind: 'named',
        text: 'export type KeyTypes = {\n  [K in Keys]: TypeStrings | Checker2 | KeyTypes;\n};',
        declarationKind: 'type',
      },
      {
        name: 'KeyTypesFrom',
        kind: 'named',
        text: 'export type KeyTypesFrom<T extends KeyTypes> = {\n  [K in keyof T]: T[K] extends KeyTypes\n    ? KeyTypesFrom<T[K]>\n    : T[K] extends TypeStrings\n      ? TransformO<T[K]>\n      : T[K] extends Checker2<infer R>\n        ? R\n        : unknown;\n};',
        declarationKind: 'type',
      },
      {
        name: 'NonN',
        kind: 'named',
        text: 'export type NonN<T> = T extends undefined | null ? any : NonNullable<T>;',
        declarationKind: 'type',
      },
      {
        name: 'Defaulted',
        kind: 'named',
        text: 'export type Defaulted<T, U extends NonN<T>> = undefined extends T\n  ? U\n  : null extends T\n    ? U\n    : never extends T\n      ? U\n      : T;',
        declarationKind: 'type',
      },
      {
        name: 'UnionKeys',
        kind: 'named',
        text: 'export type UnionKeys<U> = U extends Record<infer K, any> ? K : never;',
        declarationKind: 'type',
      },
      {
        name: '_UnionToIntersection1',
        kind: 'named',
        text: 'export type _UnionToIntersection1<U> = boolean extends U\n  ? U\n  : (U extends any ? (k: U) => void : never) extends (k: infer I) => void\n    ? I\n    : never;',
        declarationKind: 'type',
      },
      {
        name: '_UnionToIntersection2',
        kind: 'named',
        text: 'export type _UnionToIntersection2<U> = {\n  [K in UnionKeys<U>]: U extends Record<K, infer T> ? T : never;\n};',
        declarationKind: 'type',
      },
      {
        name: 'UnionToIntersection',
        kind: 'named',
        text: 'export type UnionToIntersection<U> = _UnionToIntersection2<\n  _UnionToIntersection1<U>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'UnionOmit',
        kind: 'named',
        text: 'export type UnionOmit<T, K extends Keys> = T extends any\n  ? Omit<T, K>\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'UnionNOmit',
        kind: 'named',
        text: 'export type UnionNOmit<T, K extends keyof T> = UnionOmit<T, K>;',
        declarationKind: 'type',
      },
      {
        name: 'LastOfUnion',
        kind: 'named',
        text: 'export type LastOfUnion<T> = (\n  (T extends any ? (x: () => T) => void : never) extends (\n    x: infer I,\n  ) => void\n    ? I\n    : never\n) extends () => infer U\n  ? U\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'UnionToTuple',
        kind: 'named',
        text: 'export type UnionToTuple<T, A extends any[] = []> = [T] extends [never]\n  ? A\n  : UnionToTuple<Exclude<T, LastOfUnion<T>>, [LastOfUnion<T>, ...A]>;',
        declarationKind: 'type',
      },
      {
        name: 'Checker2',
        kind: 'named',
        text: 'export type Checker2<T = unknown> = (value: unknown) => value is T;',
        declarationKind: 'type',
      },
      {
        name: 'Equals',
        kind: 'named',
        text: 'export type Equals<T, U> = T extends U\n  ? U extends T\n    ? true\n    : false\n  : false;',
        declarationKind: 'type',
      },
      {
        name: 'Classe',
        kind: 'named',
        text: 'export type Classe = {\n  [Symbol.hasInstance]: Fn<any, boolean>;\n};',
        declarationKind: 'type',
      },
    ],
    text: `import type { TransformO } from '#features/transform';
import type { Fn, RecursiveArrayOf } from '#types';

export type SingleOrRecursiveArrayOf<T> = T | RecursiveArrayOf<T>;

export type SoRa<T> = SingleOrRecursiveArrayOf<T>;

export type Primitive2 = string | number | boolean;
export type Primitive = Primitive2 | undefined | null;

export type SingleOrArray<T> = T | T[] | ReadonlyArray<T>;

export type SoA<T> = SingleOrArray<T>;

export type PrimitiveObjectMap = {
  [key: Keys]: SoRa<_PrimitiveObject>;
};

type _PrimitiveObject = Primitive | PrimitiveObjectMap;

/**
 * A type that represents a primitive object, which can be a primitive value or an object
 *
 * @remark
 */
export type PrimitiveObject = SoRa<_PrimitiveObject>;

export type NExtract<T, U extends T> = Extract<T, U>;
export type NExclude<T, U extends T> = Exclude<T, U>;

export type NotUndefined<T> = Exclude<T, undefined>;

export type Nu<T> = NotUndefined<T>;

export type Undefiny<T> = T | undefined;

export type Un<T> = Undefiny<T>;

export type Cast<A, B> = A extends B ? A : B;

export type Keys = keyof any;

export type TypeStrings =
  | 'string'
  | 'number'
  | 'boolean'
  | 'bigint'
  | 'symbol'
  | 'undefined'
  | 'object'
  | 'function';

export type KeyTypes = {
  [K in Keys]: TypeStrings | Checker2 | KeyTypes;
};

export type KeyTypesFrom<T extends KeyTypes> = {
  [K in keyof T]: T[K] extends KeyTypes
    ? KeyTypesFrom<T[K]>
    : T[K] extends TypeStrings
      ? TransformO<T[K]>
      : T[K] extends Checker2<infer R>
        ? R
        : unknown;
};

export type NonN<T> = T extends undefined | null ? any : NonNullable<T>;

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

export type UnionKeys<U> = U extends Record<infer K, any> ? K : never;

export type _UnionToIntersection1<U> = boolean extends U
  ? U
  : (U extends any ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

export type _UnionToIntersection2<U> = {
  [K in UnionKeys<U>]: U extends Record<K, infer T> ? T : never;
};

export type UnionToIntersection<U> = _UnionToIntersection2<
  _UnionToIntersection1<U>
>;

export type UnionOmit<T, K extends Keys> = T extends any
  ? Omit<T, K>
  : never;

export type UnionNOmit<T, K extends keyof T> = UnionOmit<T, K>;

export type LastOfUnion<T> = (
  (T extends any ? (x: () => T) => void : never) extends (
    x: infer I,
  ) => void
    ? I
    : never
) extends () => infer U
  ? U
  : never;

export type UnionToTuple<T, A extends any[] = []> = [T] extends [never]
  ? A
  : UnionToTuple<Exclude<T, LastOfUnion<T>>, [LastOfUnion<T>, ...A]>;

// #endregion

export type Checker2<T = unknown> = (value: unknown) => value is T;
// | ((value: unknown) => boolean);

export type Equals<T, U> = T extends U
  ? U extends T
    ? true
    : false
  : false;

export type Classe = {
  [Symbol.hasInstance]: Fn<any, boolean>;
};
`,
  },
  'features.common.typings.all': {
    relativePath: 'features/common/typings/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  partial,\n  const: _const,\n  identity,\n  unknown,\n  neverify,\n  any,\n  required,\n  readonly,\n  primitive,\n  symbol,\n  date,\n  undefiny,\n  extract,\n  exclude,\n  union,\n  null: _null,\n  undefined: _undefined,\n  never,\n  keys,\n  defaulted,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
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
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<any>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

const fn = typeFn<any>()();

export default fn;
`,
  },
  'features.common.typings.const': {
    relativePath: 'features/common/typings/const.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T>(_?: T) => _unknown<T>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <const T>(_?: T) => _unknown<T>();

export default fn;
`,
  },
  'features.common.typings.date': {
    relativePath: 'features/common/typings/date.ts',
    imports: [
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<Date>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

const fn = typeFn<Date>()();

export default fn;
`,
  },
  'features.common.typings.defaulted': {
    relativePath: 'features/common/typings/defaulted.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Defaulted', 'NonN'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T, U extends NonN<T>>(_?: T, __?: U) =>\n  _unknown<Defaulted<T, U>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Defaulted, NonN } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T, U extends NonN<T>>(_?: T, __?: U) =>
  _unknown<Defaulted<T, U>>();

export default fn;
`,
  },
  'features.common.typings.exclude.all': {
    relativePath: 'features/common/typings/exclude/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'excludeTyping = expandFn(exclude, {\n  const: const_,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import const_ from './const';
import exclude from './index';

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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T, const U extends T[]>(_?: T, ...__: U) =>\n  _unknown<Exclude<T, U[number]>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <const T, const U extends T[]>(_?: T, ...__: U) =>
  _unknown<Exclude<T, U[number]>>();

export default fn;
`,
  },
  'features.common.typings.exclude.index': {
    relativePath: 'features/common/typings/exclude/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T, U extends any[]>(_?: T, ...__: U) =>\n  _unknown<Exclude<T, U[number]>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T, U extends any[]>(_?: T, ...__: U) =>
  _unknown<Exclude<T, U[number]>>();

export default fn;
`,
  },
  'features.common.typings.extract.all': {
    relativePath: 'features/common/typings/extract/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'extractTyping = expandFn(extract, {\n  const: const_,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import const_ from './const';
import extract from './index';

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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T, const U extends T[]>(_?: T, ...__: U) =>\n  _unknown<Extract<T, U[number]>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <const T, const U extends T[]>(_?: T, ...__: U) =>
  _unknown<Extract<T, U[number]>>();

export default fn;
`,
  },
  'features.common.typings.extract.index': {
    relativePath: 'features/common/typings/extract/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T, U extends any[]>(_?: T, ...__: U) =>\n  _unknown<Extract<T, U[number]>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T, U extends any[]>(_?: T, ...__: U) =>
  _unknown<Extract<T, U[number]>>();

export default fn;
`,
  },
  'features.common.typings.identity': {
    relativePath: 'features/common/typings/identity.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(_?: T) => _unknown<T>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T>(_?: T) => _unknown<T>();

export default fn;
`,
  },
  'features.common.typings.index': {
    relativePath: 'features/common/typings/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<unknown>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

const fn = typeFn<unknown>()();

export default fn;
`,
  },
  'features.common.typings.keys': {
    relativePath: 'features/common/typings/keys.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Keys'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<Keys>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Keys } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<Keys>()();

export default fn;
`,
  },
  'features.common.typings.never': {
    relativePath: 'features/common/typings/never.ts',
    imports: [
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<never>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

const fn = typeFn<never>()();

export default fn;
`,
  },
  'features.common.typings.neverify': {
    relativePath: 'features/common/typings/neverify.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(_?: T) => _unknown<T extends never ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T>(_?: T) => _unknown<T extends never ? true : false>();

export default fn;
`,
  },

  'features.common.typings.null': {
    relativePath: 'features/common/typings/null.ts',
    imports: [
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<null>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

const fn = typeFn<null>()();

export default fn;
`,
  },
  'features.common.typings.partial.all': {
    relativePath: 'features/common/typings/partial/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  deep,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deep from './deep';
import _index from './index';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepPartial'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<DeepPartial<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepPartial } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<DeepPartial<T>>();

export default fn;
`,
  },
  'features.common.typings.partial.index': {
    relativePath: 'features/common/typings/partial/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<Partial<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<Partial<T>>();

export default fn;
`,
  },
  'features.common.typings.primitive.all': {
    relativePath: 'features/common/typings/primitive/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, { object })',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import object from './object';

const fn = expandFn(_index, { object });

export default fn;
`,
  },
  'features.common.typings.primitive.index': {
    relativePath: 'features/common/typings/primitive/index.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Primitive'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<Primitive>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Primitive } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<Primitive>()();

export default fn;
`,
  },
  'features.common.typings.primitive.object': {
    relativePath: 'features/common/typings/primitive/object.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['PrimitiveObject'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<PrimitiveObject>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { PrimitiveObject } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<PrimitiveObject>()();

export default fn;
`,
  },
  'features.common.typings.readonly.all': {
    relativePath: 'features/common/typings/readonly/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  deep,\n  not,\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import _index from './index';
import is from './is';
import not from './not/all';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'deep = expandFn(deepReadonly, {\n  not,\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deepReadonly from './index';
import is from './is';
import not from './not/all';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<DeepReadonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<DeepReadonly<T>>();

export default fn;
`,
  },

  'features.common.typings.readonly.deep.is': {
    relativePath: 'features/common/typings/readonly/deep/is.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) =>\n  _unknown<T extends DeepReadonly<T> ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) =>
  _unknown<T extends DeepReadonly<T> ? true : false>();

export default fn;
`,
  },
  'features.common.typings.readonly.deep.not.all': {
    relativePath: 'features/common/typings/readonly/deep/not/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'deepNot = expandFn(_index, {\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<DeepNotReadonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<DeepNotReadonly<T>>();

export default fn;
`,
  },
  'features.common.typings.readonly.deep.not.is': {
    relativePath: 'features/common/typings/readonly/deep/not/is.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) =>\n  _unknown<T extends DeepNotReadonly<T> ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) =>
  _unknown<T extends DeepNotReadonly<T> ? true : false>();

export default fn;
`,
  },
  'features.common.typings.readonly.index': {
    relativePath: 'features/common/typings/readonly/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<Readonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<Readonly<T>>();

export default fn;
`,
  },
  'features.common.typings.readonly.is': {
    relativePath: 'features/common/typings/readonly/is.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) =>\n  _unknown<T extends Readonly<T> ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) =>
  _unknown<T extends Readonly<T> ? true : false>();

export default fn;
`,
  },
  'features.common.typings.readonly.not.all': {
    relativePath: 'features/common/typings/readonly/not/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'not = expandFn(_index, {\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<NotReadonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<NotReadonly<T>>();

export default fn;
`,
  },
  'features.common.typings.readonly.not.is': {
    relativePath: 'features/common/typings/readonly/not/is.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) =>\n  _unknown<T extends NotReadonly<T> ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) =>
  _unknown<T extends NotReadonly<T> ? true : false>();

export default fn;
`,
  },
  'features.common.typings.required.all': {
    relativePath: 'features/common/typings/required/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(required, {\n  deep,\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deep from './deep';
import required from './index';
import is from './is';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepRequired'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<DeepRequired<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepRequired } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<DeepRequired<T>>();

export default fn;
`,
  },
  'features.common.typings.required.index': {
    relativePath: 'features/common/typings/required/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<Required<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<Required<T>>();

export default fn;
`,
  },
  'features.common.typings.required.is': {
    relativePath: 'features/common/typings/required/is.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(_: T) =>\n  _unknown<T extends null | undefined ? false : true>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T>(_: T) =>
  _unknown<T extends null | undefined ? false : true>();

export default fn;
`,
  },
  'features.common.typings.symbol': {
    relativePath: 'features/common/typings/symbol.ts',
    imports: [
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<symbol>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

const fn = typeFn<symbol>()();

export default fn;
`,
  },
  'features.common.typings.undefined': {
    relativePath: 'features/common/typings/undefined.ts',
    imports: [
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<undefined>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

const fn = typeFn<undefined>()();

export default fn;
`,
  },
  'features.common.typings.undefiny': {
    relativePath: 'features/common/typings/undefiny.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(_?: T) => _unknown<T | undefined>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T>(_?: T) => _unknown<T | undefined>();

export default fn;
`,
  },
  'features.common.typings.union': {
    relativePath: 'features/common/typings/union.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends any[]>(..._: T) => _unknown<T[number]>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <const T extends any[]>(..._: T) => _unknown<T[number]>();

export default fn;
`,
  },
  'features.common.typings.unknown': {
    relativePath: 'features/common/typings/unknown.ts',
    imports: [
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<unknown>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

const fn = typeFn<unknown>()();

export default fn;
`,
  },
  'features.functions.castings': {
    relativePath: 'features/functions/castings.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Checker', 'Checker2', 'Fn'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '#utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: '#utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    exports: [
      {
        name: 'castings',
        kind: 'named',
        text: "castings = castFn()({\n  is: expandFn(\n    (value: unknown): value is Fn => {\n      return typeof value === 'function';\n    },\n    {\n      strict: <T extends any[] = any[], R = any>(\n        fn: Checker<Fn<T, R>>,\n      ) => {\n        return (value: unknown): value is Fn<T, R> =>\n          typeof value === 'function' && fn(value);\n      },\n    },\n  ),\n\n  forceCast: <T extends any[], R = any>(value: unknown) => {\n    return _unknown<Fn<T, R>>(value);\n  },\n\n  dynamic: <T extends any[], R = any>(..._: [...T, R]) =>\n    identity<Fn<T, R>>,\n\n  checker: castFn<Checker>()({\n    /**\n     * Very low\n     * Checks if value is a function with one argument\n     * @param value value to check\n     * @returns true if value is a function with one argument\n     */\n    is: <T = unknown>(value: unknown): value is Checker2<T> => {\n      return (\n        typeof value === 'function' &&\n        value.length === 1 &&\n        !/^\\s*class\\s+/.test(value.toString())\n      );\n    },\n\n    byType: expandFn(<T>(checker: Checker2<T>) => checker, {\n      forceCast: <T>(value: Checker) => _unknown<Checker2<T>>(value),\n    }),\n  }),\n})",
        declarationKind: 'variable',
      },
    ],
    text: `import type { Checker, Checker2, Fn } from '#types';
import { _unknown } from '#utils/_unknown';
import { castFn } from '#utils/castFn';
import { expandFn } from '#utils/expandFn';
import { identity } from '#utils/identity';

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
        !/^|||s*class|||s+/.test(value.toString())
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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'castings',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  is,\n  forceCast,\n  dynamic,\n  checker,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'default',
        kind: 'default',
        text: 'castings = expandFn(_index, {\n  is,\n  forceCast,\n  dynamic,\n  checker,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import checker from './checker/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import _index from './index';
import is from './is/all';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'checker = expandFn(_index, {\n  forceCast,\n  byType,\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import byType from './byType/all';
import forceCast from './forceCast';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  cast,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import cast from './cast';
import _index from './index';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Checker', 'Checker2'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(value: Checker) => _unknown<Checker2<T>>(value)',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Checker, Checker2 } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T>(value: Checker) => _unknown<Checker2<T>>(value);

export default fn;
`,
  },
  'features.functions.castings.checker.byType.index': {
    relativePath: 'features/functions/castings/checker/byType/index.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Checker2'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'byType = <T>(checker: Checker2<T>) => checker',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Checker2 } from '#types';

const byType = <T>(checker: Checker2<T>) => checker;

export default byType;
`,
  },
  'features.functions.castings.checker.forceCast': {
    relativePath: 'features/functions/castings/checker/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Checker', 'Checker2'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'forceCast = <T>(value: Checker) => _unknown<Checker2<T>>(value)',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Checker, Checker2 } from '#types';
import { _unknown } from '#utils/_unknown';

const forceCast = <T>(value: Checker) => _unknown<Checker2<T>>(value);

export default forceCast;
`,
  },
  'features.functions.castings.checker.index': {
    relativePath: 'features/functions/castings/checker/index.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Checker'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<Checker>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Checker } from '#types';
import { castFn } from '#utils/castFn';

const fn = castFn<Checker>()();

export default fn;
`,
  },
  'features.functions.castings.checker.is': {
    relativePath: 'features/functions/castings/checker/is.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Checker2'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "is = <T = unknown>(value: unknown): value is Checker2<T> => {\n  return (\n    typeof value === 'function' &&\n    value.length === 1 &&\n    !/^\\s*class\\s+/.test(value.toString())\n  );\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { Checker2 } from '#types';

/**
 * Very low
 * Checks if value is a function with one argument
 * @param value value to check
 * @returns true if value is a function with one argument
 */
const is = <T = unknown>(value: unknown): value is Checker2<T> => {
  return (
    typeof value === 'function' &&
    value.length === 1 &&
    !/^|||s*class|||s+/.test(value.toString())
  );
};

export default is;
`,
  },
  'features.functions.castings.dynamic': {
    relativePath: 'features/functions/castings/dynamic.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Fn'],
      },
      {
        moduleSpecifier: '#utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'dynamic = <T extends any[], R = any>(..._: [...T, R]) =>\n  identity<Fn<T, R>>',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Fn } from '#types';
import { identity } from '#utils/identity';

const dynamic = <T extends any[], R = any>(..._: [...T, R]) =>
  identity<Fn<T, R>>;

export default dynamic;
`,
  },
  'features.functions.castings.forceCast': {
    relativePath: 'features/functions/castings/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Fn'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'forceCast = <T extends any[], R = any>(value: unknown) => {\n  return _unknown<Fn<T, R>>(value);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Fn'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '#utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
      {
        moduleSpecifier: '#utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "castings = castFn()({\n  is: expandFn(\n    (value: unknown): value is Fn => {\n      return typeof value === 'function';\n    },\n    {\n      strict: <T extends any[] = any[], R = any>(\n        fn: (value: Fn<T, R>) => boolean,\n      ) => {\n        return (value: unknown): value is Fn<T, R> =>\n          typeof value === 'function' && fn(value as Fn<T, R>);\n      },\n    },\n  ),\n\n  forceCast: <T extends any[], R = any>(value: unknown) => {\n    return _unknown<Fn<T, R>>(value);\n  },\n\n  dynamic: <T extends any[], R = any>(..._: [...T, R]) =>\n    identity<Fn<T, R>>,\n})",
        declarationKind: 'variable',
      },
    ],
    text: `import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';
import { castFn } from '#utils/castFn';
import { expandFn } from '#utils/expandFn';
import { identity } from '#utils/identity';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'is = expandFn(_index, {\n  strict,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import strict from './strict';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Fn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "is = (value: unknown): value is Fn => {\n  return typeof value === 'function';\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { Fn } from '#types';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Fn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "strict = <T extends any[] = any[], R = any>(\n  fn: (value: Fn<T, R>) => boolean,\n) => {\n  return (value: unknown): value is Fn<T, R> =>\n    typeof value === 'function' && fn(value as Fn<T, R>);\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { Fn } from '#types';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['PrimitiveObject'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "export default function deepClone<I extends PrimitiveObject>(\n  value: I,\n  refs = new Map<I, I>(),\n): I {\n  const ref = refs.get(value);\n  if (typeof ref !== 'undefined') return ref;\n\n  if (Array.isArray(value)) {\n    const clone: any = [];\n    refs.set(value, clone);\n\n    for (let i = 0; i < value.length; i++) {\n      clone[i] = deepClone(value[i], refs as any);\n    }\n\n    return clone as I;\n  }\n\n  if (!(value instanceof Object)) return value as unknown as I;\n\n  const clone: Record<string, PrimitiveObject> = {};\n  refs.set(value, clone as I);\n  const keys = Object.keys(value);\n\n  for (let i = 0; i < keys.length; i++) {\n    const key = keys[i];\n    clone[key] = deepClone((value as any)[keys[i]], refs);\n  }\n\n  if (Object.isFrozen(value)) {\n    Object.freeze(clone);\n  }\n\n  if (Object.isSealed(value)) {\n    Object.seal(clone);\n  }\n\n  return clone as I;\n}",
        declarationKind: 'function',
      },
      {
        name: 'FormatKey',
        kind: 'named',
        text: 'export type FormatKey<T = any> = (key: Extract<keyof T, string>) => string;',
        declarationKind: 'type',
      },
    ],
    text: `import type { PrimitiveObject } from '#types';

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
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './clone';",
        moduleSpecifier: './clone',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './partialCall';",
        moduleSpecifier: './partialCall',
      },
      {
        name: 'FormatKey',
        kind: 'named',
        text: 'export type FormatKey<T = any> = (key: Extract<keyof T, string>) => string;',
        declarationKind: 'type',
      },
      {
        name: 'partialCall',
        kind: 'named',
        text: 'partialCall: PartialCall_F = (f, ...headArgs) => {\n  return (...tailArgs) => f(...headArgs, ...tailArgs);\n}',
        declarationKind: 'variable',
      },
    ],
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
    exports: [
      {
        name: 'partialCall',
        kind: 'named',
        text: 'partialCall: PartialCall_F = (f, ...headArgs) => {\n  return (...tailArgs) => f(...headArgs, ...tailArgs);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { AnyArray } from '../../arrays/types';
import type { Fn } from '../types';

type PartialCall_F = <
  T extends AnyArray = AnyArray,
  U extends AnyArray = AnyArray,
  R = any,
>(
  f: Fn<[...T, ...U], R>,
  ...headArgs: T
) => (...tailArgs: U) => R;

export const partialCall: PartialCall_F = (f, ...headArgs) => {
  return (...tailArgs) => f(...headArgs, ...tailArgs);
};
`,
  },
  'features.functions.index': {
    relativePath: 'features/functions/index.ts',
    imports: [],
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './castings';",
        moduleSpecifier: './castings',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * as functions from './functions';",
        moduleSpecifier: './functions',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './types';",
        moduleSpecifier: './types',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './typings';",
        moduleSpecifier: './typings',
      },
      {
        name: 'functions',
        kind: 'named',
        text: "export * from './clone';\nexport * from './partialCall';\n",
      },
      {
        name: 'castings',
        kind: 'named',
        text: "castings = castFn()({\n  is: expandFn(\n    (value: unknown): value is Fn => {\n      return typeof value === 'function';\n    },\n    {\n      strict: <T extends any[] = any[], R = any>(\n        fn: Checker<Fn<T, R>>,\n      ) => {\n        return (value: unknown): value is Fn<T, R> =>\n          typeof value === 'function' && fn(value);\n      },\n    },\n  ),\n\n  forceCast: <T extends any[], R = any>(value: unknown) => {\n    return _unknown<Fn<T, R>>(value);\n  },\n\n  dynamic: <T extends any[], R = any>(..._: [...T, R]) =>\n    identity<Fn<T, R>>,\n\n  checker: castFn<Checker>()({\n    /**\n     * Very low\n     * Checks if value is a function with one argument\n     * @param value value to check\n     * @returns true if value is a function with one argument\n     */\n    is: <T = unknown>(value: unknown): value is Checker2<T> => {\n      return (\n        typeof value === 'function' &&\n        value.length === 1 &&\n        !/^\\s*class\\s+/.test(value.toString())\n      );\n    },\n\n    byType: expandFn(<T>(checker: Checker2<T>) => checker, {\n      forceCast: <T>(value: Checker) => _unknown<Checker2<T>>(value),\n    }),\n  }),\n})",
        declarationKind: 'variable',
      },
      {
        name: 'Fn',
        kind: 'named',
        text: 'export type Fn<Args extends any[] = any[], R = any> = (...args: Args) => R;',
        declarationKind: 'type',
      },
      {
        name: 'FnBasic',
        kind: 'named',
        text: 'export type FnBasic<Main extends Fn, Tr extends object> = Tr & Main;',
        declarationKind: 'type',
      },
      {
        name: 'Checker',
        kind: 'named',
        text: 'export type Checker<T = unknown> =\n  | ((value: unknown) => value is T)\n  | Fn<[unknown], boolean>;',
        declarationKind: 'type',
      },
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  dynamic,\n  forceCast,\n  checker,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `export * from './castings';
export * as functions from './functions';
export * from './types';
export * from './typings';
`,
  },
  'features.functions.types': {
    relativePath: 'features/functions/types.ts',
    imports: [],
    exports: [
      {
        name: 'Fn',
        kind: 'named',
        text: 'export type Fn<Args extends any[] = any[], R = any> = (...args: Args) => R;',
        declarationKind: 'type',
      },
      {
        name: 'FnBasic',
        kind: 'named',
        text: 'export type FnBasic<Main extends Fn, Tr extends object> = Tr & Main;',
        declarationKind: 'type',
      },
      {
        name: 'Checker',
        kind: 'named',
        text: 'export type Checker<T = unknown> =\n  | ((value: unknown) => value is T)\n  | Fn<[unknown], boolean>;',
        declarationKind: 'type',
      },
    ],
    text: `export type Fn<Args extends any[] = any[], R = any> = (...args: Args) => R;

export type FnBasic<Main extends Fn, Tr extends object> = Tr & Main;

export type Checker<T = unknown> =
  | ((value: unknown) => value is T)
  | Fn<[unknown], boolean>;
`,
  },
  'features.functions.typings': {
    relativePath: 'features/functions/typings.ts',
    imports: [],
    exports: [
      {
        name: 'typings',
        kind: 'named',
        text: "export { typings } from './typings/all';",
        moduleSpecifier: './typings/all',
      },
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  dynamic,\n  forceCast,\n  checker,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `export { typings } from './typings/all';
`,
  },
  'features.functions.typings.all': {
    relativePath: 'features/functions/typings/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  dynamic,\n  forceCast,\n  checker,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import checker from './checker/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import _index from './index';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  byType,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import byType from './byType/all';
import _index from './index';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  cast,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import cast from './cast';
import _index from './index';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Checker', 'Checker2'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(_?: Checker) => _unknown<Checker2<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Checker, Checker2 } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T>(_?: Checker) => _unknown<Checker2<T>>();

export default fn;
`,
  },
  'features.functions.typings.checker.byType.index': {
    relativePath: 'features/functions/typings/checker/byType/index.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Checker2'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'byType = <T>(_?: Checker2<T>) => _unknown<Checker2<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Checker2 } from '#types';
import { _unknown } from '#utils/_unknown';

const byType = <T>(_?: Checker2<T>) => _unknown<Checker2<T>>();

export default byType;
`,
  },
  'features.functions.typings.checker.index': {
    relativePath: 'features/functions/typings/checker/index.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Checker'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'checker = typeFn<Checker>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Checker } from '#types';
import { typeFn } from '#utils/typeFn';

const checker = typeFn<Checker>()();

export default checker;
`,
  },
  'features.functions.typings.dynamic': {
    relativePath: 'features/functions/typings/dynamic.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Fn'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'dynamic = <T extends any[], R = any>(..._: [...T, R]) =>\n  _unknown<Fn<T, R>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';

const dynamic = <T extends any[], R = any>(..._: [...T, R]) =>
  _unknown<Fn<T, R>>();

export default dynamic;
`,
  },
  'features.functions.typings.forceCast': {
    relativePath: 'features/functions/typings/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Fn'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'forceCast = <T extends any[], R = any>(_?: unknown) => {\n  return _unknown<Fn<T, R>>();\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Fn'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'typings = typeFn<Fn>()({\n  dynamic: <T extends any[], R = any>(..._: [...T, R]) =>\n    _unknown<Fn<T, R>>(),\n\n  forceCast: <T extends any[], R = any>(_?: unknown) => {\n    return _unknown<Fn<T, R>>();\n  },\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';
import { typeFn } from '#utils/typeFn';

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
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * as arrays from './arrays';",
        moduleSpecifier: './arrays',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * as booleans from './booleans';",
        moduleSpecifier: './booleans',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * as common from './common';",
        moduleSpecifier: './common',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * as functions from './functions';",
        moduleSpecifier: './functions',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * as numbers from './numbers';",
        moduleSpecifier: './numbers',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * as objects from './objects';",
        moduleSpecifier: './objects',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * as promises from './promises';",
        moduleSpecifier: './promises',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * as strings from './strings';",
        moduleSpecifier: './strings',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * as transformers from './transform';",
        moduleSpecifier: './transform',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * as typescript from './typescript';",
        moduleSpecifier: './typescript',
      },
      {
        name: 'arrays',
        kind: 'named',
        text: "export * from './castings/all';\nexport * from './types';\nexport * from './typings/all';\n",
      },
      {
        name: 'booleans',
        kind: 'named',
        text: "export * from './castings/all';\nexport * from './types';\nexport * from './typings/all';\n",
      },
      {
        name: 'common',
        kind: 'named',
        text: "export * from './castings/all';\nexport * from './types';\nexport * from './typings/all';\n",
      },
      {
        name: 'functions',
        kind: 'named',
        text: "export * from './castings';\nexport * as functions from './functions';\nexport * from './types';\nexport * from './typings';\n",
      },
      {
        name: 'numbers',
        kind: 'named',
        text: "export * from './castings/all';\nexport * from './types';\nexport * from './typings/all';\n",
      },
      {
        name: 'objects',
        kind: 'named',
        text: "export * from './castings/all';\nexport * from './types';\nexport * from './typings/all';\n",
      },
      {
        name: 'promises',
        kind: 'named',
        text: "export * from './types';\n",
      },
      {
        name: 'strings',
        kind: 'named',
        text: "export * from './castings/all';\nexport * as CONSTANTS from './constants';\nexport * from './types';\nexport * from './typings/all';\n",
      },
      {
        name: 'transformers',
        kind: 'named',
        text: "export * from './constants';\nexport * from './functions';\nexport * from './types';\n",
      },
      {
        name: 'typescript',
        kind: 'named',
        text: "export { extractFromFile } from './extractFromFile';\nexport { findFirstCallExpression } from './findFirstCallExpression';\nexport { parseObject } from './parseObject';\nexport { resolveType } from './resolveType';\n",
      },
    ],
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
        moduleSpecifier: '#utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = identity(-1)',
        declarationKind: 'variable',
      },
    ],
    text: `import { identity } from '#utils/identity';

const fn = identity(-1);

export default fn;
`,
  },

  'features.numbers.castings.ONE': {
    relativePath: 'features/numbers/castings/ONE.ts',
    imports: [
      {
        moduleSpecifier: '#utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = identity(1)',
        declarationKind: 'variable',
      },
    ],
    text: `import { identity } from '#utils/identity';

const fn = identity(1);

export default fn;
`,
  },
  'features.numbers.castings.ZERO': {
    relativePath: 'features/numbers/castings/ZERO.ts',
    imports: [
      {
        moduleSpecifier: '#utils/identity',
        kind: 'named',
        namedImports: ['identity'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = identity(0)',
        declarationKind: 'variable',
      },
    ],
    text: `import { identity } from '#utils/identity';

const fn = identity(0);

export default fn;
`,
  },
  'features.numbers.castings.all': {
    relativePath: 'features/numbers/castings/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'castings',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  is,\n  getString,\n  digit,\n  type,\n  ZERO,\n  ONE,\n  MINUS_1,\n  bigint,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import bigint from './bigint';
import digit from './digit';
import getString from './getString';
import _index from './index';
import is from './is';
import MINUS_1 from './MINUS_1';
import ONE from './ONE';
import type from './type';
import ZERO from './ZERO';

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
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '#utils/is/_default',
        kind: 'named',
        namedImports: ['isTypeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = castFn<bigint>()({\n  is: isTypeFn('bigint'),\n})",
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';
import { isTypeFn } from '#utils/is/_default';

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
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '../constants',
        kind: 'named',
        namedImports: ['DIGITS'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn.withValues(...DIGITS)',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';
import { DIGITS } from '../constants';

const fn = castFn.withValues(...DIGITS);

export default fn;
`,
  },
  'features.numbers.castings.getString': {
    relativePath: 'features/numbers/castings/getString.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends number | string>(arg: T): `${T}` => `${arg}`',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T extends number | string>(arg: T): \`$|||{T}\` => \`$|||{arg}\`;

export default fn;
`,
  },
  'features.numbers.castings.index': {
    relativePath: 'features/numbers/castings/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<number>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';

const fn = castFn<number>()();

export default fn;
`,
  },
  'features.numbers.castings.is': {
    relativePath: 'features/numbers/castings/is.ts',
    imports: [
      {
        moduleSpecifier: '#utils/is/_default',
        kind: 'named',
        namedImports: ['isTypeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = isTypeFn('number')",
        declarationKind: 'variable',
      },
    ],
    text: `import { isTypeFn } from '#utils/is/_default';

const fn = isTypeFn('number');

export default fn;
`,
  },
  'features.numbers.castings.type': {
    relativePath: 'features/numbers/castings/type.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = Number',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = Number;

export default fn;
`,
  },
  'features.numbers.constants': {
    relativePath: 'features/numbers/constants.ts',
    imports: [],
    exports: [
      {
        name: 'DIGITS',
        kind: 'named',
        text: 'DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const',
        declarationKind: 'variable',
      },
    ],
    text: `export const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
`,
  },

  'features.numbers.index': {
    relativePath: 'features/numbers/index.ts',
    imports: [],
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './castings/all';",
        moduleSpecifier: './castings/all',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './types';",
        moduleSpecifier: './types',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './typings/all';",
        moduleSpecifier: './typings/all',
      },
      {
        name: 'castings',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  is,\n  getString,\n  digit,\n  type,\n  ZERO,\n  ONE,\n  MINUS_1,\n  bigint,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'ToString',
        kind: 'named',
        text: 'export type ToString<T extends number | string> = `${T}`;',
        declarationKind: 'type',
      },
      {
        name: 'Digit',
        kind: 'named',
        text: 'export type Digit = (typeof DIGITS)[number];',
        declarationKind: 'type',
      },
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  getString,\n  digit,\n  ZERO,\n  ONE,\n  MINUS_1,\n  bigint,\n})',
        declarationKind: 'variable',
      },
    ],
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
    exports: [
      {
        name: 'ToString',
        kind: 'named',
        text: 'export type ToString<T extends number | string> = `${T}`;',
        declarationKind: 'type',
      },
      {
        name: 'Digit',
        kind: 'named',
        text: 'export type Digit = (typeof DIGITS)[number];',
        declarationKind: 'type',
      },
    ],
    text: `import type { DIGITS } from './constants';

export type ToString<T extends number | string> = \`$|||{T}\`;

export type Digit = (typeof DIGITS)[number];
`,
  },
  'features.numbers.typings.MINUS_1': {
    relativePath: 'features/numbers/typings/MINUS_1.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = () => _unknown<-1>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = () => _unknown<-1>();

export default fn;
`,
  },
  'features.numbers.typings.ONE': {
    relativePath: 'features/numbers/typings/ONE.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = () => _unknown<1>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = () => _unknown<1>();

export default fn;
`,
  },
  'features.numbers.typings.ZERO': {
    relativePath: 'features/numbers/typings/ZERO.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = () => _unknown<0>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = () => _unknown<0>();

export default fn;
`,
  },
  'features.numbers.typings.all': {
    relativePath: 'features/numbers/typings/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  getString,\n  digit,\n  ZERO,\n  ONE,\n  MINUS_1,\n  bigint,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import bigint from './bigint';
import digit from './digit';
import getString from './getString';
import _index from './index';
import MINUS_1 from './MINUS_1';
import ONE from './ONE';
import ZERO from './ZERO';

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
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<bigint>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

const fn = typeFn<bigint>()();

export default fn;
`,
  },
  'features.numbers.typings.digit': {
    relativePath: 'features/numbers/typings/digit.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Digit'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<Digit>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Digit } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<Digit>()();

export default fn;
`,
  },
  'features.numbers.typings.getString': {
    relativePath: 'features/numbers/typings/getString.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends number>(_: T) => _unknown<`${T}`>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <const T extends number>(_: T) => _unknown<\`$|||{T}\`>();

export default fn;
`,
  },
  'features.numbers.typings.index': {
    relativePath: 'features/numbers/typings/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<number>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

const fn = typeFn<number>()();

export default fn;
`,
  },

  'features.objects.castings.all': {
    relativePath: 'features/objects/castings/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'castings',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  trueObject,\n  type,\n  keys,\n  values,\n  entries,\n  byKey,\n  hasKeys,\n  keyTypes,\n  omit,\n  reverse,\n  readonly,\n  freeze,\n  require,\n  pick,\n  ru,\n  ra,\n  primitive,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, K extends keyof T>(\n  object: T,\n  key: K,\n): T[K] => {\n  return object[key];\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T extends object, K extends keyof T>(
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(object: T): [keyof T, T[keyof T]][] => {\n  return Object.entries(object) as any;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T extends object>(object: T): [keyof T, T[keyof T]][] => {
  return Object.entries(object) as any;
};

export default fn;
`,
  },
  'features.objects.castings.freeze.all': {
    relativePath: 'features/objects/castings/freeze/all.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'named',
        text: "export { default } from '#features/objects/castings/readonly/all';",
        moduleSpecifier: '#features/objects/castings/readonly/all',
      },
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  forceCast,\n  dynamic,\n  is,\n  not,\n  deep,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `export { default } from '#features/objects/castings/readonly/all';
`,
  },
  'features.objects.castings.freeze.deep.all': {
    relativePath: 'features/objects/castings/freeze/deep/all.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'named',
        text: "export { default } from '#features/objects/castings/readonly/deep/all';",
        moduleSpecifier: '#features/objects/castings/readonly/deep/all',
      },
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  not,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `export { default } from '#features/objects/castings/readonly/deep/all';
`,
  },
  'features.objects.castings.freeze.deep.index': {
    relativePath: 'features/objects/castings/freeze/deep/index.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'named',
        text: "export { default } from '#features/objects/castings/readonly/deep/index';",
        moduleSpecifier: '#features/objects/castings/readonly/deep/index',
      },
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(object: T) => {\n  const out = Object.freeze(object);\n  return _unknown<DeepReadonly<T>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `export { default } from '#features/objects/castings/readonly/deep/index';
`,
  },
  'features.objects.castings.freeze.deep.not': {
    relativePath: 'features/objects/castings/freeze/deep/not.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'named',
        text: "export { default } from '#features/objects/castings/readonly/deep/not';",
        moduleSpecifier: '#features/objects/castings/readonly/deep/not',
      },
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(object: T) => {\n  return _unknown<DeepNotReadonly<T>>(object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `export { default } from '#features/objects/castings/readonly/deep/not';
`,
  },
  'features.objects.castings.freeze.dynamic': {
    relativePath: 'features/objects/castings/freeze/dynamic.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'named',
        text: "export { default } from '#features/objects/castings/readonly/dynamic';",
        moduleSpecifier: '#features/objects/castings/readonly/dynamic',
      },
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <U extends object>(object: U) => {\n  return Object.freeze(object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `export { default } from '#features/objects/castings/readonly/dynamic';
`,
  },
  'features.objects.castings.freeze.forceCast': {
    relativePath: 'features/objects/castings/freeze/forceCast.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'named',
        text: "export { default } from '#features/objects/castings/readonly/forceCast';",
        moduleSpecifier: '#features/objects/castings/readonly/forceCast',
      },
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(object: unknown) => {\n  const out = Object.freeze(object);\n  return _unknown<Readonly<T>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `export { default } from '#features/objects/castings/readonly/forceCast';
`,
  },
  'features.objects.castings.freeze.index': {
    relativePath: 'features/objects/castings/freeze/index.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'named',
        text: "export { default } from '#features/objects/castings/readonly/index';",
        moduleSpecifier: '#features/objects/castings/readonly/index',
      },
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(object: T) => {\n  return Object.freeze(object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `export { default } from '#features/objects/castings/readonly/index';
`,
  },

  'features.objects.castings.freeze.is': {
    relativePath: 'features/objects/castings/freeze/is.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'named',
        text: "export { default } from '#features/objects/castings/readonly/is';",
        moduleSpecifier: '#features/objects/castings/readonly/is',
      },
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(object: T): object is Readonly<T> => {\n  return Object.isFrozen(object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `export { default } from '#features/objects/castings/readonly/is';
`,
  },
  'features.objects.castings.freeze.not': {
    relativePath: 'features/objects/castings/freeze/not.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'named',
        text: "export { default } from '#features/objects/castings/readonly/not';",
        moduleSpecifier: '#features/objects/castings/readonly/not',
      },
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends object>(object: T) => {\n  return _unknown<NotReadonly<T>>(object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `export { default } from '#features/objects/castings/readonly/not';
`,
  },
  'features.objects.castings.hasKeys._all.all': {
    relativePath: 'features/objects/castings/hasKeys/_all/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  typings,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import typings from './typings';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Keys'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <K extends Keys[]>(\n  object: object,\n  ...keys: K\n): object is Record<K[number], unknown> => {\n  return (\n    Object.keys(object).every(key => keys.includes(key)) &&\n    keys.every(key => key in object)\n  );\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Keys } from '#types';

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
        moduleSpecifier: '#features/objects/utils/entries',
        kind: 'named',
        namedImports: ['checkEntries'],
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['KeyTypes', 'KeyTypesFrom'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <K extends KeyTypes>(\n  object: object,\n  keys: K,\n): object is KeyTypesFrom<K> => {\n  const check0 =\n    Object.keys(object).every(key => key in keys) &&\n    Object.keys(keys).every(key => key in object);\n\n  if (!check0) return false;\n\n  return checkEntries(keys, object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import { checkEntries } from '#features/objects/utils/entries';
import type { KeyTypes, KeyTypesFrom } from '#types';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  typings,\n  all,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import all from './_all/all';
import _index from './index';
import typings from './typings';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Keys'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <K extends Keys[]>(\n  object: object,\n  ...keys: K\n): object is Record<K[number], unknown> => {\n  return keys.every(key => key in object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Keys } from '#types';

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
        moduleSpecifier: '#features/objects/utils/entries',
        kind: 'named',
        namedImports: ['checkEntries'],
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['KeyTypes', 'KeyTypesFrom'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <K extends KeyTypes>(\n  object: object,\n  keys: K,\n): object is KeyTypesFrom<K> => {\n  return checkEntries(keys, object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import { checkEntries } from '#features/objects/utils/entries';
import type { KeyTypes, KeyTypesFrom } from '#types';

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
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<object>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';

const fn = castFn<object>()();

export default fn;
`,
  },
  'features.objects.castings.keyTypes.all': {
    relativePath: 'features/objects/castings/keyTypes/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  from,\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import from from './from';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['KeyTypes', 'KeyTypesFrom'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends KeyTypes>(keyType: T) => {\n  return castFn<KeyTypesFrom<T>>()({\n    is: (value: unknown): value is KeyTypesFrom<T> => {\n      return typeof value === (keyType as unknown as string);\n    },\n  });\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { KeyTypes, KeyTypesFrom } from '#types';
import { castFn } from '#utils/castFn';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['KeyTypes'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<KeyTypes>()({})',
        declarationKind: 'variable',
      },
    ],
    text: `import type { KeyTypes } from '#types';
import { castFn } from '#utils/castFn';

const fn = castFn<KeyTypes>()({});

export default fn;
`,
  },
  'features.objects.castings.keyTypes.is': {
    relativePath: 'features/objects/castings/keyTypes/is.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['KeyTypes'],
      },
      {
        moduleSpecifier: '#utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "is = (value: unknown): value is KeyTypes => {\n  const isObject = isPlainObject(value);\n  if (!isObject) return false;\n  return (\n    typeof value === 'string' ||\n    typeof value === 'number' ||\n    typeof value === 'symbol'\n  );\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { KeyTypes } from '#types';
import { isPlainObject } from '#utils/is/object';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(object: T): (keyof T)[] => {\n  return Object.keys(object) as any;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T extends object>(object: T): (keyof T)[] => {
  return Object.keys(object) as any;
};

export default fn;
`,
  },
  'features.objects.castings.omit.all': {
    relativePath: 'features/objects/castings/omit/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  strict,\n  const: _const,\n  is,\n  by,\n  deep,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import by from './by/all';
import _const from './const/all';
import deep from './deep/all';
import _index from './index';
import is from './is';
import strict from './strict/all';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['SubType'],
      },
      {
        moduleSpecifier: '../../../utils/omit',
        kind: 'named',
        namedImports: ['omit'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(omit, 'element') as <\n  T extends object,\n  K extends any[],\n>(\n  object: T,\n  ...values: K\n) => SubType<T, K[number]>",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import type { SubType } from '#types';
import { omit } from '../../../utils/omit';

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
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#features/objects/utils/omit.is',
        kind: 'named',
        namedImports: ['omitIs'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(omitIs, 'element')",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import { omitIs } from '#features/objects/utils/omit.is';

const fn = partialCall(omitIs, 'element');

export default fn;
`,
  },
  'features.objects.castings.omit.const.all': {
    relativePath: 'features/objects/castings/omit/const/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../../utils/omit',
        kind: 'named',
        namedImports: ['omit'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(omit, 'key') as <\n  const T extends object,\n  K extends (keyof T)[],\n>(\n  object: T,\n  ...keys: K\n) => Omit<T, K[number]>",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import { omit } from '../../../utils/omit';

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
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#features/objects/utils/omit.is',
        kind: 'named',
        namedImports: ['omitIs'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(omitIs, 'key') as <\n  const T extends object,\n  K extends (keyof T)[],\n>(\n  object: T,\n  ...keys: K\n) => boolean",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import { omitIs } from '#features/objects/utils/omit.is';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  by,\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import by from './by/all';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Keys', 'NotSubType', 'PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: '../../../../utils/omit.deep',
        kind: 'named',
        namedImports: ['omitDeep'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(omitDeep, 'element') as <\n  T extends PrimitiveObjectMap,\n  K extends Keys[],\n>(\n  object: T,\n  ...values: K\n) => NotSubType<T, K[number]>",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import type { Keys, NotSubType, PrimitiveObjectMap } from '#types';
import { omitDeep } from '../../../../utils/omit.deep';

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
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#features/objects/utils/omit.deep.is',
        kind: 'named',
        namedImports: ['omitDeepIs'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(omitDeepIs, 'element')",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import { omitDeepIs } from '#features/objects/utils/omit.deep.is';

const fn = partialCall(omitDeepIs, 'element');

export default fn;
`,
  },
  'features.objects.castings.omit.deep.index': {
    relativePath: 'features/objects/castings/omit/deep/index.ts',
    imports: [
      {
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepOmit', 'Keys', 'PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: '../../../utils/omit.deep',
        kind: 'named',
        namedImports: ['omitDeep'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(omitDeep, 'key') as <\n  T extends PrimitiveObjectMap,\n  K extends Keys[],\n>(\n  object: T,\n  ...keys: K\n) => DeepOmit<T, K[number]>",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import type { DeepOmit, Keys, PrimitiveObjectMap } from '#types';
import { omitDeep } from '../../../utils/omit.deep';

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
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#features/objects/utils/omit.deep.is',
        kind: 'named',
        namedImports: ['omitDeepIs'],
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Keys', 'PrimitiveObjectMap'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(omitDeepIs, 'key') as (\n  object: PrimitiveObjectMap,\n  ...keys: Keys[]\n) => boolean",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import { omitDeepIs } from '#features/objects/utils/omit.deep.is';
import type { Keys, PrimitiveObjectMap } from '#types';

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
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: '../../utils/omit',
        kind: 'named',
        namedImports: ['omit'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(omit, 'key') as <\n  T extends PrimitiveObjectMap,\n  K extends any[],\n>(\n  object: T,\n  ...keys: K\n) => Omit<T, K[number]>",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import type { PrimitiveObjectMap } from '#types';
import { omit } from '../../utils/omit';

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
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#features/objects/utils/omit.is',
        kind: 'named',
        namedImports: ['omitIs'],
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Keys', 'PrimitiveObjectMap'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(omitIs, 'key') as <K extends Keys[]>(\n  object: PrimitiveObjectMap,\n  ...keys: K\n) => boolean",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import { omitIs } from '#features/objects/utils/omit.is';
import type { Keys, PrimitiveObjectMap } from '#types';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#features/objects/utils/omit',
        kind: 'named',
        namedImports: ['omit'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(omit, 'key') as <\n  T extends object,\n  K extends (keyof T)[],\n>(\n  object: T,\n  ...keys: K\n) => Omit<T, K[number]>",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import { omit } from '#features/objects/utils/omit';

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
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#features/objects/utils/omit.is',
        kind: 'named',
        namedImports: ['omitIs'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(omitIs, 'key') as <\n  T extends object,\n  K extends (keyof T)[],\n>(\n  object: T,\n  ...keys: K\n) => boolean",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import { omitIs } from '#features/objects/utils/omit.is';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  deep,\n  by,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import by from './by';
import deep from './deep/all';
import _index from './index';

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
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['SubType'],
      },
      {
        moduleSpecifier: '../../utils/pick',
        kind: 'named',
        namedImports: ['pick'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(pick, 'element') as <\n  T extends object,\n  K extends any[],\n>(\n  object: T,\n  ...keys: K\n) => SubType<T, K[number]>",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import type { SubType } from '#types';
import { pick } from '../../utils/pick';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  by,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import by from './by';
import _index from './index';

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
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#features/objects/utils/pick.deep',
        kind: 'named',
        namedImports: ['pickDeep'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(pickDeep, 'element')",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import { pickDeep } from '#features/objects/utils/pick.deep';

const fn = partialCall(pickDeep, 'element');

export default fn;
`,
  },
  'features.objects.castings.pick.deep.index': {
    relativePath: 'features/objects/castings/pick/deep/index.ts',
    imports: [
      {
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '#features/objects/utils/pick.deep',
        kind: 'named',
        namedImports: ['pickDeep'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(pickDeep, 'key')",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import { pickDeep } from '#features/objects/utils/pick.deep';

const fn = partialCall(pickDeep, 'key');

export default fn;
`,
  },
  'features.objects.castings.pick.index': {
    relativePath: 'features/objects/castings/pick/index.ts',
    imports: [
      {
        moduleSpecifier: '#features/functions/functions/partialCall',
        kind: 'named',
        namedImports: ['partialCall'],
      },
      {
        moduleSpecifier: '../../utils/pick',
        kind: 'named',
        namedImports: ['pick'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = partialCall(pick, 'key') as <T extends object, K extends any[]>(\n  object: T,\n  ...keys: K\n) => Pick<T, K[number]>",
        declarationKind: 'variable',
      },
    ],
    text: `import { partialCall } from '#features/functions/functions/partialCall';
import { pick } from '../../utils/pick';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '#utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
      {
        moduleSpecifier: '#utils/is/primitive.object',
        kind: 'named',
        namedImports: ['isPrimitiveObject'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<PrimitiveObjectMap>()({\n  is: (object: unknown): object is PrimitiveObjectMap => {\n    if (!isPlainObject(object)) return false;\n    return isPrimitiveObject(object);\n  },\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import type { PrimitiveObjectMap } from '#types';
import { castFn } from '#utils/castFn';
import { isPlainObject } from '#utils/is/object';
import { isPrimitiveObject } from '#utils/is/primitive.object';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Ra'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<Ra>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Ra } from '#types';
import { castFn } from '#utils/castFn';

const fn = castFn<Ra>()();

export default fn;
`,
  },

  'features.objects.castings.readonly.all': {
    relativePath: 'features/objects/castings/readonly/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  forceCast,\n  dynamic,\n  is,\n  not,\n  deep,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import _index from './index';
import is from './is';
import not from './not';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  not,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import not from './not';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(object: T) => {\n  const out = Object.freeze(object);\n  return _unknown<DeepReadonly<T>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(object: T) => {\n  return _unknown<DeepNotReadonly<T>>(object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(object: T) => {
  return _unknown<DeepNotReadonly<T>>(object);
};

export default fn;
`,
  },
  'features.objects.castings.readonly.dynamic': {
    relativePath: 'features/objects/castings/readonly/dynamic.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <U extends object>(object: U) => {\n  return Object.freeze(object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <U extends object>(object: U) => {
  return Object.freeze(object);
};

export default fn;
`,
  },
  'features.objects.castings.readonly.forceCast': {
    relativePath: 'features/objects/castings/readonly/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(object: unknown) => {\n  const out = Object.freeze(object);\n  return _unknown<Readonly<T>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(object: T) => {\n  return Object.freeze(object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T extends object>(object: T) => {
  return Object.freeze(object);
};

export default fn;
`,
  },
  'features.objects.castings.readonly.is': {
    relativePath: 'features/objects/castings/readonly/is.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T>(object: T): object is Readonly<T> => {\n  return Object.isFrozen(object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T>(object: T): object is Readonly<T> => {
  return Object.isFrozen(object);
};

export default fn;
`,
  },
  'features.objects.castings.readonly.not': {
    relativePath: 'features/objects/castings/readonly/not.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends object>(object: T) => {\n  return _unknown<NotReadonly<T>>(object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  strict,\n  const: _const,\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _const from './const';
import _index from './index';
import is from './is/all';
import strict from './strict';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['AllowedNamesLow'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <\n  const T extends object,\n  K extends AllowedNamesLow<T, undefined>,\n>(\n  object: T,\n  requires: Pick<T, K>,\n) => {\n  return Object.assign(object, requires);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { AllowedNamesLow } from '#types';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(object: T, requires: object) => {\n  return Object.assign(object, requires);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T extends object>(object: T, requires: object) => {
  return Object.assign(object, requires);
};

export default fn;
`,
  },
  'features.objects.castings.require.is.all': {
    relativePath: 'features/objects/castings/require/is/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  deep,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deep from './deep';
import _index from './index';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = isRequiredDeep',
        declarationKind: 'variable',
      },
    ],
    text: `import { isRequiredDeep } from '../../../utils/require';

const fn = isRequiredDeep;

export default fn;
`,
  },
  'features.objects.castings.require.is.index': {
    relativePath: 'features/objects/castings/require/is/index.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(object: T): object is Required<T> => {\n  const values = Object.values(object);\n  return values.every(value => value !== undefined && value !== null);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T extends object>(object: T): object is Required<T> => {
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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['AllowedNamesLow'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, K extends AllowedNamesLow<T, undefined>>(\n  object: T,\n  requires: Pick<T, K>,\n) => {\n  return Object.assign(object, requires);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { AllowedNamesLow } from '#types';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Keys'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends Record<Keys, Keys>>(\n  object: T,\n): { [K in keyof T as T[K]]: K } => {\n  const result: any = {};\n  for (const key in object) {\n    result[object[key]] = key;\n  }\n  return result;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Keys } from '#types';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Ru'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<Ru>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Ru } from '#types';
import { castFn } from '#utils/castFn';

const fn = castFn<Ru>()();

export default fn;
`,
  },
  'features.objects.castings.trueObject': {
    relativePath: 'features/objects/castings/trueObject.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['To'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: '#utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<To>()({ is: isPlainObject })',
        declarationKind: 'variable',
      },
    ],
    text: `import type { To } from '#types';
import { castFn } from '#utils/castFn';
import { isPlainObject } from '#utils/is/object';

const fn = castFn<To>()({ is: isPlainObject });

export default fn;
`,
  },
  'features.objects.castings.type': {
    relativePath: 'features/objects/castings/type.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = Object',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = Object;

export default fn;
`,
  },

  'features.objects.castings.values': {
    relativePath: 'features/objects/castings/values.ts',
    imports: [],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(object: T): T[keyof T][] => {\n  return Object.values(object) as any;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <T extends object>(object: T): T[keyof T][] => {
  return Object.values(object) as any;
};

export default fn;
`,
  },
  'features.objects.index': {
    relativePath: 'features/objects/index.ts',
    imports: [],
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './castings/all';",
        moduleSpecifier: './castings/all',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './types';",
        moduleSpecifier: './types',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './typings/all';",
        moduleSpecifier: './typings/all',
      },
      {
        name: 'castings',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  trueObject,\n  type,\n  keys,\n  values,\n  entries,\n  byKey,\n  hasKeys,\n  keyTypes,\n  omit,\n  reverse,\n  readonly,\n  freeze,\n  require,\n  pick,\n  ru,\n  ra,\n  primitive,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'TrueObject',
        kind: 'named',
        text: "export type TrueObject = Ru & {\n  [Symbol.iterator]?: never;\n  //@ts-expect-error - 'SymbolConstructor' does not exist on type 'object'\n  [SymbolConstructor]?: never;\n};",
        declarationKind: 'type',
      },
      {
        name: 'To',
        kind: 'named',
        text: 'export type To = TrueObject;',
        declarationKind: 'type',
      },
      {
        name: 'NOmit',
        kind: 'named',
        text: 'export type NOmit<T, K extends keyof T> = Omit<T, K>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepOmit',
        kind: 'named',
        text: 'export type DeepOmit<T, K extends Keys> = {\n  [P in Exclude<keyof T, K>]: T[P] extends Fn\n    ? T[P]\n    : T[P] extends object\n      ? DeepOmit<T[P], K>\n      : T[P];\n};',
        declarationKind: 'type',
      },
      {
        name: 'ReverseMap',
        kind: 'named',
        text: 'export type ReverseMap<T extends Record<Keys, Keys>> = {\n  [K in keyof T as T[K]]: K;\n};',
        declarationKind: 'type',
      },
      {
        name: 'DeepReadonly',
        kind: 'named',
        text: 'export type DeepReadonly<T> = T extends Primitive\n  ? T\n  : {\n      readonly [P in keyof T]: T[P] extends Fn\n        ? T[P]\n        : T[P] extends object\n          ? DeepReadonly<T[P]>\n          : T[P];\n    };',
        declarationKind: 'type',
      },
      {
        name: 'DeepPartial',
        kind: 'named',
        text: 'export type DeepPartial<T> = T extends Primitive\n  ? T\n  : {\n      [P in keyof T]?: T[P] extends Fn\n        ? T[P]\n        : T[P] extends object\n          ? DeepPartial<T[P]>\n          : T[P];\n    };',
        declarationKind: 'type',
      },
      {
        name: 'DeepRequired',
        kind: 'named',
        text: 'export type DeepRequired<T extends object | undefined> = NotUndefined<{\n  [P in keyof T]-?: T[P] extends Fn\n    ? T[P]\n    : T[P] extends object\n      ? DeepRequired<T[P]>\n      : T[P];\n}>;',
        declarationKind: 'type',
      },
      {
        name: 'NotReadonly',
        kind: 'named',
        text: 'export type NotReadonly<T extends object> = {\n  -readonly [P in keyof T]: T[P];\n};',
        declarationKind: 'type',
      },
      {
        name: 'DeepNotReadonly',
        kind: 'named',
        text: 'export type DeepNotReadonly<T extends object> = {\n  -readonly [P in keyof T]: T[P] extends Fn\n    ? T[P]\n    : T[P] extends object\n      ? DeepNotReadonly<T[P]>\n      : T[P];\n};',
        declarationKind: 'type',
      },
      {
        name: 'ValuesOf',
        kind: 'named',
        text: 'export type ValuesOf<T, U = any> = Extract<T[keyof T], U>;',
        declarationKind: 'type',
      },
      {
        name: 'ObjectValuesOf',
        kind: 'named',
        text: 'export type ObjectValuesOf<T> = Exclude<\n  Extract<ValuesOf<T>, object>,\n  Array<any>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'ExpressO',
        kind: 'named',
        text: 'export type ExpressO<T extends object> = {\n  [K in keyof T]: T[K];\n};',
        declarationKind: 'type',
      },
      {
        name: 'DeepExpressO',
        kind: 'named',
        text: 'export type DeepExpressO<T extends object> =\n  ExpressO<T> extends infer P1\n    ? {\n        [K in keyof P1]: P1[K] extends object\n          ? DeepExpressO<P1[K]>\n          : P1[K];\n      }\n    : never;',
        declarationKind: 'type',
      },
      {
        name: 'RequiredLow',
        kind: 'named',
        text: 'export type RequiredLow<T extends object> = ExpressO<_RequiredLow<T>>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepRequiredLow',
        kind: 'named',
        text: 'export type DeepRequiredLow<T extends object> =\n  RequiredLow<T> extends infer P1\n    ? {\n        [K1 in keyof P1]: Exclude<\n          P1[K1],\n          undefined\n        > extends infer P2 extends object\n          ? DeepRequiredLow<P2>\n          : P1[K1];\n      }\n    : never;',
        declarationKind: 'type',
      },
      {
        name: 'Require',
        kind: 'named',
        text: 'export type Require<T, K extends keyof T> = NOmit<T, K> &\n  Required<Pick<T, K>>;',
        declarationKind: 'type',
      },
      {
        name: 'RequiredBy',
        kind: 'named',
        text: 'export type RequiredBy<T, U> = Required<PickBy<T, U>> & PickNotBy<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'Prop',
        kind: 'named',
        text: 'export type Prop<T, K> = K extends keyof T ? T[K] : never;',
        declarationKind: 'type',
      },
      {
        name: 'PickNoInfer',
        kind: 'named',
        text: 'export type PickNoInfer<T, S> = Pick<T, Extract<keyof T, S>>;',
        declarationKind: 'type',
      },
      {
        name: 'PickBy',
        kind: 'named',
        text: 'export type PickBy<T, U> = {\n  [P in keyof T as T[P] extends U ? P : never]: Extract<T[P], U>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'PickKeysBy',
        kind: 'named',
        text: 'export type PickKeysBy<T, U> = keyof PickBy<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'PickNotBy',
        kind: 'named',
        text: 'export type PickNotBy<T, U> = {\n  [P in keyof T as T[P] extends U ? never : P]: Exclude<T[P], U>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'PickKeysNotBy',
        kind: 'named',
        text: 'export type PickKeysNotBy<T, U> = keyof PickNotBy<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'OnPropChangedMethods',
        kind: 'named',
        text: "export type OnPropChangedMethods<T, I extends keyof T = keyof T> = T & {\n  [K in Extract<PickKeysBy<T, (...args: any) => any>, I> &\n    string as AddString<Capitalize<K>, 'on', 'Changed'>]: (\n    cb: (newValue: T[K]) => void,\n  ) => void;\n};",
        declarationKind: 'type',
      },
      {
        name: 'PartialUndefiny',
        kind: 'named',
        text: 'export type PartialUndefiny<T> = PickNotBy<T, undefined> &\n  Partial<PickBy<T, undefined>>;',
        declarationKind: 'type',
      },
      {
        name: 'Nullify',
        kind: 'named',
        text: 'export type Nullify<T> = PickNotBy<T, null> & Partial<PickBy<T, null>>;',
        declarationKind: 'type',
      },
      {
        name: 'OmitRecursive',
        kind: 'named',
        text: 'export type OmitRecursive<T, O extends string> = {\n  [key in keyof _OmitWithPartial<T, O>]: _OmitWithPartial<T[key], O>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'Unionize',
        kind: 'named',
        text: 'export type Unionize<T extends Record<string, any>> = {\n  [P in keyof T]: { [Q in P]: T[P] };\n}[keyof T];',
        declarationKind: 'type',
      },
      {
        name: '_FlatMapByKey',
        kind: 'named',
        text: "export type _FlatMapByKey<\n  T extends object,\n  _omit extends PickKeysBy<T, object>,\n  _withChildren extends boolean = false,\n  Delimiter extends string = '.',\n  Keys extends string = '',\n  K extends string = keyof T[_omit] & string,\n> = T extends {\n  [Key in _omit]?: any;\n}\n  ? K extends keyof T[_omit]\n    ? T[_omit][K] extends infer TK extends object\n      ?\n          | _FlatMapByKey<\n              TK,\n              _omit,\n              _withChildren,\n              Delimiter,\n              `${Keys}${Delimiter}${K}`\n            >\n          | {\n              [key in DefaultK<Keys, Delimiter>]: WithChildren<\n                T,\n                _omit,\n                _withChildren\n              >;\n            }\n      : {\n          [key in DefaultK<Keys, Delimiter>]: WithChildren<\n            T,\n            _omit,\n            _withChildren\n          >;\n        }\n    : never\n  : {\n      [key in DefaultK<Keys, Delimiter>]: WithChildren<\n        T,\n        _omit,\n        _withChildren\n      >;\n    };",
        declarationKind: 'type',
      },
      {
        name: 'AllowedNames',
        kind: 'named',
        text: 'export type AllowedNames<Base, Condition> = FilterFlags<\n  Base,\n  Condition\n>[keyof Base];',
        declarationKind: 'type',
      },
      {
        name: 'NotAllowedNames',
        kind: 'named',
        text: 'export type NotAllowedNames<Base, Condition> = NotFilterFlags<\n  Base,\n  Condition\n>[keyof Base];',
        declarationKind: 'type',
      },
      {
        name: 'AllowedNamesLow',
        kind: 'named',
        text: 'export type AllowedNamesLow<Base, Condition> = FilterFlagsLow<\n  Base,\n  Condition\n>[keyof Base];',
        declarationKind: 'type',
      },
      {
        name: 'NotAllowedNamesLow',
        kind: 'named',
        text: 'export type NotAllowedNamesLow<Base, Condition> = NotFilterFlagsLow<\n  Base,\n  Condition\n>[keyof Base];',
        declarationKind: 'type',
      },
      {
        name: 'SubType',
        kind: 'named',
        text: 'export type SubType<Base extends object, Condition> = Pick<\n  Base,\n  AllowedNames<Base, Condition>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepSubType',
        kind: 'named',
        text: 'export type DeepSubType<Base extends object, Condition> = {\n  [K in keyof Base as K extends AllowedNames<Base, Condition>\n    ? K\n    : never]: Base[K] extends object\n    ? DeepSubType<Base[K], Condition>\n    : Base[K];\n};',
        declarationKind: 'type',
      },
      {
        name: 'NotSubType',
        kind: 'named',
        text: 'export type NotSubType<Base extends object, Condition> = Pick<\n  Base,\n  NotAllowedNames<Base, Condition>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepNotSubType',
        kind: 'named',
        text: 'export type DeepNotSubType<Base extends object, Condition> = {\n  [K in keyof Base as K extends NotAllowedNames<Base, Condition>\n    ? K\n    : never]: Base[K] extends object\n    ? DeepNotSubType<Base[K], Condition>\n    : Base[K];\n};',
        declarationKind: 'type',
      },
      {
        name: 'SubTypeLow',
        kind: 'named',
        text: 'export type SubTypeLow<Base extends object, Condition> = Pick<\n  Base,\n  AllowedNamesLow<Base, Condition>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'NotSubTypeLow',
        kind: 'named',
        text: 'export type NotSubTypeLow<Base extends object, Condition> = Pick<\n  Base,\n  NotAllowedNamesLow<Base, Condition>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepNever',
        kind: 'named',
        text: 'export type DeepNever = never | _Never;',
        declarationKind: 'type',
      },
      {
        name: 'Dn',
        kind: 'named',
        text: 'export type Dn = DeepNever;',
        declarationKind: 'type',
      },
      {
        name: 'Neverify',
        kind: 'named',
        text: 'export type Neverify<T> = T extends DeepNever ? never : T;',
        declarationKind: 'type',
      },
      {
        name: 'Ru',
        kind: 'named',
        text: 'export type Ru = Record<Keys, unknown>;',
        declarationKind: 'type',
      },
      {
        name: 'Rn',
        kind: 'named',
        text: 'export type Rn = Record<Keys, never>;',
        declarationKind: 'type',
      },
      {
        name: 'Ra',
        kind: 'named',
        text: 'export type Ra = Record<Keys, any>;',
        declarationKind: 'type',
      },
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = typeFn<object>()({\n  trueObject,\n  keys,\n  values,\n  entries,\n  byKey,\n  keyTypes,\n  hasKeys,\n  omit,\n  pick,\n  reverse,\n  readonly,\n  freeze,\n  require,\n  ru,\n  rn,\n  ra,\n  primitive,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `export * from './castings/all';
export * from './types';
export * from './typings/all';
`,
  },
  'features.objects.types': {
    relativePath: 'features/objects/types.ts',
    imports: [
      {
        moduleSpecifier: '#types',
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
    exports: [
      {
        name: 'TrueObject',
        kind: 'named',
        text: "export type TrueObject = Ru & {\n  [Symbol.iterator]?: never;\n  //@ts-expect-error - 'SymbolConstructor' does not exist on type 'object'\n  [SymbolConstructor]?: never;\n};",
        declarationKind: 'type',
      },
      {
        name: 'To',
        kind: 'named',
        text: 'export type To = TrueObject;',
        declarationKind: 'type',
      },
      {
        name: 'NOmit',
        kind: 'named',
        text: 'export type NOmit<T, K extends keyof T> = Omit<T, K>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepOmit',
        kind: 'named',
        text: 'export type DeepOmit<T, K extends Keys> = {\n  [P in Exclude<keyof T, K>]: T[P] extends Fn\n    ? T[P]\n    : T[P] extends object\n      ? DeepOmit<T[P], K>\n      : T[P];\n};',
        declarationKind: 'type',
      },
      {
        name: 'ReverseMap',
        kind: 'named',
        text: 'export type ReverseMap<T extends Record<Keys, Keys>> = {\n  [K in keyof T as T[K]]: K;\n};',
        declarationKind: 'type',
      },
      {
        name: 'DeepReadonly',
        kind: 'named',
        text: 'export type DeepReadonly<T> = T extends Primitive\n  ? T\n  : {\n      readonly [P in keyof T]: T[P] extends Fn\n        ? T[P]\n        : T[P] extends object\n          ? DeepReadonly<T[P]>\n          : T[P];\n    };',
        declarationKind: 'type',
      },
      {
        name: 'DeepPartial',
        kind: 'named',
        text: 'export type DeepPartial<T> = T extends Primitive\n  ? T\n  : {\n      [P in keyof T]?: T[P] extends Fn\n        ? T[P]\n        : T[P] extends object\n          ? DeepPartial<T[P]>\n          : T[P];\n    };',
        declarationKind: 'type',
      },
      {
        name: 'DeepRequired',
        kind: 'named',
        text: 'export type DeepRequired<T extends object | undefined> = NotUndefined<{\n  [P in keyof T]-?: T[P] extends Fn\n    ? T[P]\n    : T[P] extends object\n      ? DeepRequired<T[P]>\n      : T[P];\n}>;',
        declarationKind: 'type',
      },
      {
        name: 'NotReadonly',
        kind: 'named',
        text: 'export type NotReadonly<T extends object> = {\n  -readonly [P in keyof T]: T[P];\n};',
        declarationKind: 'type',
      },
      {
        name: 'DeepNotReadonly',
        kind: 'named',
        text: 'export type DeepNotReadonly<T extends object> = {\n  -readonly [P in keyof T]: T[P] extends Fn\n    ? T[P]\n    : T[P] extends object\n      ? DeepNotReadonly<T[P]>\n      : T[P];\n};',
        declarationKind: 'type',
      },
      {
        name: 'ValuesOf',
        kind: 'named',
        text: 'export type ValuesOf<T, U = any> = Extract<T[keyof T], U>;',
        declarationKind: 'type',
      },
      {
        name: 'ObjectValuesOf',
        kind: 'named',
        text: 'export type ObjectValuesOf<T> = Exclude<\n  Extract<ValuesOf<T>, object>,\n  Array<any>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'ExpressO',
        kind: 'named',
        text: 'export type ExpressO<T extends object> = {\n  [K in keyof T]: T[K];\n};',
        declarationKind: 'type',
      },
      {
        name: 'DeepExpressO',
        kind: 'named',
        text: 'export type DeepExpressO<T extends object> =\n  ExpressO<T> extends infer P1\n    ? {\n        [K in keyof P1]: P1[K] extends object\n          ? DeepExpressO<P1[K]>\n          : P1[K];\n      }\n    : never;',
        declarationKind: 'type',
      },
      {
        name: 'RequiredLow',
        kind: 'named',
        text: 'export type RequiredLow<T extends object> = ExpressO<_RequiredLow<T>>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepRequiredLow',
        kind: 'named',
        text: 'export type DeepRequiredLow<T extends object> =\n  RequiredLow<T> extends infer P1\n    ? {\n        [K1 in keyof P1]: Exclude<\n          P1[K1],\n          undefined\n        > extends infer P2 extends object\n          ? DeepRequiredLow<P2>\n          : P1[K1];\n      }\n    : never;',
        declarationKind: 'type',
      },
      {
        name: 'Require',
        kind: 'named',
        text: 'export type Require<T, K extends keyof T> = NOmit<T, K> &\n  Required<Pick<T, K>>;',
        declarationKind: 'type',
      },
      {
        name: 'RequiredBy',
        kind: 'named',
        text: 'export type RequiredBy<T, U> = Required<PickBy<T, U>> & PickNotBy<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'Prop',
        kind: 'named',
        text: 'export type Prop<T, K> = K extends keyof T ? T[K] : never;',
        declarationKind: 'type',
      },
      {
        name: 'PickNoInfer',
        kind: 'named',
        text: 'export type PickNoInfer<T, S> = Pick<T, Extract<keyof T, S>>;',
        declarationKind: 'type',
      },
      {
        name: 'PickBy',
        kind: 'named',
        text: 'export type PickBy<T, U> = {\n  [P in keyof T as T[P] extends U ? P : never]: Extract<T[P], U>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'PickKeysBy',
        kind: 'named',
        text: 'export type PickKeysBy<T, U> = keyof PickBy<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'PickNotBy',
        kind: 'named',
        text: 'export type PickNotBy<T, U> = {\n  [P in keyof T as T[P] extends U ? never : P]: Exclude<T[P], U>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'PickKeysNotBy',
        kind: 'named',
        text: 'export type PickKeysNotBy<T, U> = keyof PickNotBy<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'OnPropChangedMethods',
        kind: 'named',
        text: "export type OnPropChangedMethods<T, I extends keyof T = keyof T> = T & {\n  [K in Extract<PickKeysBy<T, (...args: any) => any>, I> &\n    string as AddString<Capitalize<K>, 'on', 'Changed'>]: (\n    cb: (newValue: T[K]) => void,\n  ) => void;\n};",
        declarationKind: 'type',
      },
      {
        name: 'PartialUndefiny',
        kind: 'named',
        text: 'export type PartialUndefiny<T> = PickNotBy<T, undefined> &\n  Partial<PickBy<T, undefined>>;',
        declarationKind: 'type',
      },
      {
        name: 'Nullify',
        kind: 'named',
        text: 'export type Nullify<T> = PickNotBy<T, null> & Partial<PickBy<T, null>>;',
        declarationKind: 'type',
      },
      {
        name: 'OmitRecursive',
        kind: 'named',
        text: 'export type OmitRecursive<T, O extends string> = {\n  [key in keyof _OmitWithPartial<T, O>]: _OmitWithPartial<T[key], O>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'Unionize',
        kind: 'named',
        text: 'export type Unionize<T extends Record<string, any>> = {\n  [P in keyof T]: { [Q in P]: T[P] };\n}[keyof T];',
        declarationKind: 'type',
      },
      {
        name: '_FlatMapByKey',
        kind: 'named',
        text: "export type _FlatMapByKey<\n  T extends object,\n  _omit extends PickKeysBy<T, object>,\n  _withChildren extends boolean = false,\n  Delimiter extends string = '.',\n  Keys extends string = '',\n  K extends string = keyof T[_omit] & string,\n> = T extends {\n  [Key in _omit]?: any;\n}\n  ? K extends keyof T[_omit]\n    ? T[_omit][K] extends infer TK extends object\n      ?\n          | _FlatMapByKey<\n              TK,\n              _omit,\n              _withChildren,\n              Delimiter,\n              `${Keys}${Delimiter}${K}`\n            >\n          | {\n              [key in DefaultK<Keys, Delimiter>]: WithChildren<\n                T,\n                _omit,\n                _withChildren\n              >;\n            }\n      : {\n          [key in DefaultK<Keys, Delimiter>]: WithChildren<\n            T,\n            _omit,\n            _withChildren\n          >;\n        }\n    : never\n  : {\n      [key in DefaultK<Keys, Delimiter>]: WithChildren<\n        T,\n        _omit,\n        _withChildren\n      >;\n    };",
        declarationKind: 'type',
      },
      {
        name: 'AllowedNames',
        kind: 'named',
        text: 'export type AllowedNames<Base, Condition> = FilterFlags<\n  Base,\n  Condition\n>[keyof Base];',
        declarationKind: 'type',
      },
      {
        name: 'NotAllowedNames',
        kind: 'named',
        text: 'export type NotAllowedNames<Base, Condition> = NotFilterFlags<\n  Base,\n  Condition\n>[keyof Base];',
        declarationKind: 'type',
      },
      {
        name: 'AllowedNamesLow',
        kind: 'named',
        text: 'export type AllowedNamesLow<Base, Condition> = FilterFlagsLow<\n  Base,\n  Condition\n>[keyof Base];',
        declarationKind: 'type',
      },
      {
        name: 'NotAllowedNamesLow',
        kind: 'named',
        text: 'export type NotAllowedNamesLow<Base, Condition> = NotFilterFlagsLow<\n  Base,\n  Condition\n>[keyof Base];',
        declarationKind: 'type',
      },
      {
        name: 'SubType',
        kind: 'named',
        text: 'export type SubType<Base extends object, Condition> = Pick<\n  Base,\n  AllowedNames<Base, Condition>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepSubType',
        kind: 'named',
        text: 'export type DeepSubType<Base extends object, Condition> = {\n  [K in keyof Base as K extends AllowedNames<Base, Condition>\n    ? K\n    : never]: Base[K] extends object\n    ? DeepSubType<Base[K], Condition>\n    : Base[K];\n};',
        declarationKind: 'type',
      },
      {
        name: 'NotSubType',
        kind: 'named',
        text: 'export type NotSubType<Base extends object, Condition> = Pick<\n  Base,\n  NotAllowedNames<Base, Condition>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepNotSubType',
        kind: 'named',
        text: 'export type DeepNotSubType<Base extends object, Condition> = {\n  [K in keyof Base as K extends NotAllowedNames<Base, Condition>\n    ? K\n    : never]: Base[K] extends object\n    ? DeepNotSubType<Base[K], Condition>\n    : Base[K];\n};',
        declarationKind: 'type',
      },
      {
        name: 'SubTypeLow',
        kind: 'named',
        text: 'export type SubTypeLow<Base extends object, Condition> = Pick<\n  Base,\n  AllowedNamesLow<Base, Condition>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'NotSubTypeLow',
        kind: 'named',
        text: 'export type NotSubTypeLow<Base extends object, Condition> = Pick<\n  Base,\n  NotAllowedNamesLow<Base, Condition>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepNever',
        kind: 'named',
        text: 'export type DeepNever = never | _Never;',
        declarationKind: 'type',
      },
      {
        name: 'Dn',
        kind: 'named',
        text: 'export type Dn = DeepNever;',
        declarationKind: 'type',
      },
      {
        name: 'Neverify',
        kind: 'named',
        text: 'export type Neverify<T> = T extends DeepNever ? never : T;',
        declarationKind: 'type',
      },
      {
        name: 'Ru',
        kind: 'named',
        text: 'export type Ru = Record<Keys, unknown>;',
        declarationKind: 'type',
      },
      {
        name: 'Rn',
        kind: 'named',
        text: 'export type Rn = Record<Keys, never>;',
        declarationKind: 'type',
      },
      {
        name: 'Ra',
        kind: 'named',
        text: 'export type Ra = Record<Keys, any>;',
        declarationKind: 'type',
      },
    ],
    text: `import type { Fn } from '#types';
import type { Keys, NotUndefined, Primitive } from '../common/types';
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
export type TrueObject = Ru & {
  [Symbol.iterator]?: never;
  //@ts-expect-error - 'SymbolConstructor' does not exist on type 'object'
  [SymbolConstructor]?: never;
};

/**
 * Alias of {@linkcode TrueObject}
 */
export type To = TrueObject;

export type NOmit<T, K extends keyof T> = Omit<T, K>;

export type DeepOmit<T, K extends Keys> = {
  [P in Exclude<keyof T, K>]: T[P] extends Fn
    ? T[P]
    : T[P] extends object
      ? DeepOmit<T[P], K>
      : T[P];
};

export type ReverseMap<T extends Record<Keys, Keys>> = {
  [K in keyof T as T[K]]: K;
};

export type DeepReadonly<T> = T extends Primitive
  ? T
  : {
      readonly [P in keyof T]: T[P] extends Fn
        ? T[P]
        : T[P] extends object
          ? DeepReadonly<T[P]>
          : T[P];
    };

export type DeepPartial<T> = T extends Primitive
  ? T
  : {
      [P in keyof T]?: T[P] extends Fn
        ? T[P]
        : T[P] extends object
          ? DeepPartial<T[P]>
          : T[P];
    };

export type DeepRequired<T extends object | undefined> = NotUndefined<{
  [P in keyof T]-?: T[P] extends Fn
    ? T[P]
    : T[P] extends object
      ? DeepRequired<T[P]>
      : T[P];
}>;

export type NotReadonly<T extends object> = {
  -readonly [P in keyof T]: T[P];
};

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

export type ValuesOf<T, U = any> = Extract<T[keyof T], U>;
export type ObjectValuesOf<T> = Exclude<
  Extract<ValuesOf<T>, object>,
  Array<any>
>;

export type ExpressO<T extends object> = {
  [K in keyof T]: T[K];
};

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

export type RequiredLow<T extends object> = ExpressO<_RequiredLow<T>>;

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

export type Require<T, K extends keyof T> = NOmit<T, K> &
  Required<Pick<T, K>>;

export type RequiredBy<T, U> = Required<PickBy<T, U>> & PickNotBy<T, U>;

export type Prop<T, K> = K extends keyof T ? T[K] : never;

export type PickNoInfer<T, S> = Pick<T, Extract<keyof T, S>>;

export type PickBy<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: Extract<T[P], U>;
};

export type PickKeysBy<T, U> = keyof PickBy<T, U>;

export type PickNotBy<T, U> = {
  [P in keyof T as T[P] extends U ? never : P]: Exclude<T[P], U>;
};

export type PickKeysNotBy<T, U> = keyof PickNotBy<T, U>;

export type OnPropChangedMethods<T, I extends keyof T = keyof T> = T & {
  [K in Extract<PickKeysBy<T, (...args: any) => any>, I> &
    string as AddString<Capitalize<K>, 'on', 'Changed'>]: (
    cb: (newValue: T[K]) => void,
  ) => void;
};

export type PartialUndefiny<T> = PickNotBy<T, undefined> &
  Partial<PickBy<T, undefined>>;

export type Nullify<T> = PickNotBy<T, null> & Partial<PickBy<T, null>>;

type _OmitWithoutPartial<T, O extends string> = {
  [key in keyof Omit<T, O>]: O extends keyof T[key]
    ? _OmitWithoutPartial<T[key], O>
    : T[key];
};

type _OmitWithPartial<T, O extends string> = PartialUndefiny<
  Nullify<_OmitWithoutPartial<T, O>>
>;

export type OmitRecursive<T, O extends string> = {
  [key in keyof _OmitWithPartial<T, O>]: _OmitWithPartial<T[key], O>;
};

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
              \`$|||{Keys}$|||{Delimiter}$|||{K}\`
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

export type AllowedNames<Base, Condition> = FilterFlags<
  Base,
  Condition
>[keyof Base];

export type NotAllowedNames<Base, Condition> = NotFilterFlags<
  Base,
  Condition
>[keyof Base];

export type AllowedNamesLow<Base, Condition> = FilterFlagsLow<
  Base,
  Condition
>[keyof Base];

export type NotAllowedNamesLow<Base, Condition> = NotFilterFlagsLow<
  Base,
  Condition
>[keyof Base];

export type SubType<Base extends object, Condition> = Pick<
  Base,
  AllowedNames<Base, Condition>
>;

export type DeepSubType<Base extends object, Condition> = {
  [K in keyof Base as K extends AllowedNames<Base, Condition>
    ? K
    : never]: Base[K] extends object
    ? DeepSubType<Base[K], Condition>
    : Base[K];
};

export type NotSubType<Base extends object, Condition> = Pick<
  Base,
  NotAllowedNames<Base, Condition>
>;

export type DeepNotSubType<Base extends object, Condition> = {
  [K in keyof Base as K extends NotAllowedNames<Base, Condition>
    ? K
    : never]: Base[K] extends object
    ? DeepNotSubType<Base[K], Condition>
    : Base[K];
};

export type SubTypeLow<Base extends object, Condition> = Pick<
  Base,
  AllowedNamesLow<Base, Condition>
>;

export type NotSubTypeLow<Base extends object, Condition> = Pick<
  Base,
  NotAllowedNamesLow<Base, Condition>
>;

// #endregion

interface _Never {
  [key: Keys]: DeepNever;
}

export type DeepNever = never | _Never;

export type Dn = DeepNever;

export type Neverify<T> = T extends DeepNever ? never : T;

export type Ru = Record<Keys, unknown>;

export type Rn = Record<Keys, never>;

export type Ra = Record<Keys, any>;
`,
  },
  'features.objects.typings.all': {
    relativePath: 'features/objects/typings/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/typeFn',
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
    exports: [
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = typeFn<object>()({\n  trueObject,\n  keys,\n  values,\n  entries,\n  byKey,\n  keyTypes,\n  hasKeys,\n  omit,\n  pick,\n  reverse,\n  readonly,\n  freeze,\n  require,\n  ru,\n  rn,\n  ra,\n  primitive,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';
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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, K extends keyof T>(_?: T, __?: K) =>\n  _unknown<T[K]>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object, K extends keyof T>(_?: T, __?: K) =>
  _unknown<T[K]>();

export default fn;
`,
  },
  'features.objects.typings.entries': {
    relativePath: 'features/objects/typings/entries.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) =>\n  _unknown<[keyof T, T[keyof T]][]>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) =>
  _unknown<[keyof T, T[keyof T]][]>();

export default fn;
`,
  },
  'features.objects.typings.freeze.all': {
    relativePath: 'features/objects/typings/freeze/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'freezeTyping = expandFn(freeze, {\n  dynamic,\n  forceCast,\n  is,\n  not,\n  deep,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import freeze from './index';
import is from './is';
import not from './not';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'deep = expandFn(deepFreeze, {\n  not,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deepFreeze from './index';
import not from './not';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<DeepReadonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<DeepReadonly<T>>();

export default fn;
`,
  },
  'features.objects.typings.freeze.deep.not': {
    relativePath: 'features/objects/typings/freeze/deep/not.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<DeepNotReadonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<DeepNotReadonly<T>>();

export default fn;
`,
  },

  'features.objects.typings.freeze.dynamic': {
    relativePath: 'features/objects/typings/freeze/dynamic.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends Readonly<T>>(_?: T) => _unknown<T>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends Readonly<T>>(_?: T) => _unknown<T>();

export default fn;
`,
  },
  'features.objects.typings.freeze.forceCast': {
    relativePath: 'features/objects/typings/freeze/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: unknown) => _unknown<Readonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: unknown) => _unknown<Readonly<T>>();

export default fn;
`,
  },
  'features.objects.typings.freeze.index': {
    relativePath: 'features/objects/typings/freeze/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<Readonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<Readonly<T>>();

export default fn;
`,
  },
  'features.objects.typings.freeze.is': {
    relativePath: 'features/objects/typings/freeze/is.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) =>\n  _unknown<T extends Readonly<T> ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) =>
  _unknown<T extends Readonly<T> ? true : false>();

export default fn;
`,
  },
  'features.objects.typings.freeze.not': {
    relativePath: 'features/objects/typings/freeze/not.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<NotReadonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<NotReadonly<T>>();

export default fn;
`,
  },
  'features.objects.typings.hasKeys._all': {
    relativePath: 'features/objects/typings/hasKeys/_all.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Equals', 'Keys'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, K extends Keys[]>(_?: T, ...__: K) =>\n  _unknown<Equals<K[number], keyof T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Equals, Keys } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object, K extends Keys[]>(_?: T, ...__: K) =>
  _unknown<Equals<K[number], keyof T>>();

export default fn;
`,
  },
  'features.objects.typings.hasKeys.all': {
    relativePath: 'features/objects/typings/hasKeys/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  typings,\n  all,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import all from './_all';
import _index from './index';
import typings from './typings';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Keys'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, K extends Keys[]>(_?: T, ...__: K) =>\n  _unknown<K[number] extends keyof T ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object, K extends Keys[]>(_?: T, ...__: K) =>
  _unknown<K[number] extends keyof T ? true : false>();

export default fn;
`,
  },
  'features.objects.typings.hasKeys.typings': {
    relativePath: 'features/objects/typings/hasKeys/typings.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['KeyTypes', 'KeyTypesFrom'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <K extends KeyTypes>(_?: K) => {\n  const _out = <T extends object>(_?: T) =>\n    _unknown<T extends KeyTypesFrom<K> ? true : false>();\n\n  return _out;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { KeyTypes, KeyTypesFrom } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['KeyTypes'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<KeyTypes>()({\n  is: _index,\n  from,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import type { KeyTypes } from '#types';
import { typeFn } from '#utils/typeFn';
import from from './from';
import _index from './index';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['KeyTypes', 'KeyTypesFrom'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends KeyTypes>(_?: T) => _unknown<KeyTypesFrom<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { KeyTypes, KeyTypesFrom } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends KeyTypes>(_?: T) => _unknown<KeyTypesFrom<T>>();

export default fn;
`,
  },
  'features.objects.typings.keyTypes.index': {
    relativePath: 'features/objects/typings/keyTypes/index.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['KeyTypes'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<KeyTypes>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { KeyTypes } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<KeyTypes>()();

export default fn;
`,
  },
  'features.objects.typings.keysOf': {
    relativePath: 'features/objects/typings/keysOf.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: '#utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(<T extends object>(_?: T) => _unknown<(keyof T)[]>(), {\n  union: <T extends object>(_?: T) => _unknown<keyof T>(),\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';
import { expandFn } from '#utils/expandFn';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  const: _const,\n  is,\n  by,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import by from './by/all';
import _const from './const/all';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  is,\n  const: _const,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _const from './const/all';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['NotSubType', 'ValuesOf'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends object, K extends ValuesOf<T>[]>(\n  _?: T,\n  ...__: K\n) => _unknown<NotSubType<T, K[number]>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { NotSubType, ValuesOf } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['NotSubType', 'ValuesOf'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends object, K extends ValuesOf<T>[]>(\n  _?: T,\n  ...__: K\n) => {\n  const _out = <U>(_?: U) =>\n    _unknown<U extends NotSubType<T, K[number]> ? true : false>();\n\n  return _out;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { NotSubType, ValuesOf } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['NotSubType'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, K extends any[]>(_?: T, ...__: K) =>\n  _unknown<NotSubType<T, K[number]>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { NotSubType } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object, K extends any[]>(_?: T, ...__: K) =>
  _unknown<NotSubType<T, K[number]>>();

export default fn;
`,
  },
  'features.objects.typings.omit.by.is': {
    relativePath: 'features/objects/typings/omit/by/is.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['NotSubType'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, K extends any[]>(_?: T, ...__: K) => {\n  const _out = <U>(_?: U) =>\n    _unknown<U extends NotSubType<T, K[number]> ? true : false>();\n  return _out;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { NotSubType } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';

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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends object, K extends (keyof T)[]>(\n  _?: T,\n  ...__: K\n) => _unknown<Omit<T, K[number]>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T, K extends (keyof T)[]>(_?: T, ...__: K) => {\n  const _out = <U>(_?: U) =>\n    _unknown<U extends Omit<T, K[number]> ? true : false>();\n\n  return _out;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Keys'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T, K extends Keys[]>(_?: T, ...__: K) =>\n  _unknown<Omit<T, K[number]>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T, K extends Keys[]>(_?: T, ...__: K) =>
  _unknown<Omit<T, K[number]>>();

export default fn;
`,
  },
  'features.objects.typings.omit.is': {
    relativePath: 'features/objects/typings/omit/is.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Keys'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T, K extends Keys[]>(_?: T, ...__: K) => {\n  const _out = <U>(_?: U) =>\n    _unknown<U extends Omit<T, K[number]> ? true : false>();\n\n  return _out;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'pickTyping = expandFn(pick, {\n  by,\n  deep,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import by from './by';
import deep from './deep/all';
import pick from './index';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['SubType'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, K extends any[]>(_?: T, ...__: K) =>\n  _unknown<SubType<T, K[number]>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { SubType } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object, K extends any[]>(_?: T, ...__: K) =>
  _unknown<SubType<T, K[number]>>();

export default fn;
`,
  },
  'features.objects.typings.pick.deep.all': {
    relativePath: 'features/objects/typings/pick/deep/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'deep = expandFn(deepPick, {\n  by,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import by from './by';
import deepPick from './index';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['SubType'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, K extends any[]>(_?: T, ...__: K) =>\n  _unknown<SubType<T, K[number]>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { SubType } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object, K extends any[]>(_?: T, ...__: K) =>
  _unknown<SubType<T, K[number]>>();

export default fn;
`,
  },
  'features.objects.typings.pick.deep.index': {
    relativePath: 'features/objects/typings/pick/deep/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, K extends keyof T>(_?: T, ...__: K[]) =>\n  _unknown<Pick<T, K>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object, K extends keyof T>(_?: T, ...__: K[]) =>
  _unknown<Pick<T, K>>();

export default fn;
`,
  },

  'features.objects.typings.pick.index': {
    relativePath: 'features/objects/typings/pick/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, K extends keyof T>(_?: T, ...__: K[]) =>\n  _unknown<Pick<T, K>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object, K extends keyof T>(_?: T, ...__: K[]) =>
  _unknown<Pick<T, K>>();

export default fn;
`,
  },
  'features.objects.typings.primitive': {
    relativePath: 'features/objects/typings/primitive.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<PrimitiveObjectMap>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { PrimitiveObjectMap } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<PrimitiveObjectMap>()();

export default fn;
`,
  },
  'features.objects.typings.ra': {
    relativePath: 'features/objects/typings/ra.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Ra'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<Ra>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Ra } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<Ra>()();

export default fn;
`,
  },
  'features.objects.typings.readonly.all': {
    relativePath: 'features/objects/typings/readonly/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: '_readonly = expandFn(readonly, {\n  forceCast,\n  dynamic,\n  type: type_,\n  is,\n  not,\n  deep,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deep from './deep/all';
import dynamic from './dynamic';
import forceCast from './forceCast';
import readonly from './index';
import is from './is';
import not from './not/all';
import type_ from './type';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(deepReadonly, {\n  not,\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deepReadonly from './index';
import is from './is';
import not from './not/all';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<DeepReadonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<DeepReadonly<T>>();

export default fn;
`,
  },
  'features.objects.typings.readonly.deep.is': {
    relativePath: 'features/objects/typings/readonly/deep/is.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) =>\n  _unknown<T extends DeepReadonly<T> ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) =>
  _unknown<T extends DeepReadonly<T> ? true : false>();

export default fn;
`,
  },
  'features.objects.typings.readonly.deep.not.all': {
    relativePath: 'features/objects/typings/readonly/deep/not/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(deepNotReadonly, {\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deepNotReadonly from './index';
import is from './is';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends object>(_?: T) =>\n  _unknown<DeepNotReadonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends object>(_?: T) =>
  _unknown<DeepNotReadonly<T>>();

export default fn;
`,
  },
  'features.objects.typings.readonly.deep.not.is': {
    relativePath: 'features/objects/typings/readonly/deep/not/is.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepNotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends object>(_?: T) =>\n  _unknown<T extends DeepNotReadonly<T> ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepNotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends object>(_?: T) =>
  _unknown<T extends DeepNotReadonly<T> ? true : false>();

export default fn;
`,
  },

  'features.objects.typings.readonly.dynamic': {
    relativePath: 'features/objects/typings/readonly/dynamic.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends Readonly<T>>(_?: T) => _unknown<T>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends Readonly<T>>(_?: T) => _unknown<T>();

export default fn;
`,
  },
  'features.objects.typings.readonly.forceCast': {
    relativePath: 'features/objects/typings/readonly/forceCast.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: unknown) => _unknown<Readonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: unknown) => _unknown<Readonly<T>>();

export default fn;
`,
  },
  'features.objects.typings.readonly.index': {
    relativePath: 'features/objects/typings/readonly/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) => _unknown<Readonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) => _unknown<Readonly<T>>();

export default fn;
`,
  },
  'features.objects.typings.readonly.is': {
    relativePath: 'features/objects/typings/readonly/is.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) =>\n  _unknown<T extends Readonly<T> ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) =>
  _unknown<T extends Readonly<T> ? true : false>();

export default fn;
`,
  },
  'features.objects.typings.readonly.not.all': {
    relativePath: 'features/objects/typings/readonly/not/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(notReadonly, {\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import notReadonly from './index';
import is from './is';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends object>(_?: T) => _unknown<NotReadonly<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends object>(_?: T) => _unknown<NotReadonly<T>>();

export default fn;
`,
  },
  'features.objects.typings.readonly.not.is': {
    relativePath: 'features/objects/typings/readonly/not/is.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['NotReadonly'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends object>(_?: T) =>\n  _unknown<T extends NotReadonly<T> ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <const T extends object>(_?: T) =>
  _unknown<T extends NotReadonly<T> ? true : false>();

export default fn;
`,
  },
  'features.objects.typings.readonly.type': {
    relativePath: 'features/objects/typings/readonly/type.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = () => _unknown<Readonly<object>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = () => _unknown<Readonly<object>>();

export default fn;
`,
  },
  'features.objects.typings.require.all': {
    relativePath: 'features/objects/typings/require/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'requireTyping = expandFn(require, {\n  const: const_,\n  strict,\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import const_ from './const';
import require from './index';
import is from './is/all';
import strict from './strict';

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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends object, const R extends object>(\n  _?: T,\n  __?: R,\n) => _unknown<T & R>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, R extends object>(_?: T, __?: R) =>\n  _unknown<T & R>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object, R extends object>(_?: T, __?: R) =>
  _unknown<T & R>();

export default fn;
`,
  },
  'features.objects.typings.require.is.all': {
    relativePath: 'features/objects/typings/require/is/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'is = expandFn(requireIs, {\n  deep,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import deep from './deep';
import requireIs from './index';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepRequired'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object>(_?: T) =>\n  _unknown<T extends DeepRequired<T> ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepRequired } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends object>(_?: T) =>
  _unknown<T extends DeepRequired<T> ? true : false>();

export default fn;
`,
  },
  'features.objects.typings.require.is.index': {
    relativePath: 'features/objects/typings/require/is/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, R extends object>(_?: T, __?: R) =>\n  _unknown<T extends T & R ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object, R extends object>(_?: T, __?: R) =>
  _unknown<T extends T & R ? true : false>();

export default fn;
`,
  },
  'features.objects.typings.require.strict': {
    relativePath: 'features/objects/typings/require/strict.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends object, R extends Partial<T>>(_?: T, __?: R) =>\n  _unknown<T & Required<R>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <T extends object, R extends Partial<T>>(_?: T, __?: R) =>
  _unknown<T & Required<R>>();

export default fn;
`,
  },
  'features.objects.typings.reverse': {
    relativePath: 'features/objects/typings/reverse.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Keys'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends Record<Keys, Keys>>(_?: T) => {\n  return _unknown<{\n    [K in keyof T as T[K]]: K;\n  }>();\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Rn'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<Rn>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Rn } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<Rn>()();

export default fn;
`,
  },
  'features.objects.typings.ru': {
    relativePath: 'features/objects/typings/ru.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Ru'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<Ru>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Ru } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<Ru>()();

export default fn;
`,
  },
  'features.objects.typings.trueObject': {
    relativePath: 'features/objects/typings/trueObject.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['To'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<To>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { To } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<To>()();

export default fn;
`,
  },
  'features.objects.typings.values': {
    relativePath: 'features/objects/typings/values.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
      {
        moduleSpecifier: '#utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(\n  <T extends object>(_?: T) => _unknown<T[keyof T][]>(),\n  {\n    union: <T extends object>(_?: T) => _unknown<T[keyof T]>(),\n  },\n)',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';
import { expandFn } from '#utils/expandFn';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['KeyTypes'],
      },
    ],
    exports: [
      {
        name: 'checkEntries',
        kind: 'named',
        text: "checkEntries = (keys: KeyTypes, object: object) => {\n  const entries = Object.entries(keys);\n  return entries.every(([key, type]) => {\n    const check1 = key in object;\n    if (!check1) return false;\n\n    const value = (object as any)[key];\n    if (typeof type === 'string') {\n      return typeof value === type;\n    } else if (typeof type === 'function') {\n      return type(value);\n    }\n    return false;\n  });\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { KeyTypes } from '#types';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: './types',
        kind: 'named',
        namedImports: ['Picker'],
      },
    ],
    exports: [
      {
        name: 'omit',
        kind: 'named',
        text: "omit = (\n  by: Picker,\n  object: PrimitiveObjectMap,\n  ...valuesOrKeys: any[]\n) => {\n  const result: any = {};\n\n  const entries = Object.entries(object);\n  entries.forEach(([key, value]) => {\n    const checkKey = by === 'key' && !valuesOrKeys.includes(key);\n    const checkElement = by === 'element' && !valuesOrKeys.includes(value);\n    if (checkKey) {\n      result[key] = value;\n    } else if (checkElement) {\n      result[key] = value;\n    }\n  });\n\n  return result;\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { PrimitiveObjectMap } from '#types';
import type { Picker } from './types';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: '#utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
      {
        moduleSpecifier: './types',
        kind: 'named',
        namedImports: ['Picker'],
      },
    ],
    exports: [
      {
        name: 'omitDeep',
        kind: 'named',
        text: 'omitDeep = (\n  by: Picker,\n  object: PrimitiveObjectMap,\n  ...valuesOrKeys: any[]\n) => {\n  const result = __omitDeep(by, object, ...valuesOrKeys);\n\n  return result;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { PrimitiveObjectMap } from '#types';
import { isPlainObject } from '#utils/is/object';
import type { Picker } from './types';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Primitive2'],
      },
      {
        moduleSpecifier: '#utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
      {
        moduleSpecifier: './types',
        kind: 'named',
        namedImports: ['Picker'],
      },
    ],
    exports: [
      {
        name: 'omitDeepIs',
        kind: 'named',
        text: "omitDeepIs = (\n  by: Picker,\n  object: object,\n  ...valuesOrKeys: Primitive2[]\n) => {\n  const entries = Object.entries(object);\n  for (const [key, value] of entries) {\n    const isObject = isPlainObject(value);\n    if (isObject) {\n      const isDeep = omitDeepIs(by, value, ...valuesOrKeys);\n      if (!isDeep) return false;\n    } else {\n      const shouldOmit =\n        by === 'element'\n          ? valuesOrKeys.includes(value)\n          : valuesOrKeys.includes(key);\n      if (shouldOmit) return false;\n    }\n  }\n  return true;\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { Primitive2 } from '#types';
import { isPlainObject } from '#utils/is/object';
import type { Picker } from './types';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['PrimitiveObjectMap'],
      },
      {
        moduleSpecifier: './types',
        kind: 'named',
        namedImports: ['Picker'],
      },
    ],
    exports: [
      {
        name: 'omitIs',
        kind: 'named',
        text: "omitIs = (\n  by: Picker,\n  object: PrimitiveObjectMap,\n  ...valuesOrKeys: any[]\n) => {\n  const entries = Object.entries(object);\n  for (const [key, value] of entries) {\n    const checkKey = by === 'key' && valuesOrKeys.includes(key);\n    const checkElement = by === 'element' && valuesOrKeys.includes(value);\n    if (checkKey) {\n      return false;\n    } else if (checkElement) {\n      return false;\n    }\n  }\n  return true;\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { PrimitiveObjectMap } from '#types';
import type { Picker } from './types';

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
    exports: [
      {
        name: 'pick',
        kind: 'named',
        text: "pick = (by: Picker, object: object, ...keys: any[]) => {\n  const result: any = {};\n  const entries = Object.entries(object);\n\n  entries.forEach(([key, value]) => {\n    const shouldPick =\n      by === 'element' ? keys.includes(value) : keys.includes(key);\n\n    if (shouldPick) {\n      result[key] = value;\n    }\n  });\n\n  return result;\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { Picker } from './types';

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
        moduleSpecifier: '#utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
      {
        moduleSpecifier: './types',
        kind: 'named',
        namedImports: ['Picker'],
      },
    ],
    exports: [
      {
        name: 'pickDeep',
        kind: 'named',
        text: "pickDeep = (\n  by: Picker,\n  object: object,\n  ...valuesOrKeys: any[]\n) => {\n  const result: any = {};\n\n  for (const key in object) {\n    if (Object.prototype.hasOwnProperty.call(object, key)) {\n      const element = (object as any)[key];\n      const isObject = isPlainObject(element);\n\n      if (isObject) {\n        const picked = pickDeep(by, element, ...valuesOrKeys);\n        if (Object.keys(picked).length > 0) {\n          result[key] = picked;\n        }\n      } else {\n        const shouldPick =\n          by === 'element'\n            ? valuesOrKeys.includes(element)\n            : valuesOrKeys.includes(key);\n        if (shouldPick) result[key] = element;\n      }\n    }\n  }\n\n  return result;\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import { isPlainObject } from '#utils/is/object';
import type { Picker } from './types';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['DeepRequired'],
      },
      {
        moduleSpecifier: '#utils/is/merge',
        kind: 'named',
        namedImports: ['mergeIs'],
      },
      {
        moduleSpecifier: '#utils/is/object',
        kind: 'named',
        namedImports: ['isPlainObject'],
      },
    ],
    exports: [
      {
        name: 'isRequiredDeep',
        kind: 'named',
        text: 'isRequiredDeep = (\n  object: unknown,\n): object is DeepRequired<any> => {\n  const isObject = isPlainObject(object);\n  if (isObject) {\n    for (const key in object) {\n      if (Object.prototype.hasOwnProperty.call(object, key)) {\n        const element = (object as any)[key];\n        const isPrimitiveMap = isRequiredDeep(element);\n        if (!isPrimitiveMap) return false;\n      }\n    }\n    return true;\n  }\n\n  const isArray = Array.isArray(object);\n  if (isArray) {\n    for (const item of object) {\n      const isPrimitiveMap = isRequiredDeep(item);\n      if (!isPrimitiveMap) return false;\n    }\n    return true;\n  }\n\n  const checker = mergeIs(undefined, null);\n\n  return !checker(object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { DeepRequired } from '#types';
import { mergeIs } from '#utils/is/merge';
import { isPlainObject } from '#utils/is/object';

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
    exports: [
      {
        name: 'Picker',
        kind: 'named',
        text: "export type Picker = 'element' | 'key';",
        declarationKind: 'type',
      },
    ],
    text: `export type Picker = 'element' | 'key';
`,
  },
  'features.promises.index': {
    relativePath: 'features/promises/index.ts',
    imports: [],
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './types';",
        moduleSpecifier: './types',
      },
      {
        name: 'PromisifyMethod',
        kind: 'named',
        text: 'export type PromisifyMethod<T> = T extends (...args: infer P) => infer R\n  ? R extends Promise<any>\n    ? T\n    : (...args: P) => Promise<R>\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'PromisifyObject',
        kind: 'named',
        text: 'export type PromisifyObject<T extends Record<string, unknown>> = T & {\n  [P in keyof T as PromisifyMethod<T[P]> extends never\n    ? never\n    : `${string & P}Async`]: PromisifyMethod<T[P]>;\n};',
        declarationKind: 'type',
      },
    ],
    text: `export * from './types';
`,
  },

  'features.promises.types': {
    relativePath: 'features/promises/types.ts',
    imports: [],
    exports: [
      {
        name: 'PromisifyMethod',
        kind: 'named',
        text: 'export type PromisifyMethod<T> = T extends (...args: infer P) => infer R\n  ? R extends Promise<any>\n    ? T\n    : (...args: P) => Promise<R>\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'PromisifyObject',
        kind: 'named',
        text: 'export type PromisifyObject<T extends Record<string, unknown>> = T & {\n  [P in keyof T as PromisifyMethod<T[P]> extends never\n    ? never\n    : `${string & P}Async`]: PromisifyMethod<T[P]>;\n};',
        declarationKind: 'type',
      },
    ],
    text: `export type PromisifyMethod<T> = T extends (...args: infer P) => infer R
  ? R extends Promise<any>
    ? T
    : (...args: P) => Promise<R>
  : never;

export type PromisifyObject<T extends Record<string, unknown>> = T & {
  [P in keyof T as PromisifyMethod<T[P]> extends never
    ? never
    : \`$|||{string & P}Async\`]: PromisifyMethod<T[P]>;
};
`,
  },
  'features.strings.castings.add': {
    relativePath: 'features/strings/castings/add.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['AddString'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = <T extends string, Before extends string, After extends string>(\n  value: T,\n  before = '' as Before,\n  after = '' as After,\n) => {\n  const out = `${before}${value}${after}`;\n  return _unknown<AddString<T, Before, After>>(out);\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { AddString } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = <T extends string, Before extends string, After extends string>(
  value: T,
  before = '' as Before,
  after = '' as After,
) => {
  const out = \`$|||{before}$|||{value}$|||{after}\`;
  return _unknown<AddString<T, Before, After>>(out);
};

export default fn;
`,
  },
  'features.strings.castings.all': {
    relativePath: 'features/strings/castings/all.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'castings',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  is,\n  instance,\n  type,\n  getLength,\n  startsWith,\n  endsWith,\n  includes,\n  contains,\n  toLowerCase,\n  toUpperCase,\n  letters,\n  add,\n  join,\n  splitBy,\n  DEFAULT_DELIMITER,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <U extends string[]>(\n  value: unknown,\n  ...segments: U\n): value is `${string}${U[number]}${string}` =>\n  includes(value, ...segments)',
        declarationKind: 'variable',
      },
    ],
    text: `import includes from './includes';

const fn = <U extends string[]>(
  value: unknown,
  ...segments: U
): value is \`$|||{string}$|||{U[number]}$|||{string}\` =>
  includes(value, ...segments);

export default fn;
`,
  },
  'features.strings.castings.endsWith': {
    relativePath: 'features/strings/castings/endsWith.ts',
    imports: [
      {
        moduleSpecifier: '#utils/is/_default',
        kind: 'named',
        namedImports: ['isTypeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = <U extends string>(\n  value: unknown,\n  suffix: U,\n): value is `${string}${U}` => {\n  return isTypeFn('string')(value) && value.endsWith(suffix);\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import { isTypeFn } from '#utils/is/_default';

const fn = <U extends string>(
  value: unknown,
  suffix: U,
): value is \`$|||{string}$|||{U}\` => {
  return isTypeFn('string')(value) && value.endsWith(suffix);
};

export default fn;
`,
  },
  'features.strings.castings.getLength': {
    relativePath: 'features/strings/castings/getLength.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = <const T extends string>(value: T) => {\n  const out = value.length;\n  return _unknown<T['length']>(out);\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = <U extends string[]>(\n  value: unknown,\n  ...segments: U\n): value is `${string}${U[number]}${string}` => {\n  if (typeof value !== 'string') return false;\n\n  // Check if the string contains any of the segments\n  for (const seg of segments) {\n    if (value.includes(seg)) {\n      return true;\n    }\n  }\n  return false;\n}",
        declarationKind: 'variable',
      },
    ],
    text: `const fn = <U extends string[]>(
  value: unknown,
  ...segments: U
): value is \`$|||{string}$|||{U[number]}$|||{string}\` => {
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
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<string>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';

const fn = castFn<string>()();

export default fn;
`,
  },
  'features.strings.castings.instance': {
    relativePath: 'features/strings/castings/instance.ts',
    imports: [
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<String>()({\n  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types\n  is: (value: unknown): value is String => {\n    return value instanceof String;\n  },\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { castFn } from '#utils/castFn';

// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
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
        moduleSpecifier: '#utils/is/_default',
        kind: 'named',
        namedImports: ['isTypeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = isTypeFn('string')",
        declarationKind: 'variable',
      },
    ],
    text: `import { isTypeFn } from '#utils/is/_default';

const fn = isTypeFn('string');

export default fn;
`,
  },

  'features.strings.castings.join': {
    relativePath: 'features/strings/castings/join.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['JoinString'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = <T extends readonly string[], S extends string = ' '>(\n  sep = ' ' as S,\n  ...args: T\n) => {\n  const out = args.join(sep);\n  return _unknown<JoinString<T, S>>(out);\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { JoinString } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = expandFn(_index, {\n  lower,\n  upper,\n  is,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import _index from './index';
import is from './is';
import lower from './lower';
import upper from './upper';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Letters'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = castFn<Letters>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Letters } from '#types';
import { castFn } from '#utils/castFn';

const fn = castFn<Letters>()();

export default fn;
`,
  },
  'features.strings.castings.letters.is': {
    relativePath: 'features/strings/castings/letters/is.ts',
    imports: [
      {
        moduleSpecifier: '#features/strings/constants',
        kind: 'named',
        namedImports: ['ENGLISH_LETTERS'],
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Letters'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = (value: unknown): value is Letters => {\n  if (typeof value !== 'string') return false;\n  if (value.length === 0) return false;\n\n  // Check if all characters are English letters\n  for (const char of value.toLowerCase()) {\n    if (!ENGLISH_LETTERS.includes(char as any)) {\n      return false;\n    }\n  }\n  return true;\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import { ENGLISH_LETTERS } from '#features/strings/constants';
import type { Letters } from '#types';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['LowerLetters'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = castFn<LowerLetters>()({\n  is: (value: unknown): value is LowerLetters => {\n    return (\n      typeof value === 'string' &&\n      is(value) &&\n      value === value.toLowerCase()\n    );\n  },\n})",
        declarationKind: 'variable',
      },
    ],
    text: `import type { LowerLetters } from '#types';
import { castFn } from '#utils/castFn';
import is from './is';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['UpperLetters'],
      },
      {
        moduleSpecifier: '#utils/castFn',
        kind: 'named',
        namedImports: ['castFn'],
      },
      {
        moduleSpecifier: './is',
        kind: 'default',
        default: 'is',
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = castFn<UpperLetters>()({\n  is: (value: unknown): value is UpperLetters => {\n    return (\n      typeof value === 'string' &&\n      is(value) &&\n      value === value.toUpperCase()\n    );\n  },\n})",
        declarationKind: 'variable',
      },
    ],
    text: `import type { UpperLetters } from '#types';
import { castFn } from '#utils/castFn';
import is from './is';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['SplitStringBy'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = <const S extends string, By extends string = '.'>(\n  value: S,\n  by = '.' as By,\n) => {\n  const out = value.split(by);\n  return _unknown<SplitStringBy<S, By>>(out);\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { SplitStringBy } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/is/_default',
        kind: 'named',
        namedImports: ['isTypeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = <U extends string>(\n  value: unknown,\n  prefix: U,\n): value is `${U}${string}` => {\n  return isTypeFn('string')(value) && value.startsWith(prefix);\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import { isTypeFn } from '#utils/is/_default';

const fn = <U extends string>(
  value: unknown,
  prefix: U,
): value is \`$|||{U}$|||{string}\` => {
  return isTypeFn('string')(value) && value.startsWith(prefix);
};

export default fn;
`,
  },
  'features.strings.castings.toLowerCase': {
    relativePath: 'features/strings/castings/toLowerCase.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends string>(value: T) => {\n  const out = value.toLowerCase();\n  return _unknown<Lowercase<T>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends string>(value: T) => {\n  const out = value.toUpperCase();\n  return _unknown<Uppercase<T>>(out);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = String',
        declarationKind: 'variable',
      },
    ],
    text: `const fn = String;

export default fn;
`,
  },
  'features.strings.constants': {
    relativePath: 'features/strings/constants.ts',
    imports: [],
    exports: [
      {
        name: 'ENGLISH_LETTERS',
        kind: 'named',
        text: "ENGLISH_LETTERS = [\n  'a',\n  'b',\n  'c',\n  'd',\n  'e',\n  'f',\n  'g',\n  'h',\n  'i',\n  'j',\n  'k',\n  'l',\n  'm',\n  'n',\n  'o',\n  'p',\n  'q',\n  'r',\n  's',\n  't',\n  'u',\n  'v',\n  'w',\n  'x',\n  'y',\n  'z',\n] as const",
        declarationKind: 'variable',
      },
      {
        name: 'DEFAULT_DELIMITER',
        kind: 'named',
        text: "DEFAULT_DELIMITER = '.'",
        declarationKind: 'variable',
      },
    ],
    text: `export const ENGLISH_LETTERS = [
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

export const DEFAULT_DELIMITER = '.';
`,
  },
  'features.strings.index': {
    relativePath: 'features/strings/index.ts',
    imports: [],
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './castings/all';",
        moduleSpecifier: './castings/all',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * as CONSTANTS from './constants';",
        moduleSpecifier: './constants',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './types';",
        moduleSpecifier: './types',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './typings/all';",
        moduleSpecifier: './typings/all',
      },
      {
        name: 'CONSTANTS',
        kind: 'named',
        text: "export const ENGLISH_LETTERS = [\n  'a',\n  'b',\n  'c',\n  'd',\n  'e',\n  'f',\n  'g',\n  'h',\n  'i',\n  'j',\n  'k',\n  'l',\n  'm',\n  'n',\n  'o',\n  'p',\n  'q',\n  'r',\n  's',\n  't',\n  'u',\n  'v',\n  'w',\n  'x',\n  'y',\n  'z',\n] as const;\n\nexport const DEFAULT_DELIMITER = '.';\n",
      },
      {
        name: 'castings',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  is,\n  instance,\n  type,\n  getLength,\n  startsWith,\n  endsWith,\n  includes,\n  contains,\n  toLowerCase,\n  toUpperCase,\n  letters,\n  add,\n  join,\n  splitBy,\n  DEFAULT_DELIMITER,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'LowerLetters',
        kind: 'named',
        text: 'export type LowerLetters = (typeof ENGLISH_LETTERS)[number];',
        declarationKind: 'type',
      },
      {
        name: 'UpperLetters',
        kind: 'named',
        text: 'export type UpperLetters = Uppercase<LowerLetters>;',
        declarationKind: 'type',
      },
      {
        name: 'Letters',
        kind: 'named',
        text: 'export type Letters = UpperLetters | LowerLetters;',
        declarationKind: 'type',
      },
      {
        name: 'Email',
        kind: 'named',
        text: 'export type Email = `${string}@${string}.${string}`;',
        declarationKind: 'type',
      },
      {
        name: '_JoinStringHelper',
        kind: 'named',
        text: 'export type _JoinStringHelper = string | number | boolean | bigint;',
        declarationKind: 'type',
      },
      {
        name: 'JoinString',
        kind: 'named',
        text: "export type JoinString<\n  T extends readonly string[],\n  sep extends string = ' ',\n> = T extends []\n  ? ''\n  : T extends [_JoinStringHelper]\n    ? `${T[0]}`\n    : T extends [_JoinStringHelper, ...infer U extends readonly string[]]\n      ? `${T[0]}${sep}${JoinString<U, sep>}`\n      : string;",
        declarationKind: 'type',
      },
      {
        name: 'AddString',
        kind: 'named',
        text: "export type AddString<\n  T,\n  Before extends string = '',\n  After extends string = '',\n> = `${Before}${T & string}${After}`;",
        declarationKind: 'type',
      },
      {
        name: 'StringEndWith',
        kind: 'named',
        text: 'export type StringEndWith<\n  S extends string,\n  E extends string,\n> = S extends `${infer Prev}${E}`\n  ? { response: true; full: S; prev: Prev }\n  : { response: false; full: S; prev: S };',
        declarationKind: 'type',
      },
      {
        name: 'StringStartWith',
        kind: 'named',
        text: 'export type StringStartWith<\n  S extends string,\n  E extends string,\n> = S extends `${E}${infer Next}`\n  ? { response: true; full: S; next: Next }\n  : { response: false; full: S; next: S };',
        declarationKind: 'type',
      },
      {
        name: 'StringContains',
        kind: 'named',
        text: 'export type StringContains<\n  S extends string,\n  E extends string,\n> = S extends `${infer Prev}${E}${infer Next}`\n  ? { response: true; full: S; prev: Prev; next: Next }\n  : { response: false; full: S; prev: string; next: string };',
        declarationKind: 'type',
      },
      {
        name: 'SplitStringBy',
        kind: 'named',
        text: "export type SplitStringBy<\n  S extends string,\n  By extends string = '.',\n> = string extends S\n  ? string[]\n  : S extends ''\n    ? []\n    : S extends `${infer T}${By}${infer U}`\n      ? [T, ...SplitStringBy<U, By>]\n      : [S];",
        declarationKind: 'type',
      },
      {
        name: 'ExtractS',
        kind: 'named',
        text: 'export type ExtractS<T> = Extract<T, string>;',
        declarationKind: 'type',
      },
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  add,\n  contains,\n  email,\n  endsWith,\n  getLength,\n  includes,\n  instance,\n  join,\n  letters,\n  splitBy,\n  startsWith,\n  toLowerCase,\n  toUpperCase,\n})',
        declarationKind: 'variable',
      },
    ],
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
    exports: [
      {
        name: 'LowerLetters',
        kind: 'named',
        text: 'export type LowerLetters = (typeof ENGLISH_LETTERS)[number];',
        declarationKind: 'type',
      },
      {
        name: 'UpperLetters',
        kind: 'named',
        text: 'export type UpperLetters = Uppercase<LowerLetters>;',
        declarationKind: 'type',
      },
      {
        name: 'Letters',
        kind: 'named',
        text: 'export type Letters = UpperLetters | LowerLetters;',
        declarationKind: 'type',
      },
      {
        name: 'Email',
        kind: 'named',
        text: 'export type Email = `${string}@${string}.${string}`;',
        declarationKind: 'type',
      },
      {
        name: '_JoinStringHelper',
        kind: 'named',
        text: 'export type _JoinStringHelper = string | number | boolean | bigint;',
        declarationKind: 'type',
      },
      {
        name: 'JoinString',
        kind: 'named',
        text: "export type JoinString<\n  T extends readonly string[],\n  sep extends string = ' ',\n> = T extends []\n  ? ''\n  : T extends [_JoinStringHelper]\n    ? `${T[0]}`\n    : T extends [_JoinStringHelper, ...infer U extends readonly string[]]\n      ? `${T[0]}${sep}${JoinString<U, sep>}`\n      : string;",
        declarationKind: 'type',
      },
      {
        name: 'AddString',
        kind: 'named',
        text: "export type AddString<\n  T,\n  Before extends string = '',\n  After extends string = '',\n> = `${Before}${T & string}${After}`;",
        declarationKind: 'type',
      },
      {
        name: 'StringEndWith',
        kind: 'named',
        text: 'export type StringEndWith<\n  S extends string,\n  E extends string,\n> = S extends `${infer Prev}${E}`\n  ? { response: true; full: S; prev: Prev }\n  : { response: false; full: S; prev: S };',
        declarationKind: 'type',
      },
      {
        name: 'StringStartWith',
        kind: 'named',
        text: 'export type StringStartWith<\n  S extends string,\n  E extends string,\n> = S extends `${E}${infer Next}`\n  ? { response: true; full: S; next: Next }\n  : { response: false; full: S; next: S };',
        declarationKind: 'type',
      },
      {
        name: 'StringContains',
        kind: 'named',
        text: 'export type StringContains<\n  S extends string,\n  E extends string,\n> = S extends `${infer Prev}${E}${infer Next}`\n  ? { response: true; full: S; prev: Prev; next: Next }\n  : { response: false; full: S; prev: string; next: string };',
        declarationKind: 'type',
      },
      {
        name: 'SplitStringBy',
        kind: 'named',
        text: "export type SplitStringBy<\n  S extends string,\n  By extends string = '.',\n> = string extends S\n  ? string[]\n  : S extends ''\n    ? []\n    : S extends `${infer T}${By}${infer U}`\n      ? [T, ...SplitStringBy<U, By>]\n      : [S];",
        declarationKind: 'type',
      },
      {
        name: 'ExtractS',
        kind: 'named',
        text: 'export type ExtractS<T> = Extract<T, string>;',
        declarationKind: 'type',
      },
    ],
    text: `import type { ENGLISH_LETTERS } from './constants';

export type LowerLetters = (typeof ENGLISH_LETTERS)[number];

export type UpperLetters = Uppercase<LowerLetters>;

export type Letters = UpperLetters | LowerLetters;

// export type StringLocalLitterals = Letters | Digit;

export type Email = \`$|||{string}@$|||{string}.$|||{string}\`;

export type _JoinStringHelper = string | number | boolean | bigint;

export type JoinString<
  T extends readonly string[],
  sep extends string = ' ',
> = T extends []
  ? ''
  : T extends [_JoinStringHelper]
    ? \`$|||{T[0]}\`
    : T extends [_JoinStringHelper, ...infer U extends readonly string[]]
      ? \`$|||{T[0]}$|||{sep}$|||{JoinString<U, sep>}\`
      : string;

export type AddString<
  T,
  Before extends string = '',
  After extends string = '',
> = \`$|||{Before}$|||{T & string}$|||{After}\`;

export type StringEndWith<
  S extends string,
  E extends string,
> = S extends \`$|||{infer Prev}$|||{E}\`
  ? { response: true; full: S; prev: Prev }
  : { response: false; full: S; prev: S };

export type StringStartWith<
  S extends string,
  E extends string,
> = S extends \`$|||{E}$|||{infer Next}\`
  ? { response: true; full: S; next: Next }
  : { response: false; full: S; next: S };

export type StringContains<
  S extends string,
  E extends string,
> = S extends \`$|||{infer Prev}$|||{E}$|||{infer Next}\`
  ? { response: true; full: S; prev: Prev; next: Next }
  : { response: false; full: S; prev: string; next: string };

/**
 * Credit to {@link https://stackoverflow.com/a/70831818/11704485 | Matthieu Riegler}
 */
export type SplitStringBy<
  S extends string,
  By extends string = '.',
> = string extends S
  ? string[]
  : S extends ''
    ? []
    : S extends \`$|||{infer T}$|||{By}$|||{infer U}\`
      ? [T, ...SplitStringBy<U, By>]
      : [S];

export type ExtractS<T> = Extract<T, string>;
`,
  },
  'features.strings.typings.add': {
    relativePath: 'features/strings/typings/add.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['AddString'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <T extends string, Before extends string, After extends string>(\n  _?: T,\n  __?: Before,\n  ___?: After,\n) => _unknown<AddString<T, Before, After>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { AddString } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'typings',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  add,\n  contains,\n  email,\n  endsWith,\n  getLength,\n  includes,\n  instance,\n  join,\n  letters,\n  splitBy,\n  startsWith,\n  toLowerCase,\n  toUpperCase,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends string, U extends string[]>(_?: T, ...__: U) =>\n  _unknown<T extends `${string}${U[number]}${string}` ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <const T extends string, U extends string[]>(_?: T, ...__: U) =>
  _unknown<T extends \`$|||{string}$|||{U[number]}$|||{string}\` ? true : false>();

export default fn;
`,
  },
  'features.strings.typings.email': {
    relativePath: 'features/strings/typings/email.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Email'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<Email>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Email } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<Email>()();

export default fn;
`,
  },
  'features.strings.typings.endsWith': {
    relativePath: 'features/strings/typings/endsWith.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends string, U extends string>(_?: T, __?: U) =>\n  _unknown<T extends `${string}${U}` ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <const T extends string, U extends string>(_?: T, __?: U) =>
  _unknown<T extends \`$|||{string}$|||{U}\` ? true : false>();

export default fn;
`,
  },
  'features.strings.typings.getLength': {
    relativePath: 'features/strings/typings/getLength.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = <const T extends string>(_?: T) => _unknown<T['length']>()",
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = contains',
        declarationKind: 'variable',
      },
    ],
    text: `import contains from './contains';

const fn = contains;

export default fn;
`,
  },
  'features.strings.typings.index': {
    relativePath: 'features/strings/typings/index.ts',
    imports: [
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<string>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

const fn = typeFn<string>()();

export default fn;
`,
  },
  'features.strings.typings.instance': {
    relativePath: 'features/strings/typings/instance.ts',
    imports: [
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<String>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import { typeFn } from '#utils/typeFn';

// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
const fn = typeFn<String>()();

export default fn;
`,
  },
  'features.strings.typings.join': {
    relativePath: 'features/strings/typings/join.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['JoinString'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = <T extends readonly string[], sep extends string = ' '>(\n  _?: sep,\n  ...__: T\n) => _unknown<JoinString<T, sep>>()",
        declarationKind: 'variable',
      },
    ],
    text: `import type { JoinString } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Letters'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
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
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<Letters>()({\n  lower,\n  upper,\n})',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Letters } from '#types';
import { typeFn } from '#utils/typeFn';
import lower from './lower';
import upper from './upper';

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
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Letters'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<Letters>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Letters } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<Letters>()();

export default fn;
`,
  },
  'features.strings.typings.letters.lower': {
    relativePath: 'features/strings/typings/letters/lower.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['LowerLetters'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<LowerLetters>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { LowerLetters } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<LowerLetters>()();

export default fn;
`,
  },
  'features.strings.typings.letters.type': {
    relativePath: 'features/strings/typings/letters/type.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Letters'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = _unknown<Letters>()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Letters } from '#types';
import { _unknown } from '#utils/_unknown';

const fn = _unknown<Letters>();

export default fn;
`,
  },
  'features.strings.typings.letters.upper': {
    relativePath: 'features/strings/typings/letters/upper.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['UpperLetters'],
      },
      {
        moduleSpecifier: '#utils/typeFn',
        kind: 'named',
        namedImports: ['typeFn'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = typeFn<UpperLetters>()()',
        declarationKind: 'variable',
      },
    ],
    text: `import type { UpperLetters } from '#types';
import { typeFn } from '#utils/typeFn';

const fn = typeFn<UpperLetters>()();

export default fn;
`,
  },
  'features.strings.typings.splitBy': {
    relativePath: 'features/strings/typings/splitBy.ts',
    imports: [
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['SplitStringBy'],
      },
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: "fn = <const S extends string, By extends string = '.'>(\n  _?: S,\n  __?: By,\n) => _unknown<SplitStringBy<S, By>>()",
        declarationKind: 'variable',
      },
    ],
    text: `import type { SplitStringBy } from '#types';
import { _unknown } from '#utils/_unknown';

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
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends string, U extends string>(_?: T, __?: U) =>\n  _unknown<T extends `${U}${string}` ? true : false>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <const T extends string, U extends string>(_?: T, __?: U) =>
  _unknown<T extends \`$|||{U}$|||{string}\` ? true : false>();

export default fn;
`,
  },
  'features.strings.typings.toLowerCase': {
    relativePath: 'features/strings/typings/toLowerCase.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends string>(_?: T) => _unknown<Lowercase<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <const T extends string>(_?: T) => _unknown<Lowercase<T>>();

export default fn;
`,
  },
  'features.strings.typings.toUpperCase': {
    relativePath: 'features/strings/typings/toUpperCase.ts',
    imports: [
      {
        moduleSpecifier: '#utils/_unknown',
        kind: 'named',
        namedImports: ['_unknown'],
      },
    ],
    exports: [
      {
        name: 'default',
        kind: 'default',
        text: 'fn = <const T extends string>(_?: T) => _unknown<Uppercase<T>>()',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from '#utils/_unknown';

const fn = <const T extends string>(_?: T) => _unknown<Uppercase<T>>();

export default fn;
`,
  },
  'features.transform.constants': {
    relativePath: 'features/transform/constants.ts',
    imports: [],
    exports: [
      {
        name: 'PRIMITIVES',
        kind: 'named',
        text: "PRIMITIVES = [\n  'string',\n  'number',\n  'boolean',\n  'bigint',\n  'symbol',\n  'undefined',\n  'null',\n] as const",
        declarationKind: 'variable',
      },
      {
        name: 'PRIMITIVE_OBJECTS',
        kind: 'named',
        text: "PRIMITIVE_OBJECTS = ['object', 'date', 'primitive'] as const",
        declarationKind: 'variable',
      },
      {
        name: 'CUSTOM',
        kind: 'named',
        text: "CUSTOM = '$$app-ts => custom$$' as const",
        declarationKind: 'variable',
      },
      {
        name: 'PARTIAL',
        kind: 'named',
        text: "PARTIAL = '$$app-ts => partial$$' as const",
        declarationKind: 'variable',
      },
    ],
    text: `export const PRIMITIVES = [
  'string',
  'number',
  'boolean',
  'bigint',
  'symbol',
  'undefined',
  'null',
] as const;

export const PRIMITIVE_OBJECTS = ['object', 'date', 'primitive'] as const;

export const CUSTOM = '$$app-ts => custom$$' as const;
export const PARTIAL = '$$app-ts => partial$$' as const;
`,
  },
  'features.transform.functions': {
    relativePath: 'features/transform/functions.ts',
    imports: [
      {
        moduleSpecifier: '#utils/expandFn',
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
    exports: [
      {
        name: 'transform',
        kind: 'named',
        text: 'transform = expandFn(\n  <T extends ObjectS>(object?: T) => _transform<TransformO<T>>(object),\n  {\n    const: <const T extends ObjectS>(object?: T) => {\n      return _transform<TransformO<T>>(object);\n    },\n    custom: <T = any>(_?: T): Custom<T> => {\n      const out: any = {};\n      out[CUSTOM] = undefined;\n      return out;\n    },\n    partial: <T extends ObjectS>(value: T): T & PartialCustom => {\n      const entries = Object.entries(value).filter(\n        ([key]) => key !== PARTIAL,\n      );\n      const out: any = {};\n\n      entries.forEach(([key, value]) => {\n        out[key] = value;\n      });\n\n      out[PARTIAL] = undefined;\n\n      return out;\n    },\n\n    tuple: <T extends ObjectS[]>(...els: T) => transform<T>(els),\n\n    union: <T extends ObjectS[]>(..._: T) => transform<T[number]>(),\n  },\n)',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';
import {
  CUSTOM,
  PARTIAL,
  PRIMITIVE_OBJECTS,
  PRIMITIVES,
} from './constants';
import type { Custom, ObjectS, PartialCustom, TransformO } from './types';

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
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './constants';",
        moduleSpecifier: './constants',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './functions';",
        moduleSpecifier: './functions',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './types';",
        moduleSpecifier: './types',
      },
      {
        name: 'PRIMITIVES',
        kind: 'named',
        text: "PRIMITIVES = [\n  'string',\n  'number',\n  'boolean',\n  'bigint',\n  'symbol',\n  'undefined',\n  'null',\n] as const",
        declarationKind: 'variable',
      },
      {
        name: 'PRIMITIVE_OBJECTS',
        kind: 'named',
        text: "PRIMITIVE_OBJECTS = ['object', 'date', 'primitive'] as const",
        declarationKind: 'variable',
      },
      {
        name: 'CUSTOM',
        kind: 'named',
        text: "CUSTOM = '$$app-ts => custom$$' as const",
        declarationKind: 'variable',
      },
      {
        name: 'PARTIAL',
        kind: 'named',
        text: "PARTIAL = '$$app-ts => partial$$' as const",
        declarationKind: 'variable',
      },
      {
        name: 'transform',
        kind: 'named',
        text: 'transform = expandFn(\n  <T extends ObjectS>(object?: T) => _transform<TransformO<T>>(object),\n  {\n    const: <const T extends ObjectS>(object?: T) => {\n      return _transform<TransformO<T>>(object);\n    },\n    custom: <T = any>(_?: T): Custom<T> => {\n      const out: any = {};\n      out[CUSTOM] = undefined;\n      return out;\n    },\n    partial: <T extends ObjectS>(value: T): T & PartialCustom => {\n      const entries = Object.entries(value).filter(\n        ([key]) => key !== PARTIAL,\n      );\n      const out: any = {};\n\n      entries.forEach(([key, value]) => {\n        out[key] = value;\n      });\n\n      out[PARTIAL] = undefined;\n\n      return out;\n    },\n\n    tuple: <T extends ObjectS[]>(...els: T) => transform<T>(els),\n\n    union: <T extends ObjectS[]>(..._: T) => transform<T[number]>(),\n  },\n)',
        declarationKind: 'variable',
      },
      {
        name: 'PrimitiveS',
        kind: 'named',
        text: 'export type PrimitiveS = (typeof PRIMITIVES)[number];',
        declarationKind: 'type',
      },
      {
        name: 'TransformS',
        kind: 'named',
        text: "export type TransformS<T extends PrimitiveS> = T extends 'string'\n  ? string\n  : T extends 'number'\n    ? number\n    : T extends 'boolean'\n      ? boolean\n      : T extends 'bigint'\n        ? bigint\n        : T extends 'symbol'\n          ? symbol\n          : T extends 'undefined'\n            ? undefined\n            : T extends 'null'\n              ? null\n              : never;",
        declarationKind: 'type',
      },
      {
        name: 'MapS',
        kind: 'named',
        text: 'export type MapS = {\n  [key: string]: ObjectS;\n};',
        declarationKind: 'type',
      },
      {
        name: 'Custom',
        kind: 'named',
        text: 'export type Custom<T = any> = {\n  [CUSTOM]: T;\n};',
        declarationKind: 'type',
      },
      {
        name: 'PartialCustom',
        kind: 'named',
        text: 'export type PartialCustom = {\n  [PARTIAL]: undefined;\n};',
        declarationKind: 'type',
      },
      {
        name: '_ObjectS',
        kind: 'named',
        text: 'export type _ObjectS =\n  | MapS\n  | PrimitiveS\n  | Custom\n  | PartialCustom\n  | (typeof PRIMITIVE_OBJECTS)[number];',
        declarationKind: 'type',
      },
      {
        name: 'ObjectS',
        kind: 'named',
        text: 'export type ObjectS = SoRa<_ObjectS>;',
        declarationKind: 'type',
      },
      {
        name: 'TransformO',
        kind: 'named',
        text: "export type TransformO<T> = T extends 'function'\n  ? Fn\n  : T extends PrimitiveS\n    ? TransformS<T>\n    : T extends 'date'\n      ? Date\n      : T extends 'object'\n        ? // eslint-disable-next-line @typescript-eslint/no-empty-object-type\n          {}\n        : T extends 'primitive'\n          ? PrimitiveObject\n          : T extends PartialCustom\n            ? Partial<TransformO<NOmit<T, typeof PARTIAL>>>\n            : T extends AnyArray<any>\n              ? T[number] extends infer TKN extends ObjectS\n                ? TransformO<TKN>[]\n                : never\n              : {\n                  [K in keyof T]: TransformO<T[K]>;\n                };",
        declarationKind: 'type',
      },
    ],
    text: `export * from './constants';
export * from './functions';
export * from './types';
`,
  },
  'features.transform.types': {
    relativePath: 'features/transform/types.ts',
    imports: [
      {
        moduleSpecifier: '#types',
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
    exports: [
      {
        name: 'PrimitiveS',
        kind: 'named',
        text: 'export type PrimitiveS = (typeof PRIMITIVES)[number];',
        declarationKind: 'type',
      },
      {
        name: 'TransformS',
        kind: 'named',
        text: "export type TransformS<T extends PrimitiveS> = T extends 'string'\n  ? string\n  : T extends 'number'\n    ? number\n    : T extends 'boolean'\n      ? boolean\n      : T extends 'bigint'\n        ? bigint\n        : T extends 'symbol'\n          ? symbol\n          : T extends 'undefined'\n            ? undefined\n            : T extends 'null'\n              ? null\n              : never;",
        declarationKind: 'type',
      },
      {
        name: 'MapS',
        kind: 'named',
        text: 'export type MapS = {\n  [key: string]: ObjectS;\n};',
        declarationKind: 'type',
      },
      {
        name: 'Custom',
        kind: 'named',
        text: 'export type Custom<T = any> = {\n  [CUSTOM]: T;\n};',
        declarationKind: 'type',
      },
      {
        name: 'PartialCustom',
        kind: 'named',
        text: 'export type PartialCustom = {\n  [PARTIAL]: undefined;\n};',
        declarationKind: 'type',
      },
      {
        name: '_ObjectS',
        kind: 'named',
        text: 'export type _ObjectS =\n  | MapS\n  | PrimitiveS\n  | Custom\n  | PartialCustom\n  | (typeof PRIMITIVE_OBJECTS)[number];',
        declarationKind: 'type',
      },
      {
        name: 'ObjectS',
        kind: 'named',
        text: 'export type ObjectS = SoRa<_ObjectS>;',
        declarationKind: 'type',
      },
      {
        name: 'TransformO',
        kind: 'named',
        text: "export type TransformO<T> = T extends 'function'\n  ? Fn\n  : T extends PrimitiveS\n    ? TransformS<T>\n    : T extends 'date'\n      ? Date\n      : T extends 'object'\n        ? // eslint-disable-next-line @typescript-eslint/no-empty-object-type\n          {}\n        : T extends 'primitive'\n          ? PrimitiveObject\n          : T extends PartialCustom\n            ? Partial<TransformO<NOmit<T, typeof PARTIAL>>>\n            : T extends AnyArray<any>\n              ? T[number] extends infer TKN extends ObjectS\n                ? TransformO<TKN>[]\n                : never\n              : {\n                  [K in keyof T]: TransformO<T[K]>;\n                };",
        declarationKind: 'type',
      },
    ],
    text: `import type { AnyArray, Fn, NOmit, PrimitiveObject, SoRa } from '#types';
import type {
  CUSTOM,
  PARTIAL,
  PRIMITIVE_OBJECTS,
  PRIMITIVES,
} from './constants';

export type PrimitiveS = (typeof PRIMITIVES)[number];

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

export type MapS = {
  [key: string]: ObjectS;
};

export type Custom<T = any> = {
  [CUSTOM]: T;
};

export type PartialCustom = {
  [PARTIAL]: undefined;
};

export type _ObjectS =
  | MapS
  | PrimitiveS
  | Custom
  | PartialCustom
  | (typeof PRIMITIVE_OBJECTS)[number];

export type ObjectS = SoRa<_ObjectS>;

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
  'features.typescript.extractFromFile': {
    relativePath: 'features/typescript/extractFromFile.ts',
    imports: [
      {
        moduleSpecifier: 'ts-morph',
        kind: 'named',
        namedImports: ['Node', 'Project', 'SyntaxKind'],
      },
      {
        moduleSpecifier: './findFirstCallExpression',
        kind: 'named',
        namedImports: ['findFirstCallExpression'],
      },
      {
        moduleSpecifier: './helpers',
        kind: 'named',
        namedImports: [
          'extractExportsRecursively',
          'resolveModuleSpecifier',
        ],
      },
      {
        moduleSpecifier: './parseObject',
        kind: 'named',
        namedImports: ['parseObject'],
      },
      {
        moduleSpecifier: './resolveType',
        kind: 'named',
        namedImports: ['resolveType'],
      },
    ],
    exports: [
      {
        name: 'extractFromFile',
        kind: 'named',
        text: "extractFromFile = (filePath: string) => {\n  const project = new Project({\n    tsConfigFilePath: 'tsconfig.json',\n  });\n  const sourceFile = project.addSourceFileAtPath(filePath);\n\n  // Fonction pour résoudre les spécificateurs de modules en utilisant tsconfig.json\n\n  // Fonction pour résoudre récursivement les types importés en utilisant l'API du compilateur\n\n  const out = {\n    exports: extractExportsRecursively(project, sourceFile),\n\n    imports: sourceFile.getImportDeclarations().map(imp => ({\n      moduleSpecifier: resolveModuleSpecifier(\n        project,\n        imp.getModuleSpecifierValue(),\n      ),\n      namedImports: imp.getNamedImports().map(named => named.getName()),\n    })),\n\n    types: sourceFile.getTypeAliases().map(type => ({\n      name: type.getName(),\n      typeParameters: type.getTypeParameters().map(tp => tp.getName()),\n      type: type.getTypeNodeOrThrow().getText(),\n    })),\n\n    variables: sourceFile.getVariableDeclarations().map(v => {\n      const initializer = v.getInitializer();\n      let params: any[] = [];\n      let firstFunctionName: string | undefined;\n\n      const isCallable1 = Node.isCallExpression(initializer);\n\n      // Fonction pour trouver le premier appel de fonction dans une chaîne\n\n      // Vérifier si l'initializer est un appel de fonction\n      if (isCallable1) {\n        // Trouver le premier appel de fonction dans la chaîne\n        const firstCallExpression = findFirstCallExpression(initializer);\n\n        const isCallable2 = Node.isCallExpression(firstCallExpression);\n\n        if (isCallable2) {\n          // Récupérer le nom de la fonction\n          const expression = firstCallExpression.getExpression();\n          if (expression.getKind() === SyntaxKind.Identifier) {\n            firstFunctionName = expression.getText();\n          }\n\n          params = firstCallExpression.getArguments().map(arg => {\n            if (Node.isCallExpression(arg)) {\n              // Si c'est un appel de fonction, extraire le type de retour\n              const type = arg.getType();\n              return resolveType(sourceFile, type);\n            }\n\n            const text = arg.getText();\n            if (Node.isObjectLiteralExpression(arg))\n              return parseObject(text);\n\n            return text;\n          });\n        }\n      }\n\n      return {\n        name: v.getName(),\n        // Type node (ce qui est écrit dans le code)\n        // Nom de la première fonction appelée\n        function: firstFunctionName,\n        // Arguments de l'appel de fonction si applicable\n        params,\n        // Flags du type\n      };\n    }),\n  };\n\n  project.removeSourceFile(sourceFile);\n\n  return out;\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import { Node, Project, SyntaxKind } from 'ts-morph';
import { findFirstCallExpression } from './findFirstCallExpression';
import {
  extractExportsRecursively,
  resolveModuleSpecifier,
} from './helpers';
import { parseObject } from './parseObject';
import { resolveType } from './resolveType';

export const extractFromFile = (filePath: string) => {
  const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
  });
  const sourceFile = project.addSourceFileAtPath(filePath);

  // Fonction pour résoudre les spécificateurs de modules en utilisant tsconfig.json

  // Fonction pour résoudre récursivement les types importés en utilisant l'API du compilateur

  const out = {
    exports: extractExportsRecursively(project, sourceFile),

    imports: sourceFile.getImportDeclarations().map(imp => ({
      moduleSpecifier: resolveModuleSpecifier(
        project,
        imp.getModuleSpecifierValue(),
      ),
      namedImports: imp.getNamedImports().map(named => named.getName()),
    })),

    types: sourceFile.getTypeAliases().map(type => ({
      name: type.getName(),
      typeParameters: type.getTypeParameters().map(tp => tp.getName()),
      type: type.getTypeNodeOrThrow().getText(),
    })),

    variables: sourceFile.getVariableDeclarations().map(v => {
      const initializer = v.getInitializer();
      let params: any[] = [];
      let firstFunctionName: string | undefined;

      const isCallable1 = Node.isCallExpression(initializer);

      // Fonction pour trouver le premier appel de fonction dans une chaîne

      // Vérifier si l'initializer est un appel de fonction
      if (isCallable1) {
        // Trouver le premier appel de fonction dans la chaîne
        const firstCallExpression = findFirstCallExpression(initializer);

        const isCallable2 = Node.isCallExpression(firstCallExpression);

        if (isCallable2) {
          // Récupérer le nom de la fonction
          const expression = firstCallExpression.getExpression();
          if (expression.getKind() === SyntaxKind.Identifier) {
            firstFunctionName = expression.getText();
          }

          params = firstCallExpression.getArguments().map(arg => {
            if (Node.isCallExpression(arg)) {
              // Si c'est un appel de fonction, extraire le type de retour
              const type = arg.getType();
              return resolveType(sourceFile, type);
            }

            const text = arg.getText();
            if (Node.isObjectLiteralExpression(arg))
              return parseObject(text);

            return text;
          });
        }
      }

      return {
        name: v.getName(),
        // Type node (ce qui est écrit dans le code)
        // Nom de la première fonction appelée
        function: firstFunctionName,
        // Arguments de l'appel de fonction si applicable
        params,
        // Flags du type
      };
    }),
  };

  project.removeSourceFile(sourceFile);

  return out;
};
`,
  },
  'features.typescript.findFirstCallExpression': {
    relativePath: 'features/typescript/findFirstCallExpression.ts',
    imports: [
      {
        moduleSpecifier: 'ts-morph',
        kind: 'named',
        namedImports: ['Node'],
      },
    ],
    exports: [
      {
        name: 'findFirstCallExpression',
        kind: 'named',
        text: "findFirstCallExpression = (node: Node): any => {\n  const hasExpression = Node.hasExpression(node);\n  if (hasExpression) {\n    const expression = node.getExpression();\n\n    // Si l'expression est un PropertyAccessExpression (e.g., createMachine(...).provideOptions)\n    if (\n      expression &&\n      // expression.getKind() === SyntaxKind.PropertyAccessExpression &&\n      Node.hasExpression(expression)\n    ) {\n      // Récursivement chercher dans l'expression de gauche\n      // Cast to PropertyAccessExpression to access getExpression()\n      return findFirstCallExpression(expression.getExpression());\n    }\n\n    // Si c'est un Identifier ou autre, c'est le premier appel\n    return node;\n  }\n\n  return node;\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import { Node } from 'ts-morph';

export const findFirstCallExpression = (node: Node): any => {
  const hasExpression = Node.hasExpression(node);
  if (hasExpression) {
    const expression = node.getExpression();

    // Si l'expression est un PropertyAccessExpression (e.g., createMachine(...).provideOptions)
    if (
      expression &&
      // expression.getKind() === SyntaxKind.PropertyAccessExpression &&
      Node.hasExpression(expression)
    ) {
      // Récursivement chercher dans l'expression de gauche
      // Cast to PropertyAccessExpression to access getExpression()
      return findFirstCallExpression(expression.getExpression());
    }

    // Si c'est un Identifier ou autre, c'est le premier appel
    return node;
  }

  return node;
};
`,
  },
  'features.typescript.helpers': {
    relativePath: 'features/typescript/helpers.ts',
    imports: [
      {
        moduleSpecifier: 'ts-morph',
        kind: 'named',
        namedImports: ['Project', 'SourceFile'],
      },
      {
        moduleSpecifier: 'ts-morph',
        kind: 'named',
        namedImports: ['Node'],
      },
    ],
    exports: [
      {
        name: 'resolveModuleSpecifier',
        kind: 'named',
        text: "resolveModuleSpecifier = (\n  project: Project,\n  moduleSpecifier: string,\n): string => {\n  try {\n    // Obtenir les options du compilateur du projet\n    const compilerOptions = project.getCompilerOptions();\n    const baseUrl = compilerOptions.baseUrl;\n    const paths = compilerOptions.paths;\n\n    // Si on a un chemin relatif simple, le retourner tel quel\n    if (\n      moduleSpecifier.startsWith('./') ||\n      moduleSpecifier.startsWith('../')\n    ) {\n      return moduleSpecifier;\n    }\n\n    // Si on a des chemins définis dans tsconfig, essayer de les résoudre\n    if (paths && baseUrl) {\n      for (const [pathPattern, pathMappings] of Object.entries(paths)) {\n        // Enlever l'astérisque pour la comparaison\n        const patternBase = pathPattern.replace('/*', '');\n\n        if (moduleSpecifier.startsWith(patternBase)) {\n          // Remplacer le préfixe par le chemin réel\n          const suffix = moduleSpecifier.slice(patternBase.length);\n          const mappingBase = pathMappings[0]?.replace('/*', '') || '';\n          return `${mappingBase}${suffix}`;\n        }\n      }\n    }\n\n    // Sinon, retourner le spécificateur original\n    return moduleSpecifier;\n  } catch {\n    // En cas d'erreur, retourner le spécificateur original\n    return moduleSpecifier;\n  }\n}",
        declarationKind: 'variable',
      },
      {
        name: 'extractExportsRecursively',
        kind: 'named',
        text: "extractExportsRecursively = (\n  project: Project,\n  sourceFile: SourceFile,\n  visited = new Set<string>(),\n): any => {\n  const filePath = sourceFile.getFilePath();\n\n  // Éviter les cycles infinis\n  if (visited.has(filePath)) {\n    return [];\n  }\n  visited.add(filePath);\n\n  const exports: any[] = [];\n\n  // Traiter toutes les déclarations d'export\n  for (const [\n    name,\n    declarations,\n  ] of sourceFile.getExportedDeclarations()) {\n    for (const declaration of declarations) {\n      const declarationSourceFile = declaration.getSourceFile();\n\n      // Si la déclaration vient d'un autre fichier, extraire récursivement\n      if (declarationSourceFile.getFilePath() !== filePath) {\n        const recursiveExports = extractExportsRecursively(\n          project,\n          declarationSourceFile,\n          visited,\n        );\n\n        // Extraire tous les imports du fichier source de la déclaration\n        const fileImports = declarationSourceFile\n          .getImportDeclarations()\n          .map(imp => ({\n            moduleSpecifier: resolveModuleSpecifier(\n              project,\n              imp.getModuleSpecifierValue(),\n            ),\n            namedImports: imp\n              .getNamedImports()\n              .map(named => named.getName()),\n            defaultImport: imp.getDefaultImport()?.getText(),\n            namespaceImport: imp.getNamespaceImport()?.getText(),\n          }));\n\n        exports.push({\n          name,\n          type: 'recursive',\n          imports: fileImports, // Ajouter les imports comme exports\n          filePath: declarationSourceFile.getFilePath(),\n          declarations: recursiveExports,\n        });\n      } else {\n        // Traiter les différents types de déclarations\n        const declarationInfo: any = {\n          name,\n          type: declaration.getKindName(),\n        };\n\n        // Traitement spécifique selon le type de déclaration\n        if (Node.isVariableDeclaration(declaration)) {\n          const initializer = declaration.getInitializer();\n          declarationInfo.hasInitializer = !!initializer;\n          if (initializer) {\n            declarationInfo.initializerText = initializer.getText();\n          }\n        } else if (Node.isFunctionDeclaration(declaration)) {\n          declarationInfo.parameters = declaration\n            .getParameters()\n            .map(p => ({\n              name: p.getName(),\n              type: p.getTypeNode()?.getText(),\n            }));\n          declarationInfo.returnType = declaration\n            .getReturnTypeNode()\n            ?.getText();\n        } else if (Node.isClassDeclaration(declaration)) {\n          declarationInfo.extends = declaration.getExtends()?.getText();\n          declarationInfo.implements = declaration\n            .getImplements()\n            .map(i => i.getText());\n          declarationInfo.properties = declaration\n            .getProperties()\n            .map(p => ({\n              name: p.getName(),\n              type: p.getTypeNode()?.getText(),\n            }));\n        } else if (Node.isInterfaceDeclaration(declaration)) {\n          declarationInfo.extends = declaration\n            .getExtends()\n            .map(e => e.getText());\n          declarationInfo.properties = declaration\n            .getProperties()\n            .map(p => ({\n              name: p.getName(),\n              type: p.getTypeNode()?.getText(),\n            }));\n        } else if (Node.isTypeAliasDeclaration(declaration)) {\n          declarationInfo.typeParameters = declaration\n            .getTypeParameters()\n            .map(tp => tp.getName());\n          declarationInfo.typeDefinition = declaration\n            .getTypeNode()\n            ?.getText();\n        } else if (Node.isExportDeclaration(declaration)) {\n          // Gérer les re-exports (export * from './module')\n          const moduleSpecifier = declaration.getModuleSpecifier();\n          if (moduleSpecifier) {\n            const targetFile = declaration.getModuleSpecifierSourceFile();\n            if (targetFile) {\n              const recursiveExports = extractExportsRecursively(\n                project,\n                targetFile,\n                visited,\n              );\n              declarationInfo.reExports = recursiveExports;\n              declarationInfo.moduleSpecifier = resolveModuleSpecifier(\n                project,\n                moduleSpecifier.getLiteralValue(),\n              );\n            }\n          }\n        }\n\n        exports.push(declarationInfo);\n      }\n    }\n  }\n\n  return exports;\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import type { Project, SourceFile } from 'ts-morph';
import { Node } from 'ts-morph';

export const resolveModuleSpecifier = (
  project: Project,
  moduleSpecifier: string,
): string => {
  try {
    // Obtenir les options du compilateur du projet
    const compilerOptions = project.getCompilerOptions();
    const baseUrl = compilerOptions.baseUrl;
    const paths = compilerOptions.paths;

    // Si on a un chemin relatif simple, le retourner tel quel
    if (
      moduleSpecifier.startsWith('./') ||
      moduleSpecifier.startsWith('../')
    ) {
      return moduleSpecifier;
    }

    // Si on a des chemins définis dans tsconfig, essayer de les résoudre
    if (paths && baseUrl) {
      for (const [pathPattern, pathMappings] of Object.entries(paths)) {
        // Enlever l'astérisque pour la comparaison
        const patternBase = pathPattern.replace('/*', '');

        if (moduleSpecifier.startsWith(patternBase)) {
          // Remplacer le préfixe par le chemin réel
          const suffix = moduleSpecifier.slice(patternBase.length);
          const mappingBase = pathMappings[0]?.replace('/*', '') || '';
          return \`$|||{mappingBase}$|||{suffix}\`;
        }
      }
    }

    // Sinon, retourner le spécificateur original
    return moduleSpecifier;
  } catch {
    // En cas d'erreur, retourner le spécificateur original
    return moduleSpecifier;
  }
};

// Fonction pour extraire récursivement les exports
export const extractExportsRecursively = (
  project: Project,
  sourceFile: SourceFile,
  visited = new Set<string>(),
): any => {
  const filePath = sourceFile.getFilePath();

  // Éviter les cycles infinis
  if (visited.has(filePath)) {
    return [];
  }
  visited.add(filePath);

  const exports: any[] = [];

  // Traiter toutes les déclarations d'export
  for (const [
    name,
    declarations,
  ] of sourceFile.getExportedDeclarations()) {
    for (const declaration of declarations) {
      const declarationSourceFile = declaration.getSourceFile();

      // Si la déclaration vient d'un autre fichier, extraire récursivement
      if (declarationSourceFile.getFilePath() !== filePath) {
        const recursiveExports = extractExportsRecursively(
          project,
          declarationSourceFile,
          visited,
        );

        // Extraire tous les imports du fichier source de la déclaration
        const fileImports = declarationSourceFile
          .getImportDeclarations()
          .map(imp => ({
            moduleSpecifier: resolveModuleSpecifier(
              project,
              imp.getModuleSpecifierValue(),
            ),
            namedImports: imp
              .getNamedImports()
              .map(named => named.getName()),
            defaultImport: imp.getDefaultImport()?.getText(),
            namespaceImport: imp.getNamespaceImport()?.getText(),
          }));

        exports.push({
          name,
          type: 'recursive',
          imports: fileImports, // Ajouter les imports comme exports
          filePath: declarationSourceFile.getFilePath(),
          declarations: recursiveExports,
        });
      } else {
        // Traiter les différents types de déclarations
        const declarationInfo: any = {
          name,
          type: declaration.getKindName(),
        };

        // Traitement spécifique selon le type de déclaration
        if (Node.isVariableDeclaration(declaration)) {
          const initializer = declaration.getInitializer();
          declarationInfo.hasInitializer = !!initializer;
          if (initializer) {
            declarationInfo.initializerText = initializer.getText();
          }
        } else if (Node.isFunctionDeclaration(declaration)) {
          declarationInfo.parameters = declaration
            .getParameters()
            .map(p => ({
              name: p.getName(),
              type: p.getTypeNode()?.getText(),
            }));
          declarationInfo.returnType = declaration
            .getReturnTypeNode()
            ?.getText();
        } else if (Node.isClassDeclaration(declaration)) {
          declarationInfo.extends = declaration.getExtends()?.getText();
          declarationInfo.implements = declaration
            .getImplements()
            .map(i => i.getText());
          declarationInfo.properties = declaration
            .getProperties()
            .map(p => ({
              name: p.getName(),
              type: p.getTypeNode()?.getText(),
            }));
        } else if (Node.isInterfaceDeclaration(declaration)) {
          declarationInfo.extends = declaration
            .getExtends()
            .map(e => e.getText());
          declarationInfo.properties = declaration
            .getProperties()
            .map(p => ({
              name: p.getName(),
              type: p.getTypeNode()?.getText(),
            }));
        } else if (Node.isTypeAliasDeclaration(declaration)) {
          declarationInfo.typeParameters = declaration
            .getTypeParameters()
            .map(tp => tp.getName());
          declarationInfo.typeDefinition = declaration
            .getTypeNode()
            ?.getText();
        } else if (Node.isExportDeclaration(declaration)) {
          // Gérer les re-exports (export * from './module')
          const moduleSpecifier = declaration.getModuleSpecifier();
          if (moduleSpecifier) {
            const targetFile = declaration.getModuleSpecifierSourceFile();
            if (targetFile) {
              const recursiveExports = extractExportsRecursively(
                project,
                targetFile,
                visited,
              );
              declarationInfo.reExports = recursiveExports;
              declarationInfo.moduleSpecifier = resolveModuleSpecifier(
                project,
                moduleSpecifier.getLiteralValue(),
              );
            }
          }
        }

        exports.push(declarationInfo);
      }
    }
  }

  return exports;
};
`,
  },

  'features.typescript.index': {
    relativePath: 'features/typescript/index.ts',
    imports: [],
    exports: [
      {
        name: 'extractFromFile',
        kind: 'named',
        text: "export { extractFromFile } from './extractFromFile';",
        moduleSpecifier: './extractFromFile',
      },
      {
        name: 'findFirstCallExpression',
        kind: 'named',
        text: "export { findFirstCallExpression } from './findFirstCallExpression';",
        moduleSpecifier: './findFirstCallExpression',
      },
      {
        name: 'parseObject',
        kind: 'named',
        text: "export { parseObject } from './parseObject';",
        moduleSpecifier: './parseObject',
      },
      {
        name: 'resolveType',
        kind: 'named',
        text: "export { resolveType } from './resolveType';",
        moduleSpecifier: './resolveType',
      },
      {
        name: 'extractFromFile',
        kind: 'named',
        text: "extractFromFile = (filePath: string) => {\n  const project = new Project({\n    tsConfigFilePath: 'tsconfig.json',\n  });\n  const sourceFile = project.addSourceFileAtPath(filePath);\n\n  // Fonction pour résoudre les spécificateurs de modules en utilisant tsconfig.json\n\n  // Fonction pour résoudre récursivement les types importés en utilisant l'API du compilateur\n\n  const out = {\n    exports: extractExportsRecursively(project, sourceFile),\n\n    imports: sourceFile.getImportDeclarations().map(imp => ({\n      moduleSpecifier: resolveModuleSpecifier(\n        project,\n        imp.getModuleSpecifierValue(),\n      ),\n      namedImports: imp.getNamedImports().map(named => named.getName()),\n    })),\n\n    types: sourceFile.getTypeAliases().map(type => ({\n      name: type.getName(),\n      typeParameters: type.getTypeParameters().map(tp => tp.getName()),\n      type: type.getTypeNodeOrThrow().getText(),\n    })),\n\n    variables: sourceFile.getVariableDeclarations().map(v => {\n      const initializer = v.getInitializer();\n      let params: any[] = [];\n      let firstFunctionName: string | undefined;\n\n      const isCallable1 = Node.isCallExpression(initializer);\n\n      // Fonction pour trouver le premier appel de fonction dans une chaîne\n\n      // Vérifier si l'initializer est un appel de fonction\n      if (isCallable1) {\n        // Trouver le premier appel de fonction dans la chaîne\n        const firstCallExpression = findFirstCallExpression(initializer);\n\n        const isCallable2 = Node.isCallExpression(firstCallExpression);\n\n        if (isCallable2) {\n          // Récupérer le nom de la fonction\n          const expression = firstCallExpression.getExpression();\n          if (expression.getKind() === SyntaxKind.Identifier) {\n            firstFunctionName = expression.getText();\n          }\n\n          params = firstCallExpression.getArguments().map(arg => {\n            if (Node.isCallExpression(arg)) {\n              // Si c'est un appel de fonction, extraire le type de retour\n              const type = arg.getType();\n              return resolveType(sourceFile, type);\n            }\n\n            const text = arg.getText();\n            if (Node.isObjectLiteralExpression(arg))\n              return parseObject(text);\n\n            return text;\n          });\n        }\n      }\n\n      return {\n        name: v.getName(),\n        // Type node (ce qui est écrit dans le code)\n        // Nom de la première fonction appelée\n        function: firstFunctionName,\n        // Arguments de l'appel de fonction si applicable\n        params,\n        // Flags du type\n      };\n    }),\n  };\n\n  project.removeSourceFile(sourceFile);\n\n  return out;\n}",
        declarationKind: 'variable',
      },
      {
        name: 'findFirstCallExpression',
        kind: 'named',
        text: "findFirstCallExpression = (node: Node): any => {\n  const hasExpression = Node.hasExpression(node);\n  if (hasExpression) {\n    const expression = node.getExpression();\n\n    // Si l'expression est un PropertyAccessExpression (e.g., createMachine(...).provideOptions)\n    if (\n      expression &&\n      // expression.getKind() === SyntaxKind.PropertyAccessExpression &&\n      Node.hasExpression(expression)\n    ) {\n      // Récursivement chercher dans l'expression de gauche\n      // Cast to PropertyAccessExpression to access getExpression()\n      return findFirstCallExpression(expression.getExpression());\n    }\n\n    // Si c'est un Identifier ou autre, c'est le premier appel\n    return node;\n  }\n\n  return node;\n}",
        declarationKind: 'variable',
      },
      {
        name: 'parseObject',
        kind: 'named',
        text: "parseObject = (objString: string): any => {\n  try {\n    const project = new Project();\n\n    // Créer un fichier temporaire avec l'objet\n    const tempFile = project.createSourceFile(\n      'temp.ts',\n      `\n      const obj = ${objString};\n      export default obj;\n    `,\n    );\n\n    // Obtenir la déclaration de variable\n    const variableDeclaration = tempFile.getVariableDeclaration('obj');\n    if (!variableDeclaration) return null;\n\n    const initializer = variableDeclaration.getInitializer();\n    if (\n      !initializer ||\n      initializer.getKind() !== SyntaxKind.ObjectLiteralExpression\n    ) {\n      return null;\n    }\n\n    // Fonction récursive pour parser l'objet\n    const parseNode = (node: Node): any => {\n      if (Node.isObjectLiteralExpression(node)) {\n        const obj: any = {};\n        node.getProperties().forEach((prop: any) => {\n          if (Node.isPropertyAssignment(prop)) {\n            const name = prop.getName();\n            const initializer = prop.getInitializer();\n            if (initializer) {\n              const value = parseNode(initializer);\n              obj[name] = value;\n            }\n          }\n        });\n        return obj;\n      }\n\n      if (Node.isArrayLiteralExpression(node)) {\n        return node\n          .getElements()\n          .map((element: any) => parseNode(element));\n      }\n\n      if (Node.isStringLiteral(node) || Node.isNumericLiteral(node)) {\n        return node.getLiteralValue();\n      }\n\n      if (Node.isTrueLiteral(node)) {\n        return true;\n      }\n\n      if (Node.isFalseLiteral(node)) {\n        return false;\n      }\n\n      if (Node.isNullLiteral(node)) {\n        return null;\n      }\n\n      if (Node.isIdentifier(node)) {\n        return node.getText();\n      }\n\n      return node.getText();\n    };\n\n    return parseNode(initializer);\n  } catch (error) {\n    console.error('Erreur avec ts-morph:', error);\n    return null;\n  }\n}",
        declarationKind: 'variable',
      },
      {
        name: 'resolveType',
        kind: 'named',
        text: "resolveType = (\n  sourceFile: SourceFile,\n  type: Type,\n): string => {\n  const typeText = type.getText();\n\n  try {\n    // Accéder au compilateur TypeScript sous-jacent\n    const compilerType = type.compilerType;\n    const typeChecker = sourceFile\n      .getProject()\n      .getTypeChecker().compilerObject;\n\n    const fullyResolvedTypeText = typeChecker.typeToString(\n      compilerType,\n      undefined,\n      TypeFormatFlags.InTypeAlias |\n        TypeFormatFlags.WriteArrayAsGenericType |\n        TypeFormatFlags.UseStructuralFallback |\n        TypeFormatFlags.NoTruncation |\n        TypeFormatFlags.WriteClassExpressionAsTypeLiteral |\n        TypeFormatFlags.InElementType,\n    );\n\n    // #region Première  tentative: Si le type résolu est structurel\n    // contient des objets et aucun import\n    if (\n      fullyResolvedTypeText !== typeText &&\n      !fullyResolvedTypeText.includes('import(') &&\n      (fullyResolvedTypeText.includes('{') ||\n        fullyResolvedTypeText.length > typeText.length * 1.5)\n    ) {\n      return fullyResolvedTypeText;\n    }\n    // #endregion\n\n    // #region Deuxième tentative: résoudre les alias et types importés\n    const symbol = compilerType.symbol;\n\n    // Pour les types aliasés (comme TransformArgs)\n    if (symbol.flags & SymbolFlags.TypeAlias) {\n      const aliasResolvedTypeText = typeChecker.typeToString(\n        compilerType,\n        undefined,\n        TypeFormatFlags.InTypeAlias |\n          TypeFormatFlags.WriteClassExpressionAsTypeLiteral |\n          TypeFormatFlags.NoTruncation,\n      );\n\n      if (\n        aliasResolvedTypeText !== typeText &&\n        !aliasResolvedTypeText.includes('import(') &&\n        aliasResolvedTypeText.includes('{')\n      ) {\n        return aliasResolvedTypeText;\n      }\n    }\n\n    // Pour les types importés, essayer de résoudre le symbole aliasé\n    if (symbol.flags & SymbolFlags.Alias) {\n      const aliasedSymbol = typeChecker.getAliasedSymbol(symbol);\n      if (aliasedSymbol && aliasedSymbol !== symbol) {\n        const aliasedType = typeChecker.getTypeOfSymbolAtLocation(\n          aliasedSymbol,\n          aliasedSymbol.declarations?.[0] || sourceFile.compilerNode,\n        );\n\n        const resolvedAliasTypeText = typeChecker.typeToString(\n          aliasedType,\n          undefined,\n          TypeFormatFlags.InTypeAlias |\n            TypeFormatFlags.WriteClassExpressionAsTypeLiteral |\n            TypeFormatFlags.NoTruncation,\n        );\n\n        if (\n          resolvedAliasTypeText !== typeText &&\n          !resolvedAliasTypeText.includes('import(') &&\n          resolvedAliasTypeText.includes('{')\n        ) {\n          return resolvedAliasTypeText;\n        }\n      }\n    }\n    // #endregion\n\n    // #region Troisième tentative: type apparent pour révéler la structure cachée\n    const apparentType = typeChecker.getApparentType(compilerType);\n\n    const apparentText = typeChecker.typeToString(\n      apparentType,\n      undefined,\n      TypeFormatFlags.InTypeAlias |\n        TypeFormatFlags.WriteClassExpressionAsTypeLiteral |\n        TypeFormatFlags.UseStructuralFallback |\n        TypeFormatFlags.NoTruncation,\n    );\n\n    if (\n      apparentText !== typeText &&\n      !apparentText.includes('import(') &&\n      (apparentText.includes('{') ||\n        apparentText.length > typeText.length * 1.2)\n    ) {\n      return apparentText;\n    }\n    // #endregion\n\n    // #region Quatrième tentative: forcer l'expansion structurelle\n    const structuralTypeText = typeChecker.typeToString(\n      compilerType,\n      undefined,\n      TypeFormatFlags.WriteClassExpressionAsTypeLiteral |\n        TypeFormatFlags.UseStructuralFallback |\n        TypeFormatFlags.InElementType |\n        TypeFormatFlags.NoTruncation,\n    );\n\n    if (\n      structuralTypeText !== typeText &&\n      structuralTypeText !== fullyResolvedTypeText &&\n      !structuralTypeText.includes('import(') &&\n      structuralTypeText.includes('{')\n    ) {\n      return structuralTypeText;\n    }\n    // #endregion\n  } catch (error) {\n    console.warn(\n      `Erreur lors de la résolution du type ${typeText} : `,\n      error,\n    );\n  }\n\n  return typeText;\n}",
        declarationKind: 'variable',
      },
    ],
    text: `export { extractFromFile } from './extractFromFile';
export { findFirstCallExpression } from './findFirstCallExpression';
export { parseObject } from './parseObject';
export { resolveType } from './resolveType';
`,
  },
  'features.typescript.parseObject': {
    relativePath: 'features/typescript/parseObject.ts',
    imports: [
      {
        moduleSpecifier: 'ts-morph',
        kind: 'named',
        namedImports: ['Node', 'Project', 'SyntaxKind'],
      },
    ],
    exports: [
      {
        name: 'parseObject',
        kind: 'named',
        text: "parseObject = (objString: string): any => {\n  try {\n    const project = new Project();\n\n    // Créer un fichier temporaire avec l'objet\n    const tempFile = project.createSourceFile(\n      'temp.ts',\n      `\n      const obj = ${objString};\n      export default obj;\n    `,\n    );\n\n    // Obtenir la déclaration de variable\n    const variableDeclaration = tempFile.getVariableDeclaration('obj');\n    if (!variableDeclaration) return null;\n\n    const initializer = variableDeclaration.getInitializer();\n    if (\n      !initializer ||\n      initializer.getKind() !== SyntaxKind.ObjectLiteralExpression\n    ) {\n      return null;\n    }\n\n    // Fonction récursive pour parser l'objet\n    const parseNode = (node: Node): any => {\n      if (Node.isObjectLiteralExpression(node)) {\n        const obj: any = {};\n        node.getProperties().forEach((prop: any) => {\n          if (Node.isPropertyAssignment(prop)) {\n            const name = prop.getName();\n            const initializer = prop.getInitializer();\n            if (initializer) {\n              const value = parseNode(initializer);\n              obj[name] = value;\n            }\n          }\n        });\n        return obj;\n      }\n\n      if (Node.isArrayLiteralExpression(node)) {\n        return node\n          .getElements()\n          .map((element: any) => parseNode(element));\n      }\n\n      if (Node.isStringLiteral(node) || Node.isNumericLiteral(node)) {\n        return node.getLiteralValue();\n      }\n\n      if (Node.isTrueLiteral(node)) {\n        return true;\n      }\n\n      if (Node.isFalseLiteral(node)) {\n        return false;\n      }\n\n      if (Node.isNullLiteral(node)) {\n        return null;\n      }\n\n      if (Node.isIdentifier(node)) {\n        return node.getText();\n      }\n\n      return node.getText();\n    };\n\n    return parseNode(initializer);\n  } catch (error) {\n    console.error('Erreur avec ts-morph:', error);\n    return null;\n  }\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import { Node, Project, SyntaxKind } from 'ts-morph';

export const parseObject = (objString: string): any => {
  try {
    const project = new Project();

    // Créer un fichier temporaire avec l'objet
    const tempFile = project.createSourceFile(
      'temp.ts',
      \`
      const obj = $|||{objString};
      export default obj;
    \`,
    );

    // Obtenir la déclaration de variable
    const variableDeclaration = tempFile.getVariableDeclaration('obj');
    if (!variableDeclaration) return null;

    const initializer = variableDeclaration.getInitializer();
    if (
      !initializer ||
      initializer.getKind() !== SyntaxKind.ObjectLiteralExpression
    ) {
      return null;
    }

    // Fonction récursive pour parser l'objet
    const parseNode = (node: Node): any => {
      if (Node.isObjectLiteralExpression(node)) {
        const obj: any = {};
        node.getProperties().forEach((prop: any) => {
          if (Node.isPropertyAssignment(prop)) {
            const name = prop.getName();
            const initializer = prop.getInitializer();
            if (initializer) {
              const value = parseNode(initializer);
              obj[name] = value;
            }
          }
        });
        return obj;
      }

      if (Node.isArrayLiteralExpression(node)) {
        return node
          .getElements()
          .map((element: any) => parseNode(element));
      }

      if (Node.isStringLiteral(node) || Node.isNumericLiteral(node)) {
        return node.getLiteralValue();
      }

      if (Node.isTrueLiteral(node)) {
        return true;
      }

      if (Node.isFalseLiteral(node)) {
        return false;
      }

      if (Node.isNullLiteral(node)) {
        return null;
      }

      if (Node.isIdentifier(node)) {
        return node.getText();
      }

      return node.getText();
    };

    return parseNode(initializer);
  } catch (error) {
    console.error('Erreur avec ts-morph:', error);
    return null;
  }
};
`,
  },
  'features.typescript.resolveType': {
    relativePath: 'features/typescript/resolveType.ts',
    imports: [
      {
        moduleSpecifier: 'ts-morph',
        kind: 'named',
        namedImports: [
          'SymbolFlags',
          'TypeFormatFlags',
          'SourceFile',
          'Type',
        ],
      },
    ],
    exports: [
      {
        name: 'resolveType',
        kind: 'named',
        text: "resolveType = (\n  sourceFile: SourceFile,\n  type: Type,\n): string => {\n  const typeText = type.getText();\n\n  try {\n    // Accéder au compilateur TypeScript sous-jacent\n    const compilerType = type.compilerType;\n    const typeChecker = sourceFile\n      .getProject()\n      .getTypeChecker().compilerObject;\n\n    const fullyResolvedTypeText = typeChecker.typeToString(\n      compilerType,\n      undefined,\n      TypeFormatFlags.InTypeAlias |\n        TypeFormatFlags.WriteArrayAsGenericType |\n        TypeFormatFlags.UseStructuralFallback |\n        TypeFormatFlags.NoTruncation |\n        TypeFormatFlags.WriteClassExpressionAsTypeLiteral |\n        TypeFormatFlags.InElementType,\n    );\n\n    // #region Première  tentative: Si le type résolu est structurel\n    // contient des objets et aucun import\n    if (\n      fullyResolvedTypeText !== typeText &&\n      !fullyResolvedTypeText.includes('import(') &&\n      (fullyResolvedTypeText.includes('{') ||\n        fullyResolvedTypeText.length > typeText.length * 1.5)\n    ) {\n      return fullyResolvedTypeText;\n    }\n    // #endregion\n\n    // #region Deuxième tentative: résoudre les alias et types importés\n    const symbol = compilerType.symbol;\n\n    // Pour les types aliasés (comme TransformArgs)\n    if (symbol.flags & SymbolFlags.TypeAlias) {\n      const aliasResolvedTypeText = typeChecker.typeToString(\n        compilerType,\n        undefined,\n        TypeFormatFlags.InTypeAlias |\n          TypeFormatFlags.WriteClassExpressionAsTypeLiteral |\n          TypeFormatFlags.NoTruncation,\n      );\n\n      if (\n        aliasResolvedTypeText !== typeText &&\n        !aliasResolvedTypeText.includes('import(') &&\n        aliasResolvedTypeText.includes('{')\n      ) {\n        return aliasResolvedTypeText;\n      }\n    }\n\n    // Pour les types importés, essayer de résoudre le symbole aliasé\n    if (symbol.flags & SymbolFlags.Alias) {\n      const aliasedSymbol = typeChecker.getAliasedSymbol(symbol);\n      if (aliasedSymbol && aliasedSymbol !== symbol) {\n        const aliasedType = typeChecker.getTypeOfSymbolAtLocation(\n          aliasedSymbol,\n          aliasedSymbol.declarations?.[0] || sourceFile.compilerNode,\n        );\n\n        const resolvedAliasTypeText = typeChecker.typeToString(\n          aliasedType,\n          undefined,\n          TypeFormatFlags.InTypeAlias |\n            TypeFormatFlags.WriteClassExpressionAsTypeLiteral |\n            TypeFormatFlags.NoTruncation,\n        );\n\n        if (\n          resolvedAliasTypeText !== typeText &&\n          !resolvedAliasTypeText.includes('import(') &&\n          resolvedAliasTypeText.includes('{')\n        ) {\n          return resolvedAliasTypeText;\n        }\n      }\n    }\n    // #endregion\n\n    // #region Troisième tentative: type apparent pour révéler la structure cachée\n    const apparentType = typeChecker.getApparentType(compilerType);\n\n    const apparentText = typeChecker.typeToString(\n      apparentType,\n      undefined,\n      TypeFormatFlags.InTypeAlias |\n        TypeFormatFlags.WriteClassExpressionAsTypeLiteral |\n        TypeFormatFlags.UseStructuralFallback |\n        TypeFormatFlags.NoTruncation,\n    );\n\n    if (\n      apparentText !== typeText &&\n      !apparentText.includes('import(') &&\n      (apparentText.includes('{') ||\n        apparentText.length > typeText.length * 1.2)\n    ) {\n      return apparentText;\n    }\n    // #endregion\n\n    // #region Quatrième tentative: forcer l'expansion structurelle\n    const structuralTypeText = typeChecker.typeToString(\n      compilerType,\n      undefined,\n      TypeFormatFlags.WriteClassExpressionAsTypeLiteral |\n        TypeFormatFlags.UseStructuralFallback |\n        TypeFormatFlags.InElementType |\n        TypeFormatFlags.NoTruncation,\n    );\n\n    if (\n      structuralTypeText !== typeText &&\n      structuralTypeText !== fullyResolvedTypeText &&\n      !structuralTypeText.includes('import(') &&\n      structuralTypeText.includes('{')\n    ) {\n      return structuralTypeText;\n    }\n    // #endregion\n  } catch (error) {\n    console.warn(\n      `Erreur lors de la résolution du type ${typeText} : `,\n      error,\n    );\n  }\n\n  return typeText;\n}",
        declarationKind: 'variable',
      },
    ],
    text: `import {
  SymbolFlags,
  TypeFormatFlags,
  type SourceFile,
  type Type,
} from 'ts-morph';

export const resolveType = (
  sourceFile: SourceFile,
  type: Type,
): string => {
  const typeText = type.getText();

  try {
    // Accéder au compilateur TypeScript sous-jacent
    const compilerType = type.compilerType;
    const typeChecker = sourceFile
      .getProject()
      .getTypeChecker().compilerObject;

    const fullyResolvedTypeText = typeChecker.typeToString(
      compilerType,
      undefined,
      TypeFormatFlags.InTypeAlias |
        TypeFormatFlags.WriteArrayAsGenericType |
        TypeFormatFlags.UseStructuralFallback |
        TypeFormatFlags.NoTruncation |
        TypeFormatFlags.WriteClassExpressionAsTypeLiteral |
        TypeFormatFlags.InElementType,
    );

    // #region Première  tentative: Si le type résolu est structurel
    // contient des objets et aucun import
    if (
      fullyResolvedTypeText !== typeText &&
      !fullyResolvedTypeText.includes('import(') &&
      (fullyResolvedTypeText.includes('{') ||
        fullyResolvedTypeText.length > typeText.length * 1.5)
    ) {
      return fullyResolvedTypeText;
    }
    // #endregion

    // #region Deuxième tentative: résoudre les alias et types importés
    const symbol = compilerType.symbol;

    // Pour les types aliasés (comme TransformArgs)
    if (symbol.flags & SymbolFlags.TypeAlias) {
      const aliasResolvedTypeText = typeChecker.typeToString(
        compilerType,
        undefined,
        TypeFormatFlags.InTypeAlias |
          TypeFormatFlags.WriteClassExpressionAsTypeLiteral |
          TypeFormatFlags.NoTruncation,
      );

      if (
        aliasResolvedTypeText !== typeText &&
        !aliasResolvedTypeText.includes('import(') &&
        aliasResolvedTypeText.includes('{')
      ) {
        return aliasResolvedTypeText;
      }
    }

    // Pour les types importés, essayer de résoudre le symbole aliasé
    if (symbol.flags & SymbolFlags.Alias) {
      const aliasedSymbol = typeChecker.getAliasedSymbol(symbol);
      if (aliasedSymbol && aliasedSymbol !== symbol) {
        const aliasedType = typeChecker.getTypeOfSymbolAtLocation(
          aliasedSymbol,
          aliasedSymbol.declarations?.[0] || sourceFile.compilerNode,
        );

        const resolvedAliasTypeText = typeChecker.typeToString(
          aliasedType,
          undefined,
          TypeFormatFlags.InTypeAlias |
            TypeFormatFlags.WriteClassExpressionAsTypeLiteral |
            TypeFormatFlags.NoTruncation,
        );

        if (
          resolvedAliasTypeText !== typeText &&
          !resolvedAliasTypeText.includes('import(') &&
          resolvedAliasTypeText.includes('{')
        ) {
          return resolvedAliasTypeText;
        }
      }
    }
    // #endregion

    // #region Troisième tentative: type apparent pour révéler la structure cachée
    const apparentType = typeChecker.getApparentType(compilerType);

    const apparentText = typeChecker.typeToString(
      apparentType,
      undefined,
      TypeFormatFlags.InTypeAlias |
        TypeFormatFlags.WriteClassExpressionAsTypeLiteral |
        TypeFormatFlags.UseStructuralFallback |
        TypeFormatFlags.NoTruncation,
    );

    if (
      apparentText !== typeText &&
      !apparentText.includes('import(') &&
      (apparentText.includes('{') ||
        apparentText.length > typeText.length * 1.2)
    ) {
      return apparentText;
    }
    // #endregion

    // #region Quatrième tentative: forcer l'expansion structurelle
    const structuralTypeText = typeChecker.typeToString(
      compilerType,
      undefined,
      TypeFormatFlags.WriteClassExpressionAsTypeLiteral |
        TypeFormatFlags.UseStructuralFallback |
        TypeFormatFlags.InElementType |
        TypeFormatFlags.NoTruncation,
    );

    if (
      structuralTypeText !== typeText &&
      structuralTypeText !== fullyResolvedTypeText &&
      !structuralTypeText.includes('import(') &&
      structuralTypeText.includes('{')
    ) {
      return structuralTypeText;
    }
    // #endregion
  } catch (error) {
    console.warn(
      \`Erreur lors de la résolution du type $|||{typeText} : \`,
      error,
    );
  }

  return typeText;
};
`,
  },
  'globals.castings': {
    relativePath: 'globals/castings.ts',
    imports: [],
    exports: [
      {
        name: 'castings',
        kind: 'named',
        text: "export { castings as arrays } from '../features/arrays/castings/all';",
        moduleSpecifier: '../features/arrays/castings/all',
      },
      {
        name: 'castings',
        kind: 'named',
        text: "export { castings as common } from '../features/common/castings/all';",
        moduleSpecifier: '../features/common/castings/all',
      },
      {
        name: 'castings',
        kind: 'named',
        text: "export { castings as numbers } from '../features/numbers/castings/all';",
        moduleSpecifier: '../features/numbers/castings/all',
      },
      {
        name: 'castings',
        kind: 'named',
        text: "export { castings as objects } from '../features/objects/castings/all';",
        moduleSpecifier: '../features/objects/castings/all',
      },
      {
        name: 'castings',
        kind: 'named',
        text: "export { castings as strings } from '../features/strings/castings/all';",
        moduleSpecifier: '../features/strings/castings/all',
      },
      {
        name: 'arrays',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  low,\n  is,\n  indexes,\n  _length,\n  tuple,\n  reduce,\n  toArray,\n  reverse,\n  freeze,\n  extract,\n  exclude,\n  forceCast,\n  dynamic,\n  type,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'common',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  partial,\n  const: _const,\n  identity,\n  clone,\n  unknown: _unknown,\n  neverify,\n  readonly,\n  required,\n  date,\n  primitive,\n  symbol,\n  any,\n  is,\n  null: _null,\n  undefined: _undefined,\n  undefiny,\n  never,\n  defaulted,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'numbers',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  is,\n  getString,\n  digit,\n  type,\n  ZERO,\n  ONE,\n  MINUS_1,\n  bigint,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'objects',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  trueObject,\n  type,\n  keys,\n  values,\n  entries,\n  byKey,\n  hasKeys,\n  keyTypes,\n  omit,\n  reverse,\n  readonly,\n  freeze,\n  require,\n  pick,\n  ru,\n  ra,\n  primitive,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'strings',
        kind: 'named',
        text: 'castings = expandFn(_index, {\n  is,\n  instance,\n  type,\n  getLength,\n  startsWith,\n  endsWith,\n  includes,\n  contains,\n  toLowerCase,\n  toUpperCase,\n  letters,\n  add,\n  join,\n  splitBy,\n  DEFAULT_DELIMITER,\n})',
        declarationKind: 'variable',
      },
    ],
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
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from '../features/arrays/types';",
        moduleSpecifier: '../features/arrays/types',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from '../features/common/types';",
        moduleSpecifier: '../features/common/types',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from '../features/functions/types';",
        moduleSpecifier: '../features/functions/types',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from '../features/numbers/types';",
        moduleSpecifier: '../features/numbers/types',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from '../features/objects/types';",
        moduleSpecifier: '../features/objects/types',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from '../features/promises/types';",
        moduleSpecifier: '../features/promises/types',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from '../features/strings/types';",
        moduleSpecifier: '../features/strings/types',
      },
      {
        name: 'IndexesOfArray',
        kind: 'named',
        text: "export type IndexesOfArray<\n  T extends readonly unknown[],\n  S extends number[] = [],\n> = T['length'] extends S['length']\n  ? S[number]\n  : IndexesOfArray<T, [S['length'], ...S]>;",
        declarationKind: 'type',
      },
      {
        name: 'TupleOf',
        kind: 'named',
        text: 'export type TupleOf<T = any, N extends number = number> = N extends N\n  ? number extends N\n    ? T[]\n    : [..._TupleOf<T, N>]\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'ReverseArray',
        kind: 'named',
        text: 'export type ReverseArray<T extends RuA> = T extends any\n  ? T extends []\n    ? T\n    : T extends [infer Head, ...infer Tail]\n      ? [...ReverseArray<Tail>, Head]\n      : T\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'RuA',
        kind: 'named',
        text: 'export type RuA = readonly unknown[];',
        declarationKind: 'type',
      },
      {
        name: 'AnyArray',
        kind: 'named',
        text: 'export type AnyArray<T = unknown> = ReadonlyArray<T> | T[];',
        declarationKind: 'type',
      },
      {
        name: '_NArrayOmit',
        kind: 'named',
        text: 'export type _NArrayOmit<\n  T extends readonly object[],\n  K extends keyof T[number] = never,\n> = Extract<UnionOmit<T[number], K>, object>;',
        declarationKind: 'type',
      },
      {
        name: 'NArrayOmit',
        kind: 'named',
        text: 'export type NArrayOmit<\n  T extends readonly object[],\n  K extends keyof T[number] = never,\n> =\n  _NArrayOmit<T, K> extends infer N extends object\n    ? UnionToTuple<N>\n    : never;',
        declarationKind: 'type',
      },
      {
        name: 'ExtractArray',
        kind: 'named',
        text: 'export type ExtractArray<T extends AnyArray, U> = T extends readonly [\n  infer A,\n  ...infer B,\n]\n  ? A extends U\n    ? [A, ...ExtractArray<B, U>]\n    : [...ExtractArray<B, U>]\n  : [];',
        declarationKind: 'type',
      },
      {
        name: 'ExcludeArray',
        kind: 'named',
        text: 'export type ExcludeArray<T extends AnyArray, U> = T extends readonly [\n  infer A,\n  ...infer B,\n]\n  ? A extends U\n    ? ExcludeArray<B, U>\n    : [A, ...ExcludeArray<B, U>]\n  : [];',
        declarationKind: 'type',
      },
      {
        name: 'ReduceArray',
        kind: 'named',
        text: 'export type ReduceArray<T> = T extends AnyArray ? T[number] : T;',
        declarationKind: 'type',
      },
      {
        name: 'ReduceArrayS',
        kind: 'named',
        text: 'export type ReduceArrayS<T> = T extends AnyArray ? T[0] : T;',
        declarationKind: 'type',
      },
      {
        name: 'ReduceDeepArray',
        kind: 'named',
        text: 'export type ReduceDeepArray<T> =\n  ReduceArray<T> extends AnyArray\n    ? ReduceDeepArray<ReduceArray<T>>\n    : ReduceArray<T>;',
        declarationKind: 'type',
      },
      {
        name: 'ToArray',
        kind: 'named',
        text: 'export type ToArray<T> = T extends AnyArray ? T : AnyArray<T>;',
        declarationKind: 'type',
      },
      {
        name: 'RecursiveArrayOf',
        kind: 'named',
        text: 'export type RecursiveArrayOf<T> =\n  | Array<_SingleOrRecursiveArrayOf<T>>\n  | ReadonlyArray<_SingleOrRecursiveArrayOf<T>>;',
        declarationKind: 'type',
      },
      {
        name: 'SingleOrRecursiveArrayOf',
        kind: 'named',
        text: 'export type SingleOrRecursiveArrayOf<T> = T | RecursiveArrayOf<T>;',
        declarationKind: 'type',
      },
      {
        name: 'SoRa',
        kind: 'named',
        text: 'export type SoRa<T> = SingleOrRecursiveArrayOf<T>;',
        declarationKind: 'type',
      },
      {
        name: 'Primitive2',
        kind: 'named',
        text: 'export type Primitive2 = string | number | boolean;',
        declarationKind: 'type',
      },
      {
        name: 'Primitive',
        kind: 'named',
        text: 'export type Primitive = Primitive2 | undefined | null;',
        declarationKind: 'type',
      },
      {
        name: 'SingleOrArray',
        kind: 'named',
        text: 'export type SingleOrArray<T> = T | T[] | ReadonlyArray<T>;',
        declarationKind: 'type',
      },
      {
        name: 'SoA',
        kind: 'named',
        text: 'export type SoA<T> = SingleOrArray<T>;',
        declarationKind: 'type',
      },
      {
        name: 'PrimitiveObjectMap',
        kind: 'named',
        text: 'export type PrimitiveObjectMap = {\n  [key: Keys]: SoRa<_PrimitiveObject>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'PrimitiveObject',
        kind: 'named',
        text: 'export type PrimitiveObject = SoRa<_PrimitiveObject>;',
        declarationKind: 'type',
      },
      {
        name: 'NExtract',
        kind: 'named',
        text: 'export type NExtract<T, U extends T> = Extract<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'NExclude',
        kind: 'named',
        text: 'export type NExclude<T, U extends T> = Exclude<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'NotUndefined',
        kind: 'named',
        text: 'export type NotUndefined<T> = Exclude<T, undefined>;',
        declarationKind: 'type',
      },
      {
        name: 'Nu',
        kind: 'named',
        text: 'export type Nu<T> = NotUndefined<T>;',
        declarationKind: 'type',
      },
      {
        name: 'Undefiny',
        kind: 'named',
        text: 'export type Undefiny<T> = T | undefined;',
        declarationKind: 'type',
      },
      {
        name: 'Un',
        kind: 'named',
        text: 'export type Un<T> = Undefiny<T>;',
        declarationKind: 'type',
      },
      {
        name: 'Cast',
        kind: 'named',
        text: 'export type Cast<A, B> = A extends B ? A : B;',
        declarationKind: 'type',
      },
      {
        name: 'Keys',
        kind: 'named',
        text: 'export type Keys = keyof any;',
        declarationKind: 'type',
      },
      {
        name: 'TypeStrings',
        kind: 'named',
        text: "export type TypeStrings =\n  | 'string'\n  | 'number'\n  | 'boolean'\n  | 'bigint'\n  | 'symbol'\n  | 'undefined'\n  | 'object'\n  | 'function';",
        declarationKind: 'type',
      },
      {
        name: 'KeyTypes',
        kind: 'named',
        text: 'export type KeyTypes = {\n  [K in Keys]: TypeStrings | Checker2 | KeyTypes;\n};',
        declarationKind: 'type',
      },
      {
        name: 'KeyTypesFrom',
        kind: 'named',
        text: 'export type KeyTypesFrom<T extends KeyTypes> = {\n  [K in keyof T]: T[K] extends KeyTypes\n    ? KeyTypesFrom<T[K]>\n    : T[K] extends TypeStrings\n      ? TransformO<T[K]>\n      : T[K] extends Checker2<infer R>\n        ? R\n        : unknown;\n};',
        declarationKind: 'type',
      },
      {
        name: 'NonN',
        kind: 'named',
        text: 'export type NonN<T> = T extends undefined | null ? any : NonNullable<T>;',
        declarationKind: 'type',
      },
      {
        name: 'Defaulted',
        kind: 'named',
        text: 'export type Defaulted<T, U extends NonN<T>> = undefined extends T\n  ? U\n  : null extends T\n    ? U\n    : never extends T\n      ? U\n      : T;',
        declarationKind: 'type',
      },
      {
        name: 'UnionKeys',
        kind: 'named',
        text: 'export type UnionKeys<U> = U extends Record<infer K, any> ? K : never;',
        declarationKind: 'type',
      },
      {
        name: '_UnionToIntersection1',
        kind: 'named',
        text: 'export type _UnionToIntersection1<U> = boolean extends U\n  ? U\n  : (U extends any ? (k: U) => void : never) extends (k: infer I) => void\n    ? I\n    : never;',
        declarationKind: 'type',
      },
      {
        name: '_UnionToIntersection2',
        kind: 'named',
        text: 'export type _UnionToIntersection2<U> = {\n  [K in UnionKeys<U>]: U extends Record<K, infer T> ? T : never;\n};',
        declarationKind: 'type',
      },
      {
        name: 'UnionToIntersection',
        kind: 'named',
        text: 'export type UnionToIntersection<U> = _UnionToIntersection2<\n  _UnionToIntersection1<U>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'UnionOmit',
        kind: 'named',
        text: 'export type UnionOmit<T, K extends Keys> = T extends any\n  ? Omit<T, K>\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'UnionNOmit',
        kind: 'named',
        text: 'export type UnionNOmit<T, K extends keyof T> = UnionOmit<T, K>;',
        declarationKind: 'type',
      },
      {
        name: 'LastOfUnion',
        kind: 'named',
        text: 'export type LastOfUnion<T> = (\n  (T extends any ? (x: () => T) => void : never) extends (\n    x: infer I,\n  ) => void\n    ? I\n    : never\n) extends () => infer U\n  ? U\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'UnionToTuple',
        kind: 'named',
        text: 'export type UnionToTuple<T, A extends any[] = []> = [T] extends [never]\n  ? A\n  : UnionToTuple<Exclude<T, LastOfUnion<T>>, [LastOfUnion<T>, ...A]>;',
        declarationKind: 'type',
      },
      {
        name: 'Checker2',
        kind: 'named',
        text: 'export type Checker2<T = unknown> = (value: unknown) => value is T;',
        declarationKind: 'type',
      },
      {
        name: 'Equals',
        kind: 'named',
        text: 'export type Equals<T, U> = T extends U\n  ? U extends T\n    ? true\n    : false\n  : false;',
        declarationKind: 'type',
      },
      {
        name: 'Classe',
        kind: 'named',
        text: 'export type Classe = {\n  [Symbol.hasInstance]: Fn<any, boolean>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'Fn',
        kind: 'named',
        text: 'export type Fn<Args extends any[] = any[], R = any> = (...args: Args) => R;',
        declarationKind: 'type',
      },
      {
        name: 'FnBasic',
        kind: 'named',
        text: 'export type FnBasic<Main extends Fn, Tr extends object> = Tr & Main;',
        declarationKind: 'type',
      },
      {
        name: 'Checker',
        kind: 'named',
        text: 'export type Checker<T = unknown> =\n  | ((value: unknown) => value is T)\n  | Fn<[unknown], boolean>;',
        declarationKind: 'type',
      },
      {
        name: 'ToString',
        kind: 'named',
        text: 'export type ToString<T extends number | string> = `${T}`;',
        declarationKind: 'type',
      },
      {
        name: 'Digit',
        kind: 'named',
        text: 'export type Digit = (typeof DIGITS)[number];',
        declarationKind: 'type',
      },
      {
        name: 'TrueObject',
        kind: 'named',
        text: "export type TrueObject = Ru & {\n  [Symbol.iterator]?: never;\n  //@ts-expect-error - 'SymbolConstructor' does not exist on type 'object'\n  [SymbolConstructor]?: never;\n};",
        declarationKind: 'type',
      },
      {
        name: 'To',
        kind: 'named',
        text: 'export type To = TrueObject;',
        declarationKind: 'type',
      },
      {
        name: 'NOmit',
        kind: 'named',
        text: 'export type NOmit<T, K extends keyof T> = Omit<T, K>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepOmit',
        kind: 'named',
        text: 'export type DeepOmit<T, K extends Keys> = {\n  [P in Exclude<keyof T, K>]: T[P] extends Fn\n    ? T[P]\n    : T[P] extends object\n      ? DeepOmit<T[P], K>\n      : T[P];\n};',
        declarationKind: 'type',
      },
      {
        name: 'ReverseMap',
        kind: 'named',
        text: 'export type ReverseMap<T extends Record<Keys, Keys>> = {\n  [K in keyof T as T[K]]: K;\n};',
        declarationKind: 'type',
      },
      {
        name: 'DeepReadonly',
        kind: 'named',
        text: 'export type DeepReadonly<T> = T extends Primitive\n  ? T\n  : {\n      readonly [P in keyof T]: T[P] extends Fn\n        ? T[P]\n        : T[P] extends object\n          ? DeepReadonly<T[P]>\n          : T[P];\n    };',
        declarationKind: 'type',
      },
      {
        name: 'DeepPartial',
        kind: 'named',
        text: 'export type DeepPartial<T> = T extends Primitive\n  ? T\n  : {\n      [P in keyof T]?: T[P] extends Fn\n        ? T[P]\n        : T[P] extends object\n          ? DeepPartial<T[P]>\n          : T[P];\n    };',
        declarationKind: 'type',
      },
      {
        name: 'DeepRequired',
        kind: 'named',
        text: 'export type DeepRequired<T extends object | undefined> = NotUndefined<{\n  [P in keyof T]-?: T[P] extends Fn\n    ? T[P]\n    : T[P] extends object\n      ? DeepRequired<T[P]>\n      : T[P];\n}>;',
        declarationKind: 'type',
      },
      {
        name: 'NotReadonly',
        kind: 'named',
        text: 'export type NotReadonly<T extends object> = {\n  -readonly [P in keyof T]: T[P];\n};',
        declarationKind: 'type',
      },
      {
        name: 'DeepNotReadonly',
        kind: 'named',
        text: 'export type DeepNotReadonly<T extends object> = {\n  -readonly [P in keyof T]: T[P] extends Fn\n    ? T[P]\n    : T[P] extends object\n      ? DeepNotReadonly<T[P]>\n      : T[P];\n};',
        declarationKind: 'type',
      },
      {
        name: 'ValuesOf',
        kind: 'named',
        text: 'export type ValuesOf<T, U = any> = Extract<T[keyof T], U>;',
        declarationKind: 'type',
      },
      {
        name: 'ObjectValuesOf',
        kind: 'named',
        text: 'export type ObjectValuesOf<T> = Exclude<\n  Extract<ValuesOf<T>, object>,\n  Array<any>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'ExpressO',
        kind: 'named',
        text: 'export type ExpressO<T extends object> = {\n  [K in keyof T]: T[K];\n};',
        declarationKind: 'type',
      },
      {
        name: 'DeepExpressO',
        kind: 'named',
        text: 'export type DeepExpressO<T extends object> =\n  ExpressO<T> extends infer P1\n    ? {\n        [K in keyof P1]: P1[K] extends object\n          ? DeepExpressO<P1[K]>\n          : P1[K];\n      }\n    : never;',
        declarationKind: 'type',
      },
      {
        name: 'RequiredLow',
        kind: 'named',
        text: 'export type RequiredLow<T extends object> = ExpressO<_RequiredLow<T>>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepRequiredLow',
        kind: 'named',
        text: 'export type DeepRequiredLow<T extends object> =\n  RequiredLow<T> extends infer P1\n    ? {\n        [K1 in keyof P1]: Exclude<\n          P1[K1],\n          undefined\n        > extends infer P2 extends object\n          ? DeepRequiredLow<P2>\n          : P1[K1];\n      }\n    : never;',
        declarationKind: 'type',
      },
      {
        name: 'Require',
        kind: 'named',
        text: 'export type Require<T, K extends keyof T> = NOmit<T, K> &\n  Required<Pick<T, K>>;',
        declarationKind: 'type',
      },
      {
        name: 'RequiredBy',
        kind: 'named',
        text: 'export type RequiredBy<T, U> = Required<PickBy<T, U>> & PickNotBy<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'Prop',
        kind: 'named',
        text: 'export type Prop<T, K> = K extends keyof T ? T[K] : never;',
        declarationKind: 'type',
      },
      {
        name: 'PickNoInfer',
        kind: 'named',
        text: 'export type PickNoInfer<T, S> = Pick<T, Extract<keyof T, S>>;',
        declarationKind: 'type',
      },
      {
        name: 'PickBy',
        kind: 'named',
        text: 'export type PickBy<T, U> = {\n  [P in keyof T as T[P] extends U ? P : never]: Extract<T[P], U>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'PickKeysBy',
        kind: 'named',
        text: 'export type PickKeysBy<T, U> = keyof PickBy<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'PickNotBy',
        kind: 'named',
        text: 'export type PickNotBy<T, U> = {\n  [P in keyof T as T[P] extends U ? never : P]: Exclude<T[P], U>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'PickKeysNotBy',
        kind: 'named',
        text: 'export type PickKeysNotBy<T, U> = keyof PickNotBy<T, U>;',
        declarationKind: 'type',
      },
      {
        name: 'OnPropChangedMethods',
        kind: 'named',
        text: "export type OnPropChangedMethods<T, I extends keyof T = keyof T> = T & {\n  [K in Extract<PickKeysBy<T, (...args: any) => any>, I> &\n    string as AddString<Capitalize<K>, 'on', 'Changed'>]: (\n    cb: (newValue: T[K]) => void,\n  ) => void;\n};",
        declarationKind: 'type',
      },
      {
        name: 'PartialUndefiny',
        kind: 'named',
        text: 'export type PartialUndefiny<T> = PickNotBy<T, undefined> &\n  Partial<PickBy<T, undefined>>;',
        declarationKind: 'type',
      },
      {
        name: 'Nullify',
        kind: 'named',
        text: 'export type Nullify<T> = PickNotBy<T, null> & Partial<PickBy<T, null>>;',
        declarationKind: 'type',
      },
      {
        name: 'OmitRecursive',
        kind: 'named',
        text: 'export type OmitRecursive<T, O extends string> = {\n  [key in keyof _OmitWithPartial<T, O>]: _OmitWithPartial<T[key], O>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'Unionize',
        kind: 'named',
        text: 'export type Unionize<T extends Record<string, any>> = {\n  [P in keyof T]: { [Q in P]: T[P] };\n}[keyof T];',
        declarationKind: 'type',
      },
      {
        name: '_FlatMapByKey',
        kind: 'named',
        text: "export type _FlatMapByKey<\n  T extends object,\n  _omit extends PickKeysBy<T, object>,\n  _withChildren extends boolean = false,\n  Delimiter extends string = '.',\n  Keys extends string = '',\n  K extends string = keyof T[_omit] & string,\n> = T extends {\n  [Key in _omit]?: any;\n}\n  ? K extends keyof T[_omit]\n    ? T[_omit][K] extends infer TK extends object\n      ?\n          | _FlatMapByKey<\n              TK,\n              _omit,\n              _withChildren,\n              Delimiter,\n              `${Keys}${Delimiter}${K}`\n            >\n          | {\n              [key in DefaultK<Keys, Delimiter>]: WithChildren<\n                T,\n                _omit,\n                _withChildren\n              >;\n            }\n      : {\n          [key in DefaultK<Keys, Delimiter>]: WithChildren<\n            T,\n            _omit,\n            _withChildren\n          >;\n        }\n    : never\n  : {\n      [key in DefaultK<Keys, Delimiter>]: WithChildren<\n        T,\n        _omit,\n        _withChildren\n      >;\n    };",
        declarationKind: 'type',
      },
      {
        name: 'AllowedNames',
        kind: 'named',
        text: 'export type AllowedNames<Base, Condition> = FilterFlags<\n  Base,\n  Condition\n>[keyof Base];',
        declarationKind: 'type',
      },
      {
        name: 'NotAllowedNames',
        kind: 'named',
        text: 'export type NotAllowedNames<Base, Condition> = NotFilterFlags<\n  Base,\n  Condition\n>[keyof Base];',
        declarationKind: 'type',
      },
      {
        name: 'AllowedNamesLow',
        kind: 'named',
        text: 'export type AllowedNamesLow<Base, Condition> = FilterFlagsLow<\n  Base,\n  Condition\n>[keyof Base];',
        declarationKind: 'type',
      },
      {
        name: 'NotAllowedNamesLow',
        kind: 'named',
        text: 'export type NotAllowedNamesLow<Base, Condition> = NotFilterFlagsLow<\n  Base,\n  Condition\n>[keyof Base];',
        declarationKind: 'type',
      },
      {
        name: 'SubType',
        kind: 'named',
        text: 'export type SubType<Base extends object, Condition> = Pick<\n  Base,\n  AllowedNames<Base, Condition>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepSubType',
        kind: 'named',
        text: 'export type DeepSubType<Base extends object, Condition> = {\n  [K in keyof Base as K extends AllowedNames<Base, Condition>\n    ? K\n    : never]: Base[K] extends object\n    ? DeepSubType<Base[K], Condition>\n    : Base[K];\n};',
        declarationKind: 'type',
      },
      {
        name: 'NotSubType',
        kind: 'named',
        text: 'export type NotSubType<Base extends object, Condition> = Pick<\n  Base,\n  NotAllowedNames<Base, Condition>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepNotSubType',
        kind: 'named',
        text: 'export type DeepNotSubType<Base extends object, Condition> = {\n  [K in keyof Base as K extends NotAllowedNames<Base, Condition>\n    ? K\n    : never]: Base[K] extends object\n    ? DeepNotSubType<Base[K], Condition>\n    : Base[K];\n};',
        declarationKind: 'type',
      },
      {
        name: 'SubTypeLow',
        kind: 'named',
        text: 'export type SubTypeLow<Base extends object, Condition> = Pick<\n  Base,\n  AllowedNamesLow<Base, Condition>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'NotSubTypeLow',
        kind: 'named',
        text: 'export type NotSubTypeLow<Base extends object, Condition> = Pick<\n  Base,\n  NotAllowedNamesLow<Base, Condition>\n>;',
        declarationKind: 'type',
      },
      {
        name: 'DeepNever',
        kind: 'named',
        text: 'export type DeepNever = never | _Never;',
        declarationKind: 'type',
      },
      {
        name: 'Dn',
        kind: 'named',
        text: 'export type Dn = DeepNever;',
        declarationKind: 'type',
      },
      {
        name: 'Neverify',
        kind: 'named',
        text: 'export type Neverify<T> = T extends DeepNever ? never : T;',
        declarationKind: 'type',
      },
      {
        name: 'Ru',
        kind: 'named',
        text: 'export type Ru = Record<Keys, unknown>;',
        declarationKind: 'type',
      },
      {
        name: 'Rn',
        kind: 'named',
        text: 'export type Rn = Record<Keys, never>;',
        declarationKind: 'type',
      },
      {
        name: 'Ra',
        kind: 'named',
        text: 'export type Ra = Record<Keys, any>;',
        declarationKind: 'type',
      },
      {
        name: 'PromisifyMethod',
        kind: 'named',
        text: 'export type PromisifyMethod<T> = T extends (...args: infer P) => infer R\n  ? R extends Promise<any>\n    ? T\n    : (...args: P) => Promise<R>\n  : never;',
        declarationKind: 'type',
      },
      {
        name: 'PromisifyObject',
        kind: 'named',
        text: 'export type PromisifyObject<T extends Record<string, unknown>> = T & {\n  [P in keyof T as PromisifyMethod<T[P]> extends never\n    ? never\n    : `${string & P}Async`]: PromisifyMethod<T[P]>;\n};',
        declarationKind: 'type',
      },
      {
        name: 'LowerLetters',
        kind: 'named',
        text: 'export type LowerLetters = (typeof ENGLISH_LETTERS)[number];',
        declarationKind: 'type',
      },
      {
        name: 'UpperLetters',
        kind: 'named',
        text: 'export type UpperLetters = Uppercase<LowerLetters>;',
        declarationKind: 'type',
      },
      {
        name: 'Letters',
        kind: 'named',
        text: 'export type Letters = UpperLetters | LowerLetters;',
        declarationKind: 'type',
      },
      {
        name: 'Email',
        kind: 'named',
        text: 'export type Email = `${string}@${string}.${string}`;',
        declarationKind: 'type',
      },
      {
        name: '_JoinStringHelper',
        kind: 'named',
        text: 'export type _JoinStringHelper = string | number | boolean | bigint;',
        declarationKind: 'type',
      },
      {
        name: 'JoinString',
        kind: 'named',
        text: "export type JoinString<\n  T extends readonly string[],\n  sep extends string = ' ',\n> = T extends []\n  ? ''\n  : T extends [_JoinStringHelper]\n    ? `${T[0]}`\n    : T extends [_JoinStringHelper, ...infer U extends readonly string[]]\n      ? `${T[0]}${sep}${JoinString<U, sep>}`\n      : string;",
        declarationKind: 'type',
      },
      {
        name: 'AddString',
        kind: 'named',
        text: "export type AddString<\n  T,\n  Before extends string = '',\n  After extends string = '',\n> = `${Before}${T & string}${After}`;",
        declarationKind: 'type',
      },
      {
        name: 'StringEndWith',
        kind: 'named',
        text: 'export type StringEndWith<\n  S extends string,\n  E extends string,\n> = S extends `${infer Prev}${E}`\n  ? { response: true; full: S; prev: Prev }\n  : { response: false; full: S; prev: S };',
        declarationKind: 'type',
      },
      {
        name: 'StringStartWith',
        kind: 'named',
        text: 'export type StringStartWith<\n  S extends string,\n  E extends string,\n> = S extends `${E}${infer Next}`\n  ? { response: true; full: S; next: Next }\n  : { response: false; full: S; next: S };',
        declarationKind: 'type',
      },
      {
        name: 'StringContains',
        kind: 'named',
        text: 'export type StringContains<\n  S extends string,\n  E extends string,\n> = S extends `${infer Prev}${E}${infer Next}`\n  ? { response: true; full: S; prev: Prev; next: Next }\n  : { response: false; full: S; prev: string; next: string };',
        declarationKind: 'type',
      },
      {
        name: 'SplitStringBy',
        kind: 'named',
        text: "export type SplitStringBy<\n  S extends string,\n  By extends string = '.',\n> = string extends S\n  ? string[]\n  : S extends ''\n    ? []\n    : S extends `${infer T}${By}${infer U}`\n      ? [T, ...SplitStringBy<U, By>]\n      : [S];",
        declarationKind: 'type',
      },
      {
        name: 'ExtractS',
        kind: 'named',
        text: 'export type ExtractS<T> = Extract<T, string>;',
        declarationKind: 'type',
      },
    ],
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
    exports: [
      {
        name: 'typings',
        kind: 'named',
        text: "export { typings as arrays } from '../features/arrays/typings/all';",
        moduleSpecifier: '../features/arrays/typings/all',
      },
      {
        name: 'typings',
        kind: 'named',
        text: "export { typings as common } from '../features/common/typings/all';",
        moduleSpecifier: '../features/common/typings/all',
      },
      {
        name: 'typings',
        kind: 'named',
        text: "export { typings as numbers } from '../features/numbers/typings/all';",
        moduleSpecifier: '../features/numbers/typings/all',
      },
      {
        name: 'typings',
        kind: 'named',
        text: "export { typings as objects } from '../features/objects/typings/all';",
        moduleSpecifier: '../features/objects/typings/all',
      },
      {
        name: 'typings',
        kind: 'named',
        text: "export { typings as strings } from '../features/strings/typings/all';",
        moduleSpecifier: '../features/strings/typings/all',
      },
      {
        name: 'arrays',
        kind: 'named',
        text: 'typings = typeFn<Array<unknown>>()({\n  low,\n  is,\n  indexes,\n  _length,\n  tuple,\n  reduce,\n  reverse,\n  toArray,\n  freeze,\n  extract,\n  exclude,\n  forceCast,\n  dynamic,\n  type,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'common',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  partial,\n  const: _const,\n  identity,\n  unknown,\n  neverify,\n  any,\n  required,\n  readonly,\n  primitive,\n  symbol,\n  date,\n  undefiny,\n  extract,\n  exclude,\n  union,\n  null: _null,\n  undefined: _undefined,\n  never,\n  keys,\n  defaulted,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'numbers',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  getString,\n  digit,\n  ZERO,\n  ONE,\n  MINUS_1,\n  bigint,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'objects',
        kind: 'named',
        text: 'typings = typeFn<object>()({\n  trueObject,\n  keys,\n  values,\n  entries,\n  byKey,\n  keyTypes,\n  hasKeys,\n  omit,\n  pick,\n  reverse,\n  readonly,\n  freeze,\n  require,\n  ru,\n  rn,\n  ra,\n  primitive,\n})',
        declarationKind: 'variable',
      },
      {
        name: 'strings',
        kind: 'named',
        text: 'typings = expandFn(_index, {\n  add,\n  contains,\n  email,\n  endsWith,\n  getLength,\n  includes,\n  instance,\n  join,\n  letters,\n  splitBy,\n  startsWith,\n  toLowerCase,\n  toUpperCase,\n})',
        declarationKind: 'variable',
      },
    ],
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
    exports: [
      {
        name: '_unknown',
        kind: 'named',
        text: '_unknown = <T>(value?: unknown) => value as T',
        declarationKind: 'variable',
      },
    ],
    text: `export const _unknown = <T>(value?: unknown) => value as T;
`,
  },
  'globals.utils.castFn': {
    relativePath: 'globals/utils/castFn.ts',
    imports: [
      {
        moduleSpecifier: '#types',
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
    exports: [
      {
        name: 'castFn',
        kind: 'named',
        text: 'castFn = <T>() => {\n  const _out = <const Tr extends object = object>(extensions?: Tr) => {\n    const out = expandFn((arg: T) => arg, {\n      ...(extensions as Tr),\n      forceCast: (arg: unknown) => {\n        return _unknown<T>(arg);\n      },\n      dynamic: <U extends T>(arg: U) => {\n        return arg;\n      },\n    });\n    return out;\n  };\n  return _out;\n}',
        declarationKind: 'variable',
      },
      {
        name: 'castFn',
        kind: 'named',
        text: 'castFn',
      },
    ],
    text: `import type { RuA } from '#types';
import { _unknown } from './_unknown';
import { expandFn } from './expandFn';
import { mergeIs } from './is/merge';

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
    exports: [
      {
        name: 'expandFn',
        kind: 'named',
        text: 'expandFn = <\n  Main extends Fn,\n  const Tr extends object = object,\n>(\n  main: Main,\n  extensions?: Tr,\n): FnBasic<Main, Tr> => {\n  const out: any = main;\n\n  if (extensions) {\n    Object.assign(out, extensions);\n  }\n\n  return out;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { Fn, FnBasic } from '../../features/functions/types';

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
    exports: [
      {
        name: 'identity',
        kind: 'named',
        text: 'identity = <T>(value: T) => value',
        declarationKind: 'variable',
      },
    ],
    text: `export const identity = <T>(value: T) => value;
`,
  },

  'globals.utils.index': {
    relativePath: 'globals/utils/index.ts',
    imports: [],
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './_unknown';",
        moduleSpecifier: './_unknown',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './castFn';",
        moduleSpecifier: './castFn',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './expandFn';",
        moduleSpecifier: './expandFn',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './identity';",
        moduleSpecifier: './identity',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './is';",
        moduleSpecifier: './is',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './typeFn';",
        moduleSpecifier: './typeFn',
      },
      {
        name: '_unknown',
        kind: 'named',
        text: '_unknown = <T>(value?: unknown) => value as T',
        declarationKind: 'variable',
      },
      {
        name: 'castFn',
        kind: 'named',
        text: 'castFn = <T>() => {\n  const _out = <const Tr extends object = object>(extensions?: Tr) => {\n    const out = expandFn((arg: T) => arg, {\n      ...(extensions as Tr),\n      forceCast: (arg: unknown) => {\n        return _unknown<T>(arg);\n      },\n      dynamic: <U extends T>(arg: U) => {\n        return arg;\n      },\n    });\n    return out;\n  };\n  return _out;\n}',
        declarationKind: 'variable',
      },
      {
        name: 'castFn',
        kind: 'named',
        text: 'castFn',
      },
      {
        name: 'expandFn',
        kind: 'named',
        text: 'expandFn = <\n  Main extends Fn,\n  const Tr extends object = object,\n>(\n  main: Main,\n  extensions?: Tr,\n): FnBasic<Main, Tr> => {\n  const out: any = main;\n\n  if (extensions) {\n    Object.assign(out, extensions);\n  }\n\n  return out;\n}',
        declarationKind: 'variable',
      },
      {
        name: 'identity',
        kind: 'named',
        text: 'identity = <T>(value: T) => value',
        declarationKind: 'variable',
      },
      {
        name: 'isFn',
        kind: 'named',
        text: 'isFn = <const T>(check: T) => {\n  return (value: unknown): value is T => {\n    return typeof value === check;\n  };\n}',
        declarationKind: 'variable',
      },
      {
        name: 'isTypeFn',
        kind: 'named',
        text: "isTypeFn = <T extends PrimitiveS | 'object'>(type: T) => {\n  return (value: unknown): value is TransformO<T> => {\n    return typeof value === type;\n  };\n}",
        declarationKind: 'variable',
      },
      {
        name: 'isInstance',
        kind: 'named',
        text: 'isInstance = <T extends Classe>(instance: T) => {\n  return (value: unknown): value is T => {\n    return value instanceof instance;\n  };\n}',
        declarationKind: 'variable',
      },
      {
        name: 'mergeIs',
        kind: 'named',
        text: 'mergeIs = expandFn(\n  <const T extends unknown[]>(...checks: T) => {\n    return (value: unknown): value is T[number] => {\n      return checks.some(check => value === check);\n    };\n  },\n  {\n    type: <const T extends unknown[]>(...checks: T) => {\n      return (value: unknown): value is T[number] => {\n        return checks.some(check => typeof value === check);\n      };\n    },\n  },\n)',
        declarationKind: 'variable',
      },
      {
        name: 'isPlainObject',
        kind: 'named',
        text: "isPlainObject = (value: any): value is object => {\n  return (\n    Object.prototype.toString.call(value) == '[object Object]' &&\n    value.constructor &&\n    value.constructor.name == 'Object'\n  );\n}",
        declarationKind: 'variable',
      },
      {
        name: 'isPrimitive',
        kind: 'named',
        text: 'isPrimitive = (value: unknown): value is Primitive => {\n  const isType = mergeIs.type(...PRIMITIVES);\n  const isValue = mergeIs(null, undefined);\n  return isType(value) || isValue(value);\n}',
        declarationKind: 'variable',
      },
      {
        name: 'isPrimitiveObject',
        kind: 'named',
        text: 'isPrimitiveObject = (\n  object: any,\n): object is PrimitiveObject => {\n  const isObject = isPlainObject(object);\n  if (isObject) {\n    for (const key in object) {\n      if (Object.prototype.hasOwnProperty.call(object, key)) {\n        const element = (object as any)[key];\n        const isPrimitiveMap = isPrimitiveObject(element);\n        if (!isPrimitiveMap) return false;\n      }\n    }\n    return true;\n  }\n\n  const isArray = Array.isArray(object);\n  if (isArray) {\n    for (const item of object) {\n      const isPrimitiveMap = isPrimitiveObject(item);\n      if (!isPrimitiveMap) return false;\n    }\n    return true;\n  }\n\n  return isPrimitive(object);\n}',
        declarationKind: 'variable',
      },
      {
        name: 'typeFn',
        kind: 'named',
        text: 'typeFn = <T = any>() => {\n  const _out = <Tr extends object = object>(extensions?: Tr) => {\n    const out = expandFn((_?: T) => _unknown<T>(), {\n      ...(extensions as Tr),\n      forceCast: (_?: unknown) => _unknown<T>(),\n      dynamic: <U extends T>(_?: U) => _unknown<U>(),\n      is: <U>(_?: U) => _unknown<U extends T ? true : false>(),\n      type: _unknown<T>(),\n    });\n\n    return out;\n  };\n\n  return _out;\n}',
        declarationKind: 'variable',
      },
    ],
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
        moduleSpecifier: '#features/transform/types',
        kind: 'named',
        namedImports: ['PrimitiveS', 'TransformO'],
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Classe'],
      },
    ],
    exports: [
      {
        name: 'isFn',
        kind: 'named',
        text: 'isFn = <const T>(check: T) => {\n  return (value: unknown): value is T => {\n    return typeof value === check;\n  };\n}',
        declarationKind: 'variable',
      },
      {
        name: 'isTypeFn',
        kind: 'named',
        text: "isTypeFn = <T extends PrimitiveS | 'object'>(type: T) => {\n  return (value: unknown): value is TransformO<T> => {\n    return typeof value === type;\n  };\n}",
        declarationKind: 'variable',
      },
      {
        name: 'isInstance',
        kind: 'named',
        text: 'isInstance = <T extends Classe>(instance: T) => {\n  return (value: unknown): value is T => {\n    return value instanceof instance;\n  };\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { PrimitiveS, TransformO } from '#features/transform/types';
import type { Classe } from '#types';

export const isFn = <const T>(check: T) => {
  return (value: unknown): value is T => {
    return typeof value === check;
  };
};

export const isTypeFn = <T extends PrimitiveS | 'object'>(type: T) => {
  return (value: unknown): value is TransformO<T> => {
    return typeof value === type;
  };
};

export const isInstance = <T extends Classe>(instance: T) => {
  return (value: unknown): value is T => {
    return value instanceof instance;
  };
};
`,
  },
  'globals.utils.is.index': {
    relativePath: 'globals/utils/is/index.ts',
    imports: [],
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './_default';",
        moduleSpecifier: './_default',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './merge';",
        moduleSpecifier: './merge',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './object';",
        moduleSpecifier: './object',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './primitive';",
        moduleSpecifier: './primitive',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './primitive.object';",
        moduleSpecifier: './primitive.object',
      },
      {
        name: 'isFn',
        kind: 'named',
        text: 'isFn = <const T>(check: T) => {\n  return (value: unknown): value is T => {\n    return typeof value === check;\n  };\n}',
        declarationKind: 'variable',
      },
      {
        name: 'isTypeFn',
        kind: 'named',
        text: "isTypeFn = <T extends PrimitiveS | 'object'>(type: T) => {\n  return (value: unknown): value is TransformO<T> => {\n    return typeof value === type;\n  };\n}",
        declarationKind: 'variable',
      },
      {
        name: 'isInstance',
        kind: 'named',
        text: 'isInstance = <T extends Classe>(instance: T) => {\n  return (value: unknown): value is T => {\n    return value instanceof instance;\n  };\n}',
        declarationKind: 'variable',
      },
      {
        name: 'mergeIs',
        kind: 'named',
        text: 'mergeIs = expandFn(\n  <const T extends unknown[]>(...checks: T) => {\n    return (value: unknown): value is T[number] => {\n      return checks.some(check => value === check);\n    };\n  },\n  {\n    type: <const T extends unknown[]>(...checks: T) => {\n      return (value: unknown): value is T[number] => {\n        return checks.some(check => typeof value === check);\n      };\n    },\n  },\n)',
        declarationKind: 'variable',
      },
      {
        name: 'isPlainObject',
        kind: 'named',
        text: "isPlainObject = (value: any): value is object => {\n  return (\n    Object.prototype.toString.call(value) == '[object Object]' &&\n    value.constructor &&\n    value.constructor.name == 'Object'\n  );\n}",
        declarationKind: 'variable',
      },
      {
        name: 'isPrimitive',
        kind: 'named',
        text: 'isPrimitive = (value: unknown): value is Primitive => {\n  const isType = mergeIs.type(...PRIMITIVES);\n  const isValue = mergeIs(null, undefined);\n  return isType(value) || isValue(value);\n}',
        declarationKind: 'variable',
      },
      {
        name: 'isPrimitiveObject',
        kind: 'named',
        text: 'isPrimitiveObject = (\n  object: any,\n): object is PrimitiveObject => {\n  const isObject = isPlainObject(object);\n  if (isObject) {\n    for (const key in object) {\n      if (Object.prototype.hasOwnProperty.call(object, key)) {\n        const element = (object as any)[key];\n        const isPrimitiveMap = isPrimitiveObject(element);\n        if (!isPrimitiveMap) return false;\n      }\n    }\n    return true;\n  }\n\n  const isArray = Array.isArray(object);\n  if (isArray) {\n    for (const item of object) {\n      const isPrimitiveMap = isPrimitiveObject(item);\n      if (!isPrimitiveMap) return false;\n    }\n    return true;\n  }\n\n  return isPrimitive(object);\n}',
        declarationKind: 'variable',
      },
    ],
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
        moduleSpecifier: '#utils/expandFn',
        kind: 'named',
        namedImports: ['expandFn'],
      },
    ],
    exports: [
      {
        name: 'mergeIs',
        kind: 'named',
        text: 'mergeIs = expandFn(\n  <const T extends unknown[]>(...checks: T) => {\n    return (value: unknown): value is T[number] => {\n      return checks.some(check => value === check);\n    };\n  },\n  {\n    type: <const T extends unknown[]>(...checks: T) => {\n      return (value: unknown): value is T[number] => {\n        return checks.some(check => typeof value === check);\n      };\n    },\n  },\n)',
        declarationKind: 'variable',
      },
    ],
    text: `import { expandFn } from '#utils/expandFn';

export const mergeIs = expandFn(
  <const T extends unknown[]>(...checks: T) => {
    return (value: unknown): value is T[number] => {
      return checks.some(check => value === check);
    };
  },
  {
    type: <const T extends unknown[]>(...checks: T) => {
      return (value: unknown): value is T[number] => {
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
    exports: [
      {
        name: 'isPlainObject',
        kind: 'named',
        text: "isPlainObject = (value: any): value is object => {\n  return (\n    Object.prototype.toString.call(value) == '[object Object]' &&\n    value.constructor &&\n    value.constructor.name == 'Object'\n  );\n}",
        declarationKind: 'variable',
      },
    ],
    text: `export const isPlainObject = (value: any): value is object => {
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
        moduleSpecifier: '#features/transform/constants',
        kind: 'named',
        namedImports: ['PRIMITIVES'],
      },
      {
        moduleSpecifier: '#types',
        kind: 'named',
        namedImports: ['Primitive'],
      },
      {
        moduleSpecifier: './merge',
        kind: 'named',
        namedImports: ['mergeIs'],
      },
    ],
    exports: [
      {
        name: 'isPrimitive',
        kind: 'named',
        text: 'isPrimitive = (value: unknown): value is Primitive => {\n  const isType = mergeIs.type(...PRIMITIVES);\n  const isValue = mergeIs(null, undefined);\n  return isType(value) || isValue(value);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import { PRIMITIVES } from '#features/transform/constants';
import type { Primitive } from '#types';
import { mergeIs } from './merge';

export const isPrimitive = (value: unknown): value is Primitive => {
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
        moduleSpecifier: '#types',
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
    exports: [
      {
        name: 'isPrimitiveObject',
        kind: 'named',
        text: 'isPrimitiveObject = (\n  object: any,\n): object is PrimitiveObject => {\n  const isObject = isPlainObject(object);\n  if (isObject) {\n    for (const key in object) {\n      if (Object.prototype.hasOwnProperty.call(object, key)) {\n        const element = (object as any)[key];\n        const isPrimitiveMap = isPrimitiveObject(element);\n        if (!isPrimitiveMap) return false;\n      }\n    }\n    return true;\n  }\n\n  const isArray = Array.isArray(object);\n  if (isArray) {\n    for (const item of object) {\n      const isPrimitiveMap = isPrimitiveObject(item);\n      if (!isPrimitiveMap) return false;\n    }\n    return true;\n  }\n\n  return isPrimitive(object);\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import type { PrimitiveObject } from '#types';
import { isPlainObject } from './object';
import { isPrimitive } from './primitive';

export const isPrimitiveObject = (
  object: any,
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
    exports: [
      {
        name: 'typeFn',
        kind: 'named',
        text: 'typeFn = <T = any>() => {\n  const _out = <Tr extends object = object>(extensions?: Tr) => {\n    const out = expandFn((_?: T) => _unknown<T>(), {\n      ...(extensions as Tr),\n      forceCast: (_?: unknown) => _unknown<T>(),\n      dynamic: <U extends T>(_?: U) => _unknown<U>(),\n      is: <U>(_?: U) => _unknown<U extends T ? true : false>(),\n      type: _unknown<T>(),\n    });\n\n    return out;\n  };\n\n  return _out;\n}',
        declarationKind: 'variable',
      },
    ],
    text: `import { _unknown } from './_unknown';
import { expandFn } from './expandFn';

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
    exports: [
      {
        name: '*',
        kind: 'namespace',
        text: "export * from '#utils/index';",
        moduleSpecifier: '#utils/index',
      },
      {
        name: '*',
        kind: 'namespace',
        text: "export * from './features';",
        moduleSpecifier: './features',
      },
      {
        name: '_unknown',
        kind: 'named',
        text: '_unknown = <T>(value?: unknown) => value as T',
        declarationKind: 'variable',
      },
      {
        name: 'castFn',
        kind: 'named',
        text: 'castFn = <T>() => {\n  const _out = <const Tr extends object = object>(extensions?: Tr) => {\n    const out = expandFn((arg: T) => arg, {\n      ...(extensions as Tr),\n      forceCast: (arg: unknown) => {\n        return _unknown<T>(arg);\n      },\n      dynamic: <U extends T>(arg: U) => {\n        return arg;\n      },\n    });\n    return out;\n  };\n  return _out;\n}',
        declarationKind: 'variable',
      },
      {
        name: 'castFn',
        kind: 'named',
        text: 'castFn',
      },
      {
        name: 'expandFn',
        kind: 'named',
        text: 'expandFn = <\n  Main extends Fn,\n  const Tr extends object = object,\n>(\n  main: Main,\n  extensions?: Tr,\n): FnBasic<Main, Tr> => {\n  const out: any = main;\n\n  if (extensions) {\n    Object.assign(out, extensions);\n  }\n\n  return out;\n}',
        declarationKind: 'variable',
      },
      {
        name: 'identity',
        kind: 'named',
        text: 'identity = <T>(value: T) => value',
        declarationKind: 'variable',
      },
      {
        name: 'isFn',
        kind: 'named',
        text: 'isFn = <const T>(check: T) => {\n  return (value: unknown): value is T => {\n    return typeof value === check;\n  };\n}',
        declarationKind: 'variable',
      },
      {
        name: 'isTypeFn',
        kind: 'named',
        text: "isTypeFn = <T extends PrimitiveS | 'object'>(type: T) => {\n  return (value: unknown): value is TransformO<T> => {\n    return typeof value === type;\n  };\n}",
        declarationKind: 'variable',
      },
      {
        name: 'isInstance',
        kind: 'named',
        text: 'isInstance = <T extends Classe>(instance: T) => {\n  return (value: unknown): value is T => {\n    return value instanceof instance;\n  };\n}',
        declarationKind: 'variable',
      },
      {
        name: 'mergeIs',
        kind: 'named',
        text: 'mergeIs = expandFn(\n  <const T extends unknown[]>(...checks: T) => {\n    return (value: unknown): value is T[number] => {\n      return checks.some(check => value === check);\n    };\n  },\n  {\n    type: <const T extends unknown[]>(...checks: T) => {\n      return (value: unknown): value is T[number] => {\n        return checks.some(check => typeof value === check);\n      };\n    },\n  },\n)',
        declarationKind: 'variable',
      },
      {
        name: 'isPlainObject',
        kind: 'named',
        text: "isPlainObject = (value: any): value is object => {\n  return (\n    Object.prototype.toString.call(value) == '[object Object]' &&\n    value.constructor &&\n    value.constructor.name == 'Object'\n  );\n}",
        declarationKind: 'variable',
      },
      {
        name: 'isPrimitive',
        kind: 'named',
        text: 'isPrimitive = (value: unknown): value is Primitive => {\n  const isType = mergeIs.type(...PRIMITIVES);\n  const isValue = mergeIs(null, undefined);\n  return isType(value) || isValue(value);\n}',
        declarationKind: 'variable',
      },
      {
        name: 'isPrimitiveObject',
        kind: 'named',
        text: 'isPrimitiveObject = (\n  object: any,\n): object is PrimitiveObject => {\n  const isObject = isPlainObject(object);\n  if (isObject) {\n    for (const key in object) {\n      if (Object.prototype.hasOwnProperty.call(object, key)) {\n        const element = (object as any)[key];\n        const isPrimitiveMap = isPrimitiveObject(element);\n        if (!isPrimitiveMap) return false;\n      }\n    }\n    return true;\n  }\n\n  const isArray = Array.isArray(object);\n  if (isArray) {\n    for (const item of object) {\n      const isPrimitiveMap = isPrimitiveObject(item);\n      if (!isPrimitiveMap) return false;\n    }\n    return true;\n  }\n\n  return isPrimitive(object);\n}',
        declarationKind: 'variable',
      },
      {
        name: 'typeFn',
        kind: 'named',
        text: 'typeFn = <T = any>() => {\n  const _out = <Tr extends object = object>(extensions?: Tr) => {\n    const out = expandFn((_?: T) => _unknown<T>(), {\n      ...(extensions as Tr),\n      forceCast: (_?: unknown) => _unknown<T>(),\n      dynamic: <U extends T>(_?: U) => _unknown<U>(),\n      is: <U>(_?: U) => _unknown<U extends T ? true : false>(),\n      type: _unknown<T>(),\n    });\n\n    return out;\n  };\n\n  return _out;\n}',
        declarationKind: 'variable',
      },
      {
        name: 'arrays',
        kind: 'named',
        text: "export * from './castings/all';\nexport * from './types';\nexport * from './typings/all';\n",
      },
      {
        name: 'booleans',
        kind: 'named',
        text: "export * from './castings/all';\nexport * from './types';\nexport * from './typings/all';\n",
      },
      {
        name: 'common',
        kind: 'named',
        text: "export * from './castings/all';\nexport * from './types';\nexport * from './typings/all';\n",
      },
      {
        name: 'functions',
        kind: 'named',
        text: "export * from './castings';\nexport * as functions from './functions';\nexport * from './types';\nexport * from './typings';\n",
      },
      {
        name: 'numbers',
        kind: 'named',
        text: "export * from './castings/all';\nexport * from './types';\nexport * from './typings/all';\n",
      },
      {
        name: 'objects',
        kind: 'named',
        text: "export * from './castings/all';\nexport * from './types';\nexport * from './typings/all';\n",
      },
      {
        name: 'promises',
        kind: 'named',
        text: "export * from './types';\n",
      },
      {
        name: 'strings',
        kind: 'named',
        text: "export * from './castings/all';\nexport * as CONSTANTS from './constants';\nexport * from './types';\nexport * from './typings/all';\n",
      },
      {
        name: 'transformers',
        kind: 'named',
        text: "export * from './constants';\nexport * from './functions';\nexport * from './types';\n",
      },
      {
        name: 'typescript',
        kind: 'named',
        text: "export { extractFromFile } from './extractFromFile';\nexport { findFirstCallExpression } from './findFirstCallExpression';\nexport { parseObject } from './parseObject';\nexport { resolveType } from './resolveType';\n",
      },
    ],
    text: `export * from '#utils/index';
export * from './features';
`,
  },
};

// Statistiques de l'analyse
export const ANALYSIS_STATS = {
  totalFiles: 429,
  totalImports: 897,
  totalExports: 934,
  generatedAt: '2025-08-23T02:07:44.279Z',
};
