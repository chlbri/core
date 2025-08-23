import { join } from 'node:path';

export const SRC_DIR = join(process.cwd(), 'src');
export const OUTPUT_FILE = join(SRC_DIR, '.codebase.ts');

const _REPLACER = '-|||-';

export const REPLACERS = {
  code: [
    ['`', '\\`'],
    ['${', `$${_REPLACER}{`],
    ['\\s', `${_REPLACER}s`],
  ],
  init: [
    [new RegExp('\\`', 'g'), '`'],
    [_REPLACER, ''],
  ],
} as const;
