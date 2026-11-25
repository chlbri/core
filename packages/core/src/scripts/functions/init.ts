import { init as _init, InitOptions } from '@bemedev/codebase';
import { BIN, DEFAULT_ROOT, JSON_PATH, PATH } from '../constants';
import { getCodebase } from '../helpers';

/**
 * Initializes the codebase workspace through `@bemedev/codebase`.
 *
 * Creates the generated types folder structure, registers the tsconfig path
 * alias {@linkcode PATH} and writes the JSON configuration file. Always injects
 * {@linkcode BIN} as binary name.
 *
 * @param options - Partial initialization options overriding the defaults.
 * @param options.root - Target directory for the generated analysis files. Defaults to {@linkcode DEFAULT_ROOT}.
 * @param options.json - Path of the JSON configuration file. Defaults to {@linkcode JSON_PATH}.
 * @returns `true` when initialization succeeds, `false` otherwise.
 */
export const init = (options: Partial<InitOptions> = {}) => {
  const { root = DEFAULT_ROOT, json = JSON_PATH } = options;
  const CODEBASE_ANALYSIS = getCodebase();
  return _init(CODEBASE_ANALYSIS, { root, json, bin: BIN, path: PATH });
};
