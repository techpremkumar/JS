/*
 * JavaScript Data Types
 *
 * Primitive types: string, number, bigint, boolean, undefined,
 * null, and symbol.
 * Objects (including arrays and functions) are reference types.
 */

// 1. Number
const score = 100;
console.log("Number:", score);

// 2. String
const learnerName = "Premkumar";
console.log("String:", learnerName);

// 3. Boolean
const isPassed = true;
console.log("Boolean:", isPassed);

// 4. Undefined: declared but not assigned
let pendingValue;
console.log("Undefined:", pendingValue);

// 5. Null: intentional absence of a value
const emptyValue = null;
console.log("Null:", emptyValue);

// 6. BigInt: integers larger than Number's safe integer range
const largeInteger = 123456789012345678901234567890n;
console.log("BigInt:", largeInteger);

// 7. Symbol: unique identifiers
const identifier = Symbol("id");
console.log("Symbol:", identifier);

// 8. Object
const person = {
    name: "Premkumar",
    age: 21
};
console.log("Object:", person);

// 9. Array (a specialized object)
const numbers = [10, 20, 30, 40];
console.log("Array:", numbers);

// 10. Function
function greet() {
    console.log("Welcome to JavaScript");
}
greet();

// typeof examples
console.log("typeof learnerName:", typeof learnerName);
console.log("typeof score:", typeof score);
console.log("typeof isPassed:", typeof isPassed);
console.log("typeof largeInteger:", typeof largeInteger);
console.log("typeof identifier:", typeof identifier);
console.log("typeof person:", typeof person);
console.log("typeof greet:", typeof greet);

// JavaScript has two special numeric values for infinity.
console.log("Positive infinity:", Infinity);
console.log("Negative infinity:", -Infinity);

// Note: typeof null returns "object" for historical compatibility.
console.log("typeof null:", typeof null);
