import { partialCall } from '#features/functions/functions/partialCall';
import type { Keys, NotSubType, PrimitiveObjectMap } from '#types';
import { omitDeep } from '../../../../utils/omit.deep';

const fn = partialCall(omitDeep, 'element') as <
  T extends PrimitiveObjectMap,
  K extends Keys[],
>(
  object: T,
  ...values: K
) => NotSubType<T, K[number]>;

export default fn;
