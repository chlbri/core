import { partialCall } from '#features/functions/functions/partialCall';
import { pickDeep } from '#features/objects/utils/pick.deep';

const fn = partialCall.legacy(pickDeep, 'element');

export default fn;
