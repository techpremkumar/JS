


/* In JavaScript, objects are reference types. This means that when you assign one object to another variable, both variables refer to the same object in memory.*/
// Example 1: Object Reference//
let student1 = {
    name: "Prem",
    age: 21
};

let student2 = student1;

console.log(student1);
console.log(student2);

// Modifying student2 will also affect student1
student2.age = 22;  
console.log(student1);
// Example 3: Adding a Property
student2.city = "Chennai";
console.log(student1);

// Example 4: Comparing Objects
console.log(student1 === student2); // true, because they refer to the same object

let student3 = {
    name: "Prem",
    age: 21
};

console.log(student1 === student3); // false, because they are different objects

// Example 5: Two Different Objects
let student4 = {
    name: "Alice",
    age: 20
};

console.log(student3 === student4); // false, because they are different objects

/*
Creating a Copy Instead of a Reference
Using the Spread Operator (...)

let student1 = {
    name: "Prem",
    age: 21
};

let student2 = { ...student1 };

student2.age = 22;

console.log(student1);
console.log(student2);
*/
let student5 = {...student1};