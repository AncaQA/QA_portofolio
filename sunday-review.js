// Test case object 

// let testCase = {
//     id: 'TC001',
//     name: 'Login with valid credentials',
//     priority: 'High',
//     status: 'Pass',
//     executionTime: '2 minutes'
// };

// console.log(`${testCase.id}: ${testCase.name}`);
// console.log(`Priority: ${testCase.priority}, Status: ${testCase.status}`)

//Test suite
let testSuite = [
    {id: 'TC001', name: 'Login', status: 'Pass'},
    {id: 'TC002', name: 'Logout', status: 'Pass'},
    {id: 'TC003', name: 'Register', status: 'Fail'}, 
    {id: 'TC004', name: 'Search', status: 'Fail'}
];

let passed = 0;
let failed = 0;

for (let test of testSuite) {
    if (test.status === 'Pass') {
        passed++;
    } else {
        failed++;
    }
}

console.log(`\nResults: ${passed} passed, ${failed} failed`);

console.log('\nFailed tests:');
for (let test of testSuite) {
    if (test.status === 'Fail') {
        console.log(`-${test.id}: ${test.name}`)
    }
}