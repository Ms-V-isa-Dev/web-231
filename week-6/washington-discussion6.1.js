 /*
============================================
; Title: Discussion-6.1
; Author: Verlee Washington
; Date:   15 January 2020
; Modified by:
; Description: Create a simple JavaScript program
; using object properties with 2 errors.
;===========================================
*/

const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 6.1"));
console.log('\n');

// Start program
var seasons = {
  winter:"My goodness it's cold outside!",
  spring:"Sometimes its a little cool outside.",
  summer:"I like it hot, hot, hot!",
  autumn:"I enjoy the fall as well."};
// Output

for (var key in seasons) {
  console.log(seasons[key]);
}

/* Output should read:
My goodness it's cold outside!
Sometimes its a little cool outside.
I like it hot, hot, hot!
"I enjoy the fall as well.
*/
