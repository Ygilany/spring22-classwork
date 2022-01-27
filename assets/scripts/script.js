const title = document.querySelector('.title');
title.textContent = 'Hello World';

const list = document.querySelector(`.list`)
list.innerHTML = `
  <p>Hello IT3049C</p>
`;

const insertSection = document.getElementById('insert-here');
const paragraph1ToBeInserted = document.createElement('p');
const paragraph2ToBeInserted = document.createElement('p');

paragraph1ToBeInserted.textContent = 'Hello IT3049C';
paragraph2ToBeInserted.textContent = 'Second paragraph';
paragraph1ToBeInserted.id = "make-it-blue";
paragraph1ToBeInserted.style.fontWeight = 'bold';

insertSection.appendChild(paragraph1ToBeInserted);
insertSection.appendChild(paragraph2ToBeInserted);

// insertSection.removeChild(paragraph2ToBeInserted);



const darkModeToggleButton = document.getElementById('dark-mode-toggle');
darkModeToggleButton.addEventListener(`click`, toggleDarkMode );

const lightModeToggleButton = document.getElementById('light-mode-toggle');
lightModeToggleButton.addEventListener(`click`, toggleLightMode );

function toggleDarkMode() {
  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');
  darkModeToggleButton.classList.add(`d-none`);
  lightModeToggleButton.classList.remove(`d-none`);
}
function toggleLightMode() {
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');
  darkModeToggleButton.classList.remove(`d-none`);
  lightModeToggleButton.classList.add(`d-none`);
}


const modeToggleButton = document.getElementById('mode-toggle');
modeToggleButton.addEventListener(`mouseenter`, modeToggle );

function modeToggle() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('dark-mode')) {
    modeToggleButton.textContent = 'Light Mode';
  } else {
    modeToggleButton.textContent = 'Dark Mode';
  }

  modeToggleButton.classList.toggle(`btn-danger`);
  modeToggleButton.classList.toggle(`btn-primary`);
}