import { command, restPositionals, string } from 'cmd-ts';
import { addFiles } from '../add';

export const add = command({
  name: 'addFiles',
  aliases: ['add', 'add2'],

  args: {
    files: restPositionals({
      description: 'The files to generate, relative to @bemedev/core/src',
      displayName: 'Files',
      type: string,
    }),
  },
  handler: async ({ files }) => {
    const isEmpty = files.length === 0;
    if (isEmpty) return console.warn('No files specified for addition.');
    return addFiles(...files);
  },
});
