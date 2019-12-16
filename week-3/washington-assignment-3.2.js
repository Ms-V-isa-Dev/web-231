/*
============================================
; Title:  Exercise-3.2
; Author: Verlee Washington
; Date:   12 December 2019
; Modified by:
; Description: Creating calling and passing functions
;===========================================
*/

// Required class header statement imports the Washington-header.js file from my root directory.
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 3.2"));
console.log('\n');

// Start
// Comparison function to return a bool value of true or false
function match(param1, param2) {
  param1 = "2";
  param2 = "2";
  if (param1 === param2) {
    return true;
    }else{
      return false;
    }}
    // Output
    console.log(match());

// Function to display strings that say parameters do not match
function logMisMatch(param3, param4, param5,
  param6, param7, param8) {
  return " they do not match.";
}

// Function to display strings that say parameters do match
function logMatch(param3, param4, param5,
  param6, param7, param8) {
// Variable declaration
param3 = " 29";
param4 = " 17";
param5 = " 98";
param6 = " 54";
param7 = " 34";
param8 = " 29";
if (param8 === param3) {
  return (param8 + param3 + " they do match.");
}else{
  return (param8 + param3 + logMisMatch());
}}
// Output
console.log(logMatch());

// End program






