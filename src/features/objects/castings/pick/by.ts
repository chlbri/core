import { partialCall } from '#features/functions';
import type { SubType } from '#types';
import { pick } from '../../utils/pick';

const fn = partialCall(pick, 'element') as <
  T extends object,
  K extends any[],
>(
  object: T,
  ...keys: K
) => SubType<T, K[number]>;

export default fn;
