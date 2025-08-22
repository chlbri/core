import { partialCall } from '#features/functions';
import type { Keys, PrimitiveObjectMap } from '#types';
import { omitDeepIs } from '../../../utils/omit.deep';

const fn = partialCall(omitDeepIs, 'key') as (
  object: PrimitiveObjectMap,
  ...keys: Keys[]
) => boolean;

export default fn;
