// Get the text field that we're going to track
let localStoageField = document.getElementById("local-field");

// check if an autosave value was saved.
  // if yes, Restore the contents of the text field
  const autoSaveContent2 = localStorage.getItem(`autosave`);
if (autoSaveContent2) {
  localStoageField.value = autoSaveContent2;
} 

// Listen for changes in the text field
  // And save the results into the local storage object
localStoageField.addEventListener(`input`, function() {
  const myContent =  localStoageField.value;
  localStorage.setItem(`autosave`, myContent);
});