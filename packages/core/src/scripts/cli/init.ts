import { DEFAULT_ROOT } from '#scripts/constants';
import { command, option, string } from 'cmd-ts';
import { init as handler } from '../functions/init';

/**
 * Definition of the `init` subcommand.
 *
 * Initializes the codebase analysis and exposes a `--root` (`-r`) option, also
 * readable from the `BEMEDEV_ROOT` environment variable and defaulting to
 * {@linkcode DEFAULT_ROOT}.
 */
export const init = command({
  name: 'init',
  description: 'Initialize the codebase analysis',
  args: {
    root: option({
      long: 'root',
      short: 'r',
      env: 'BEMEDEV_ROOT',
      description: 'Root directory to store the analysis files',
      type: string,
      defaultValue: () => DEFAULT_ROOT,
    }),
  },
  handler,
});
