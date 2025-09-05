import toArray from '#features/arrays/castings/toArray';
import { add as _add } from '@bemedev/codebase';
import { getFile } from '../helpers';

export type Options = {
  files?: string | string[];
};

export const add = (options: Options = {}) => {
  const { CODEBASE_ANALYSIS } = getFile();
  const files = toArray(options.files);
  console.log('Adding files:', files);

  return _add(CODEBASE_ANALYSIS, ...files);
};
