import { JSON_PATH } from '#scripts/constants';
import { getCodebase } from '#scripts/helpers';
import { lift as _lift } from '@bemedev/codebase';

/** Arguments accepted by {@linkcode lift}. */
type Props = { exceptions: string[] };

/**
 * Lifts the analysed codebase and removes unused code from it.
 *
 * Delegates to the `lift` helper of `@bemedev/codebase`, which removes unused
 * declarations, imports, files and directories inside the analysis folder while
 * keeping the given exceptions.
 *
 * @param props - The exceptions to preserve.
 * @param props.exceptions - Variable, function, class or type names to keep.
 * @returns The lifted tokens, imports, directories and files.
 */
export const lift = ({ exceptions }: Props) => {
  return _lift(getCodebase(), JSON_PATH, ...exceptions);
};
