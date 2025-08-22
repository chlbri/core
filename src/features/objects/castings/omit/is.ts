import { partialCall } from '#features/functions';
import { omitIs } from '#features/objects/utils/omit.is';
import type { Keys, PrimitiveObjectMap } from '#types';

const fn = partialCall(omitIs, 'key') as <K extends Keys[]>(
  object: PrimitiveObjectMap,
  ...keys: K
) => boolean;

export default fn;
