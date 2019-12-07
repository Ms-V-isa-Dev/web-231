var header = require('../Washington-header.js');

/*
============================================
; Title:  Exercise-2.3
; Author: Professor Krasso
; Date:   5 December 2019
; Modified by: Verlee Washington
; Description: Create and display a function called myName
;===========================================
*/

// Function properties
myName.Verlee = "Verlee";

// My function
function myName() {

return(myName.Verlee);
}

// Output
console.log(myName() + " Washington \nExercise 2.3 \nDate: " + new Date().toLocaleDateString());
console.log("\nHello " + myName() + " Washington!");

// End
