/*
Type Conversion in JavaScript

Type conversion is the process of converting a value
from one data type to another.

There are 2 types:

1. Implicit Type Conversion (Type Coercion)
2. Explicit Type Conversion (Type Casting)
*/
//1. Implicit Type Conversion (Automatic)

// JavaScript automatically converts data types when needed
let result = "5" + 2;
console.log(result); // Output: "52"

//2. Explicit Type Conversion (Manual)

// Converting to Number
let num = Number("5");
console.log(num); // Output: 5

// Converting to String
let str = String(5);
console.log(str); // Output: "5"

// Converting to Boolean
let bool = Boolean(5);
console.log(bool); // Output: true
console.log(true + 1); // Output: 2


