const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function onTypingInInput(e) {
  nameOutput.textContent = e.currentTarget.value.trim();
  if (!nameOutput.textContent) {
  nameOutput.textContent = "Anonymous";
  }
}

// by using of ternary expression

// function onTypingInInput(e) {
//   const content = e.currentTarget.value.trim();
//   nameOutput.textContent = content === '' ? "Anonymous" : content;
// }

input.addEventListener('input', onTypingInInput)


