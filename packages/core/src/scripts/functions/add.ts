import toArray from '#features/arrays/castings/toArray';
import { add as _add } from '@bemedev/codebase';
import { getFile } from '../helpers';
import { JSON_PATH } from '#scripts/constants';

/**
 * Options accepted by the `add` and `remove` analysis helpers.
 *
 * The optional `files` entry holds one or several file paths to process.
 */
export type Options = { files?: string | string[] };

/**
 * Adds files and their internal dependencies to the codebase analysis.
 *
 * Reads the validated code analysis file, normalizes `files` to an array and
 * delegates to the `add` helper of `@bemedev/codebase`, which updates the JSON
 * configuration file and writes the matching analyses to disk.
 *
 * @param options - Options holding the file paths to add.
 * @returns The result of the underlying codebase `add` operation.
 */
export const add = (options: Options = {}) => {
  const { CODEBASE_ANALYSIS } = getFile();
  const files = toArray.typed(options.files);
  console.log('Adding files:', files);

  return _add(CODEBASE_ANALYSIS, JSON_PATH, ...files);
};
