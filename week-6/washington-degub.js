/*
;============================================
; Title:  week 5: Discussion 6.1
; Authors: Micah Connelly
; Date: 2020 January 16
; Modified By: Verlee Washington
; Description: Objects and Built-In Objects with 2 (two) erros
;===========================================
*/

/*
; Expected output:
; depending on day of week,
; output my hobbies from
; myhobbies object
*/

/*// import
const header = require('../week-2/header');
console.log(header.display("Micah", "Connelly", "Discussion 6.1 - Header"));*/

// objects & variables
var today = new Date();
var dayOfWeek = today.getDay(); // detDate() sets days of week as 0-6

var myHobbies = {
  weekday: {
    first: "Workout",
    second: "Read",
    third: "Play PC games"
  },
  weekends: {
    first: "Hike",
    second: "Play board games",
    third: "Do photography"
  }
};

// function
function whichHobby() {
  /* In this if statement there was no expression symbol between
  dayOfWeek and the number 6. I added a greater than expression symbol.*/
  if (dayOfWeek == 0 || dayOfWeek > 6) {
    console.log('Over the weekends I like to:');
    Object.keys(myHobbies.weekends).forEach(function (key) {
      console.log(myHobbies.weekends[key]);
    });

  } else {
    console.log('During the week I like to:');
    /* In this else statement the Object.keys was typed as .keys, missing the identifier
     word Object. I added it here. */
    Object.keys(myHobbies.weekday).forEach(function (key) {
      console.log(myHobbies.weekday[key]);
    });
  }
}

// output
whichHobby()

//end program
