// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";
console.log(numberOne)
console.log(numberTwo)

let floatnumber1 = parseFloat(numberOne);
let floatnumber2 = parseFloat(numberTwo);


// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log( floatnumber1 + floatnumber2)

// --------------------------------------
// testtestest - commit test

// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const total = Number(anotherNumberOne) + Number(anotherNumberTwo)
totalWithTwoDecimal = total.toFixed(2);
console.log(totalWithTwoDecimal)


// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = (one + two + three) / 3;
averageWithFiveDecimals = average.toFixed(5);
console.log('The average of the three numbers: ' + averageWithFiveDecimals)




// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters.charAt(2)); // a=0 - b=1 - c=2 etc.



// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log(fact.replace('j', 'J'));


// --------------------------------------
