// console.log("=== Example 1: filter() and find() ===\n");

// let testSuite = [
//  {id: "TC001", name: "Login valid", priority: "High", status: "Pass"},
//  {id: "TC002", name: "Login invalid", priority: "High", status: "Pass"},
//  {id: "TC003", name: "Register user", priority: "Medium", status: "Fail"},
//  {id: "TC004", name: "Update profile", priority: "Low", status: "Pass"},
//  {id: "TC005", name: "Delete account", priority: "Medium", status: "Fail"},
//  {id: "TC006", name: "Search products", priority: "High", status: "Pass"}
// ];

// // console.log("Total tests:", testSuite.length);

// // let failedTests = testSuite.filter(test => test.status === 'Fail');

// // console.log("\nFailed tests:");
// // for (let test of failedTests) {
// //     console.log(`- ${test.id}: ${test.name}`);
// // }

// // console.log(`Total failed tests: ${failedTests.length}`);

// // let highPriority = testSuite.filter(test=> test.priority === 'High');
// // console.log("\nHigh priority tests:");
// // for (let test of highPriority) {
// //     console.log(`-${test.id}: ${test.name} [${test.status}]`);
// // }

// // console.log(`Total high priority: ${highPriority.length}`);

// // let criticalFailures = testSuite.filter(test => test.status === "Fail" && test.priority === "High");

// // console.log("\nCritical failures (Failed + High Priority):");
// // console.log(criticalFailures);
// // console.log(`Count: ${criticalFailures.length}`);

// // let firstFailed = testSuite.find(test => test.status === "Fail");
// // console.log("\nFirst failed test:");
// // console.log(`${firstFailed.id}: ${firstFailed.name}`);

// // let specificTest = testSuite.find(test => test.id === "TC004");
// // console.log("\nFound test TC004:");
// // console.log(`Name: ${specificTest.name}`);
// // console.log(`Status: ${specificTest.status}`);

// let mediumTests = testSuite.filter(test => test.priority === 'Medium');
// console.log("\nMedium priority tests:");
// for (let test of mediumTests){
//     console.log(`-${test.id}: ${test.name}`);
// }

// console.log('\nTotal medium priority tests:', mediumTests.length)

// let passedTests = testSuite.filter(test => test.status === 'Pass'); 
// console.log('\nTests with passed status:')
// for (let test of passedTests) {
//     console.log(`- ${test.id}: ${test.name}`); }

// let firstHigh = testSuite.find(test => test.priority === 'High');
// console.log(`\nFirst high priority test: ${firstHigh.id} - ${firstHigh.name}`);

// let lowPriority = testSuite.filter(test => test.priority === 'Low');
// console.log(`\nCount of failed tests: ${lowPriority.length}`);

console.log("\n\n=== Example 2: map(), some(), every() ===\n");

let testResults = [
 {id: "TC001", name: "Login", status: "Pass", duration: 2.5},
 {id: "TC002", name: "Logout", status: "Pass", duration: 1.2},
 {id: "TC003", name: "Register", status: "Fail", duration: 3.1},
 {id: "", name: "Search", status: "", duration: 1.8}
];


// let testIds = testResults.map(test => test.id);
// console.log("All test IDs:");
// console.log(testIds);

// let testNames = testResults.map(test => test.name);
// console.log("\nAll test names:");
// console.log(testNames);

// let summaries = testResults.map(test => {
//  return `${test.id}: ${test.name} - ${test.status}`;
// });

// console.log("\nTest summaries:");
// for (let summary of summaries) {
//  console.log(summary);
// }
// let durationsMs = testResults.map(test => test.duration * 1000);
// console.log("\nDurations in milliseconds:");
// console.log(durationsMs);

// let hasFailures = testResults.some(test => test.status === "Fail");
// console.log("\nHas any failures?", hasFailures);

// let hasSlow = testResults.some(test => test.duration > 3);
// console.log("Has any slow tests (>3s)?", hasSlow);

// let allPassed = testResults.every(test => test.status === "Pass");
// console.log("\nDid all tests pass?", allPassed);

// let allFast = testResults.every(test => test.duration < 5);
// console.log("Were all tests fast (<5s)?", allFast);

console.log("\n=== My Practice ===");

//1. Just statuses 
let testStatus = testResults.map(test => test.status);
console.log(`\nAll test statuses:`, testStatus);

//2. Objects with id and status only
let simplified = testResults.map(test =>{
    return `${test.id}: ${test.status}`;
});

//3. Any fast tests (<2s)?
let fastTest = testResults.some(test => test.duration < 2);
console.log(`\nAre there any fast tests? - ${fastTest}`);

//4. Every test has id?
let allHaveId = testResults.every(test => test.id);
console.log(`\nEvery test has an ID? - ${allHaveId}`)