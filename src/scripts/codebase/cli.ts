#!/usr/bin/env tsx

import { write } from './write';

// Exécuter si ce fichier est appelé directement
if (process.argv[1] && process.argv[1].endsWith('cli.ts')) {
  write();
}
