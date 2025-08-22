import { partialCall } from '#features/functions';
import { omitIs } from '../../../utils/omit';

const fn = partialCall(omitIs, 'element');

export default fn;
