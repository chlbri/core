/**
 * Raises a number to the power of another number
 * @param base Base number
 * @param exponent Exponent
 * @returns base raised to the power of exponent
 */
export function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square of a number
 * @param n Number to square
 * @returns n squared
 */
export function square(n: number): number {
  return n * n;
}

/**
 * Calculates the cube of a number
 * @param n Number to cube
 * @returns n cubed
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
export function sqrt(n: number): number {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
}
