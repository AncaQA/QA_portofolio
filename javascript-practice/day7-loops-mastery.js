// // Day 7: Loops Mastery
// // Date: March 24, 2026
// // Focus: for, while, do-while, for...of, break, continue
// console.log("=== Loops Practice ===\n");
// // Critical: do-while runs AT LEAST ONCE
// console.log("1. do-while with false condition:");
// // let i = 10;
// // do {
// // console.log("Runs once! i =", i);
// // } while (i < 5); // False, but already ran once
// // // break - exits loop
// // console.log("\n2. break example:");
// // for (let i = 0; i < 10; i++) {
// // if (i === 5) break;
// // console.log(i); // 0,1,2,3,4
// // }
// // continue - skips iteration
// console.log("\n3. continue example:");
// for (let i = 0; i < 5; i++) {
// if (i === 2) continue;
// console.log(i); // 0,1,3,4 (skips 2)
// }
// for...of
console.log("\n4. for...of example:");
for (let fruit of ['apple', 'banana']) {
console.log(fruit);
}
// // Add your challenge solutions here!
// console.log("\n=== Challenge Solutions ===");

// Use while loop to print 0 to 5
// let i = 0;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }
// console.log("Should print: 0, 1, 2, 3, 4, 5");

// Use do-while to print "Hello" at least once
// Even if a condition is false from the start

let i = 0;
do {
    console.log('Hello');

}
while (i>7);

// Use continue to print 1-10 but skip multiples of 3
// Should print: 1, 2, 4, 5, 7, 8, 10
for (let i = 1; i <= 10; i++) {
    if(i % 3 === 0) continue;
    console.log(i);
}

let nums = [5, 10, -3, 20, -7, 15];
// Use break to find and print the first negative number
// Should print: -3
for (let num of nums) {
    if (num < 0) {
    console.log(num);
    break;
    }

}

// How many times does this loop run?
let x = 0;
do {
x += 2;
} while (x < 0);
console.log("Loop ran 1 time");
console.log("Final x:", x);

