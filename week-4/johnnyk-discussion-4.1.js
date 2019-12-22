 /*
============================================
; Title: Discussion-4.1
; Author: Johnny Kobyluck
; Date:   22 December 2019
; Modified by: Verlee Washington
; Description: Correct errors
;===========================================
*/

// Required class header statement imports the Washington-header.js file from my root directory.
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 4.1"));
console.log('\n');


// start program

 	/*
 	 Expected Output:

 	 Johnny Kobyluck
 	 Discussion 4.1
 	 Today's Date

 	 The primary colors backwards are purple,blue,green,yellow,orange,red.
 	*/

   // declaring the "colors" array.
   /* There is an extra comment here for the output, not sure if you
   meant to do that, I deleted it.*/
 	var colors = ["red", " black", " yellow", " green"];

   // inserting "orange" in place of "black" in my "colors" array.
   //colors.slice(1, "orange");  // Commented out code

   /*slice cuts a string then returns a portion
   of that string. Did you mean to use splice to insert and
   remove an array element? I think what we need to do here is swap one
   string with another string in the array. The colors.slice makes the
   compiler look for a function. I got the solution here
   https://www.w3schools.com/js/js_array_methods.asp */

   // Added format spacing to look nice
   // Changing index 1 black to orange
   colors[1] = " orange";

 	// adding 2 more colors to the "colors" array.
 	colors.push(" blue", " purple");

 	// flipping the "colors" array in reverse order.
 	colors.reverse;

 	// displaying my "Expected Output".
 	console.log("The rainbow backwards is " + colors +".");

 	// end program
