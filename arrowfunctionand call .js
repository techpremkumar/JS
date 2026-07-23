function operation(op, a, b) {
    return op(a, b);
}

let add = (a, b) => a + b;

function sub(a, b) {
    return a - b;
}

console.log(operation(add, 2, 3));