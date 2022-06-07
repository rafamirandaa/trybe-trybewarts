const button = document.querySelector('#submitButton');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const buttonSend = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');

function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', login);

function enableClick() {
  if (checkbox.checked !== true) {
    buttonSend.disabled = true;
  } else {
    buttonSend.disabled = false;
  }
}

checkbox.addEventListener('click', enableClick);
