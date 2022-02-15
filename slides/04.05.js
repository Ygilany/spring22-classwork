const bgColorInput = document.getElementById('bgcolor');
const fontInput = document.getElementById('font');

const pElement = document.getElementById('output');

// Listen on the input fields, they will trigger the onStylesChange function

function onStylesChange() {
  // populate the local storage with the styles values
  populateStorage();
  // apply the styles to the p element
  applyStyles();
}

function populateStorage() {
}

function applyStyles() {

}

// this is the first time we run the code
applyStyles();