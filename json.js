/*
JSON (JavaScript Object Notation)

JSON is a lightweight data-interchange format used to store and exchange data.

Rules:
- Data is stored as key-value pairs.
- Keys must be enclosed in double quotes.
- Values can be String, Number, Boolean, Object, Array, or null.
*/

// JavaScript Object
let student = {
    name: "Prem",
    age: 21,
    department: "AI & DS"
};

// Convert JavaScript Object to JSON String
let jsonData = JSON.stringify(student);

console.log("JSON String:");
console.log(jsonData);
console.log(typeof jsonData); // string

// Convert JSON String back to JavaScript Object
let objectData = JSON.parse(jsonData);

console.log("\nJavaScript Object:");
console.log(objectData);
console.log(objectData.name);
console.log(typeof objectData); // object