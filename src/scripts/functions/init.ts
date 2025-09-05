import { init as _init, InitOptions } from '@bemedev/codebase';
import { config, DEFAULT_ROOT, JSON_PATH } from '../constants';
import { getFile } from '../helpers';

export const init = (options: Partial<InitOptions> = {}) => {
  const { root = DEFAULT_ROOT, json = JSON_PATH } = options;
  const { CODEBASE_ANALYSIS } = getFile();
  config.json = json;

  return _init(CODEBASE_ANALYSIS, { root, json });
};
