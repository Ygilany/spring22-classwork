// HTML element references
const preElement =document.getElementById(`result`);

const request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (request.readyState !== request.DONE){return;}
  if(request.status !== 200){
    console.log(`Error: ${request.status}`);
    return;
  }
  if (request.status === 200) {
    const response = JSON.parse(request.responseText);
    console.log(response[0].sender)
    preElement.innerText = JSON.stringify(response);
  }
}

request.open('GET', 'https://it3049c-chat-application.herokuapp.com/messages');
request.send();

// 🦉: do you need all the checks above? how can we clean this a bit?

// 🐨: Wrap the above in a function that takes a callback function as an argument
// Separation of concerns.
