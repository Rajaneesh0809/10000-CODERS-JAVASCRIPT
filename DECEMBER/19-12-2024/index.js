// const prompt = require('prompt-sync')();

//Take a number as Input.
// Display "Even" if the number is even, otherwise "Odd"

let num1 = +prompt("Enter a number to check whether it is even/odd: ");

res1 = (num1 % 2 == 0) ? "Even" : "Odd";

alert(`${res1}`)

//Take 2 numbers as input
// If first number is greater, show greater
// If first number is lesser, show lesser
// If both numbers are equal, show equal

alert("Now, enter 2 numbers to compare them.")

let num2 = +prompt("Enter first number: ");
let num3 = +prompt("Enter second number: ");

res2 = (num2 > num3) ? "Greater" : (num2 < num3) ? "Lesser" : "Equal"

alert(`${res2}`)


