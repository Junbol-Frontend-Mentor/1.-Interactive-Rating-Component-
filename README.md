# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

![](./assets/images/screenshot.jpg)

### Links

- Solution URL: (https://github.com/Junbol-Frontend-Mentor/interactive-rating-component)
- Live Site URL: (https://junbol-frontend-mentor.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Sass(SCSS)
- BEM (Block.Element.Modifier)
- Flexbox
- Mobile-first workflow
- GIT/GitHub
- PowerShell (CLI)

### What I learned

- creating all the logic in Javascript to do the seletion of the buttons dynamically using the forEach method.
- Using javascript to add the logic to make the modal panel show up

```
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


```

### Continued development

I would like to continue studying responsive SCSS specially with Grid + Flexbox and CSS animation, transitions and FX like parallax.

### Useful resources

- [web.dev](https://web.dev/learn/css) - This helped me for get back on track with CSS.
- [w3schools](https://www.w3schools.com/css/default.asp) - The one place to refresh stuff in practical way.

## Author

- Website - [Junier Bolivar](https://www.bolivarcreativedesign.com)
- Frontend Mentor - [Junbol](https://www.frontendmentor.io/profile/Junbol)
- Twitter - [@JunierBolivar](https://www.twitter.com/@JunierBolivar)

## Acknowledgments
