// HTML element references
const preElement =document.getElementById(`result`);

const request = new XMLHttpRequest();

function getMessages(callback){
  request.onreadystatechange = function() {
    if (request.readyState !== request.DONE){return;}
    if(request.status !== 200){
      console.log(`Error: ${request.status}`);
      return;
    }
    callback(request)
  }
  request.open('GET', 'https://it3049c-chat-application.herokuapp.com/messages');
  request.send();
}

function onMessagesReceived(request) {
  const response = JSON.parse(request.responseText);
  console.log(response[0].sender)
  preElement.innerHTML = JSON.stringify(response);
}

// EXECUTION of Function
getMessages(onMessagesReceived);