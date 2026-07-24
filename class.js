/*
=========================================
JavaScript Classes - Complete Example
=========================================

Topics Covered:
1. Class
2. Constructor
3. Object Creation
4. Instance Methods
5. Updating Properties
6. Getter
7. Setter
8. Static Method
9. Inheritance
10. Method Overriding
*/

// Parent Class
class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    // Getter
    get name() {
        return this._name;
    }

    // Setter
    set name(value) {
        this._name = value;
    }

    // Instance Method
    display() {
        console.log("Name :", this._name);
        console.log("Age  :", this.age);
    }

    // Method to Override
    role() {
        console.log("I am a Person.");
    }

    // Static Method
    static country() {
        console.log("Country : India");
    }
}

// Child Class
class Student extends Person {
    constructor(name, age, department, marks) {
        super(name, age);
        this.department = department;
        this.marks = marks;
    }

    // Additional Method
    showDetails() {
        console.log("Department :", this.department);
        console.log("Marks      :", this.marks);
    }

    // Method Overriding
    role() {
        console.log("I am a Student.");
    }
}

console.log("===== Creating Objects =====");

const student1 = new Student("Prem", 21, "AI & DS", 95);
const student2 = new Student("Rahul", 22, "CSE", 90);

console.log("\n===== Student 1 Details =====");
student1.display();
student1.showDetails();

console.log("\n===== Student 2 Details =====");
student2.display();
student2.showDetails();

console.log("\n===== Updating Property =====");
student1.name = "Prem Kumar";     // Setter
console.log("Updated Name :", student1.name); // Getter

console.log("\n===== Method Overriding =====");
student1.role();

console.log("\n===== Static Method =====");
Person.country();

console.log("\n===== Accessing Individual Properties =====");
console.log(student1.name);
console.log(student1.age);
console.log(student1.department);
console.log(student1.marks);