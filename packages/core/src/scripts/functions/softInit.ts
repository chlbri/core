import { softInit as _softInit, InitOptions } from '@bemedev/codebase';
import { BIN, DEFAULT_ROOT, JSON_PATH, PATH } from '../constants';
import { getCodebase } from '../helpers';

/**
 * Re-initializes the generated analysis types through `@bemedev/codebase`.
 *
 * Unlike `init`, it verifies that the configuration file, the tsconfig
 * path alias and the folder already exist, then regenerates the types without
 * rewriting the configuration. Always injects {@linkcode BIN} as binary name.
 *
 * @param options - Partial initialization options overriding the defaults.
 * @param options.root - Target directory for the generated analysis files. Defaults to {@linkcode DEFAULT_ROOT}.
 * @param options.json - Path of the JSON configuration file. Defaults to {@linkcode JSON_PATH}.
 * @returns `true` when the prerequisites hold and the types are regenerated, `false` otherwise.
 */
export const softInit = (options: Partial<InitOptions> = {}) => {
  const { root = DEFAULT_ROOT, json = JSON_PATH } = options;
  const CODEBASE_ANALYSIS = getCodebase();
  return _softInit(CODEBASE_ANALYSIS, { root, json, bin: BIN, path: PATH });
};
