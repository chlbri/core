import { _unknown } from "#utils/_unknown";
import stringLengthTyped from "./low";

type StringLengthTyped_F = <const T extends string>(value: T) => T["length"];

export default _unknown<StringLengthTyped_F>(stringLengthTyped);
