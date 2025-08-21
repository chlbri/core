import type { DeepNotReadonly, DeepReadonly, NotReadonly } from '#types';
import { _unknown } from '#utils/_unknown';
import { expandFn } from '#utils/expandFn';

export const _readonly = expandFn(
  <T extends object>(object: T) => {
    return Object.freeze(object);
  },
  {
    forceCast: <T extends object>(object: unknown) => {
      const out = Object.freeze(object);
      return _unknown<Readonly<T>>(out);
    },

    dynamic: <U extends object>(object: U) => {
      return Object.freeze(object);
    },

    is: <T>(object: T): object is Readonly<T> => {
      return Object.isFrozen(object);
    },

    not: <const T extends object>(object: T) => {
      return _unknown<NotReadonly<T>>(object);
    },

    deep: expandFn(
      <T extends object>(object: T) => {
        const out = Object.freeze(object);
        return _unknown<DeepReadonly<T>>(out);
      },
      {
        not: <T extends object>(object: T) => {
          return _unknown<DeepNotReadonly<T>>(object);
        },
      },
    ),
  },
);
