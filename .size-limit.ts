import { globSync } from 'fs';
import { basename, dirname, join, relative } from 'path';
import type { SizeLimitConfig } from 'size-limit';

const root = import.meta.dirname;
const limit = '10 kB';

const GLOBS = ['packages/core/lib/**/*.js', 'packages/core/lib/**/*.d.ts'];

const files = GLOBS.map(g => globSync(join(root, g)))
  .flat()
  .sort()
  .map(abs => {
    const path = relative(root, abs);
    const name = `${dirname(path)}/${basename(path)}`;
    return { name, path, limit };
  }) satisfies SizeLimitConfig;

export default files satisfies SizeLimitConfig;
