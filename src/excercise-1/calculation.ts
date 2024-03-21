/**
 * Calculates the summation of two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The summation of the two numbers.
 */
let summation = (a: number, b: number): number => {
    return a + b;
}

/**
 * Calculates the subtraction of two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The subtraction of the two numbers.
 */
let subtraction = (a: number, b: number): number => {
    return a - b;
}

/**
 * Calculates the division of two numbers.
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The division of the two numbers.
 */
let division = (a: number, b: number): number => {
    return a / b;
}

export {
    summation,
    subtraction,
    division
}