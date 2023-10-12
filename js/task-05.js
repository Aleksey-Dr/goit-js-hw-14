const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const handlerInput = () => nameOutput.textContent = nameInput.value;

nameInput.addEventListener('input', handlerInput);