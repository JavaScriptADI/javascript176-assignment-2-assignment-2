// 1
// Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. Print the variable to the console.
let string = 'Hello, World!';
console.log(string);


// 2
// What is the difference between "5" and 5?
let N2 = '"5" - is a string, which means its charecters; 5 - is a number, it is used in mathematical operations';
console.log(N2);


// 3
// Declare a variable and assign a number as a value. Make sure the number is greater than 9. Print the variable to the console.
let number = 14;
console.log(number);


// 4
// Declare a variable and assign a boolean as a value. Print the variable to the console.
let boolean = true;
console.log(boolean);

// 5 
// What operators give us a boolean result?
const answer5 = 'Comparison operators: ==, >, <';
console.log(answer5);


// 6
// Declare a variable with the value of "Hello". Covert the value to upper case and print the converted value to the console.
let hi = 'Hello';
let capsHi = hi.toUpperCase();
console.log(capsHi);

// 7
// Declare another variable with the value of "World". Convert the value to lower case and print the converted value to the console.
let World = 'World';
let world = World.toLowerCase();
console.log(world);

// 8
// What is the value of the variable text before and after the method is called?
// it is 'Hello' anyways;

// 9
// What is the value of the variable 'text'?
let text;
console.log(text);
// value is - undefined

// 10
// Find an error in the following code:

// let text = 'Hello';
// console.log(text.toLowercase());

// solution:
// console.log(text.toLower "C" ase());


// 11
// Find and fix the error in the following code:

// let age = prompt('How old are you?');
// let nextAge = age + 1;
// console.log(`Next year you will be ${nextAge}`);

// solution: 
// let age = Number(prompt('How old are you?'));
// you should add "Number" to 'age';


// 12
// Finish the code:
// let name = prompt('What is your name?');
// let age = Number(prompt('How old are you?'));
// let isInSixties = age >= 60 && age < 70;
// console.log(`${name} is in sixties: ${isInSixties}`);


// 13
// What is the value of x?
let x = 5;
console.log(x++);
console.log(x);

// values are  '6' and '5';


// 14 
// What is the value of y?
let y = 5;
console.log(++y);
console.log(y);

// values are '6' and '6';


// 15 
// What is x++ and x--?

// 'x++' increases the value by 1
// 'x--' decreases the vaule bt 1

// 16
// What is the difference between ++x and x++?
//  '++x' is pre-increment operator, which increments the value of x before returning it.
//  'x++' is post-increment operator, which returns the value of x before incrementing it.


// 17
// If we try to declare a variable without any value, what will be the value of the variable in the console?
// The variable will have the value 'undefined';

// 18
// Show the example of equality operator.
let v = 5;
let t = '5';
console.log(v == t);

// 19
// Show the example of not equal operator.
let n5 = 5;
let s5 = '5';
console.log(n5 != s5);

// 20
// What's going on when we try to add a string and a number?
let result = 'The number is ' + 5;
console.log(result); 
console.log(typeof result); // and its string
// result - 'The number is 5';
