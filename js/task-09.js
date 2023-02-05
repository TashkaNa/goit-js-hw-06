const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener('click', () => {
  const bodyBGColor = getRandomHexColor();
  document.body.setAttribute('style', `background: ${bodyBGColor}`);
  color.textContent = bodyBGColor;
})