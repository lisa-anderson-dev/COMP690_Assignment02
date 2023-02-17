let number1 = parseInt(prompt('Enter an integer'));
let number2 = parseInt(prompt('Enter a second integer'));

if (isNaN(number1) || isNaN(number2)) {
    document.write('Invalid input - you did not enter two integers');
} else if (number1 === number2) {
    document.write('The two integers are equal');
} else if (number1 > number2) {
    document.write(`The greater integer is ${number1}`);
} else {
    document.write(`The greater integer is ${number2}`);
}