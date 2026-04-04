// // let day = "Monday";

// // switch (day) {
// //     case "Monday":
// //         console.log("Start of work week");
// //        break;
// // case "Tuesday":
// // case "Wednesday":
// // case "Thursday":
// //     console.log("Midweek");
// //     break;
// // case "Friday":
// //     console.log("Almost weekend!");
// //     break;
// // case "Saturday":
// // case "Sunday":
// //     console.log("Weekend!");
// //     break;
// // default:
// //     console.log("Invalid day");
// // }


// if (false) console.log("Won't print");
// if (0) console.log("Won't print");
// if ("") console.log("Won't print");
// if (null) console.log("Won't print");
// if (undefined) console.log("Won't print");

// // for (let i = 0; i<=50; i +=5) {
// //     console.log(i);
// // }

// // let fruits = ["apple", "banana", "orange", "grape"];

// // for (let i = 0; i < fruits.length; i++) {
// //     console.log(`${i}: ${fruits[i]}`);
// // }

// let count = 0;
// do {
//     console.log(`Count: ${count}`)
//     count ++;
// } while (count < 3);

// // let choice;
// // do {
// // console.log("1. Start Game");
// // console.log("2. Settings");
// // console.log("3. Exit");
// // choice = 3; // Simulate user choice
// // } while (choice !== 3);
// // console.log("Exiting...");

// // let fruits = ["apple", "banana", "orange"];

// // for (let index in fruits) {
// //     console.log(`${index} : ${fruits[index]}`);
// // }

// // let fruits = ["apple", "banana", "orange"];

// // for (let i = 1; i <= 3; i++) {
// // for (let j = 1; j <= 3; j++) {
// // console.log(`${i} x ${j} = ${i * j}`);
// // }
// // console.log("---");
// // }

// // for (let i = 1; i <= 5; i++) {
// // let stars = "";
// // for (let j = 1; j <= 2; j++) {
// // stars += "*";
// // }
// // console.log(stars);
// // }

// Exercise 1: Even or Odd
// let num = 17;
// if (num % 2 === 0) {
//     console.log(`${num} is even.`);
// } else {
//     console.log(`${num} is odd.`);
// }

//Exercise 2: Age category 
// let age = 25;
// switch (true) {
//     case (age < 15):
//       console.log("Child");
//       break;
//     case age < 20: 
//         console.log ("Teenager");
//         break;
//     case age < 65:
//         console.log ("Adult");
//         break;
//     case age > 65 :
//         console.log("Senior")
//         break;
//     default : console.log("Invalid age");

// }

// let dayNum = 3;
// let dayName;
// switch(dayNum) {
//     case 1: dayName = "Monday"; break;
//     case 2: dayName = "Tuesday"; break;
//     case 3: dayName = "Wednesday"; break;
//     case 4: dayName = "Thursday"; break;
//     case 5: dayName = "Friday"; break;
//     case 6: dayName = "Saturday"; break;
//     case 7: dayName = "Sunday"; break;
//     default: dayName = "Invalid";
// }
// console.log(dayName);

// for (let i=10 ; i >= 0; i--) {
//     console.log(i);
// }

// let count = 0;
// let num = 0;
// while (count < 5) {
//     if (num % 2 === 0){
//         console.log(num);
//         count++;
//     } 
//     num++;
// }






// if (age< 13) {
//     console.log("Child");
// } else if (age < 20) {
//     console.log ("Teenager")
// } else if (age < 65) {
//     console.log ("Adult")
// } else {
//     console.log("Senior")
// }


// let car = {brand: "Toyota", model: "Corolla", year: 2020};
// for (let a in car) {
//        console.log(`${a}: ${car[a]}`);
// }

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5; j++) {
//         row += `${i * j}\t`;
//     }
//     console.log(row);
// }


// for (let i = 1; i <= 30; i++) {
//     if (i % 15 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
