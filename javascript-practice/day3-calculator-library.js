// Day 3 Project: Calculator & Utility Library
// Practice: Functions, closures, all function types

console.log("=== Calculator & Utility Library ===\n");

// ===== BASIC CALCULATOR =====

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) return "Error: Division by zero";
        return a / b;
    },
    power: (base, exponent) => base ** exponent,
    squareRoot: (num) => {
        if (num < 0) return "Error: Negative number";
        return Math.sqrt(num);
    },
    percentage: (value, percent) => (value * percent) / 100
};

console.log("Basic Calculator:");
console.log("5 + 3 =", calculator.add(5, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));
console.log("6 * 7 =", calculator.multiply(6, 7));
console.log("20 / 4 =", calculator.divide(20, 4));
console.log("2^8 =", calculator.power(2, 8));
console.log("√16 =", calculator.squareRoot(16));
console.log("20% of 150 =", calculator.percentage(150, 20));
console.log();

// ===== ADVANCED CALCULATOR WITH MEMORY =====

function createCalculator () {
    let memory = 0;
    let history = [];
    
    
    const add = (a, b) => {
        let result = a + b;
        history.push(`${a} + ${b} = ${result}`);
        return result; 
    };

    const subtract = (a, b) => {
        let result = a - b;
        history.push(`${a} - ${b} = ${result}`)
        return result;
    };

      const multiply = (a, b) => {
        let result = a * b;
        history.push(`${a} x ${b} = ${result}`);
        return result;
    };

    const divide = (a, b) => {
        if (b === 0) return "Error: division by zero"
        let result = a / b;
        history.push(`${a} ÷ ${b} = ${result}`);
        return result;
    };

    const storeInMemory = (value) => {
        memory = value;
        return `Stored ${value} in memory`;
    };

    const recallMemory = () => memory;

    const clearMemory = () => {
        memory = 0;
        return "Memory cleared";
    };

    const getHistory = () => history;
        
    const clearHistory = () => {
        history = [];
        return "History cleared";
    };
return {
    add, 
    subtract,
    multiply,
    divide,
    storeInMemory,
    recallMemory,
    clearMemory,
    getHistory,
    clearHistory
};

}

console.log("Advanced Calculator with Memory:");

let calc = createCalculator();
console.log(calc.add(15, 5));
console.log(calc.multiply(4, 5));
console.log(calc.storeInMemory(100));
console.log("Memory:", calc.recallMemory());
console.log("\nHistory:", calc.getHistory());
console.log();

// ===== STRING UTILITIES =====

const stringUtils = {
    capitalize: str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(), 
    // reverse: str => str.split('').reverse().join(''),
        reverse: str => {
            let reversed = "";
            for (let i = str.length - 1; i >= 0; i--){
                reversed = reversed + str[i];
            }
            return reversed;
        },
    isPalindrome: str => {
        // let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        let cleaned = str.toLowerCase();
        let onlyLetters = "";
        for (let i = 0; i < cleaned.length; i++) {
            let char = cleaned[i];
            if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')){
                onlyLetters = onlyLetters + char;
            }
        }
        let reversed = "";
        for (let i = onlyLetters.length-1; i >= 0; i--){
            reversed = reversed + onlyLetters[i];
        }
        return onlyLetters;
    },
    wordCount: str => {
        let trimmed = str.trim();
        if (trimmed === "") return 0;

        let count = 1;
        for (let i = 0; i < trimmed.length; i++) {
            if (trimmed[i] === " " && trimmed [i - 1] !== " "){
                count++;
            }
        }
        return count;
    },

    truncate: (str, length) => {
        if (str.length <= length) return str;
        return str.slice(0, length) + "...";
    },
    toTitleCase: str => {
        // return str.split(/\s+/)
        // .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        // .join(' ');

        let result ="";
        let capitalizeNext = true;

        for (let i = 0; i < str.length; i++) {
            let char = str[i];

            if (char === " ") {
                result = result + char;
                capitalizeNext = true;
            } else {
                if (capitalizeNext) {
                    result = result + char.toUpperCase();
                    capitalizeNext = false;
                } else {
                    result = result + char.toLowerCase();
                }
            }
        }
        return result;
    }
};

console.log("String Utilities:");
console.log("Capitalize 'hello' =", stringUtils.capitalize("hello"));
console.log("Reverse 'hello' =", stringUtils.reverse("hello"));
console.log("'car' is palindrome?", stringUtils.isPalindrome("car"));
console.log("Word count 'Hello world' =", stringUtils.wordCount("Hello world"));
console.log("Truncate 'Hello World' to 5 =", stringUtils.truncate("Hello World", 5));
console.log("Title case 'hello world' =", stringUtils.toTitleCase("hello   world"));

