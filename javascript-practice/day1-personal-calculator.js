// Day 1 Project: Personal Info Calculator
// Practice: Variables, operators, type conversion

console.log("=== Personal Info Calculator ===\n");

// 1. Personal Information
const firstName = "Anca";
const lastName = "Nistor";
const birthYear = 1995;
const currentYear = 2026;
const city = "Iași";
const country = "Romania";

// 2. Calculate Age
const age = currentYear - birthYear;
console.log(`Name: ${firstName} ${lastName}`);
console.log(`Age: ${age} years old`);
console.log(`Location: ${city}, ${country}\n`);

// 3. Years Until Milestones
const retirementAge = 65;
const yearsUntilRetirement = retirementAge - age;
console.log(`Years until retirement: ${yearsUntilRetirement}`);
const nextMilestone = 40;
const yearsUntilMilestone = nextMilestone - age;
console.log(`Years until age ${nextMilestone}: ${yearsUntilMilestone}\n`);

// 4. Salary Calculator
const monthlySalary = 5000; // RON
const monthsPerYear = 12;
const annualSalary = monthlySalary * monthsPerYear;
console.log(`Monthly Salary: ${monthlySalary} RON`);
console.log(`Annual Salary: ${annualSalary} RON\n`);

// 5. Budget Calculator
const rent = 3000;
const utilities = 300;
const food = 800;
const transportation = 200;
const entertainment = 500;
const totalExpenses = rent + utilities + food + transportation + entertainment;
const savings = monthlySalary - totalExpenses;
const savingsPercentage = (savings / monthlySalary * 100).toFixed(2);

console.log("=== Monthly Budget ===");
console.log(`Rent: ${rent} RON`);
console.log(`Utilities: ${utilities} RON`);
console.log(`Food: ${food} RON`);
console.log(`Transportation: ${transportation} RON`);
console.log(`Entertainment: ${entertainment} RON`);
console.log(`Total Expenses: ${totalExpenses} RON`);
console.log(`Savings: ${savings} RON (${savingsPercentage}%)\n`);

// 6. BMI Calculator 
const heightInMeters = 1.60;
const weightInKg = 50;
const bmi = weightInKg / (heightInMeters ** 2);
console.log(`Height: ${heightInMeters}m`);
console.log(`Weight: ${weightInKg}kg`);
console.log(`BMI: ${bmi.toFixed(1)}`);
if (bmi < 18.5) {
console.log("Category: Underweight");
} else if (bmi < 25) {
console.log("Category: Normal weight");
} else if (bmi < 30) {
console.log("Category: Overweight");
} else {
console.log("Category: Obese");
};