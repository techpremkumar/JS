// ==============================================
// JavaScript Conditional Statements - All in One
// ==============================================

// Variables
let age = 20;
let marks = 85;
let hasLicense = true;
let day = 3;

// ----------------------------------------------
// 1. if Statement
// ----------------------------------------------
console.log("1. if Statement");

if (age >= 18) {
    console.log("You are eligible to vote.");
}

// ----------------------------------------------
// 2. if...else Statement
// ----------------------------------------------
console.log("\n2. if...else Statement");

if (age >= 18) {
    console.log("You are an Adult.");
} else {
    console.log("You are a Minor.");
}

// ----------------------------------------------
// 3. if...else if...else Statement
// ----------------------------------------------
console.log("\n3. if...else if...else Statement");

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// ----------------------------------------------
// 4. Nested if Statement
// ----------------------------------------------
console.log("\n4. Nested if Statement");

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive.");
    } else {
        console.log("You need a driving license.");
    }
} else {
    console.log("You are too young to drive.");
}

// ----------------------------------------------
// 5. switch Statement
// ----------------------------------------------
console.log("\n5. switch Statement");

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}

// ----------------------------------------------
// 6. Ternary Operator
// ----------------------------------------------
console.log("\n6. Ternary Operator");

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

let year = 2024;

if (year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else if (year % 100 === 0) {
    console.log(year + " is Not a Leap Year");
} else if (year % 4 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is Not a Leap Year");
}