/*
Promises in JavaScript

A Promise is an object that represents the eventual completion (success)
or failure of an asynchronous operation.

Promise States:
1. Pending   → Initial state (operation is not completed)
2. Fulfilled → Operation completed successfully
3. Rejected  → Operation failed

Syntax:
let promise = new Promise((resolve, reject) => {
    // asynchronous task
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }


    Create Promise
       │
       ▼
   Pending
   /      \
  /        \
Resolve   Reject
  │          │
  ▼          ▼
.then()   .catch()
     \      /
      \    /
     .finally()


new Promise() creates a Promise.
resolve() → Marks the Promise as fulfilled.
reject() → Marks the Promise as rejected.
.then() handles successful results.
.catch() handles errors.
.finally() always executes, whether the Promise succeeds or fails.
Promise chaining (.then().then()) helps avoid callback nesting ("callback hell").
});
*/

/* Example 1: Promise Resolved */
let promise1 = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed successfully.");
    } else {
        reject("Task failed.");
    }
});

promise1
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


/* Example 2: Promise Rejected */
let promise2 = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("Data Loaded");
    } else {
        reject("Unable to load data");
    }
});

promise2
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


/* Example 3: Using setTimeout() */
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received after 3 seconds");
    }, 3000);
});

promise3.then((result) => {
    console.log(result);
});


/* Example 4: Promise Chaining */
new Promise((resolve) => {
    resolve(5);
})
.then((num) => {
    console.log(num);
    return num * 2;
})
.then((num) => {
    console.log(num);
    return num + 10;
})
.then((num) => {
    console.log(num);
});


/* Example 5: Finally */
let promise5 = new Promise((resolve, reject) => {
    resolve("Payment Successful");
});

promise5
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Transaction Finished");
    });