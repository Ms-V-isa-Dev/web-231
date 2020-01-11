 /*
============================================
; Title: Discussion-5.1
; Author: Mozilla.org
; Date:   8 January 2020
; Modified by: Verlee Washington
; Description: Create a keyed collection with 2 errors to debug.
;===========================================
*/

// Required class header statement imports the Washington-header.js file from my root directory.
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Discussion 5.1"));
console.log('\n');

// Start program
// A simple key/value map object
var greetings = new Map();


// Creating sets
greetings.set ('America', 'hello');
greetings.set ('France', 'allo');
greetings.set ('Mexico', 'hola');
greetings.set ('Hawaii', 'aloha');

// For loop to iterate and return the key/value array
for (var [key, value] of greetings) {
  console.log("In " + key  + ' some people say ' + value + " as a greeting.");
}
// End program
