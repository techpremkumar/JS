/*
A constructor is a special function used to create and initialize objects. It acts like a blueprint for creating multiple objects with the same properties and methods.
Syntax
function Person(name, age) {
    this.name = name;
    this.age = age;
}
this → Refers to the new object being created.
new → Creates a new object and calls the constructor.
*/

function Student(name, age, department) {
    this.name = name;
    this.age = age;
    this.department = department;
}

let student1 = new Student("Prem", 21, "AI & DS");
let student2 = new Student("Rahul", 22, "CSE");

console.log(student1);
console.log(student2);

//Example 2: Constructor with Method
function Employee(name, salary) {
    this.name = name;
    this.salary = salary;

    this.display = function () {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    };
}

let emp1 = new Employee("Prem", 50000);

emp1.display();

//Example 3: Creating Multiple Objects
let emp2 = new Employee("Rahul", 60000);
let emp3 = new Employee("Alice", 55000);

emp2.display();
emp3.display();


