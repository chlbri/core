import { command } from 'cmd-ts';
import { destroy as handler } from '../functions/destroy';

export const destroy = command({
  name: 'destroy',
  args: {},
  description: 'Remove the codebase analysis and all config files',
  handler,
});
