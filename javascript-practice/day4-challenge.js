const fs = require('fs')

let rawData = fs.readFileSync('test-cases-input.json');

let testCases = JSON.parse(rawData);

let total = testCases.length;
let passed = 0;
let failed = 0;

for (let test of testCases) {
    if (test.status === "Pass") {
        passed++;
    }
    else {
        failed++;
    }
}

let passRate = (passed / total) * 100 ;

let report = {
    executionDate : "2026-03-10",
    totalTests: total,
    passed: passed,
    failed: failed,
    passRate: passRate,
    results: testCases
}

let reportJson = JSON.stringify (report, null, 2);
fs.writeFileSync('execution-report.json', reportJson);

console.log("\n=== SUMMARY ===");
console.log(`Total: ${total}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Pass Rate: ${passRate}%`);
console.log("\n✓ Report saved to execution-report.json");
