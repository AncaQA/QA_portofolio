// My first JavaScript file in VS Code
console.log("Hello from VS Code!");
// Variables practice
let testUser = "test@example.com";
let age = 25;
console.log(`User: ${testUser}, Age: ${age}`);
// Function practice
function calculatePassRate(passed, total) {
let rate = (passed / total) * 100;
return rate;
}
let result = calculatePassRate(8, 10);
console.log(`Pass rate: ${result}%`);