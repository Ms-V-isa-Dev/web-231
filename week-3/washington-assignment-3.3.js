/*
============================================
; Title:  Exercise-3.3
; Author: Professor Krasso
; Date:   13 December 2019
; Modified by: Verlee Washington
; Description: Rewriting an if statement to
; a switch statement.
;===========================================
*/

// Required class header statement imports the Washington-header.js file from my root directory.
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 3.3"));
console.log('\n');

/*
let eventKeyCode = 13

if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}
*/

// start
// variable
const eventKeyCode = '13'

// switch statement
switch (eventKeyCode) {
  case '8':
    console.log('The backspace / delete key was pressed.')
    break
  case '13':
    console.log('The enter key was pressed.')
    break
  case '16':
    console.log('The shift key was pressed.')
    break
  case '32':
    console.log('The spacebar key was pressed')
    break
  default:
    console.log('Unrecognized key.')
    break
}

// End
