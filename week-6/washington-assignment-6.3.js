 /*
============================================
; Title: washington-assignment-6.3
; Author: Professor Krasso
; Date:   18 January 2020
; Modified by: Verlee Washington
; Description: Create an object literal with
; three fields, and display each field in one string.
;===========================================
*/
const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 6.3"));
console.log('\n');

// Variable with three fields
var ticketS = {
  id:"22033",
  name:"Customer svs rep 102",
  requester:"Judy Blue",
  // Getters and setters
  get idNo(){
    return this.id;
  },
  set idNo(val){
   this.id = val;
  },
  get fullName(){
    return this.name;
  },
  set fullName(val){
   this.name = val;
  },
  get requesters(){
    return this.requester;
  },
  set requesters(val){
   this.requester = val;
  }
};

// Program output
console.log("id: " + ticketS.id + ", " + "name: " + ticketS.name + ", "
+ "requester: " + ticketS.requester);
// End program
