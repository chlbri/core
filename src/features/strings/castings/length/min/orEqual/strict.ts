import lowMinOrEqualLength from "./low";
import { MinOrEqualLength } from "../../../../types";

type StrictMinOrEqualLength_L = <Min extends number, T extends string>(
  min: Min,
  value: MinOrEqualLength<Min, T>,
) => MinOrEqualLength<Min, T>;

const strictMinOrEqualLength: StrictMinOrEqualLength_L = (min, _value) => {
  const { bool, value } = lowMinOrEqualLength(min, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not greater than or equal to ${min}`);
  }

  return value as any;
};

export default strictMinOrEqualLength;
