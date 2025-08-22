import { partialCall } from '#features/functions';
import { omitDeepIs } from '#features/objects/utils/omit.deep.is';

const fn = partialCall(omitDeepIs, 'element');

export default fn;
