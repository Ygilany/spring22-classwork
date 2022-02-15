const bgColorInput = document.getElementById('bgcolor');
const fontInput = document.getElementById('font');

const pElement = document.getElementById('output');

// Listen on the input fields
bgColorInput.addEventListener('input', onStylesChange);
fontInput.addEventListener('input', onStylesChange);

function onStylesChange() {
  populateStorage();
  applyStyles();
}

function populateStorage() {
  localStorage.setItem('bgcolor', bgColorInput.value);
  localStorage.setItem('font', fontInput.value);
}

function applyStyles() {
  const currentColor = localStorage.getItem('bgcolor');
  const currentFont = localStorage.getItem('font');

  bgColorInput.value = currentColor;
  fontInput.value = currentFont;

  pElement.style.backgroundColor = currentColor;
  pElement.style.fontFamily = currentFont;
}

// this is the first time we run the code
applyStyles();