// Analyse automatique de la codebase

export interface ImportInfo {
  moduleSpecifier: string;
  kind: 'default' | 'named' | 'namespace' | 'side-effect';
  namedImports?: string[];
  default?: string;
  isDynamic?: boolean;
}

export interface ExportInfo {
  name: string;
  kind: 'default' | 'named' | 'namespace';
  text?: string;
  moduleSpecifier?: string;
  declarationKind?: 'function' | 'class' | 'interface' | 'type' | 'variable' | 'const' | 'let' | 'enum';
}

export interface FileAnalysis {
  relativePath: string;
  imports: ImportInfo[];
  text: string;
}

export interface CodebaseAnalysis {
  [dotNotationKey: string]: FileAnalysis;
}

export const CODEBASE_ANALYSIS: CodebaseAnalysis = {
  'add': {
    relativePath: 'add.ts',
    imports: [
    ],
    text: `/**
 * add function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Adds multiple numbers together
 * @param numbers Array of numbers to add
 * @returns The sum of all numbers
 */
/**
 * addMany function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function addMany(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}
`,
  },
  'cli': {
    relativePath: 'cli.ts',
    imports: [
      {
        moduleSpecifier: 'core/lib/scripts/codebase/installer/init',
        kind: 'named',
        namedImports: ['init'],
      },
      {
        moduleSpecifier: 'core/lib/scripts/codebase/write',
        kind: 'named',
        namedImports: ['write'],
      },
    ],
    text: `import { init } from 'core/lib/scripts/codebase/installer/init';
import { write } from 'core/lib/scripts/codebase/write';

// Exécuter si ce fichier est appelé directement
if (process.argv[1] && process.argv[1].endsWith('cli.ts')) {
  write();
  // write();
  init();
}
//# sourceMappingURL=cli.js.map

    `,
  },
  'codebase': {
    relativePath: 'codebase.ts',
    imports: [
    ],
    text: `/**
 * ImportInfo interface - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export interface ImportInfo {
  moduleSpecifier: string;
  kind: 'default' | 'named' | 'namespace' | 'side-effect';
  namedImports?: string[];
  default?: string;
  isDynamic?: boolean;
}

/**
 * ExportInfo interface - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export interface ExportInfo {
  name: string;
  kind: 'default' | 'named' | 'namespace';
  text?: string;
  moduleSpecifier?: string;
  declarationKind?: 'function' | 'class' | 'interface' | 'type' | 'variable' | 'const' | 'let' | 'enum';
}

/**
 * FileAnalysis interface - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export interface FileAnalysis {
  relativePath: string;
  imports: ImportInfo[];
  text: string;
}

/**
 * CodebaseAnalysis interface - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export interface CodebaseAnalysis {
  [dotNotationKey: string]: FileAnalysis;
}

/**
 * CODEBASE_ANALYSIS variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const CODEBASE_ANALYSIS: CodebaseAnalysis = {
  'add': {
    relativePath: 'add.ts',
    imports: [
    ],
    text: \`/**
 * Adds two numbers together
 * @param a First number
 * @param b Second number
 * @returns The sum of a and b
 */
/**
 * add function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * add function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Adds multiple numbers together
 * @param numbers Array of numbers to add
 * @returns The sum of all numbers
 */
/**
 * addMany function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * addMany function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function addMany(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}
\`,
  },
  'cli': {
    relativePath: 'cli.ts',
    imports: [
      {
        moduleSpecifier: 'core/lib/scripts/codebase/installer/init',
        kind: 'named',
        namedImports: ['init'],
      },
      {
        moduleSpecifier: 'core/lib/scripts/codebase/write',
        kind: 'named',
        namedImports: ['write'],
      },
    ],
    text: \`#!/usr/bin/env tsx

import { init } from 'core/lib/scripts/codebase/installer/init';
import { write } from 'core/lib/scripts/codebase/write';

// Exécuter si ce fichier est appelé directement
if (process.argv[1] && process.argv[1].endsWith('cli.ts')) {
  write();
  // write();
  init();
}
//# sourceMappingURL=cli.js.map
\`,
  },
  'divide': {
    relativePath: 'divide.ts',
    imports: [
    ],
    text: \`/**
 * Divides the first number by the second
 * @param a Dividend
 * @param b Divisor
 * @returns The quotient of a divided by b
 * @throws Error if divisor is zero
 */
/**
 * divide function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * divide function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Performs safe division that returns a default value for division by zero
 * @param a Dividend
 * @param b Divisor
 * @param defaultValue Value to return if divisor is zero (default: 0)
 * @returns The quotient or default value
 */
/**
 * safeDivide function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * safeDivide function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function safeDivide(
  a: number,
  b: number,
  defaultValue: number = 0,
): number {
  return b === 0 ? defaultValue : a / b;
}
\`,
  },
  'index': {
    relativePath: 'index.ts',
    imports: [
    ],
    text: \`// Export all arithmetic functions
export * from './add';
export * from './divide';
export * from './multiply';
export * from './power';
export * from './subtract';
export * from './utils';
\`,
  },
  'multiply': {
    relativePath: 'multiply.ts',
    imports: [
    ],
    text: \`/**
 * Multiplies two numbers together
 * @param a First number
 * @param b Second number
 * @returns The product of a and b
 */
/**
 * multiply function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * multiply function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Multiplies multiple numbers together
 * @param numbers Array of numbers to multiply
 * @returns The product of all numbers
 */
/**
 * multiplyMany function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * multiplyMany function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function multiplyMany(...numbers: number[]): number {
  return numbers.reduce((product, num) => product * num, 1);
}
\`,
  },
  'power': {
    relativePath: 'power.ts',
    imports: [
    ],
    text: \`/**
 * Raises a number to the power of another number
 * @param base Base number
 * @param exponent Exponent
 * @returns base raised to the power of exponent
 */
/**
 * power function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * power function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square of a number
 * @param n Number to square
 * @returns n squared
 */
/**
 * square function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * square function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function square(n: number): number {
  return n * n;
}

/**
 * Calculates the cube of a number
 * @param n Number to cube
 * @returns n cubed
 */
/**
 * cube function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * cube function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function cube(n: number): number {
  return n * n * n;
}

/**
 * Calculates the square root of a number
 * @param n Number to find square root of
 * @returns Square root of n
 * @throws Error if n is negative
 */
/**
 * sqrt function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * sqrt function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function sqrt(n: number): number {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
}
\`,
  },
  'subtract': {
    relativePath: 'subtract.ts',
    imports: [
    ],
    text: \`/**
 * Subtracts the second number from the first
 * @param a First number (minuend)
 * @param b Second number (subtrahend)
 * @returns The difference of a and b
 */
/**
 * subtract function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * subtract function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Subtracts multiple numbers from the first number
 * @param minuend The number to subtract from
 * @param subtrahends Numbers to subtract
 * @returns The result after subtracting all numbers
 */
/**
 * subtractMany function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * subtractMany function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function subtractMany(
  minuend: number,
  ...subtrahends: number[]
): number {
  return subtrahends.reduce((result, num) => result - num, minuend);
}
\`,
  },
  'utils': {
    relativePath: 'utils.ts',
    imports: [
    ],
    text: \`/**
 * Calculates the remainder of division
 * @param a Dividend
 * @param b Divisor
 * @returns The remainder of a divided by b
 * @throws Error if divisor is zero
 */
/**
 * modulo function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * modulo function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function modulo(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Calculates the absolute value of a number
 * @param n Number
 * @returns Absolute value of n
 */
/**
 * abs function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * abs function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function abs(n: number): number {
  return Math.abs(n);
}

/**
 * Returns the maximum of two numbers
 * @param a First number
 * @param b Second number
 * @returns The larger of a and b
 */
/**
 * max function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * max function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function max(a: number, b: number): number {
  return Math.max(a, b);
}

/**
 * Returns the minimum of two numbers
 * @param a First number
 * @param b Second number
 * @returns The smaller of a and b
 */
/**
 * min function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
/**
 * min function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function min(a: number, b: number): number {
  return Math.min(a, b);
}
\`,
  },
};

// Statistiques de l'analyse
/**
 * ANALYSIS_STATS variable - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export const ANALYSIS_STATS = {
  totalFiles: 8,
  totalImports: 2,
  totalExports: 38,
};
`,
  },
  'divide': {
    relativePath: 'divide.ts',
    imports: [
    ],
    text: `/**
 * divide function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Performs safe division that returns a default value for division by zero
 * @param a Dividend
 * @param b Divisor
 * @param defaultValue Value to return if divisor is zero (default: 0)
 * @returns The quotient or default value
 */
/**
 * safeDivide function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function safeDivide(
  a: number,
  b: number,
  defaultValue: number = 0,
): number {
  return b === 0 ? defaultValue : a / b;
}
`,
  },
  'index': {
    relativePath: 'index.ts',
    imports: [
    ],
    text: `export * from './add';
export * from './divide';
export * from './multiply';
export * from './power';
export * from './subtract';
export * from './utils';
`,
  },
  'multiply': {
    relativePath: 'multiply.ts',
    imports: [
    ],
    text: `/**
 * multiply function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Multiplies multiple numbers together
 * @param numbers Array of numbers to multiply
 * @returns The product of all numbers
 */
/**
 * multiplyMany function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function multiplyMany(...numbers: number[]): number {
  return numbers.reduce((product, num) => product * num, 1);
}
`,
  },
  'power': {
    relativePath: 'power.ts',
    imports: [
    ],
    text: `/**
 * power function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square of a number
 * @param n Number to square
 * @returns n squared
 */
/**
 * square function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function square(n: number): number {
  return n * n;
}

/**
 * Calculates the cube of a number
 * @param n Number to cube
 * @returns n cubed
 */
/**
 * cube function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function cube(n: number): number {
  return n * n * n;
}

/**
 * Calculates the square root of a number
 * @param n Number to find square root of
 * @returns Square root of n
 * @throws Error if n is negative
 */
/**
 * sqrt function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function sqrt(n: number): number {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
}
`,
  },
  'subtract': {
    relativePath: 'subtract.ts',
    imports: [
    ],
    text: `/**
 * subtract function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Subtracts multiple numbers from the first number
 * @param minuend The number to subtract from
 * @param subtrahends Numbers to subtract
 * @returns The result after subtracting all numbers
 */
/**
 * subtractMany function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function subtractMany(
  minuend: number,
  ...subtrahends: number[]
): number {
  return subtrahends.reduce((result, num) => result - num, minuend);
}
`,
  },
  'utils': {
    relativePath: 'utils.ts',
    imports: [
    ],
    text: `/**
 * modulo function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function modulo(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Calculates the absolute value of a number
 * @param n Number
 * @returns Absolute value of n
 */
/**
 * abs function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function abs(n: number): number {
  return Math.abs(n);
}

/**
 * Returns the maximum of two numbers
 * @param a First number
 * @param b Second number
 * @returns The larger of a and b
 */
/**
 * max function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function max(a: number, b: number): number {
  return Math.max(a, b);
}

/**
 * Returns the minimum of two numbers
 * @param a First number
 * @param b Second number
 * @returns The smaller of a and b
 */
/**
 * min function - Auto-generated expression
 * 
 * ⚠️ WARNING: This expression is auto-generated and should not be modified.
 * Any manual changes will be overwritten during the next generation.
 * 
 * @generated
 * @readonly
 * @author chlbri (bri_lvi@icloud.com)
 */
export function min(a: number, b: number): number {
  return Math.min(a, b);
}
`,
  },
};

// Statistiques de l'analyse
export const ANALYSIS_STATS = {
  totalFiles: 9,
  totalImports: 2,
  totalExports: 44,
};
