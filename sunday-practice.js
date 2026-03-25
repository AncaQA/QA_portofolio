// Sunday JavaScript Practice
// Solutions to exercises from Sunday review
// Exercise 1: Test User Data
console.log("=== Exercise 1: Test Users ===");
let user1Email = "test1@example.com";
let user1Age = 25;
let user1Active = true;
console.log(`User 1: ${user1Email}, Age: ${user1Age}, Active: ${user1Active}`);

// Exercise 2: Validation
console.log("\n=== Exercise 2: Validation ===");
let username = "testuser";
let password = "Pass123!";
let age = 25;
console.log(`Username valid: ${username.length >= 5}`);
console.log(`Password valid: ${password.length >= 8}`);
console.log(`Age valid: ${age >= 18 && age <= 65}`);

// Exercise 3: Pass Rate
console.log("\n=== Exercise 3: Pass Rate ===");

function calculatePassRate(passed, total) {
return (passed / total) * 100;
}
console.log(`Rate 1: ${calculatePassRate(8, 10)}%`);
console.log(`Rate 2: ${calculatePassRate(15, 20)}%`);