// ===== ARRAY UTILITIES =====

const arrayUtils = {
    sum: arr => {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
        }
    return total;
    },
    
    average: arr => {
        if (arr.length === 0) return 0;
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
        }
    return total / arr.length;
    },
    
    max: arr => {
        if (arr.length === 0) return undefined;
        let maximum = arr[0];
        for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximum) {
        maximum = arr[i];
            }
        }
        return maximum;
    },
    
    min: arr => {
        if (arr.length === 0) return undefined;
        let minimum = arr[0];
        for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimum) {
        minimum = arr[i];
            }
        }
        return minimum;
    }, 
    
    unique: arr => {
       let result = [];
        for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        let isDuplicate = false; 

        for (let j = 0; j < result.length; j++) {
        if (result[j] === value) {
        isDuplicate = true;
        break;
            }
        }
        if (!isDuplicate) {
            result.push(value);
        }
        }
        return result;
    },

    reverse: arr => {
        let reversed = [];
        for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
        }
        return reversed;
    },

    chunk: (arr, size) => {
        let chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    }
};

console.log("Array Utilities:");
let numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
console.log("Numbers:", numbers);
console.log("Sum:", arrayUtils.sum(numbers));
console.log("Average:", arrayUtils.average(numbers).toFixed(2));
console.log("Max:", arrayUtils.max(numbers));
console.log("Min:", arrayUtils.min(numbers));
console.log("Unique:", arrayUtils.unique(numbers));
console.log("Chunk by 3:", arrayUtils.chunk(numbers, 3));
console.log("Reversed:", arrayUtils.reverse(numbers));
console.log();

// ===== FUNCTION GENERATORS =====

// Create validators

function createValidator(validationFn, errorMessage) {
    return function (value) {
        if (validationFn(value)) {
            return {valid : true, value};
        }
        return {valid: false, error: errorMessage};
    };
}

function checkEmail(email) {
if (!email.includes("@")) return false;

if (!email.includes(".")) return false;

let atPos = email.indexOf("@");
let dotPos = email.lastIndexOf(".");

if (atPos >= dotPos) return false;
return true;
}

function checkPassword(password) {
    if (password.length < 8) return false;

    let hasUpper = false;
    for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char >= 'A' && char <= 'Z') {
    hasUpper = true;
    break;
    }
}

    if (!hasUpper) return false;

    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char >= '0' && char <= '9') {
    hasNumber = true;
    break;
    }
}
    if (!hasNumber) return false;
    return true;
}

let isEmail = createValidator(checkEmail, "Invalid email format");
let isStrongPassword = createValidator(checkPassword, "Password must be 8+ chars with lower case and upper case character");

console.log("Validators:");
console.log("Email 'test@exeample.com':", isEmail("test@email.com"));
console.log("Email 'invalid':", isEmail("invalid"));
console.log("Password 'Pass12345':", isStrongPassword("Pass12345"));
console.log("Password 'weak':", isStrongPassword("weak"));
console.log();

// ===== TIMER FUNCTIONS =====

function createTimer() {
    let startTime = 0;
    let running = false; 

    return {
        start: function() {
            if (!running) {
                startTime = Date.now() ;
                running = true;
                return "Timer started";
            }
            return "Timer is already running";
        },

        stop: function() {
            if (running) {
                let elapsed = Date.now() - startTime;
                running = false;
                return `Elapsed time: ${elapsed}ms`;
            }
            return "Timer not running";
        },

        reset: function() {
            startTime = 0;
            running = false;
            return "Timer reset";
        }
    };
}

console.log("Timer:");
let timer = createTimer();
console.log(timer.start());

for (let i = 0; i< 1000000; i++) {}
console.log(timer.stop());
console.log(timer.start());
console.log(timer.start());
console.log(timer.stop());
console.log(timer.stop());

console.log(timer.reset());

// ===== DEMONSTRATION =====

console.log("=== Full Demonstration ===\n");

console.log("1. Calculate circle area:");
const PI = 3.14159;
const circleArea = radius => PI * radius ** 2;
console.log(`  Radius 5: ${circleArea(5).toFixed(2)}`);

console.log("\n2. Process student names:");
let students = ["john doe", "JANE SMITH", "bob jones"];
let processed = students.map(stringUtils.toTitleCase);
console.log(`  Original: ${students}`);
console.log(`  Processed: ${processed}`);

console.log("\n3. Calculate grades:");
let scores = [85, 92, 78, 95, 88];
console.log(`  Scores: ${scores}`);
console.log(`  Average: ${arrayUtils.average(scores).toFixed(2)}`);
console.log(`  Highest: ${arrayUtils.max(scores)}`);
console.log("\n=== Library Complete! ===");