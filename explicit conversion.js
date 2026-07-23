// 2. Explicit Type Conversion (Manual)

// The programmer converts the data type using built-in functions.

// String → Number
let num1 = Number("5");
console.log(num1); // Output: 5
console.log(typeof num1); // number

// Number → String
let num2 = 100;
let str = String(num2);

console.log(str); // Output: "100"
console.log(typeof str); // string

// Number → Boolean
let bool = Boolean(5);
console.log(bool); // Output: true
console.log(typeof bool); // boolean

// String → Integer
let value1 = "25";
console.log(parseInt(value1)); // Output: 25

// String → Float
let value2 = "25.75";
console.log(parseFloat(value2)); // Output: 25.75