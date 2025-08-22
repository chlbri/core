import { partialCall } from '#features/functions';
import type { Keys, PrimitiveObjectMap } from '#types';
import { omitIs } from '../../utils/omit';

const fn = partialCall(omitIs, 'key') as <K extends Keys[]>(
  object: PrimitiveObjectMap,
  ...keys: K
) => boolean;

export default fn;
