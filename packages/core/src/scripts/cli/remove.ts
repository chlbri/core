import { command, restPositionals } from 'cmd-ts';
import { remove as handler } from '../functions/remove';

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
