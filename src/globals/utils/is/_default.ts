import type { PrimitiveS, TransformO } from '#features/transform/types';
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
