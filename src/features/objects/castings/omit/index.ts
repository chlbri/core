import { partialCall } from "#features/functions/functions/partialCall";
import type { PrimitiveObjectMap } from "#types";
import { omit } from "../../utils/omit";

const fn = partialCall.paramArray(omit, "key") as <
  T extends PrimitiveObjectMap,
  K extends any[],
>(
  object: T,
  ...keys: K
) => Omit<T, K[number]>;

export default fn;
