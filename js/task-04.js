const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueNum = document.querySelector('#value');
let counterValue = 0;

const decrementValueOnClick = () => {
    valueNum.textContent = counterValue -= 1;
};
const incrementValueOnClick = () => {
    valueNum.textContent = counterValue += 1;
};

decrementBtn.addEventListener('click', decrementValueOnClick);
incrementBtn.addEventListener('click', incrementValueOnClick);
