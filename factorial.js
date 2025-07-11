/**
 * Calculates the factorial of a non-negative integer n.
 *
 * @param {number} n - The non-negative integer for which to compute the factorial.
 * @returns {number} The factorial of the input number n.
 * @throws {Error} Throws an error if n is a negative number.
 */
function factorial(n) {
    // Handle edge cases
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Calculate factorial iteratively
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}

// Alternative recursive implementation
/**
 * Calculates the factorial of a non-negative integer using recursion.
 *
 * @param {number} n - The non-negative integer for which to calculate the factorial.
 * @returns {number} The factorial of the given number.
 * @throws {Error} Throws an error if the input is a negative number.
 */
function factorialRecursive(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    
    return n * factorialRecursive(n - 1);
}

// Browser-specific functions for UI interaction
function calculateFactorial() {
    const input = document.getElementById('numberInput');
    const number = parseInt(input.value);
    
    if (isNaN(number) || input.value === '') {
        // This function is now handled in the HTML file
        return;
    }
    
    try {
        const result = factorial(number);
        // Result display is now handled in the HTML file
    } catch (error) {
        // Error display is now handled in the HTML file
    }
}

function calculateFactorialRecursive() {
    const input = document.getElementById('numberInput');
    const number = parseInt(input.value);
    
    if (isNaN(number) || input.value === '') {
        // This function is now handled in the HTML file
        return;
    }
    
    try {
        const result = factorialRecursive(number);
        // Result display is now handled in the HTML file
    } catch (error) {
        // Error display is now handled in the HTML file
    }
}