import type { ObjectS } from "../types";
import type { SoA } from "#types";

export const soa = <T extends ObjectS>(value: T) => {
  return value as SoA<T>;
};
