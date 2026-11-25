import { command, restPositionals, string } from 'cmd-ts';
import { lift as handler } from '../functions/lift';

/**
 * Definition of the `lift` subcommand.
 *
 * Collects the names to preserve while lifting as rest positionals and forwards
 * them to the corresponding codebase lifting handler.
 */
export const lift = command({
  name: 'lift',
  args: {
    exceptions: restPositionals({
      displayName: 'exceptions',
      description: 'Files to exclude from the codebase analysis',
      type: string,
    }),
  },
  description: 'Lift all files from the codebase analysis',
  handler,
});
