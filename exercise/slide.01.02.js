const rootElement = document.createElement(`div`)
rootElement.setAttribute(`id`, `root`)
document.body.append(rootElement)
const element = document.createElement(`div`)
element.textContent = `Hello World`
element.className = `container`
rootElement.append(element)