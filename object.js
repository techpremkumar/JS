/* Object Initialization 
let objectName = {
    key1: value1,
    key2: value2,
    key3: value3
};
/* Object Initialization */

let student = {
    name: "Prem",
    age: 21,
    department: "AI & DS"
};

console.log(student);

/* Accessing Object Properties */

// Dot Notation
console.log(student.name);
console.log(student.age);
console.log(student.department);

// Bracket Notation
console.log(student["name"]);
console.log(student["age"]);
console.log(student["department"]);

/* Adding a New Property */
student.city = "Chennai";
console.log(student);

/* Updating a Property */
student.age = 22;
console.log(student);

/* Adding a Method */
student.greet = function () {
    console.log("Hello " + this.name);
};

student.greet();

/* Deleting a Property */
delete student.department;
console.log(student);

/* Loop Through Object */
for (let key in student) {
    console.log(key + " : " + student[key]);
}