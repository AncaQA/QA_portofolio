// let testUser = {
//     id: 'USER001',
//     email : 'test@example.com',
//     password: 'Pass123!',
//     age: 25,
//     isActive: true
// };

// console.log("Email:" , testUser.email);
// console.log('Age:', testUser.age);

// let field = 'email';
// console.log('Dynamic acces:', testUser[field]);

// testUser.age = 65;
// testUser.isActive = false;
// console.log('Updated age', testUser.age)

// testUser.status = 'verified';
// console.log('New property:', testUser.status);

// if ('password' in testUser){
//     console.log('Password is present!');
// }
// else console.log('Password not found');

// if ('email' in testUser) {
//     console.log('Email exists!')
// }

// console.log(`Full user: ${testUser['id']}, ${testUser.email}, ${testUser.age}, ${testUser.isActive}` )
// console.log(testUser)



// Test suite - array of test case objects

// let testSuite = [
//     {
//         id: 'TC001',
//         name: 'Login with valid credentials',
//         priority: 'High',
//         status: 'Pass'
//     }, 
//     {
//         id: 'TC002',
//         name: 'Login with valid password',
//         priority: 'High',
//         status: 'Pass'
//     },
//     {
//         id: 'TC003',
//         name: 'Login with empty username',
//         priority: 'Mediun',
//         status: 'Fail'
//     }
// ];

// console.log("\nFirst test:", testSuite[0].name);
// console.log('Status:', testSuite[0].status);

// console.log('\nAll Tests:\n');
// for (let test of testSuite) {
//     console.log(`${test.id}: ${test.name} - ${test.status} \n`);
// }

// let passed = 0;
// let failed = 0;

// for (let test of testSuite) {
//     if (test.status === 'Pass') {
//         passed++;
//     }
//     else if (test.status === 'Fail'){
//         failed++;
//     }
// }

// let highPriority = [];

// for (let test of testSuite) {
//     if (test.priority === 'High')
//     highPriority.push(test)
// }

// for (let object of highPriority) {
// console.log(object.id);

// console.log('Id:' , highPriority[0].id, highPriority[1].id )

// console.log(`\nPassed: ${passed} , Failed: ${failed}`);

// let entries = Object.entries(testSuite[0]);
// // console.log('Entries:' , entries);

// for (let [key, value] of Object.entries(testSuite[1])) {
//     console.log(`${key} : ${value}`);
// }

// // testSuite
// // .forEach(test => {
// //     console.log(`Id: ${test.id}, Test Name: ${test.name}, Priority: ${test.priority}`);
// // });

let testResults = [
 { id: "TC001", name: "Login", status: "Pass", priority: "High"},
 { id: "TC002", name: "Logout", status: "Pass", priority: "High"},
 { id: "TC003", name: "Register", status: "Fail", priority: "High" },
 { id: "TC004", name: "Search", status: "Pass", priority: "Medium" },
 { id: "TC005", name: "Filter", status: "Fail", priority: "Low" }
];

// // let failedTests = testResults.filter(test => test.status === 'Fail');
// // console.log('\nFailed tests:');
// // for (let test of failedTests) {
// //     console.log(`- ${test.id}: ${test.name}`);
// // }

// // let testNames = testResults.map(test => test.name)
// // console.log("\nTest names:" , testNames);

// // let firstFailed = testResults.find(test => test.status === 'Fail');
// // console.log('\nFirst failed test:', firstFailed.id, firstFailed.name);

// // let hasFailures = testResults.some(test=> test.status === "Fail");
// // console.log("\nHas failures:", hasFailures);

// // let allPassed = testResults.every(test => test.status === 'Pass');
// // console.log('All passed:', allPassed);

// function analyzeResults (tests) {
//     let total = tests.length;
//     let filteredListPass = testResults.filter(test => test.status === 'Pass');
//     let passCount = filteredListPass.length;
    
//     let filteredListFail = testResults.filter(test => test.status === 'Fail');
//     let failCount = filteredListFail.length;
//     let passRatePer = (passCount / total) * 100;
//     let highPriorityFailed = testResults.find(test => test.priority === 'High' && test.status === 'Fail')

//     return {
//         total,
//         passCount,
//         failCount,
//         passRatePer,
//         highPriorityFailed
//     };
// };

// let results = analyzeResults(testResults);

// console.log('\nTest report analysis\n');
// console.log('======================');
// console.log('Total tests:', results.total)
// console.log('Passed:', results.passCount)
// console.log('Failed:', results.failCount)
// console.log(`Pass Rate: ${passRatePer}%`);
// console.log('High priority failures:', highPriorityFailed)

for (let test of testResults) {
    console.log(`- ${test.id}: ${test.name} - ${test.status}`)
}

let pass = 0
let fail = 0

for (test of testResults) {
    if (test.status === 'Pass'){
    pass ++;
    }
    else if (test.status === 'Fail') {
    fail ++;
    }
}
    
console.log(`Passeed tests: ${pass}, Failed tests: ${fail}`)

for (test of testResults) {
    if (test.priority === 'High')
        console.log(test)
}