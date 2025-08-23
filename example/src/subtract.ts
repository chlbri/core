/**
 * Subtracts the second number from the first
 * @param a First number (minuend)
 * @param b Second number (subtrahend)
 * @returns The difference of a and b
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
export function subtractMany(
  minuend: number,
  ...subtrahends: number[]
): number {
  return subtrahends.reduce((result, num) => result - num, minuend);
}
