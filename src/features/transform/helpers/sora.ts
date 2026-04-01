import type { ObjectS } from "../types";
import type { SoRa } from "#types";

export const sora = <T extends ObjectS>(value: T) => {
  return value as SoRa<T>;
};
