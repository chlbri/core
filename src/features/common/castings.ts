// #region Helpers

import deepClone from '#features/functions/functions/clone';
import type {
  DeepNotReadonly,
  DeepPartial,
  DeepReadonly,
  DeepRequired,
  Defaulted,
  Neverify,
  NonN,
  NotReadonly,
  NotUndefined,
  Primitive,
  PrimitiveObject,
} from '#types';
import { _unknown } from '#utils/_unknown';
import { castFn } from '#utils/castFn';
import { expandFn } from '#utils/expandFn';
import { identity } from '#utils/identity';
import { isPrimitive, isPrimitiveObject } from '#utils/is/primitive';

const _partial = <T>(value: T) => {
  return _unknown<Partial<T>>(value);
};

const _required = <T>(value: T) => {
  return _unknown<NotUndefined<T>>(value);
};

export const castings = expandFn(<T>(value: unknown) => value as T, {
  partial: expandFn(_partial, {
    deep: <T>(value: T) => {
      return _unknown<DeepPartial<T>>(value);
    },
  }),

  const: <const T>(value: T) => value,

  clone: <T extends PrimitiveObject>(object: T): T => {
    return deepClone(object);
  },

  identity,

  isDefined: <T>(value: T): value is NonNullable<T> => {
    return value !== undefined && value !== null;
  },

  isUndefined: (value: unknown): value is undefined => {
    return value === undefined;
  },

  isNull: (value: unknown): value is null => {
    return value === null;
  },

  unknown: <T>(value: unknown) => value as T,

  any: castFn<any>()(),

  neverify: <T>(value: T) => {
    return _unknown<Neverify<T>>(value);
  },

  required: expandFn(_required, {
    deep: <T extends object | undefined>(value: T) => {
      return _unknown<DeepRequired<T>>(value);
    },
  }),

  readonly: expandFn(<T>(value: T) => value as Readonly<T>, {
    deep: expandFn(
      <T extends object>(value: T) => _unknown<DeepReadonly<T>>(value),
      {
        not: <const T extends object>(value: T) =>
          _unknown<DeepNotReadonly<T>>(value),
      },
    ),

    not: <T extends object>(value: T) => _unknown<NotReadonly<T>>(value),
  }),

  primitive: castFn<Primitive>()({
    is: isPrimitive,
  }),

  primitiveObject: castFn<PrimitiveObject>()({
    is: isPrimitiveObject,
  }),

  undefined: identity(undefined),

  null: identity(null),

  symbol: castFn<symbol>()({
    is: (value: unknown): value is symbol => typeof value === 'symbol',
  }),

  date: castFn<Date>()({
    is: (value: unknown): value is Date => {
      return value instanceof Date;
    },
  } as const),

  undefiny: <T>(value?: T) => value,

  defaulted: <T, const U extends NonN<T>>(value: T, defaultValue: U) => {
    const out =
      value === undefined || value === null ? defaultValue : value;
    return _unknown<Defaulted<T, U>>(out);
  },
});
