/*
=========================================
        Arrays in JavaScript
=========================================

An array is a special object used to store
multiple values in a single variable.

Syntax:
let arrayName = [value1, value2, value3];
*/


let students = ["Prem", "Rahul", "Kiran"];

console.log("Original Array:", students);

students.push("Anand");
console.log("After Push:", students);

students.pop();
console.log("After Pop:", students);

students.unshift("Arun");
console.log("After Unshift:", students);

students.shift();
console.log("After Shift:", students);

console.log("Length:", students.length);

console.log("Index of Rahul:", students.indexOf("Rahul"));

console.log("Contains Prem:", students.includes("Prem"));

console.log("Joined:", students.join(", "));

for (let student of students) {
    console.log(student);
}
