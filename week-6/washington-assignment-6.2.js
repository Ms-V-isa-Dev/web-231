 /*
============================================
; Title: washington-assignment-6.2
; Author: Professor Krasso
; Date:   18 January 2020
; Modified by: Verlee Washington
; Description: Throw an error using try, catch, and finally
; and display the error.
;===========================================
*/

const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 6.2"));
console.log('\n');

// Start program
try {
 // variables
let a = "Apple"
let b = "Bee"
const sum = a == b

// if statement
if (a !== b) throw 'This sum is not equal'
console.log(sum);
} catch (err) {
  console.log('Catch clause: ' + err);
} finally {
  console.log('Finally end of program');
}
