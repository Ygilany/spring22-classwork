// HTML element references
const preElement =document.getElementById(`result`);


function getMessages (callThisOnSuccess) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState !== request.DONE){
      return;
    }
    if(request.status !== 200){
      console.log(`Error: ${request.status}`);
      return;
    }
    callThisOnSuccess(request.responseText);
  }
  request.open('GET', 'https://it3049c-chat-application.herokuapp.com/messages');
  request.send();
}

function showMessages(responseText) {
  const response = JSON.parse(responseText);
  preElement.innerText = JSON.stringify(response);
}

function celebrate() {
  console.log(`Woohoo!`)
}

getMessages(showMessages);


// 🦉: do you need all the checks above? how can we clean this a bit?

// 🐨: Wrap the above in a function that takes a callback function as an argument
// Separation of concerns.
