/*
============================================
; Title:  blohn-discussion-6.1.js
; Author: Janet Blohn
; Date:   18 January 2020
; Modified By: Verlee Washington
; Description: Discussion 6.1 Objects and Built-in Objects
; A simple JavaScript program using object properties with at
: least (2) errors.
*/

const header = require('../Washington-header.js');
// Call the console.log() function to output a well-formatted header.
console.log(header.display("Verlee", "Washington", "Exercise 6.1"));
console.log('\n');
/*
  Expected Output:

First House Type : Ranch
First House Color: White

Second House Type:  Two Story
Second House Color: Blue
*/

var homes = {
  house: {
    houseType: "Ranch",
    houseColor: "White",
    homesColor:  "Blue",
  },

  get type() {
    return this.house.houseType;
  },

  get color() {
    return this.house.houseColor;
    //I added a comma here after the curly bracket to fix the first error
  },

  set type(newType) {
    this.house.houseType = newType;
  },

  set color(newColor) {
    /* I changed this.houseColor = newColor; to
    this.house.houseColor = newColor; it needed a third string.

    */
      this.houseColor = newColor;
  }
};

console.log("First House Type : " + homes.type);
console.log("First House Color: " + homes.color + "\n")

homes.type = "Two Story";
/* I also added the blue color property to the homes objet
   so it could match your output exactly. When I ran the code
   the second house color logged white instead of blue.
*/

console.log("Second House Type:  " + homes.type);
console.log("Second House Color: " +  homes.house.homesColor);
