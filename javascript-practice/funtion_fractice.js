// Function Declaration
// function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// console.log(getFullName("Anca", "Nistor"));

// // function calculateArea(width, height) {
// //     return width * height;
// // }

// // // let result = add(5, 9);
// // console.log(calculateArea(77, 100));

// function isEven(number) {
//     return number % 2 === 0 ? true : false ;
// }

// console.log(isEven(30));

// greet ("Anca");

// function greet(name) {
//     console.log(`Hi, ${name}`);
// }

// Function Expression

// const greet = function () {
//     console.log("Hello");
// };

// greet();

// const add = function (a, b) {
//     return a + b;
// }

// console.log(add(5, 7));

// const multiply = function mult(a, b) {
//     return a * b;
// }

// console.log(multiply(4, 5));

// const add1 = (a, b) => {
//     return a + b;
// };

// console.log(add1(10, 6));

// const add3 = (a, b) => a + b;

// console.log(add3(10, 3));

// const duble = x => x * 2;
// console.log(duble(7));

// const greet = () => "Hello!";
// console.log(greet());

// const complexCalc = (a, b) => {
//     // let sum = a + b;
//     // let product = a * b;
//     return (a + b) + (a * b);
// };

// console.log(complexCalc(3, 1));

// const getFullName = (first, last) => `${first} ${last}`;
// console.log(getFullName("a", "b"));

// const numbers = [1,2,3,4,5]; 
// const dubled = numbers.map(x => x*2);

// console.log(dubled);

// function calculateGrade (name, math, science, english, history) {
//     let average = (math + science + english + history) / 4;
//     return `${name}'s average grade is: ${average}`;
// }
// console.log(calculateGrade("Anca", 90, 67, 56, 35 ));

// const multiply = (a, b = 2) => a * b;

// console.log(multiply(5, 4));

// function sum(...numbers) {
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 6));

// const multiply = (...nums) => {
//     let result = 1;
//     for (let num of nums) {
//         result *= num;
//     }
//     return result;
// }
// console.log(multiply(2, 2, 2));

// function checkAge(age) {
//     if (age < 18) {
//         return "Too young!"
//     }
//     return "Old enough"
// }

// console.log(checkAge(17));

// function getGrade(...scores) {
//     return scores.map(score => {
//         if (score >= 90) return "A";
//         if (score >= 80) return "B";
//         if (score >= 70) return "C";
//         return "F";
//     });
// }

// const result = getGrade(98, 67, 98, 78, 56, 90);
// console.log(result);

// function createPerson (name, age) {
//     return {
//         name: name, 
//         age: age,
//         greet: function () {
//             return `Hi, I am ${this.name}`;        }
//     }
// }

// let person = createPerson ("Anca", 37);
// console.log(person.age);
// console.log(person.greet());

// function getMinMax (numbers) {
//     let min = Math.min (...numbers);
//     let max = Math.max(...numbers);
//     return[min, max];
// }

// let [minimum, maximum] = getMinMax ([5, 1, 7, 8, 9, 3, 1]);
// console.log(maximum);
// console.log(minimum);

// let globalVar = "I'm global";

// function test () {
//     console.log(globalVar);
// }

// test();
// console.log(globalVar);

// function test2() {
//     let localVar = "I'm local.";
//     console.log(localVar);
// }

// test2();

// // Funtion scope
// function test3() {
//     let x = 10;
//     if (true) {
//         let y =20;
//         console.log(x);
//         console.log(y);
//     }
//     console.log(x);
//     console.log(y);
// }

// test3();

// let global = "global";

// function outer () {
//     let outerVar = "outer";

// function inner() {
//     let innerVar = "inner";
//     console.log(innerVar);
//     console.log(outerVar);
//     console.log(global);
// }
// inner();
// }
// outer();

// function outer() {
//     let count = 0;

//     function inner () {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// let counter = outer();
// counter();
// counter();

// function createCounter () {
//     let count = 0;

//     return{
//         increment: function () {
//             count++;
//             return count;
//         },
//         decrement: function() {
//             count--;
//             return count
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// }

// let counter1 = createCounter();

// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.getCount());
// console.log(counter1.decrement());
// console.log(counter1.decrement());

