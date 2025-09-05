import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { exec } from 'shelljs';

describe('CLI', () => {
  const rm = () => exec('pnpm run rm:cli');
  beforeAll(rm);
  afterAll(() => exec('pnpm core destroy'));

  const FILES = [
    'globals.types',
    'features.arrays.types',
    'features.booleans.types',
    'features.common.types',
    'features.functions.types',
    'features.numbers.constants',
    'features.numbers.types',
    'features.objects.types',
    'features.promises.types',
    'features.strings.constants',
    'features.strings.types',
    'features.transform.constants',
    'features.transform.types',
    'features.objects.utils.types',
  ];
  describe('#01 => INIT', () => {
    test('#01 => Init cmd', () => exec('pnpm core init'));

    describe('#02 => Folders initialization', () => {
      describe('#01 => json config', () => {
        test('#01 => File exists', () => {
          const exists = existsSync(join(process.cwd(), '.bemedev.json'));
          expect(exists).toBe(true);
        });

        describe('#02 => File is valid', () => {
          let obj: any;
          beforeAll(() => {
            const json = readFileSync(
              join(process.cwd(), '.bemedev.json'),
              { encoding: 'utf-8' },
            );
            obj = JSON.parse(json);
          });

          test.each(['path', 'files', 'version'])(
            `#0%# => Has "%s" key`,
            key => {
              expect(obj).toHaveProperty(key);
            },
          );

          test('#03 => Files are added', () => {
            const files = obj.files;
            expect(files).toEqual(FILES);
          });
        });
      });
    });
  });

  const fileAdded = 'features.arrays.castings.freeze';
  const fileRemoved = 'features.arrays.castings.tuple';
  describe('#02 => ADD', () => {
    test('#01 => Add cmd', () => exec(`pnpm core add "${fileAdded}"`));

    describe('#02 => File is updated', () => {
      let obj: any;
      beforeAll(() => {
        const json = readFileSync(join(process.cwd(), '.bemedev.json'), {
          encoding: 'utf-8',
        });
        obj = JSON.parse(json);
      });

      test(`01 => New file added : "${fileAdded}"`, () => {
        expect(obj.files).toContain(fileAdded);
      });

      test('02 => Existing file still exists : "features.arrays.types"', () => {
        expect(obj.files).toContain('features.arrays.types');
      });

      test('03 => New file added : "globals.utils._unknown"', () => {
        expect(obj.files).toContain('globals.utils._unknown');
      });

      test('04 => New file added : "features.arrays.castings.tuple.index"', () => {
        expect(obj.files).toContain(
          'features.arrays.castings.tuple.index',
        );
      });

      test('05 => Only 3 files are added', () => {
        const length = FILES.length + 3;
        expect(obj.files).toHaveLength(length);
      });
    });
  });

  describe('#03 => REMOVE', () => {
    test(`#01 => Remove cmd "${fileRemoved}"`, () =>
      exec(`pnpm core remove "${fileRemoved}"`));

    describe('#02 => File is updated', () => {
      let obj: any;
      beforeAll(() => {
        const json = readFileSync(join(process.cwd(), '.bemedev.json'), {
          encoding: 'utf-8',
        });
        obj = JSON.parse(json);
      });

      test(`01 => File is not removed because other depended : "${fileRemoved}.index"`, () => {
        expect(obj.files).toContain(`${fileRemoved}.index`);
      });

      test('02 => Existing file still exists', () => {
        expect(obj.files).toContain('features.arrays.types');
        expect(obj.files).toContain('globals.utils._unknown');
        expect(obj.files).toContain('features.arrays.castings.freeze');
        expect(obj.files).toContain(fileAdded);
      });
    });

    test(`#03 => Remove cmd "${fileAdded}"`, () =>
      exec(`pnpm core remove "${fileAdded}"`));

    describe('#04 => File is updated', () => {
      let obj: any;
      beforeAll(() => {
        const json = readFileSync(join(process.cwd(), '.bemedev.json'), {
          encoding: 'utf-8',
        });
        obj = JSON.parse(json);
      });

      test('01 => Remaining files still exists', () => {
        expect(obj.files).toContain('features.arrays.types');
        expect(obj.files).toContain('globals.utils._unknown');
        expect(obj.files).toContain(`${fileRemoved}.index`);
      });

      test(`02 => File is removed: "${fileAdded}"`, () => {
        expect(obj.files).not.toContain(fileAdded);
      });

      test('03 => One file is removed', () => {
        const length = FILES.length + 2;
        expect(obj.files).toHaveLength(length);
      });
    });
  });

  describe.todo('#04 => Destroy');
});
