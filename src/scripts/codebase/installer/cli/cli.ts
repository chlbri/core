import { subcommands } from 'cmd-ts';
import { add } from './add';
import { BIN } from './constants';
import { init } from './init';
import { remove } from './remove';

export const cli = subcommands({
  name: BIN,
  description: 'The CLI for bemedev',
  cmds: {
    add,
    init,
    remove,
  },
  version: '0.0.1',
});
