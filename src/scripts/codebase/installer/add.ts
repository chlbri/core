import { CODEBASE_ANALYSIS } from '#codebase';
import isD from '#features/common/castings/is/defined';
import { consoleStars } from '#scripts/manifest/helpers';
import type { NOmit } from '#types';
import edit, { JsonEditor } from 'edit-json-file';
import { dirname, join, relative, resolve } from 'node:path';
import type { FileAnalysis } from '../types';
import {
  FILES_PROPERTY,
  JSON_FILE_NAME,
  PATH_PROPERTY,
} from './constants';
import { transformModule, writeFileAnalysis } from './helpers';

const processFileAnalysis = (
  analysis: NOmit<FileAnalysis, 'exports'>,
  cwd: string,
  additionals: [string, NOmit<FileAnalysis, 'exports'>][],
  pathsEntries: [string, NOmit<FileAnalysis, 'exports'>][],
  files: string[],
) => {
  const relativePath = analysis.relativePath;
  const keys = Object.keys(CODEBASE_ANALYSIS);
  analysis.imports.forEach(({ moduleSpecifier }) => {
    const _path = relative(
      cwd,
      resolve(dirname(relativePath), moduleSpecifier),
    ).replaceAll('/', '.');

    const toAdd =
      CODEBASE_ANALYSIS[_path] ?? CODEBASE_ANALYSIS[`${_path}.index`];
    if (!toAdd) return;

    additionals.push([_path, toAdd]);

    const all = additionals
      .concat(pathsEntries)
      .map(([key]) => key)
      .concat(files);

    const imports = toAdd.imports.filter(({ moduleSpecifier }) => {
      const _path = transformModule({
        cwd,
        relativePath: toAdd.relativePath,
        moduleSpecifier,
      });

      const array = [_path, `${_path}.index`].filter(p =>
        keys.includes(p),
      );

      if (array.length < 1) return false;

      return array.every(p => !all.includes(p));
    });

    const toAdd2 = { ...toAdd, imports };
    const canRecurse = toAdd2.imports.length > 0;

    if (canRecurse) {
      processFileAnalysis(toAdd2, cwd, additionals, pathsEntries, files);
    }
  });
};

export const addFiles = (...paths: string[]) => {
  try {
    const cwd = process.cwd();
    const json = join(cwd, JSON_FILE_NAME);
    let file: JsonEditor | undefined = edit(json);

    if (!file) return;

    const path = file.get(PATH_PROPERTY) as string;
    const files = file.get(FILES_PROPERTY) as string[];

    // Release resources

    const additionals: [string, NOmit<FileAnalysis, 'exports'>][] = [];

    const pathsEntries = Object.entries(CODEBASE_ANALYSIS)
      .filter(([key]) => paths.some(p => key.startsWith(p)))
      .filter(([key]) => !files.includes(key));

    pathsEntries.forEach(([, analysis]) => {
      processFileAnalysis(analysis, cwd, additionals, pathsEntries, files);
    });

    const entries = new Set(
      pathsEntries.concat(additionals).filter(([, val]) => isD(val)),
    );

    consoleStars();
    console.log(`🔧 Création des fichiers (${entries.size} fichiers)...`);

    let success = 0;
    const length = entries.size;

    entries.forEach(([, fileAnalysis]) => {
      const _path = writeFileAnalysis(fileAnalysis, path);
      if (_path) {
        files.push(_path);
        file?.set(FILES_PROPERTY, files);
        success++;
      }
    });

    file.save();
    console.log(`✅ Fichiers créés! (${success}/${length})`);
    file = undefined;
  } catch {
    console.error(`❌ Erreur lors de la création des fichiers`);
  }

  consoleStars();
};
