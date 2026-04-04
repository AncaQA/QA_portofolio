// let sum = 23.95;
// let tip = 3;
// console.log('The total is $' + (sum + tip) + '.');

// let a = 10;
// let b = '20';

// console.log(a + b);

// for (let i =0; i < 5; i++) {
//     if (i === 2) continue
//     console.log(i);
// }

// for (let a = 0; a < 10; a++) {
//  console.log(a)
//  if (a === 5) break;
// }

// let i = 10;
// do {console.log(i);
// } while (i<5);

//Declarration
// function foo() {
//     return 7*0.5;
// }

// x = foo();
// console.log(x);

//Expression
// const foo = function ()
// {return 5*3}; 

// console.log(foo());

//Arrow
// const foo = () => 5*9;
// console.log(foo());

// const i = ['albastru,', 'rosu,', 'mov'];
// let len_i= i.length

// let x = 0; 
// let colors = '';

// for (;x < len_i;){
//     colors += i[x];
//     x++;
// }

// let separated = colors.split(',');
// console.log(separated);

//Hoisted funtion
// sayHello('Anca');

// function sayHello(name) {
//     console.log('Hello' + ' ' + name)
// };

// greeting('Anca');

// const greeting = function (name) {
//     console.log('Hello' + ' ' + name)
// }

// const greeting = name => `Hello ${name}!`;
// console.log(greeting('Anca'))

//rest parameter 
// function add (...numbers) {
//     let total = 0;
//     for (let num of numbers){
//         total += num;
//     }
//     return total;
// }

// let x = add (1, 2);
// console.log(x)

// function test() {
//  console.log("Line 1");
//  return "Done";
//  console.log("Line 2"); // ← NEVER RUNS!
// }
// test(); // Prints only "Line 1"

// function greet() {
//  console.log("Hello");
//  return 1+2;
// }
// let result = greet(); // Prints "Hello"
// console.log(result); // undefined

// const test = [1, 2, 3, 4];
// switch (test[x]) {
// case 1: console.log(test);
// break;
// case 2: console.log(test);
// break;
// }
