import { partialCall } from '#features/functions';
import { pick } from '../../utils/pick';

const fn = partialCall(pick, 'key') as <T extends object, K extends any[]>(
  object: T,
  ...keys: K
) => Pick<T, K[number]>;

export default fn;
