import type { __ObjectS, ArrayCustom, Optional } from "../types";

export const tuple = <
  T extends [
    __ObjectS | Optional | ArrayCustom,
    ...(__ObjectS | Optional | ArrayCustom)[],
  ],
>(
  ...values: T
) => values;
