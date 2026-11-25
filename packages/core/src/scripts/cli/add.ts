import { command, restPositionals } from 'cmd-ts';
import { add as handler } from '../functions/add';

/**
 * Definition of the `add` subcommand.
 *
 * Collects a variadic list of files as rest positionals and forwards them to the
 * corresponding codebase analysis handler.
 */
export const add = command({
  name: 'add',
  description: 'Add files to the codebase analysis',
  args: {
    files: restPositionals({
      displayName: 'files',
      description: 'Files to add to the codebase analysis',
    }),
  },
  handler,
});
