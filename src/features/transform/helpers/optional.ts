import { OPTIONAL } from "../constants";
import type { __ObjectS, Optional } from "../types";

export const maybe = <T extends __ObjectS | __ObjectS[]>(value?: T) =>
  ({
    [OPTIONAL]: value,
  }) as Optional<T>;
