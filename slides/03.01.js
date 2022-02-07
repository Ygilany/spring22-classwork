// 🐨: Make an HTTP Request using `XMLHttpRequest`
const request = new XMLHttpRequest();
console.log(request.readyState)

// 🦉: Requests have different states for how the request is being prepared, sent, and received. (ReadyStates)


// 🐨: Listen for the `readystatechange` event
// 📜: ReadyStates: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
request.onreadystatechange = function() {
  console.log(request.readyState);
}

// 🐨: Open the request with the `GET` method
request.open('GET', 'https://it3049c-chat-application.herokuapp.com/messages');
request.send();

// 🐨: Update the `onstatechange` event listener
// if request is not done, ignore and wait for the next state change
// if it is DONE, but not with 200 OK status, console.log an error
// if it is DONE and with 200 OK status, console.log the response and/or update the UI with the response
// 🐨: you will need to parse the response text.
// 🦉:check out the Network Tab 

