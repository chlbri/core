import { ArrayS, PossibleString } from "../../types";

const stringConcatUtil = (sep: PossibleString, ...array: ArrayS) => {
  let out = "";
  array.forEach((item, index) => {
    out += item;
    if (index < array.length - 1) out += sep;
  });
  return out;
};

export default stringConcatUtil;
