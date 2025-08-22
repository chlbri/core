import { partialCall } from '#features/functions/functions/partialCall';
import type { DeepOmit, Keys, PrimitiveObjectMap } from '#types';
import { omitDeep } from '../../../utils/omit.deep';

const fn = partialCall(omitDeep, 'key') as <
  T extends PrimitiveObjectMap,
  K extends Keys[],
>(
  object: T,
  ...keys: K
) => DeepOmit<T, K[number]>;

export default fn;
