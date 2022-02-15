// Get the text field that we're going to track
let localStoageField = document.getElementById("local-field");

// check if an autosave value was saved.
  // if yes, Restore the contents of the text field
if (localStorage.getItem("autosave")) {
  localStoageField.value = localStorage.getItem("autosave");
}

// Listen for changes in the text field
  // And save the results into the local storage object
  localStoageField.addEventListener("input", function() {
  localStorage.setItem("autosave", localStoageField.value);
});