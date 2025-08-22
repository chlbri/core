import { partialCall } from '#features/functions';
import { omitDeepIs } from '../../../../utils/omit.deep';

const fn = partialCall(omitDeepIs, 'element');

export default fn;
