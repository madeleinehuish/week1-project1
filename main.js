//Week 1 - Project 1


// Log all answers to the console and write them to document
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// =======================================================

//1. Log your name to the console (as a string).

console.log("Log your name to the console as a string.");
var yourAnswer = "Maddie";
console.log(yourAnswer);

//2. Declare a variable called 'name', and then log it to the console.
var name = "Maddie";
console.log(name);

//3. Declare two variables with number values.
//   Add, subtract, multiply and divide them.
var a = 25; console.log(a);
var b = 26; console.log(b);
console.log(a + b) ;
console.log(a - b) ;
console.log(a * b) ;
console.log(a / b) ;


//4. Declare two variables with string values.
//   Create a third variable that concatenates them.
var a = "This is the first";
var b = "this is the second.";
var c = a + " and " + b;
console.log(c);


//5. Add, subract, multiply and divide the strings '5' and '3'.
//   Observe the results and know how to explain the results if asked.
var a = '5'; var b = '3';
console.log(a); console.log(b);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
// the +, is an operation for addition as well as concatenation so can be confusing when used to add strings

//6. Create a prompt that asks a user to pick a number.
var number = prompt("Pick a number please.", "I'll double this number for you.");
var doubleIt = number * 2;
console.log(doubleIt);

//   Then double the answer.

//7. Create a custom alert.
alert ("Alert Alert Muahhahhahhhaa!!");

//8. Declare three variables called length, width and height.
var length = 5;
var width = 3;
var height = 25;
var area = 2*length*height + 2*length*width + 2*height*width;
var volume = length * width * height;
console.log(area);
console.log(volume);

//   Calculate area and volume.

//9. Ask for a user's name, age and city.
//   In a single command display/log the sentence:
//   "My name is...I'm....years old, and I live in....."
var name = prompt("What is your name?");
var age = prompt("What is your age?");
var liveWhere = prompt("Where do you live?");
console.log("My name is " + name + ". I'm " + age + " years old, and I live in " + liveWhere);

//10. Create an alert that uses the response from a prompt.
var input = prompt("What is your favorite food?");
alert ("You like " + input + "!");

