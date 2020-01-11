 /*
============================================
; Title: Discussion-5.3
; Author: Verlee Washington
; Date:   11 January 2020
; Modified by:
; Description: Creating key object collection using ES5 standard.
;===========================================
*/

// Required class header statement imports the Washington-header.js file from my root directory.
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 5.3"));
console.log('\n');

// Start program
console.log("-- COMPOSERS --");

// Create an array of 5 composer objects with the following fields.
var composers = [{firstName: 'Claude ',  lastName: 'Debussy', genre: 'Classical', rating: '9'},
  {firstName: 'Frederic ', lastName: 'Chopin', genre: 'Classical', rating: '9'},
  {firstName: 'Antonio ', lastName: 'Vivaldi', genre: 'Classical', rating: '7'},
  {firstName: 'Joseph ', lastName: 'Hayden', genre: 'Classical', rating: '7'},
  {firstName: 'Wolfgang ', lastName: 'Mozart', genre: 'Classical', rating: '10'}];

// Use built-in forEach function to iterate over array and output results.
composers.forEach(function(poser) {
  console.log("Name: " + poser.firstName + poser.lastName +", " + "Genre: " + poser.genre + ", "
  + "Rating: " + poser.rating)});
// End program
