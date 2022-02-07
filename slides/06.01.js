// HTML element references
const preElement = document.getElementById(`result`);

const request = new XMLHttpRequest();

function getMessages() {
  return new Promise((resolve, reject) => {
    request.onreadystatechange = function () {
      if (request.readyState !== request.DONE) {
        return;
      }
      if (request.status !== 200) {
        reject(`Error: ${request.status}`);
      }
      resolve(request);
    };
    request.open(
      "GET",
      "https://it3049c-chat-application.herokuapp.com/messages"
    );
    request.send();
  });
}

function onMessagesReceived(request) {
  const response = JSON.parse(request.responseText);
  console.log(response[0].sender);
  preElement.innerHTML = JSON.stringify(response);
}

async function setupPage() {
  try {
    const response = await getMessages();
    const parsedResponse = JSON.parse(response.responseText);
    preElement.innerHTML = JSON.stringify(parsedResponse);
  } catch (error) {
    preElement.innerHTML = `
        ${error}
      `;
    preElement.style.color = "red";
  }
}
