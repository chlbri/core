import { partialCall } from '#features/functions';
import { pickDeep } from '../../../utils/pick';

const fn = partialCall(pickDeep, 'element');

export default fn;
