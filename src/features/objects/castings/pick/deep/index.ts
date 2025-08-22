import { partialCall } from '#features/functions';
import { pickDeep } from '#features/objects/utils/pick.deep';

const fn = partialCall(pickDeep, 'key');

export default fn;
