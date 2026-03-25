console.log('=== Example 1 Reading JSON ===\n');

const fs = require ('fs');

let rawData = fs.readFileSync('test-data.json');

let testData = JSON.parse(rawData);

console.log('Enviroment:', testData.config.environment);
console.log('Timeout:', testData.config.timeout);

console.log('\nTest Users:');
for (let user of testData.testUsers) {
    console.log(`- ${user.id}: ${user.email} (Age: ${user.age})`);
}

let firstUser = testData.testUsers[0];
console.log("\nFirst user details:");
console.log(`Email: ${firstUser.email}`);
console.log(`Password: ${firstUser.password}`);
console.log(`Active: ${firstUser.active}`);

let activeAccount = 0;
for (let user of testData.testUsers) {
    if (user.active === true) {
        activeAccount++;
       }
       
}
console.log(`Active users: ${activeAccount}`)

console.log('\nUsers under 30:');
for (let user of testData.testUsers){
    if (user.age < 30) {
        console.log(`- ${user.id}: ${user.age}`)
    }
}

console.log("\n\n=== Example 2 : Writing JSON ===\n");

let testResults = {
    testSuite: "Login Tests",
    executionDate: "2026-03-10",
    totalTests: 5,
    passed: 4,
    failed: 1,
 tests: [
 {
 id: "TC001",
 name: "Login with valid credentials",
 status: "Pass",
 duration: "2.5s"
 },
 {
 id: "TC002",
 name: "Login with invalid password",
 status: "Pass",
 duration: "1.8s"
 },
 {
 id: "TC003",
 name: "Login with empty username",
 status: "Fail",
 duration: "0.5s"
 },
 {
 id: "TC004",
 name: "Login with special characters",
 status: "Pass",
 duration: "2.1s"
 },
 {
 id: "TC005",
 name: "Logout after login",
 status: "Pass",
 duration: "1.2s"
 }
 ]
};

console.log('Test results objects created:');
console.log(`Total: ${testResults.totalTests}`);
console.log(`Passed: ${testResults.passed}`);
console.log(`Failed: ${testResults.failed}`);

let jsonString = JSON.stringify(testResults, null, 2);

console.log("\nJSON string preview (first 200 chars):");
console.log(jsonString.substring(0, 200) + "...");

fs.writeFileSync ('test-results.json', jsonString);

console.log("\nSaved to test-results.json");

let savedData = JSON.parse(fs.readFileSync('test-results.json'));
console.log("\nVerification - read back from file:");
console.log(`Test suite : ${savedData.testSuite}`);
console.log(`Execution date: ${savedData.executionDate}`);

let registrationResults = {
    testSuite: "Registration tests",
    executionDate: "2024-03-10",
    totalTests: 7,
    passed: 6,
    failed: 1,
};

let jsonRegistration = JSON.stringify(registrationResults, null, 2);

fs.writeFileSync ('registration-results.json', jsonRegistration);

console.log("\nSaved to registration-results.json");

