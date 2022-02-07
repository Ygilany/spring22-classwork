# JSON
* easy for humans to read and write and for computers to understand and parse
* Used in almost every single external web API that's out there.
  * Some can be compatible with both data formats


## XML Request
* Functions should have a single responsibility
* it should only deal with the HTTP request and not the UI updates
* create `onMessagesReceived(request)`

```js
function onMessagesReceived(request) {
  const response = JSON.parse(request.responseText);

  preElement.innerHTML = request.responseText;
}

function getMessages(callback) should call the other callback
```