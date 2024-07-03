const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  const cleanSpaceValue = inputEl.value.trim();

  cleanSpaceValue !== ''
    ? (outputEl.textContent = cleanSpaceValue)
    : (outputEl.textContent = 'Anonymous');
});
