// JS is single-threaded mean?
// It can do one thing at a time.
// Executes code line by line in a single call stack.

console.log("Task 1");
console.log("Task 2");

// Then how does it handle async tasks (like setTimeout fetch, etc.)?

console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");
// Output:
// 1
// 3
// 2

//  Because JavaScript uses:

// Call Stack (main thread)

// Web APIs (provided by browser)

// Callback Queue + Event Loop

