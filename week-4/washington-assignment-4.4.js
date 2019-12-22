 /*
============================================
; Title: Assignment-4.4
; Author: Professor Krasso
; Date:   22 December 2019
; Modified by: Verlee Washington
; Description: Create a predicate and filter through an array
;===========================================
*/

// Required class header statement imports the Washington-header.js file from my root directory.
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 4.4"));
console.log('\n');

// Create an array of States
const state = ["Illinois", "Georgia", "Iowa", "Louisiana", "Kentucky"]

// Create a function called getState with two string params
function getState(sParam1, sParam2) {
  // If statement to test if two string params match
    return sParam1 === sParam2
}

// unsorted array using JavaScript's built-in forEach() function
console.log('-- DISPLAYING ORIGINAL ARRAY --');
state.forEach(state => console.log(state));

// sorted array using JavaScript's built-in sort() and forEach() functions
console.log('\n-- DISPLAYING A SORTED ARRAY --');
state.sort().forEach(state => console.log(state));

// To create a new line
console.log("");

// output
console.log(" --SELECTED VALUE-- ");
console.log(
  state.filter // built-in JavaScript function for returning a subset of records
  (
    function (sParam1) {
      return getState(sParam1, "Iowa") // use the getState function to get a selected value
    }
  )[0] // return the first element in the return array
);

// End program
