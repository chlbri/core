import { partialCall } from '#features/functions/functions/partialCall.1';
import { omitDeepIs } from '#features/objects/utils/omit.deep.is';

const fn = partialCall(omitDeepIs, 'element');

export default fn;
