const bgColorInput = document.getElementById('bgcolor');
const fontInput = document.getElementById('font');

const pElement = document.getElementById('output');

// Listen on the input fields, they will trigger the onStylesChange function
bgColorInput.addEventListener(`input`, onStylesChange);
fontInput.addEventListener(`input`, function() {
  onStylesChange();
});

function onStylesChange() {
  // populate the local storage with the styles values
  populateStorage();
  // apply the styles to the p element
  applyStyles();
}

function populateStorage() {
  localStorage.setItem(`background`, bgColorInput.value);
  localStorage.setItem(`font`, fontInput.value);
}

function applyStyles() {
  const currentColor = localStorage.getItem(`background`);
  const currentFont = localStorage.getItem(`font`);

  bgColorInput.value = currentColor;
  fontInput.value = currentFont

  pElement.style.backgroundColor = currentColor;
  pElement.style.fontFamily = currentFont;
}

// this is the first time we run the code
applyStyles();