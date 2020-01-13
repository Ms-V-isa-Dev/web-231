 /*
============================================
; Title: Discussion-5.4
; Author: Verlee Washington
; Date:   11 January 2020
; Modified by:
; Description: Creating key object collection using ES5 standard.
;===========================================
*/

// Required class header statement imports the Washington-header.js file from my root directory.
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 5.4"));
console.log('\n');

// Start program

// Create an array of 5 composer objects with the following fields.
const composers = [{firstName: 'Claude ',  lastName: 'Debussy', genre: 'Classical', rating: '9'},
  {firstName: 'Frederic ', lastName: 'Chopin', genre: 'Classical', rating: '9'},
  {firstName: 'Antonio ', lastName: 'Vivaldi', genre: 'Classical', rating: '7'},
  {firstName: 'Joseph ', lastName: 'Hayden', genre: 'Classical', rating: '7'},
  {firstName: 'Wolfgang ', lastName: 'Mozart', genre: 'Classical', rating: '10'}];

// Using built-in map() function to create a filtered array of composers by rating
let ratings = composers.map((rate) => {
  return rate.rating
});
// Using built-in map() function to create a filtered array of composers by genre
let genres = composers.map((gen) => {
  return gen.genre
});

// Output
console.log("-- COMPOSER BY RATING --");
// For each to map and return a new list of objects with Rating.
index = 1;
ratings.forEach((rating) => {
  console.log(index + '.' + "Rating: " + rating)
  index++});


console.log("-- COMPOSER BY GENRE --");
// For each to map and return a new list of objects with Genre.
index = 1;
genres.forEach((genre) => {
  console.log(index + '.' + "Genre: " + genre)
  index++});

  let lastNamesAndRatingsObjectArray = composers.map((composer) => {
    return   {
      lastName: composer.lastName,
      rating: composer.rating
    }
  });

  index = 1;
  lastNamesAndRatingsObjectArray.forEach((posers) => {
  console.log(index + '.' + posers)
  index++});
// Output
// Use built-in forEach() function to iterate over each array and output the results.

// End program
