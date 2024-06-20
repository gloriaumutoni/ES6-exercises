// Let's create a reusable math library. In a file named math.js, define functions for addition, subtraction, multiplication, and division. In your main application file (e.g., app.js), import the necessary functions from math.js and use them to perform calculations.

//  Let's create a reusable math library. In a file named math.js, define functions for addition, subtraction, multiplication, and division. In your main application file (e.g., app.js), import the necessary functions from math.js and use them to perform calculations.

// Math library using ES6 syntax

// Function for addition
const add = (a, b) => a + b;

// Function for subtraction
const subtract = (a, b) => a - b;

// Function for multiplication
const multiply = (a, b) => a * b;

// Function for division
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
};

// Example usage
console.log(add(5, 3));        // Output: 8
console.log(subtract(10, 4));  // Output: 6
console.log(multiply(6, 7));   // Output: 42
console.log(divide(15, 0));    // Output: 5
