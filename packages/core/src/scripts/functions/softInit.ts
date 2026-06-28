import { softInit as _softInit, InitOptions } from '@bemedev/codebase';
import { BIN, DEFAULT_ROOT, JSON_PATH, PATH } from '../constants';
import { getCodebase } from '../helpers';

export const softInit = (options: Partial<InitOptions> = {}) => {
  const { root = DEFAULT_ROOT, json = JSON_PATH } = options;
  const CODEBASE_ANALYSIS = getCodebase();
  return _softInit(CODEBASE_ANALYSIS, {
    root,
    json,
    bin: BIN,
    path: PATH,
  });
};
