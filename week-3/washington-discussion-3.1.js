/*
============================================
; Title:  Discussion-3.1
; Author: Professor Krasso & w3schools.com
; Date:   09 December 2019
; Modified by: Verlee Washington
; Description: Create a JavaScript program with
: a while, for, or switch statement with an error.
;===========================================
*/

// Require statement imports the Washington-header.js file from my root directory.
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 3.1"));
console.log('\n');

// Start program
var text ="";
var i;

// for loop counter statement
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "\n"
}

// Output
console.log(text);

// End program
