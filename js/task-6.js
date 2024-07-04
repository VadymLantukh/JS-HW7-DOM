const divBoxEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const buttDestroyEl = document.querySelector('[data-destroy]');
const buttCreateEl = document.querySelector('[data-create]');

buttDestroyEl.addEventListener('click', destroyBoxes);

buttCreateEl.addEventListener('click', () => {
  let amount = inputEl.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  inputEl.value = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let createBoxDiv = '';

  for (let i = 0; i < amount; i += 1) {
    const sizeBox = 30 + 10 * i;
    const colorBox = getRandomHexColor();
    createBoxDiv += `<div style="width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${colorBox};"></div>`;
  }

  divBoxEl.innerHTML = createBoxDiv;
}

function destroyBoxes() {
  divBoxEl.innerHTML = '';
}
