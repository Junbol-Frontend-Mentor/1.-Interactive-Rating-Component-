// This is Ensure the modal is hidden initially with CSS
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

  // 🚩Make sure a rating has been selected before proceeding
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
