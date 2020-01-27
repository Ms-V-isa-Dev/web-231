/*
============================================
; Title:  header.js
; Author: Professor Krasso
; Date:   5 December 2019
; Modified by: Verlee Washington
; Description: Main to call to export a formatted header
;===========================================
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns a well-formatted string header
 */

// Start
exports.display = function(firstName, lastName, assignment) {
  let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
    new Date().toLocaleDateString();

// Output
  return (output);
}

const header = require('./Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 7.2"));
console.log('\n');
// End program
