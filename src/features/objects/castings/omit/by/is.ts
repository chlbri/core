import { partialCall } from "#features/functions/functions/partialCall";
import { omitIs } from "#features/objects/utils/omit.is";

const fn = partialCall.paramArray(omitIs, "element");

export default fn;
