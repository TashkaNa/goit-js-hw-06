const input = document.querySelector('#validation-input');

function onInputBlur(e) {
  const contentOfInput = e.currentTarget.value.trim();
  input.dataset.length = contentOfInput.length;
  input.classList.remove('valid', 'invalid');
  input.dataset.length === '6' ? input.classList.add('valid') : input.classList.add('invalid');
  }
input.addEventListener('blur', onInputBlur); 