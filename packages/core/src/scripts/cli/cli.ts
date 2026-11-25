import { BIN } from '#scripts/constants';
import { subcommands } from 'cmd-ts';
import { add } from './add';
import { destroy } from './destroy';
import { init } from './init';
import { lift } from './lift';
import { remove } from './remove';
import { softInit } from './softInit';

/**
 * Root command group of the core CLI.
 *
 * Registers the `add`, `init`, `remove`, `destroy`, `lift` and `softInit`
 * subcommands under the {@linkcode BIN} binary name.
 */
export const cli = subcommands({
  name: BIN,
  description: 'Core commands for Bemedev codebase management.',
  cmds: { add, init, remove, destroy, lift, softInit },
});
