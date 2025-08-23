import { join } from 'node:path';

export const SRC_DIR = join(process.cwd(), 'src');
export const OUTPUT_FILE = join(SRC_DIR, '.codebase.ts');
