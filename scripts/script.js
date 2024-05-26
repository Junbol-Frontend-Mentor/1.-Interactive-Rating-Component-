//----- logic ---------

//-- First try:

/*at the beginning I was going to use a for loop :

for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', function () {
//add logic
  });

But that was bad syntax:
*/

//-- Second try:
/* ratingButtons.forEach(addEventListener('click', function (
  //add logic
)); */

//------ Third try:

// Select all elements with the class 'buttons-grp__button'
/* let ratingButtons = document.querySelectorAll('.buttons-grp__button');

ratingButtons.forEach(button => {
  // Add a 'click' event listener to each button
  button.addEventListener('click', function () {
    // Logic to execute when the button is clicked

    ratingButtons.remove('active'); // ❌  you don't apply the 'remove' method on a NodeList
  });
}); */

//------ Fourth:

/* let ratingButtons = document.querySelectorAll('.buttons-grp__button');

  
    ratingButtons.forEach(button => {
      // Add a 'click' event listener to each button
      button.addEventListener('click', function () {
        // Logic to execute when the button is clicked
    
     button.classList.remove('active');//❌
     button.classList.add('active'); //❌
      });
    });  */

/*     I see the point of confusion. The button in your outer forEach loop indeed represents each button in the NodeList. However, you need to ensure that the active class is removed from all buttons, not just the clicked one. Using button.classList.remove('active') within the forEach loop would only attempt to remove the active class from the clicked button, which wouldn't address the other buttons. 
Let's clarify why you need to iterate over all the buttons inside the event listener to remove the active class from all buttons, before adding the active class to the clicked one.

Understanding the Logic
Outer forEach Loop:

Adds event listeners to each button.
button in this loop is each button in the NodeList.
Inner Logic Inside the Event Listener:

Remove the active class from all buttons to ensure only the clicked button becomes active.
button in the outer loop still refers to the button receiving the event listener, but within the event listener function, you should use this to refer to the clicked button.

Corrected Logic
Iterate Over the NodeList: Add event listeners to each button.
Inside Event Listener:
Remove active class from all buttons.
Add active class to the clicked button using this.


*/

//------ Fifth:
/*
// Ensure the modal is hidden initially with CSS
document.getElementById('mainModal').style.display = 'none';

let ratingButtons = document.querySelectorAll('.buttons-grp__button');
let myRatingPanel = document.getElementById('ratingPanel');
let myModal = document.getElementById('mainModal');
let mySubmitBtn = document.getElementById('submitButton');
let myRatingSelection = document.getElementById('rating');

// Variable to store the selected rating
let selectedRating = null;

// Outer loop to add event listeners to each button
ratingButtons.forEach((button) => {
  // Add a 'click' event listener to each button
  button.addEventListener('click', function () {
    // Inner loop to remove 'active' class from all buttons
    ratingButtons.forEach((btn) => btn.classList.remove('active'));

    // Add the 'active' class to the clicked button (this refers to the clicked button)
    this.classList.add('active');
    // Add logic to add the selected rating
    myRatingSelection.innerHTML('#');
  });
});
*/
//------Sixth:

// Ensure the modal is hidden initially with CSS
document.getElementById('mainModal').style.display = 'none';

let ratingButtons = document.querySelectorAll('.buttons-grp__button');
let myRatingPanel = document.getElementById('ratingPanel');
let myModal = document.getElementById('mainModal');
let mySubmitBtn = document.getElementById('submitButton');
let myRatingSelection = document.getElementById('rating');

// Variable to store the selected rating
let selectedRating = null;

ratingButtons.forEach((button) => {
  // Add a 'click' event listener to each button
  button.addEventListener('click', function () {
    // Inner loop to remove 'active' class from all buttons
    ratingButtons.forEach((btn) => btn.classList.remove('active'));

    // Add the 'active' class to the clicked button (this refers to the clicked button)
    this.classList.add('active');
    // Capture the selected rating
    selectedRating = this.textContent; // this will select teh numbers or ratings inside each button
  });
});

// Show the modal on submit button click
mySubmitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission

  // 🚩Ensure a rating has been selected before proceeding
  if (selectedRating) {
    // Update the modal content with the selected rating
    myRatingSelection.innerHTML = `You selected ${selectedRating} out of 5`; // this

    // Hide the rating panel and show the modal
    myRatingPanel.style.display = 'none';
    myModal.style.display = 'flex';
  } else {
    // 🚩don't forget to add an alert if the user didn't select a rating
    alert('Please select a rating before submitting.');
  }
});
