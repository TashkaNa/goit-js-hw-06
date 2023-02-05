const inputControls = document.querySelector('#font-size-control');
const textFontSize= document.querySelector('#text')

const minFontSize = inputControls.getAttribute('min');
const maxFontSize = inputControls.getAttribute('max');
const initialFontSize = (Number(minFontSize) + Number(maxFontSize))/2;
textFontSize.setAttribute('style', `font-size:${initialFontSize}px`);

function onControlsChange(e){
  textFontSize.setAttribute('style', `font-size:${e.currentTarget.value}px`);
}

inputControls.addEventListener('input', onControlsChange);