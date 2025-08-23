/**
 * Adds two numbers together
 * @param a First number
 * @param b Second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Adds multiple numbers together
 * @param numbers Array of numbers to add
 * @returns The sum of all numbers
 */
export function addMany(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}
