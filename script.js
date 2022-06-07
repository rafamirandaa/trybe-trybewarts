const button = document.querySelector('#submitButton');
const email = document.querySelector('#input-email');
const password = document.querySelector('#password');
const buttonSend = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const contadorCaracteres = document.querySelector('#counter');
const caracteresTextArea = document.querySelector('#textarea');

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

function counterTextArea() {
  const textLength = caracteresTextArea.value.length;
  const finalValue = 500 - textLength;
  contadorCaracteres.innerText = finalValue.toString();
}

caracteresTextArea.addEventListener('input', counterTextArea);

// RECEBE
const formUsername = document.querySelector('#formUsername');
const formEmail = document.querySelector('#formEmail');
const formHouse = document.querySelector('#formHouse');
const formFamily = document.querySelector('#formFamily');
const formMaterial = document.querySelector('#formMaterial');
const formRating = document.querySelector('#formRating');
const formObs = document.querySelector('#formObs');

// ENVIA
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const house = document.querySelector('#house');
const family = document.getElementsByName('family');
const materials = document.querySelectorAll('.subject');
const rating = document.getElementsByName('rate');
const obs = document.querySelector('#textarea');

function chooseFamily() {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      return family[index].value;
    }
  }
}

function chooseRate() {
  for (let index = 0; index < rating.length; index += 1) {
    if (rating[index].checked === true) {
      return rating[index].value;
    }
  }
}

function chooseMaterial() {
  const array = [];
  for (let index = 0; index < materials.length; index += 1) {
    if (materials[index].checked === true) {
      array.push(materials[index].value);
    }
  }
  return array.join(', ');
}

const form = document.querySelector('#evaluation-form');

function sendData(event) {
  event.preventDefault();
  formUsername.innerText = `Nome: ${inputName.value} ${inputLastName.value}`;
  formEmail.innerText = `Email: ${email.value}`;
  formHouse.innerText = `Casa: ${house.value}`;
  formObs.innerText = `Observações: ${obs.value}`;
  formFamily.innerText = `Família: ${chooseFamily()}`;
  formMaterial.innerText = `Matérias: ${chooseMaterial()}`;
  formRating.innerText = `Avaliação: ${chooseRate()}`;
  form.style.display = 'none';
}

buttonSend.addEventListener('click', sendData);
