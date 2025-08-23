/**
 * Divides the first number by the second
 * @param a Dividend
 * @param b Divisor
 * @returns The quotient of a divided by b
 * @throws Error if divisor is zero
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
export function safeDivide(
  a: number,
  b: number,
  defaultValue: number = 0,
): number {
  return b === 0 ? defaultValue : a / b;
}
