import { command } from 'cmd-ts';
import { destroy as handler } from '../functions/destroy';

/**
 * Definition of the `destroy` subcommand.
 *
 * Takes no arguments and forwards the call to the handler that removes the
 * codebase analysis folder together with its configuration file.
 */
export const destroy = command({
  name: 'destroy',
  args: {},
  description: 'Remove the codebase analysis and all config files',
  handler,
});
