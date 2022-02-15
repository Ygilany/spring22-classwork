// HTML element references
const preElement =document.getElementById(`result`);

function getMessages() {
  return fetch(`https://it3049c-chat-application.herokuapp.com/messages`)
    .then(response => response.json())
}

function setupPage() {
  getMessages()
    .then(function (response){
      // If request is successful:
      preElement.innerHTML = JSON.stringify(response);
    })
    .catch(function(error){
      // If request is unsuccessful:
      preElement.innerHTML = `
        ${error}
      `;
      preElement.style.color = 'red';
    })
}

// EXECUTION of Function
setupPage();