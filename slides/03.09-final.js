// Get the text field that we're going to track
let sessionStorageField = document.getElementById("session-field");

// check if an autosave value was saved.
  // if yes, Restore the contents of the text field
if (sessionStorage.getItem("autosave")) {
  sessionStorageField.value = sessionStorage.getItem("autosave");
}

// Listen for changes in the text field
  // And save the results into the session storage object
sessionStorageField.addEventListener("input", function() {
  sessionStorage.setItem("autosave", sessionStorageField.value);
});