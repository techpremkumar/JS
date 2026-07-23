// Datatypes

// Primitive Data Types
// Non Primitive Data Types

// Number
let a = 1;
console.log(a);
// string 
let name = "premkumar";
console.log(name);
//boolean
let isPassed=true;
console.log(isPassed);
//undefined a variable declared but not assigned a value
let b;
console.log(b);
//null -represents null value
let c=null;
console.log(c);
//BigInt -Used for very large numbers.
let bigintvalue=123456789;
console.log(bigintvalue);
//symbol-used to creste unique identifiers for objects 
let id = Symbol("id");
console.log(id);
//non primitive data types
//object
let person={
    name:"premkumar",
    age:30
};
console.log(person);
// array
let numbers=[10,20,30,40];
console.log(numbers);
//function
function greet(){
    console.log("welcome to javascript");
}
greet();
//typeof Operator-Used to check the datatype.

console.log(typeof name);
console.log(typeof 10);
console.log(typeof true);
let value= Infinity;

console.log(value);
let value2=-Infinity;
console.log(value2);