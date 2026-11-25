import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from 'shelljs';

/**
 * The CLI is run with `pnpm core <command>` inside this package.
 *
 * `process.cwd()` cannot be used: when this project runs as a workspace
 * project of the repository root, the worker cwd is the repository root.
 */
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const run = (command: string) => exec(`pnpm core ${command}`, { cwd: ROOT });

describe('CLI', () => {
  const FILES = [
    'features/arrays/types',
    'features/booleans/types',
    'features/common/types',
    'features/functions/types',
    'features/numbers/constants',
    'features/numbers/types',
    'features/objects/types',
    'features/objects/utils/types',
    'features/promises/types',
    'features/strings/constants',
    'features/strings/types',
    'globals/constants',
    'globals/types',
  ];

  describe('#01 => INIT', () => {
    test('#01 => Init cmd', () => run('init'));

    describe('#02 => Folders initialization', () => {
      describe('#01 => json config', () => {
        test('#01 => File exists', () => {
          const exists = existsSync(join(ROOT, '.bemedev.json'));
          expect(exists).toBe(true);
        });

        describe('#02 => File is valid', () => {
          let obj: any;
          beforeAll(() => {
            const json = readFileSync(join(ROOT, '.bemedev.json'), {
              encoding: 'utf-8',
            });
            obj = JSON.parse(json);
          });

          test.each(['path', 'files', 'version'])(`#0%# => Has "%s" key`, key => {
            expect(obj).toHaveProperty(key);
          });

          test('#03 => Files are added', () => {
            const files = obj.files;
            expect(files).toEqual(FILES);
          });
        });
      });
    });
  });

  const fileAdded = 'features/arrays/castings/freeze';
  const fileRemoved = 'features/arrays/castings/tuple';
  describe('#02 => ADD', () => {
    test('#01 => Add cmd', () => run(`add "${fileAdded}"`));

    describe('#02 => File is updated', () => {
      let obj: any;
      beforeAll(() => {
        const json = readFileSync(join(ROOT, '.bemedev.json'), {
          encoding: 'utf-8',
        });
        obj = JSON.parse(json);
      });

      test(`01 => New file added : "${fileAdded}"`, () => {
        expect(obj.files).toContain(fileAdded);
      });

      test('02 => Existing file still exists : "features/arrays/types"', () => {
        expect(obj.files).toContain('features/arrays/types');
      });

      test('03 => New file added : "globals/utils/_unknown"', () => {
        expect(obj.files).toContain('globals/utils/_unknown');
      });

      test('04 => New file added : "features/arrays/castings/tuple/index"', () => {
        expect(obj.files).toContain('features/arrays/castings/tuple/index');
      });

      test('05 => Only 3 files are added', () => {
        const length = FILES.length + 3;
        expect(obj.files).toHaveLength(length);
      });
    });
  });

  describe('#03 => REMOVE', () => {
    test(`#01 => Remove cmd "${fileRemoved}"`, () => run(`remove "${fileRemoved}"`));

    describe('#02 => File is updated', () => {
      let obj: any;
      beforeAll(() => {
        const json = readFileSync(join(ROOT, '.bemedev.json'), {
          encoding: 'utf-8',
        });
        obj = JSON.parse(json);
      });

      test(`01 => File is not removed because other depended : "${fileRemoved}.index"`, () => {
        expect(obj.files).toContain(`${fileRemoved}/index`);
      });

      test('02 => Existing file still exists', () => {
        expect(obj.files).toContain('features/arrays/types');
        expect(obj.files).toContain('globals/utils/_unknown');
        expect(obj.files).toContain('features/arrays/castings/freeze');
        expect(obj.files).toContain(fileAdded);
      });
    });

    test(`#03 => Remove cmd "${fileAdded}"`, () => run(`remove "${fileAdded}"`));

    describe('#04 => File is updated', () => {
      let obj: any;
      beforeAll(() => {
        const json = readFileSync(join(ROOT, '.bemedev.json'), {
          encoding: 'utf-8',
        });
        obj = JSON.parse(json);
      });

      test('01 => Remaining files still exists', () => {
        expect(obj.files).toContain('features/arrays/types');
        expect(obj.files).toContain('globals/utils/_unknown');
        expect(obj.files).toContain(`${fileRemoved}/index`);
      });

      test(`02 => File is removed: "${fileAdded}"`, () => {
        expect(obj.files).not.toContain(fileAdded);
      });

      test('03 => One file is removed', () => {
        const length = FILES.length + 2;
        expect(obj.files).toHaveLength(length);
      });
    });

    test(`#05 => Lift`, () => run('lift'), 60_000);

    describe('#06 => FolderPath removed and JSONPATH changed', () => {
      let obj: any;
      beforeAll(() => {
        const json = readFileSync(join(ROOT, '.bemedev.json'), {
          encoding: 'utf-8',
        });
        obj = JSON.parse(json);
      });
      test('#01 => FolderPath removed', () => {
        const folderPath = join(ROOT, 'src', obj.path);
        const exists = existsSync(folderPath);
        expect(exists).toBe(false);
      });

      test('#02 => json.files is empty', () => {
        console.log('obj', obj);
        expect(obj.files).toHaveLength(0);
      });
    });

    test(`#07 => softInit`, () => run('softInit'), 60_000);

    describe('#06 => FolderPath is recreated and JSONPATH changed', () => {
      let obj: any;
      beforeAll(() => {
        const json = readFileSync(join(ROOT, '.bemedev.json'), {
          encoding: 'utf-8',
        });
        obj = JSON.parse(json);
      });

      test('#01 => FolderPath recreated', () => {
        const folderPath = join(ROOT, 'src', obj.path);
        const exists = existsSync(folderPath);
        expect(exists).toBe(true);
      });

      describe('#02 => paths', () => {
        test.each(['path', 'files', 'version'])(`#0%# => Has "%s" key`, key => {
          expect(obj).toHaveProperty(key);
        });
      });

      test('#03 => json.files is rinit', () => {
        expect(obj.files.sort()).toStrictEqual(FILES.sort());
      });
    });

    test(`#07 => destroy`, () => run('destroy'), 60_000);

    describe('#08 => FolderPath and JSON_PATH are removed', () => {
      test('#01 => FolderPath removed', () => {
        const folderPath = join(ROOT, 'src', '.bemedev');
        const exists = existsSync(folderPath);
        expect(exists).toBe(false);
      });

      test('#02 => json.files is removed', () => {
        const path = join(ROOT, '.bemedev.json');
        const exists = existsSync(path);
        expect(exists).toBe(false);
      });
    });
  });
});
