import { partialCall } from '#features/functions';
import { pickDeep } from '../../../utils/pick';

const fn = partialCall(pickDeep, 'key');

export default fn;
