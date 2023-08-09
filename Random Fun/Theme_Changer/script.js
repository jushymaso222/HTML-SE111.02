const themeToggle = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-link');

themeToggle.addEventListener('click', () => {
  if (themeLink.getAttribute('href') === 'theme-light.css') {
    themeLink.setAttribute('href', 'theme-dark.css');
  } else {
    themeLink.setAttribute('href', 'theme-light.css');
  } 
});