/*
============================================
; Title: washington-discussion-7.2
; Author: Professor Krasso
; Date:   22 January 2020
; Modified by: Verlee Washington
; Description: Create a simple HTML page with
; embedded JavaScript with 2 JavaScript
; selector errors.
;===========================================
*/

// Call the console.log() function to output a well-formatted header.
const header = require('../Washington-header.js');

// Start program
function  employee(id, firstName, lastName, title) {
  this.id=id;
  this.firstName=firstName;
  this.lastName=lastName;
  this.title=title;
}

const employees=[
  new employee('01123','Jordan','Wells','Marketing'),
  new employee('01156','Susan','Jacobs','Help Desk'),
  new employee('01189','Daniel','Summer','Lab Assistant'),
  new employee('01145','Lionel','Flowers','Department Coordinator'),
  new employee('01178','April','Rain','I.T. Facilitator')
]

console.log('--Displaying Employees--')
let index = 1
for (let x = 0; x < employees.length; x++){
  console.log(index + '. ' + employees[x].firstName + " " + employees[x].lastName +
  " " + employees[x].title)
  index++
}






