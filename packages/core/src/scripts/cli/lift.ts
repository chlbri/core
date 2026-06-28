import { command, restPositionals, string } from 'cmd-ts';
import { lift as handler } from '../functions/lift';

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
