/**
 * Calculates the remainder of division
 * @param a Dividend
 * @param b Divisor
 * @returns The remainder of a divided by b
 * @throws Error if divisor is zero
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
export function abs(n: number): number {
  return Math.abs(n);
}

/**
 * Returns the maximum of two numbers
 * @param a First number
 * @param b Second number
 * @returns The larger of a and b
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
export function min(a: number, b: number): number {
  return Math.min(a, b);
}
