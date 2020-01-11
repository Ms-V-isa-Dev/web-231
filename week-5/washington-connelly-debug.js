/*
;============================================
; Title:  week 5: Discussion 5.1
; Authors: Micah Connelly
; Date:   9 January 2020
; Modified By: Verlee Washington
; Description: Creating javascript array with two (2) errors
;===========================================
*/

/*
; Expected output:
; "Weekend, yay"
; or
; "Weekday, booo"
; depending on the day of the week it's viewed
*/


// variables
// The error here was that the Map object was not defined, I added the Map object
var whatDay = new Map();
var date = new Date();
var dayOfWeek = date.getDay(); // detDate() sets days of week as 0-6

// function
function checkDay() {
  if (dayOfWeek == 5 || dayOfWeek == 6) {
    whatDay.set('Weekend', 'yay');
  } else {
    whatDay.set('Weekday', 'booo');
  }
}

// loop & output
checkDay()
for (var [key, value] of whatDay) {
  console.log(key + ', ' + value);
}
// There was a typo error here, I changed keyed to key
//end program
