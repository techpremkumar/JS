/*
Function
Example
Without Parameters	greet()
With Parameters	add(a, b)
With Return Value	multiply(a, b)


/*
==========================================
1. Function Without Parameters
==========================================
*/

// Step 1: Create a function
function greet() {
    console.log("Hello, Welcome to JavaScript!");
}

// Step 2: Call the function
greet();

/*
Output:
Hello, Welcome to JavaScript!
*/

/*
==========================================
2. Function With Parameters
==========================================
*/

// Step 1: Create a function with two parameters
function add(a, b) {
    console.log("Sum =", a + b);
}

// Step 2: Pass values (arguments) to the function
add(10, 20);

/*
Output:
Sum = 30
*/

/*
==========================================
3. Function With Return Value
==========================================
*/

// Step 1: Create a function
function multiply(a, b) {
    return a * b;     // Return the result
}

// Step 2: Store the returned value
let result = multiply(5, 4);

// Step 3: Print the returned value
console.log("Product =", result);

/*
Output:
Product = 20
*/