// let counter2 = createCounter();
// console.log(counter2.increment());
// console.log(counter2.increment());
// console.log(counter2.increment());
// console.log(counter1.getCount());

// function createBankAccount(initialBalance) {
//     let balance = initialBalance;

//     return {
//         deposit: function(amount) {
//             if (amount > 0) {
//                 balance += amount;
//                 return `Deposited ${amount}. New balance: ${balance}`
//             }
//             return "Invalid amount";
//         },
//         withdraw: function(amount) {
//             if (amount > 0 && amount <= balance) {
//                 balance -= amount;
//                 return `Withdrew ${amount}. New balance: ${balance}`;
//             }
//             return "Insufficient funds or invalid amount"
//         }, 
//         getBalance: function() {
//             return balance;
//         }
//     };
// }

// let myAccount = createBankAccount(1000);
// console.log(myAccount.deposit(5000));
// console.log(myAccount.withdraw(300));
// console.log(myAccount.getBalance());
// console.log(myAccount.balance);

// function createMultiplier(multiplier) {
//     return function (number) {
//         return number * multiplier;
//     };
// }

// let double = createMultiplier(2);
// let triple = createMultiplier(3);
// let quadruple = createMultiplier(4);

// console.log(double(5));
// console.log(triple(5));
// console.log(quadruple(5));

// const createMultiplier2 = multiplier => number => number * multiplier;

// let times5 = createMultiplier2(5);
// console.log(times5(3));

// function greet (name,callback) {
//     console.log(`Hello, ${name}!`);
//     callback();
// }

// function done () {
//     console.log("Greeting completed");
// }

// greet ("Anca", done);

// greet("John", function() {
//     console.log("All done!")
// });

// greet("Mary", () => console.log("Finished!"));

// let numbers = [1, 2, 3, 4, 5];

// // numbers.forEach(function(num) {
// //     console.log(num * 2)
// // });

// numbers.forEach(num => console.log(num * 2));

// function square(num) {
//     return num * num;
// }

// console.log(square(8));

// const cube = function (num) {
//     return num ** 3;
// };

// console.log(cube(4));

// const isPositive = num => num > 0;
// console.log(isPositive(7));

// function getCitcumference(radius) {
//     const Pi = 3.14159;
//     return 2 * Pi * radius;
// }
// console.log(getCitcumference(5).toFixed(2));

// function power(base, exponent = 2) {
//     return base ** exponent;
// }

// console.log(power(5, 3));

// function getMax(...numbers) {
//     let max = numbers [0];
//     for (let num of numbers) {
//         if (num > max) max = num;
//     }
//     return max;
// };

// console.log(getMax(5, 6, 7, 87, 8, 3, 5));

// function createStudent (name, age, grade) {
//     return {
//         name : name,
//         age: age,
//         grade: grade, 
//         info: function() {
//             return `${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
//         }
//     };
// }

// let student = createStudent("Anca", 40, "A");
// console.log(student.info());

// function classify(number) {
//     if(number > 0) return "positive";
//     if(number < 0) return "negative";
//     return "zero";
// }

// console.log(classify(0));

// function greetingMaker(greeting) {
//     return function (name) {
//         return `${greeting}, ${name}!`;
//     };
// }

// let sayHello = greetingMaker("Hello");
// let sayHi = greetingMaker ("Hi");

// console.log(sayHello("Anca"));
// console.log(sayHi("Max"));

// function makeMultiplier (x) {
//     return function (y) {
//         return x * y;
//     };
// }

// let add5 = makeMultiplier (16);
// console.log(add5(4));

// function createCounter (start = 0) {
//     let count = start;
//     return {
//         increment : () => ++count,
//         decrement: () => --count,
//         reset: () => count = start,
//         value: () => count
//     };
// }

// let counter = createCounter(10);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());
// console.log(counter.increment())
// console.log(counter.increment());
// console.log(counter.value());

// function createPerson(name, age) {
//     return {
//         getName: () => name,
//         getAge: () => age,
//         haveBirthday: () => ++ age,
//         introduce: () => `Hi, I'm ${name}, ${age} years old.`
//     };
// }

// let person = createPerson("Anca", 30);
// console.log(person.introduce());
// console.log(person.haveBirthday());
// console.log(person.introduce());