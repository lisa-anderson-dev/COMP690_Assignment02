let grade = parseInt(prompt('Enter a number between 1 and 100'));

if (isNaN(grade) || grade < 1 || grade > 100) {
    console.log('Invalid input - only numbers between 1 and 100 are accepted');
} else if (grade >= 90) {
    console.log('You received an A');
} else if (grade >= 80) {
    console.log('You received a B');
} else if (grade >= 70) {
    console.log('You received a C');
} else if (grade >= 60) {
    console.log('You received a D');
} else {
    console.log('You received an F');
}