import { CODEBASE_ANALYSIS } from '#codebase';
import isD from '#features/common/castings/is/defined';
import type { NOmit } from '#types';
import edit, { JsonEditor } from 'edit-json-file';
import { dirname, join, relative, resolve } from 'node:path';
import type { FileAnalysis } from '../types';
import { JSON_FILE_NAME } from './constants';
import { writeFileAnalysis } from './helpers';

const processFileAnalysis = (
  analysis: NOmit<FileAnalysis, 'exports'>,
  cwd: string,
  additionals: [string, NOmit<FileAnalysis, 'exports'>][],
  pathsEntries: [string, NOmit<FileAnalysis, 'exports'>][],
) => {
  const relativePath = analysis.relativePath;
  analysis.imports.forEach(({ moduleSpecifier }) => {
    const _path = relative(
      cwd,
      resolve(dirname(relativePath), moduleSpecifier),
    ).replaceAll('/', '.');

    const toAdd =
      CODEBASE_ANALYSIS[_path] ?? CODEBASE_ANALYSIS[`${_path}.index`];
    if (!toAdd) return;

    additionals.push([_path, toAdd]);

    const keys = Object.keys(CODEBASE_ANALYSIS);
    const all = additionals.concat(pathsEntries).map(([key]) => key);

    const imports = toAdd.imports.filter(({ moduleSpecifier }) => {
      const _path = relative(
        cwd,
        resolve(dirname(toAdd.relativePath), moduleSpecifier),
      ).replaceAll('/', '.');

      const array = [_path, `${_path}.index`].filter(p => {
        return (
          !p.endsWith('types') &&
          !p.endsWith('constants') &&
          keys.includes(p)
        );
      });

      if (array.length < 1) return false;

      return array.every(p => !all.includes(p));
    });

    const toAdd2 = { ...toAdd, imports };
    const canRecurse = toAdd2.imports.length > 0;

    if (canRecurse) {
      processFileAnalysis(toAdd2, cwd, additionals, pathsEntries);
    }
  });
};

export const add = (...paths: string[]) => {
  try {
    const cwd = process.cwd();
    const json = join(cwd, JSON_FILE_NAME);
    let file: JsonEditor | undefined = edit(json);
    const path = file.get('path');
    file = undefined;

    const additionals: [string, NOmit<FileAnalysis, 'exports'>][] = [];

    const pathsEntries = Object.entries(CODEBASE_ANALYSIS).filter(
      ([key]) => paths.includes(key),
    );

    pathsEntries.forEach(([, analysis]) => {
      processFileAnalysis(analysis, cwd, additionals, pathsEntries);
    });

    const entries = new Set(
      pathsEntries.concat(additionals).filter(([, val]) => isD(val)),
    );

    console.log(`🔧 Création des fichiers (${entries.size} fichiers)...`);

    entries.forEach(([, fileAnalysis]) => {
      writeFileAnalysis(fileAnalysis, path);
    });

    console.log(`✅ Fichiers créés avec succès!`);
  } catch {
    console.error(`❌ Erreur lors de la création des fichiers`);
  }
};
