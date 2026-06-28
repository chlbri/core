import { DEFAULT_ROOT } from '#scripts/constants';
import { command, option, string } from 'cmd-ts';
import { softInit as handler } from '../functions/softInit';

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
