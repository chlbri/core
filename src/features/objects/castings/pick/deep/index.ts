import { partialCall } from '#features/functions/functions/partialCall.1';
import { pickDeep } from '#features/objects/utils/pick.deep';

const fn = partialCall(pickDeep, 'key');

export default fn;
