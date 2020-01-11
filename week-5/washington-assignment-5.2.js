 /*
============================================
; Title: Discussion-5.2
; Author: Verlee Washington
; Date:   10 January 2020
; Modified by:
; Description: Create built-in functions and use a for each.
;===========================================
*/

// Required class header statement imports the Washington-header.js file from my root directory.
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 5.2"));
console.log('\n');

// Start program

// A string array of my five favorite food types.
var favFoods = ["Fish", "Mixed Fruit", "Lima Beans", "Cornbread", "Cheese"];

// A built-in forEach function to iterate over array and output results.
favFoods.forEach(function(favFoods) {
console.log(favFoods)});
// End program
