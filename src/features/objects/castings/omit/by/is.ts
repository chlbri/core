import { partialCall } from '#features/functions';
import { omitIs } from '#features/objects/utils/omit.is';

const fn = partialCall(omitIs, 'element');

export default fn;
