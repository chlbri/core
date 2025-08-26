#!/usr/bin/env tsx

import { addFiles } from 'core/lib/scripts/codebase/installer/add';
import { initBemedev } from 'core/lib/scripts/codebase/installer/init';
import { removeFiles } from 'core/lib/scripts/codebase/installer/remove';
import { write } from 'core/lib/scripts/codebase/write';

// Exécuter si ce fichier est appelé directement
if (process.argv[1] && process.argv[1].endsWith('cli.ts')) {
  write();
  initBemedev();
  addFiles('features.arrays.castings.freeze');
  removeFiles('features.arrays.castings.tuple');
}
//# sourceMappingURL=cli.js.map
