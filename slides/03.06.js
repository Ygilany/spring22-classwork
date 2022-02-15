const modeToggleButton = document.getElementById('mode-toggle');
modeToggleButton.addEventListener(`click`, modeToggle );

function modeToggle() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    sessionStorage.setItem(`mode`, `dark`);
    modeToggleButton.innerText = 'Toggle to Light Mode';
  } else {
    sessionStorage.setItem(`mode`, `light`);
    modeToggleButton.innerText = 'Toggle to Dark Mode';
  }

  modeToggleButton.classList.toggle(`btn-danger`);
  modeToggleButton.classList.toggle(`btn-primary`);
}

if(sessionStorage.getItem(`mode`) === `dark`) {
  modeToggle();
}

// window.addEventListener(`load`, function() {
//   if(sessionStorage.getItem(`mode`) === `dark`) {
//     modeToggle();
//   }
// })