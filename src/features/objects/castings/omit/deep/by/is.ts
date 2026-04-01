import { partialCall } from "#features/functions/functions/partialCall";
import { omitDeepIs } from "#features/objects/utils/omit.deep.is";

const fn = partialCall.paramArray(omitDeepIs, "element");

export default fn;
