import { partialCall } from '#features/functions';
import type {
  AllowedNamesLow,
  DeepOmit,
  Keys,
  KeyTypes,
  KeyTypesFrom,
  NotSubType,
  PrimitiveObjectMap,
  Ra,
  Ru,
  SubType,
  To,
} from '#types';
import { castFn } from '#utils/castFn';
import { expandFn } from '#utils/expandFn';
import { isPlainObject, isPrimitiveObject } from '#utils/is/primitive';
import { checkEntries } from './utils/entries';
import { omit, omitIs } from './utils/omit';
import { omitDeep, omitDeepIs } from './utils/omit.deep';
import { pick, pickDeep } from './utils/pick';
import { _readonly } from './utils/readonly';
import { isRequiredDeep } from './utils/require';

export const castings = castFn<object>()({
  trueObject: castFn<To>()({ is: isPlainObject }),

  type: Object,

  keysOf: <T extends object>(object: T): (keyof T)[] => {
    return Object.keys(object) as any;
  },

  values: <T extends object>(object: T): T[keyof T][] => {
    return Object.values(object) as any;
  },

  entries: <T extends object>(object: T): [keyof T, T[keyof T]][] => {
    return Object.entries(object) as any;
  },

  byKey: <T extends object, K extends keyof T>(
    object: T,
    key: K,
  ): T[K] => {
    return object[key];
  },

  hasKeys: expandFn(
    <K extends Keys[]>(
      object: object,
      ...keys: K
    ): object is Record<K[number], unknown> => {
      return keys.every(key => key in object);
    },
    {
      typings: <K extends KeyTypes>(
        object: object,
        keys: K,
      ): object is KeyTypesFrom<K> => {
        return checkEntries(keys, object);
      },

      all: expandFn(
        <K extends Keys[]>(
          object: object,
          ...keys: K
        ): object is Record<K[number], unknown> => {
          return (
            Object.keys(object).every(key => keys.includes(key)) &&
            keys.every(key => key in object)
          );
        },
        {
          typings: <K extends KeyTypes>(
            object: object,
            keys: K,
          ): object is KeyTypesFrom<K> => {
            const check0 =
              Object.keys(object).every(key =>
                Object.keys(keys).includes(key),
              ) && Object.keys(keys).every(key => key in object);

            if (!check0) return false;

            return checkEntries(keys, object);
          },
        },
      ),
    },
  ),

  omit: expandFn(
    partialCall(omit, 'key') as <
      T extends PrimitiveObjectMap,
      K extends any[],
    >(
      object: T,
      ...keys: K
    ) => Omit<T, K[number]>,

    {
      strict: expandFn(
        partialCall(omit, 'key') as <
          T extends object,
          K extends (keyof T)[],
        >(
          object: T,
          ...keys: K
        ) => Omit<T, K[number]>,
        {
          is: partialCall(omitIs, 'key') as <
            T extends object,
            K extends (keyof T)[],
          >(
            object: T,
            ...keys: K
          ) => boolean,
        },
      ),

      const: expandFn(
        partialCall(omit, 'key') as <
          const T extends object,
          K extends (keyof T)[],
        >(
          object: T,
          ...keys: K
        ) => Omit<T, K[number]>,
        {
          is: partialCall(omitIs, 'key') as <
            const T extends object,
            K extends (keyof T)[],
          >(
            object: T,
            ...keys: K
          ) => boolean,
        },
      ),

      is: partialCall(omitIs, 'key') as <K extends Keys[]>(
        object: PrimitiveObjectMap,
        ...keys: K
      ) => boolean,

      by: expandFn(
        partialCall(omit, 'element') as <
          T extends object,
          K extends any[],
        >(
          object: T,
          ...values: K
        ) => SubType<T, K[number]>,
        {
          is: partialCall(omitIs, 'element'),
        },
      ),

      deep: expandFn(
        partialCall(omitDeep, 'key') as <
          T extends PrimitiveObjectMap,
          K extends Keys[],
        >(
          object: T,
          ...keys: K
        ) => DeepOmit<T, K[number]>,
        {
          by: expandFn(
            partialCall(omitDeep, 'element') as <
              T extends PrimitiveObjectMap,
              K extends Keys[],
            >(
              object: T,
              ...values: K
            ) => NotSubType<T, K[number]>,
            {
              is: partialCall(omitDeepIs, 'element'),
            },
          ),
          is: partialCall(omitDeepIs, 'key') as (
            object: PrimitiveObjectMap,
            ...keys: Keys[]
          ) => boolean,
        },
      ),
    },
  ),

  reverse: <T extends Record<Keys, Keys>>(
    object: T,
  ): { [K in keyof T as T[K]]: K } => {
    const result: any = {};
    for (const key in object) {
      result[object[key]] = key;
    }
    return result;
  },

  readonly: _readonly,

  freeze: _readonly,

  require: expandFn(
    <T extends object>(object: T, requires: object) => {
      return Object.assign(object, requires);
    },
    {
      strict: <T extends object, K extends AllowedNamesLow<T, undefined>>(
        object: T,
        requires: Pick<T, K>,
      ) => castings.require(object, requires),

      const: <
        const T extends object,
        K extends AllowedNamesLow<T, undefined>,
      >(
        object: T,
        requires: Pick<T, K>,
      ) => castings.require(object, requires),

      is: expandFn(
        <T extends object>(object: T): object is Required<T> => {
          const values = Object.values(object);
          return values.every(
            value => value !== undefined && value !== null,
          );
        },
        {
          deep: isRequiredDeep,
        },
      ),
    },
  ),

  pick: expandFn(
    partialCall(pick, 'key') as <T extends object, K extends any[]>(
      object: T,
      ...keys: K
    ) => Pick<T, K[number]>,
    {
      deep: expandFn(partialCall(pickDeep, 'key'), {
        by: partialCall(pickDeep, 'element'),
      }),

      by: partialCall(pick, 'element') as <
        T extends object,
        K extends any[],
      >(
        object: T,
        ...keys: K
      ) => SubType<T, K[number]>,
    },
  ),

  ru: castFn<Ru>()(),

  ra: castFn<Ra>()(),

  primitive: castFn<PrimitiveObjectMap>()({
    is: (object: unknown): object is PrimitiveObjectMap => {
      if (!isPlainObject(object)) return false;
      return isPrimitiveObject(object);
    },
  }),
});
