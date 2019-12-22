 /*
============================================
; Title: Assignment-4.3
; Author: Professor Krasso
; Date:   21 December 2019
; Modified by:
; Description: Create an array of 5 vehicles, iterate and display items,
;   and display selected values.
;===========================================
*/

// Required class header statement imports the Washington-header.js file from my root directory.
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 4.3"));
console.log('\n');

// Create an array of vehicles
var vehicles = ["Yacht", "Train", "Wagon", "Air Plane", "Rocket"]

 // Create a getValue function
function getValue(anArray, sValue) {
  for (var i = 0; i < anArray.length; i++) {
    if (anArray [i] === sValue)
    console.log(anArray[i]);
  }}

 // Output
  console.log("--DISPLAYING ARRAY ITEMS--")
  for (var j = 0; j < vehicles.length; j++) {
    console.log(vehicles[j]);
  }

 // Creates a new line
    console.log("");

    // Selected value output
    console.log("--SELECTED VALUE--");
    getValue(vehicles, "Wagon");

    // Creates a new line
    console.log("");

    // Second selected value output
    console.log("--SELECTED VALUE--");
    getValue(vehicles, "Rocket");

    console.log('\n');

    // End program

