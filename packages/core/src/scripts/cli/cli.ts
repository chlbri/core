import { subcommands } from 'cmd-ts';
import { add } from './add';
import { destroy } from './destroy';
import { init } from './init';
import { remove } from './remove';
import { BIN } from '#scripts/constants';

export const cli = subcommands({
  name: BIN,
  description: 'Core commands for Bemedev codebase management.',
  cmds: {
    add,
    init,
    remove,
    destroy,
  },
});
