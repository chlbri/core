import toArray from '#features/arrays/castings/toArray';
import { remove as _remove } from '@bemedev/codebase';

import { getFile } from '../helpers';
import type { Options } from './add';
import { JSON_PATH } from '#scripts/constants';

/**
 * Removes files from the codebase analysis and deletes them from disk.
 *
 * Reads the validated code analysis file, normalizes `files` to an array and
 * delegates to the `remove` helper of `@bemedev/codebase`, which checks that no
 * remaining file imports the targets before deleting them.
 *
 * @param options - Options holding the file paths to remove.
 * @returns The result of the underlying codebase `remove` operation.
 * @see -- type {@linkcode Options}
 */
export const remove = (options: Options = {}) => {
  const { CODEBASE_ANALYSIS } = getFile();
  const files = toArray.typed(options.files);

  return _remove(CODEBASE_ANALYSIS, JSON_PATH, ...files);
};
