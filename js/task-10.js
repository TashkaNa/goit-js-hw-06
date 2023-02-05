function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const createBrn = document.querySelector('[data-create]');
const destroyBrn= document.querySelector('[data-destroy]')
const boxList = document.querySelector('#boxes');


function createBoxes(amount){
  amount = Number(input.value); 
  const boxes = new Array(amount).fill('').reduce((prevBox, currBox, index) => {
  return prevBox + `<div class='box' style = "width: ${30 + index *10}px; height: ${30 + index *10}px; background: ${getRandomHexColor()}"></div>`
}, '');
boxList.insertAdjacentHTML('beforeend', boxes);
}

function removeBoxes(){
  boxList.innerHTML = '';
  input.value = '';
}

createBrn.addEventListener('click', createBoxes);
destroyBrn.addEventListener('click', removeBoxes);
