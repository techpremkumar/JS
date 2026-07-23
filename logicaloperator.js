// Combined Program: Logical Operators + Null Coalescing Operator

let username = null;
let age = 20;
let hasID = true;
let isMember = false;

// Null Coalescing Operator
let displayName = username ?? "Guest User";
console.log("Name:", displayName);

// Logical AND (&&)
console.log("Eligible:", age >= 18 && hasID);

// Logical OR (||)
console.log("Access:", age >= 18 || isMember);

// Logical NOT (!)
console.log("Member Status:", !isMember);

// Combined Condition
if ((age >= 18 && hasID) || isMember) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}