import { ARRAY } from "../constants";
import type { __ObjectS, ArrayCustom, Optional } from "../types";

export const array = <T extends __ObjectS | Optional>(value: T) =>
  ({ [ARRAY]: value }) as ArrayCustom<T>;
