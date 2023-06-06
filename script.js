// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});


//var signUpButton = $('.saveBtn');
//ar hour9 = $('.description');

var localTime=0;
var today = dayjs();
var currentHour=dayjs().hour();
var todayTime = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY, HH:ss'));
todayTime =(today.format('h:mm:ss a'));


var period9El =document.getElementsByClassName("period9");
var period10El=document.getElementsByClassName("period10");
var period11El=document.getElementsByClassName("period11");
var saveButton=document.querySelector("period9");

function saveLastPeriods() {
var allPeriods={
  period9El  : period9El.value,
  period10El : period10El.valu,
  period11El : period11El.value
};
localStorage.setItem("allPeriods", JSON.stringify(allPeriods));
}


function renderallPeriods() {
var lastallPeriods=JSON.parse(localStorage.getitem("allPeriods"));
if (lastallPeriods !==null) {

  document.getElementsByClassName("period9").innerHTML = lastallPeriods.period9El;
  document.getElementsByClassName("period10").innerHTML = lastallPeriods.period10El;
  document.getElementsByClassName("period11").innerHTML = lastallPeriods.period11El;


}else {
  return;
}
}

saveButton.addEventListener("click", function(event) {
//event.preventDefault();
saveLastPeriods();
renderallPeriods();
})

function init() {
renderallPeriods();
}
init();