import { DEFAULT_ROOT } from '#scripts/constants';
import { command, option, string } from 'cmd-ts';
import { softInit as handler } from '../functions/softInit';

/**
 * Definition of the `softInit` subcommand.
 *
 * Re-initializes the generated analysis types and exposes a `--root` (`-r`)
 * option, also readable from the `BEMEDEV_ROOT` environment variable and
 * defaulting to {@linkcode DEFAULT_ROOT}.
 */
export const softInit = command({
  name: 'softInit',
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
