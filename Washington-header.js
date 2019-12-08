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
// End program
