#!/usr/bin/env tsx

import { init } from 'core/lib/scripts/codebase/installer/init';
import { write } from 'core/lib/scripts/codebase/write';

// Exécuter si ce fichier est appelé directement
if (process.argv[1] && process.argv[1].endsWith('cli.ts')) {
  write();
  // write();
  init();
}
//# sourceMappingURL=cli.js.map
