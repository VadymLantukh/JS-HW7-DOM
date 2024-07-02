const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const cleanSpaceValue = textInput.value.trim();

  cleanSpaceValue !== ''
    ? (output.textContent = cleanSpaceValue)
    : (output.textContent = 'Anonymous');
});
