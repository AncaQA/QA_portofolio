// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let evens = nums.filter(n => n%2 === 0);

// console.log(evens);

// let words = ['hi', 'hello', 'bye', 'goodbye'];
// let long = words.filter(w=> w.length > 4);

// console.log(long);

// let words = ['hello', 'world', 'test'];
// let excited = words.map(w => w + "!");
// console.log(excited);

// let words2 = ["hi", "hello", "test"];
// let lengths = words2.map(w => w.length);
// console.log(lengths);

// let ages = [16, 18, 21, 25, 30];
// let adult = ages.find( age => age>= 18);
// console.log(adult);

// let senior = ages.find(age => age >= 65);
// console.log(senior);

// let words = ["hi", "hello", "world", "test"];
// let idx1 = words.findIndex(w => w.length > 10);
// console.log(idx1);

// let words = ["hello", "world", "test"];
// words.forEach(word => {
//     console.log(word.toUpperCase());
// });

// let fruits = ["apple", "banana", "orange"];
// fruits.forEach((fruit,index) =>{
//     console.log(`${index} : ${fruit}`);
// }
// );

// let nums = [5, 10, 15, 20];
// let total = 0;
// nums.forEach ( num => {
//     total += num;
// });

// console.log(total);

// let ages = [16, 17, 14, 15];

// let hasAdult = ages.some(age => age >= 18);
// console.log(hasAdult); 

// let hasMinor = ages.some(age => age < 18);
// console.log(hasMinor); 

// let ages = [25, 30, 35, 40];

// let allAdults = ages.every(age => age >= 18);
// console.log(allAdults); 

// let allSeniors = ages.every(age => age >= 65);
// console.log(allSeniors); 

// let nums = [1, 2, 3];
// let sum = 0;
// nums.forEach(n => sum += n);
// console.log(sum);

// let ages = [12, 15, 18, 21, 25];
// let adult = ages.find(age => age >= 18);
// console.log(adult); 

// let nums = [2, 4, 7, 10, 13];
// let idx = nums.findIndex (n => n % 2 !== 0);
// console.log(idx);

// let nums = [5, 10, -3, 20];
// let hasNegative = nums.some(n => n < 0);
// console.log(hasNegative);

// let words = ["hi", "bye", "test", "ok"];

// let allShort = words.every(w => w.length <5);
// console.log(allShort);

// let products = [
//  {name: "Laptop", price: 1200},
//  {name: "Mouse", price: 25},
//  {name: "Keyboard", price: 75},
//  {name: "Monitor", price: 300}
// ];

// let cheap = products.find(p => p.price < 100);

// console.log(cheap);

let words = ["hi", "hello", "test", "bye", "world"];
let count = 0;

words.forEach (w => {
    if (w.length > 4) {
    count ++;}

});
console.log(count);