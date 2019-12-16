/*
============================================
; Title:  Exercise-3.4
; Author: Professor Krasso
; Date:   15 December 2019
; Modified by: Verlee Washington
; Description: Creating calling and passing functions
;===========================================
*/

// Required class header statement imports the Washington-header.js file from my root directory.
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 3.4"));
console.log('\n');

// Start program
// creating and assigning variables
var v = 7;
/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// Comparison function to return a bool value of true or false
function match(param1, param2) {
  if (param1 === param2) {
    return true;
    }else{
      return false;
    }}

// Function to display strings that say parameters do not match
function logMisMatch(param1, param2) {
  console.log(param1 + " does not match " + param2 + "!");
}

// Function to display strings that say parameters do match
function logMatch(param1, param2) {
  console.log(param1 + " does match " + param2 + "!")
}

// For loop
for (let z = 0; z < 8; z++){
if (match(v, z)) {
	logMatch(v, z);
} else{
	logMisMatch(v, randomNumber(z));
}}
// End program
