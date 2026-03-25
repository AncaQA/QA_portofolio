// Day 6: Array Methods Mastery
// Date: March 23, 2026
// Focus: find, findIndex, some, every, filter, map, slice
console.log("=== Array Methods Practice ===\n");


// Example 1: findIndex returns -1 when no match
let nums = [5, 10, 15, 20];
let idx = nums.findIndex(n => n > 100);
console.log("findIndex no match:", idx); 

// Example 2: find vs findIndex
let first = nums.find(n => n > 12);
let position = nums.findIndex(n => n > 12);
console.log("find:", first); // 15
console.log("findIndex:", position); // 2

// Example 3: some and every
let allPositive = nums.every(n => n > 0);
let hasBig = nums.some(n => n > 15);
console.log("All positive?", allPositive); // true
console.log("Has big number?", hasBig); // true

let ages = [12, 15, 18, 21, 25];
let adult = ages.find(n => n >= 18);
console.log(adult); // Should print: 18

let nums1 = [2, 4, 7, 10, 13];
// Use findIndex() to get index of first odd number
let idx1 = nums1.findIndex(n => n % 2 !== 0);
console.log(idx1); // Should print: 2 (7 is at index 2)

let nums2 = [5, 10, -3, 20];
// Use some() to check if ANY number is negative
let hasNegative = nums2.some(n => n < 0);
console.log(hasNegative); // Should print: true

let words = ["hi", "bye", "test", "ok"];
// Use every() to check if ALL words are short
let allShort = words.every(w=> w.length < 5);
console.log(allShort); // Should print: true

let products = [
 {name: "Laptop", price: 1200},
 {name: "Mouse", price: 25},
 {name: "Keyboard", price: 75},
 {name: "Monitor", price: 300}
];
// Find the first product that costs less than 100
let cheap = products.find(p => p.price < 100);
console.log(cheap);
// Should print: {name: "Mouse", price: 25}

let words1 = ["hi", "hello", "test", "bye", "world"];
// Use forEach to count words longer than 4 characters
let count = 0;
words1.forEach (w => {
    if(w.length > 4){
        count++;
    }
})
console.log(count); // Should print: 2 ("hello" and "world")