// Get the text field that we're going to track
let sessionStorageField = document.getElementById("session-field");

// check if an autosave value was saved.
  // if yes, Restore the contents of the text field
  const autoSaveContent = sessionStorage.getItem(`autosave`);
if (autoSaveContent) {
  sessionStorageField.value = autoSaveContent;
} 

// Listen for changes in the text field
  // And save the results into the session storage object
sessionStorageField.addEventListener(`input`, function() {
  const myContent =  sessionStorageField.value;
  sessionStorage.setItem(`autosave`, myContent);
});