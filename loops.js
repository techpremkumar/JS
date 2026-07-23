// 1. for Loop
console.log("For Loop");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. while Loop
console.log("\nWhile Loop");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// 3. do...while Loop
console.log("\nDo While Loop");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// 4. for...of Loop
console.log("\nFor...of Loop");
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

// 5. for...in Loop
console.log("\nFor...in Loop");
let student = {
    name: "Prem",
    age: 21,
    city: "Chennai"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}