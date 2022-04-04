// Assuming you've imported React.
const rootElement = document.getElementById('root')
const element = React.createElement('div', {
  className: 'container',
  children: 'Hello World',
})
ReactDOM.render(element, rootElement)

// to create multiple children

/*
children: [
  React.createElement('span', null, 'Hello'),
  ' ',
  React.createElement('span', null, 'World'),
],
*/