// Day 2 Project: Student Grade Calculator
// Practice: Conditionals, loops, arrays

console.log("=== Student Grade Calculator ===\n");

// Student data
const students = [
    {name: "Alice", scores: [85, 100, 88, 92]},
    {name: "Bob", scores: [70, 75, 72, 78]},
    {name: "Charlie", scores: [100, 100, 96, 94]},
    {name: "Diana", scores: [90, 95, 98, 92]},
    {name: "Eve", scores: [45, 50, 48, 52]}
];

console.log(students);

function calculateAverage (scores) {
    let sum = 0;
    for (let score of scores ) {
        sum += score ;
    }
    return sum / scores.length;
}

function getLetterGrade (average) {
    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("Individual Student Grades:");
console.log("====================================\n");

for (let student of students) {
    let average = calculateAverage(student.scores);
    let grade = getLetterGrade(average);

    console.log(`Student: ${student.name}`);
    console.log(`Scores: ${student.scores.join (', ')}`);
    console.log(`Average: ${average.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
    console.log("---");
}

console.log("\nClass Statistics:");
console.log("======================\n");

let classTotal = 0;
let gradeCount = {A: 0, B: 0, C: 0, D: 0, F: 0};

for (let student of students) {
    let average = calculateAverage (student.scores) ;
    classTotal += average;
    let grade = getLetterGrade (average);
    gradeCount[grade]++;
}

let classAverage = classTotal / students.length;
console.log (`Class Average: ${classAverage.toFixed(2)}`);
console.log(`Total students: ${students.length}`);
console.log('\nGrade Distribution:');
for (let grade in gradeCount) {
    console.log(`${grade} : ${gradeCount[grade]} students`);

}

console.log("\nTop Student:");
console.log("==================\n");

let topStudent = students[0];
let topAverage = calculateAverage(topStudent.scores);

for (let student of students){
    let average = calculateAverage (student.scores);
    if (average > topAverage) {
        topStudent = student;
        topAverage = average;
    }
}

console.log(`Name: ${topStudent.name}`);
console.log(`Average: ${topAverage.toFixed(2)}`);
console.log(`Grade: ${getLetterGrade(topAverage)}`);

console.log("\nStudents Needing Help:");
console.log("=============================\n");

let needHelp = [];
for (let student of students) {
    let average = calculateAverage (student.scores);
    if (average < 60) {
        needHelp.push(student.name);
    }
}

if (needHelp.length > 0) {
    for (let name of needHelp) {
        console.log(`- ${name}`);
    }    
} else {
    console.log("All students are passing!");
}

console.log("\nScore Trends:");
console.log("==========================\n");

for (let student of students) {
    let scores = student.scores;
    let firstScore = scores[0];
    let lastScore = scores [scores.length -1];
    let improvement = lastScore - firstScore;
    
    console.log(`${student.name}:`);
    if (improvement > 0) {
        console.log(`Improved by ${improvement} points`);
    } else if (improvement < 0) {
        console.log(`Decreased by ${Math.abs(improvement)} points`);
    } else {
        console.log("No change");
    }

}


// function gradeToScores(scores) {
//     let grade = 0;
//     if (score >= 90) {
//         return "A";
//     } else if (score >= 80) {
//         return "B";
//     } else if (score >= 70) {
//         return "C";
//     } else if (score >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }

// } 

let studentsWithAverageA = [];

for (let student of students) {
    let average = calculateAverage(student.scores);

    if (average >= 90) {
        studentsWithAverageA.push(student.name);
    }
}

// Log the final list once after the loop finishes
if (studentsWithAverageA.length > 0) {
    console.log("Students with an A average:");
    for (let name of studentsWithAverageA) {
        console.log(`- ${name}`);
    }
}


let studentWithPerfectScorer = [];

for (let student of students) {
    let scores = student.scores;
    
    // Check if every single score in the array is 100
    if (scores.some(score => score === 100)) {
        studentWithPerfectScorer.push(student.name);
    }
}

if (studentWithPerfectScorer.length > 0) {
    console.log("Students with perfect scores:");
    for (let name of studentWithPerfectScorer) {
        console.log(`- ${name}`);
    }
} else {
    console.log("No students with a perfect 100 in every category.");
}

for (let student of students) {
 student.attendance = [0, 4, 5, 7];
}



