let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333
console.log(a % b); // 1
console.log(a ** b); // 1000

//2. Assignment Operators
let x = 10;

x += 5;
console.log(x); // 15

x *= 2;
console.log(x); // 30

//3. Comparison Operators
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(5 != 3);     // true
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 3);     // true
console.log(5 <= 3);     // false

//logical Operators
let age = 20;

console.log(age > 18 && age < 25); // true
console.log(age > 30 || age < 25); // true
console.log(!(age > 18));          // false

// Bitwise operator
console.log(5 & 1); // 1
console.log(5 | 1); // 5

//ternary operator
//syntax: condition ? expression1 : expression2
let result = (age >= 18) ? "Adult" : "Not Adult";
console.log(result); // "Adult"

//String Operators
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // "Hello World"

//8. Type Operators
console.log(typeof 5); // "number"
console.log(typeof "Hello"); // "string"