import type { Classe, PrimitiveS, TransformPrimitiveS } from "#types";

export const isFn = <const T>(check: T) => {
  return (value?: unknown): value is T => {
    return typeof value === check;
  };
};

export const isTypeFn = <T extends PrimitiveS>(type: T) => {
  return (value?: unknown): value is TransformPrimitiveS<T> => {
    return typeof value === type;
  };
};

export const isInstance = <T extends Classe>(instance: T) => {
  return (value?: unknown): value is T => {
    return value instanceof instance;
  };
};
