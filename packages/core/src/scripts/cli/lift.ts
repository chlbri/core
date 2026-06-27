import { command } from 'cmd-ts';
import { lift as handler } from '../functions/lift';

export const add = command({
  name: 'lift',
  args: {},
  description: 'Lift all files from the codebase analysis',
  handler,
});
