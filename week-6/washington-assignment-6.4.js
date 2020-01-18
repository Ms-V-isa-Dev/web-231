 /*
============================================
; Title: washington-assignment-6.4
; Author: Professor Krasso
; Date:   18 January 2020
; Modified by: Verlee Washington
; Description: Create an object literal with
; a nested object literal and display.
;===========================================
*/
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 6.4"));
console.log('\n');

// Start program
// Variables
let today = new Date().toLocaleDateString('en-US')
var ticket = {
  id: 101,
  dateCreated: today,
  priority: "medium",
  name: "Julie Doe",
  person: {
    id: 002,
    firstName: "Happy",
    lastName: "Golucky",
    jobTitle: "Service Clerk 2"
  }
};

// Output
console.log("Ticket # " + ticket["id"] + " " + "was created on " + ticket["dateCreated"]+
" and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName +
" " + "(" + ticket.person.jobTitle + ").");
