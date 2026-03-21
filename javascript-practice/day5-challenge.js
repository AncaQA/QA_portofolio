const testSuite = [
 {id: "TC001", name: "Login valid", priority: "Critical", status: "Pass", duration: 2.1},
 {id: "TC002", name: "Login invalid password", priority: "High", status: "Pass", duration: 2.4},
 {id: "TC003", name: "Login empty fields", priority: "High", status: "Fail", duration: 0.8},
 {id: "TC004", name: "Register new user", priority: "Critical", status: "Fail", duration: 3.4},  
 {id: "TC005", name: "Register existing user", priority: "Medium", status: "Pass", duration: 1.3}, 
 {id: "TC006", name: "Update profile", priority: "Medium", status: "Pass", duration: 1.8},
 {id: "TC007", name: "Delete account", priority: "Low", status: "Pass", duration: 1.2},
 {id: "TC008", name: "Password reset", priority: "High", status: "Fail", duration: 2.5}
];

console.log("TEST SUITE ANALYSIS REPORT");
console.log("==========================\n");

let totalTests = testSuite.length;

let passedTests = testSuite.filter(test => test.status === "Pass");
let totalPassed = passedTests.length;

let failedTests = testSuite.filter(test => test.status === 'Fail');

let passRate = (totalPassed/totalTests) * 100;

console.log("\nSummary:");
console.log(`- Total tests: ${totalTests}`);
console.log(`- Passed: ${totalPassed}`);
console.log(`- Failed: ${failedTests.length}`);
console.log(`- Pass Rate: ${passRate}%`);

let failedTestIDs = testSuite
    .filter(test => test.status === "Fail")
    .map(test => test.id);

console.log(`\nFailed tests:`);
for (let test of failedTestIDs) {
    console.log(`- ${test}`);
}


let criticalTestNames = testSuite
    .filter(test => test.priority === "Critical")
    .map(test => test.name);

console.log(`\nCritical tests:`);
for (let test of criticalTestNames) {
    console.log(`- ${test}`);
};

let anyCriticalFeilures = testSuite.some(test => test.priority === 'Critical' && test.status === 'Fail');
console.log('\nCritical Failures:', anyCriticalFeilures ? 'Yes':'No');



let mediumPassed = testSuite
    .filter(test => test.priority === 'Medium')
    .every(test => test.status === 'Pass');
console.log('\nAll medium tests passed:', mediumPassed ? 'Yes' : 'No' );

let totalDuration = testSuite  
    .map(test => test.duration)
    .reduce((sum, dur) => sum + dur, 0);
let avgDuration = totalDuration / totalTests;

let slowest = testSuite[0];
for (let test of testSuite){
    if(test.duration > slowest.duration){
        slowest = test;
    }
}

console.log("\nPerformance:");
console.log(`- Average Duration: ${avgDuration.toFixed(2)}s`);
console.log(`- Slowest Test: ${slowest.id} - ${slowest.name} (${slowest.duration}s)`);