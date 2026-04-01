import { CUSTOM } from "../constants";
import type { Custom } from "../types";

export const custom = <T = any>(value?: T) =>
  ({
    [CUSTOM]: value,
  }) as Custom<T>;
