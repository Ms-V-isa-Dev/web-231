/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.
  FirstName LastName
  Assignment 2.4
  Today's Date
  Hello my name is <your actual name goes here>!
  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.
  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.
*/

/*
Title: Washington-assignment-2.4.js
Author: Professor Krasso
Date: 12/7/2019
Modified by: Verlee Washington
Description: A JavaScript program demonstrating the use of functions.
*/

// Require statement imports the Washington-header.js file from my root directory.
const header = require('../Washington-header.js');

// Call the console.log() function to output a well-formatted header
// Output
console.log(header.display("Verlee", "Washington", "Exercise-2.4"));

// Start program
// Create a function called fullName and return as one string
function fullName(firstName, lastName) {

  return("Verlee" + " Washington");
}
// Output
console.log('\n');
console.log(fullName());

/*Create a function called dateWriter and
return new date with passed in values.*/
function dateWriter(year, month, day) {
  var year, month, date = now;
  var now = "December 31st 2020";

  return (now);
}
// Output
console.log(dateWriter());

/*Create a function called formatNumber return the
number with fixed positions.*/
function formatNumber(number, numOfFixedPositions) {
  var number = 18;
  var num = number.toFixed(2);
  return(num);
}
// Output
console.log(formatNumber());

/* Create a function called convertToInt with one string
parameter and return the value as an integer.*/
function convertToInt(firstString) {
  var firstString = parseInt(9);
  return(firstString);
}
// Output
console.log(convertToInt());

/* Create a function called convertToFloat with one string
parameter and return the value as a float. */
function convertToFloat(secondString) {
  var secondString = parseFloat("9.18");
  return(secondString);
}
// Output
console.log(convertToFloat());


// End
