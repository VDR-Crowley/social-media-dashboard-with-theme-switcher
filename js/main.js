let button_area = document.querySelector(".button-area");
let html = document.querySelector("html");
let span = document.querySelector(".area-mode span");
let button = document.querySelector(".button-area .button");
button_area.addEventListener('click', () => {
  if(html.classList.contains('dark')) {
    html.classList.remove('dark');
    html.classList.add('light');
    span.textContent = "Light Mode";
    button_area.style.justifyContent = 'flex-end';
    button_area.style.transitionDuration = "1s";
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    span.textContent = "Dark Mode";
    button_area.style.justifyContent = 'flex-start';
    button_area.style.transitionDuration = "1s";
  }
});