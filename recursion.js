/*
Recursion in JavaScript

Recursion is a programming technique where a function calls itself to solve a problem. It is commonly used for problems that can be broken down into smaller, similar subproblems.

Syntax
function functionName(parameters) {
    if (baseCondition) {
        return;
    }

    // Work

    functionName(updatedParameters); // Recursive call
}
Components of Recursion
1. Base Case

The condition that stops the recursion.

2. Recursive Case

The function calls itself with modified arguments.
*/
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));
