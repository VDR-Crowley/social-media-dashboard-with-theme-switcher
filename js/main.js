let button_area = document.querySelector(".button-area");
let html = document.querySelector("html");
let span = document.querySelector(".area-mode span");
let button = document.querySelector(".area-mode .button-area .button");
button_area.addEventListener('click', () => {
  if(html.classList.contains('dark')) {
    html.classList.remove('dark');
    html.classList.add('light');
    span.textContent = "Light Mode";
    button.style.transform = 'translate(22px, 0)';
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    span.textContent = "Dark Mode";
    button.style.transform = 'translate(0px, 0)';
  }
});