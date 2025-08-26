import { command, option, string } from 'cmd-ts';
import { initBemedev as handler } from '../init';

export const init = command({
  name: 'initialize',

  args: {
    path: option({
      long: 'path',
      description: 'The path of the main folder',
      short: 'p',
      // displayName: 'Path',
      type: string,
      defaultValue: () => 'src/.bemedev',
    }),
  },
  handler,
});
