import { partialCall } from '#features/functions/functions/partialCall';
import { pickDeep } from '#features/objects/utils/pick.deep';

const fn = partialCall(pickDeep, 'element');

export default fn;
