/*
;============================================
; Title: Assignment-4.2
; Author: Verlee Washington
; Date:   20 December 2019
; Modified by:
; Description: Create an array of fruit and display
;============================================
*/

// Required class header statement imports the Washington-header.js file from my root directory.
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 4.2"));
console.log('\n');

// Create an array of fruit
const fruit = ["Apple", "Banana", "Cherry", "Grape", "Kiwi"]

/**
 * Params: array
 * Response: console message
 * Description: Writes the contents of an array to the console window
 */
function getFruit(anArray) {
  let index = 1
  for (let i = 0; i < anArray.length; i++) {
    console.log(index + '.' + anArray[i])
    index++
  }}

// call the getFruit() function and output the contents of the fruit in the array
getFruit(fruit)

// End program
