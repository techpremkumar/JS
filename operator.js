/*
 * JavaScript Operators
 *
 * This example demonstrates arithmetic, assignment, comparison,
 * logical, bitwise, ternary, string, and type operators.
 */

// 1. Arithmetic operators
const firstNumber = 10;
const secondNumber = 3;

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Remainder:", firstNumber % secondNumber);
console.log("Exponentiation:", firstNumber ** secondNumber);

// 2. Assignment operators
let score = 10;

score += 5;
console.log("After += 5:", score);

score *= 2;
console.log("After *= 2:", score);

// 3. Comparison operators
console.log("5 == '5':", 5 == "5"); // Demonstrates type coercion.
console.log("5 === '5':", 5 === "5");
console.log("5 !== 3:", 5 !== 3);
console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 >= 3:", 5 >= 3);
console.log("5 <= 3:", 5 <= 3);

// 4. Logical operators
const age = 20;

console.log("Age is between 18 and 25:", age > 18 && age < 25);
console.log("Age is over 30 or under 25:", age > 30 || age < 25);
console.log("Age is not above 18:", !(age > 18));

// 5. Bitwise operators
console.log("5 & 1:", 5 & 1);
console.log("5 | 1:", 5 | 1);

// 6. Ternary operator
const eligibility = age >= 18 ? "Adult" : "Minor";
console.log("Age category:", eligibility);

// 7. String concatenation
const greeting = "Hello";
const language = "JavaScript";
console.log("Greeting:", greeting + " " + language);

// 8. Type operator
console.log("typeof 5:", typeof 5);
console.log('typeof "Hello":', typeof "Hello");

// 9. Boolean conversion and strict equality
const textValue = "0";
const numericValue = 0;

console.log('Boolean("0"):', Boolean(textValue));
console.log("Boolean(0):", Boolean(numericValue));
console.log("'0' === 0:", "0" === 0);
