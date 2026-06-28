# @bemedev/core

A core utility library and CLI tool designed for orchestrating and managing codebase analysis using `@bemedev/codebase`.

<br/>

## Features

- **Codebase Analysis Initialization**: Easily initialize codebase tracking configs.
- **Track & Untrack Files**: Add or remove files from the codebase analysis registry.
- **Lifting & Export Synchronization**: Lift your codebase exports while handling nested exports and excluding exceptions.
- **CLI & JS API support**: Complete parity between the CLI interface and JavaScript/TypeScript programmatic API.

<br/>

## Installation

```bash
pnpm add @bemedev/core
```

<br/>

## CLI Reference

The package provides a `core` binary command (configured via `npx core` or directly as a script).

### `init`
Initialize the codebase analysis environment.
```bash
npx core init [--root <path>]
```

### `softInit`
Perform a soft initialization of the codebase analysis.
```bash
npx core softInit [--root <path>]
```

### `add`
Add one or more files to the codebase analysis.
```bash
npx core add <file1> <file2> ...
```

### `remove`
Remove one or more files from the codebase analysis.
```bash
npx core remove <file1> <file2> ...
```

### `lift`
Lift all modules from the codebase analysis.
```bash
npx core lift [<exception1> <exception2> ...]
```

### `destroy`
Clean up and completely delete the codebase analysis files and configuration.
```bash
npx core destroy
```

<br/>

## API Reference

Programmatic exports available in `@bemedev/core`.

```typescript
import { init, softInit, add, remove, lift, destroy } from '@bemedev/core';

// Initialize the analysis configuration
await init({ root: '.bemedev' });

// Add files to the tracking list
await add({ files: ['src/index.ts', 'src/utils.ts'] });

// Remove files from the tracking list
await remove({ files: ['src/old.ts'] });

// Run the lifting procedure with optional exceptions to exclude
await lift({ exceptions: ['src/exclude-me.ts'] });

// Clean up analysis files
destroy();
```

<br/>

## License

MIT

## [CHANGELOG](CHANGELOG.md)

<br/>

## Author

chlbri (bri_lvi@icloud.com)

[My GitHub](https://github.com/chlbri?tab=repositories)

[<svg width="98" height="96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>](https://github.com/chlbri?tab=repositories)

<br/>

## Links

- [Documentation](https://github.com/chlbri/new-package)
