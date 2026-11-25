import { command, restPositionals } from 'cmd-ts';
import { remove as handler } from '../functions/remove';

/**
 * Definition of the `remove` subcommand.
 *
 * Collects a variadic list of files as rest positionals and forwards them to the
 * corresponding codebase analysis handler.
 */
export const remove = command({
  name: 'remove',
  description: 'Remove files from the codebase analysis',
  args: {
    files: restPositionals({
      displayName: 'files',
      description: 'Files to remove to the codebase analysis',
    }),
  },
  handler,
});
