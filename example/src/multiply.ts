/**
 * Multiplies two numbers together
 * @param a First number
 * @param b Second number
 * @returns The product of a and b
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Multiplies multiple numbers together
 * @param numbers Array of numbers to multiply
 * @returns The product of all numbers
 */
export function multiplyMany(...numbers: number[]): number {
  return numbers.reduce((product, num) => product * num, 1);
}
