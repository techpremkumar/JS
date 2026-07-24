/*
===========================
Maps and Sets in JavaScript
===========================

1. Map

A Map is a collection of key-value pairs where:

• Keys can be any data type (string, number, object, function, etc.).
• Keys are unique.
• Maintains insertion order.
let mapName = new Map();
*/

// Creating a Map
let student = new Map();

// Adding values
student.set("name", "Prem");
student.set("age", 21);
student.set("department", "AI & DS");

// Display the Map
console.log(student);

// Accessing values
console.log(student.get("name"));
console.log(student.get("age"));

// Checking if key exists
console.log(student.has("department"));

// Size of Map
console.log(student.size);

// Deleting a key
student.delete("age");
console.log(student);

// Iterating through Map
for (let [key, value] of student) {
    console.log(key + " : " + value);
}

// Clearing the Map
student.clear();
console.log(student);

/*
2. Set

A Set is a collection of unique values.

Duplicate values are automatically removed.
Maintains insertion order.
Syntax
let setName = new Set();
*/
// Creating a Set
let numbers = new Set();

// Adding values
numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(20); // Duplicate (ignored)

console.log(numbers);

// Checking value
console.log(numbers.has(20));

// Size
console.log(numbers.size);

// Delete a value
numbers.delete(10);
console.log(numbers);

// Iterating through Set
for (let value of numbers) {
    console.log(value);
}

// Clear Set
numbers.clear();
console.log(numbers);