class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating.");
    }
}

class Dog extends Animal {
    bark() {
        console.log(this.name + " is barking.");
    }
}

let dog1 = new Dog("Tommy");

dog1.eat();   // Inherited method
dog1.bark();  // Child class method