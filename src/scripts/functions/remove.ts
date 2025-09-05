import toArray from '#features/arrays/castings/toArray';
import { remove as _remove } from '@bemedev/codebase';

import { getFile } from '../helpers';
import type { Options } from './add';

export const remove = (options: Options = {}) => {
  const { CODEBASE_ANALYSIS } = getFile();
  const files = toArray(options.files);

  return _remove(CODEBASE_ANALYSIS, ...files);
};
