import { partialCall } from '#features/functions/functions/partialCall';
import { omitDeepIs } from '#features/objects/utils/omit.deep.is';
import type { Keys, PrimitiveObjectMap } from '#types';

const fn = partialCall(omitDeepIs, 'key') as (
  object: PrimitiveObjectMap,
  ...keys: Keys[]
) => boolean;

export default fn;
