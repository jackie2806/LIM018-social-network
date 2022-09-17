/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { registrar } from '../Firebase/methods.js';

function contrasenas() {
  const inputContrasena = document.getElementById('password').value;
  const inputConfirmContrasena = document.getElementById('confirmPassword').value;
  return inputContrasena === inputConfirmContrasena;
}

function mostrarContrasena(input, ver) {
  const inputContrasena = input;
  ver.addEventListener('click', () => {
    inputContrasena.type = (inputContrasena.type === 'password' ? 'text' : 'password');
  });
}

export function dataRegister() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  return {
    email,
    password,
    name,
  };
}

export const Register = () => {
  const divContainer = document.createElement('div');
  const divRegister = document.createElement('div');
  divRegister.className = 'divRegister';
  const divArrowBack = document.createElement('div');
  divArrowBack.className = 'divArrowBack';
  const arrowImgRegister = document.createElement('img');
  arrowImgRegister.className = 'arrowImgRegister';
  arrowImgRegister.addEventListener('click', () => onNavigate('/'));
  arrowImgRegister.src = '/img/arrowregister.png';
  arrowImgRegister.alt = 'ArrowLeft';
  divArrowBack.appendChild(arrowImgRegister);
  divRegister.appendChild(divArrowBack);
  divContainer.appendChild(divRegister);

  // logo
  const divLogoRegister = document.createElement('div');
  divLogoRegister.className = 'divLogoRegister';
  const imgLogo = document.createElement('img');
  imgLogo.className = 'imgLogoRegister';
  imgLogo.src = '/img/logoMobile.png';
  imgLogo.alt = 'logo';
  divLogoRegister.appendChild(imgLogo);
  divRegister.appendChild(divLogoRegister);

  // name
  const formRegister = document.createElement('form');
  const divName = document.createElement('div');
  divName.className = 'divName inputRegister';
  const inputName = document.createElement('input');
  inputName.className = 'inputForm';
  inputName.placeholder = 'Nombre y apellidos';
  inputName.autofocus = 'on';
  inputName.autocomplete = 'off';
  inputName.id = 'name';
  inputName.required = true;
  const spanName = document.createElement('span');
  spanName.id = 'nameOk';
  const divImg = document.createElement('div');
  divImg.className = 'divimg';
  const imgName = document.createElement('img');
  imgName.className = 'imgName';
  imgName.src = '/img/Vector-name.png';
  imgName.alt = 'logoName';
  divName.appendChild(divImg);
  divImg.appendChild(imgName);
  divName.appendChild(inputName);
  inputName.appendChild(spanName);
  formRegister.appendChild(divName);

  // email
  const divEmail = document.createElement('div');
  divEmail.className = 'divEmail inputRegister';
  const inputEmail = document.createElement('input');
  inputEmail.className = 'inputForm';
  inputEmail.placeholder = 'ejemplo@gmail.com';
  inputEmail.autocomplete = 'off';
  inputEmail.id = 'email';
  inputEmail.required = true;
  inputEmail.type = 'email';
  const divImgEmail = document.createElement('div');
  divImgEmail.className = 'divImgEmail';
  const imgEmail = document.createElement('img');
  imgEmail.className = 'imgEmail';
  imgEmail.src = '/img/Vector-email.png';
  imgEmail.alt = 'logoEmail';
  divEmail.appendChild(divImgEmail);
  divImgEmail.appendChild(imgEmail);
  divEmail.appendChild(inputEmail);
  formRegister.appendChild(divEmail);

  // contrasena
  const divContrasena = document.createElement('div');
  divContrasena.className = 'divContrasena inputRegister';
  const inputContrasena = document.createElement('input');
  inputContrasena.className = 'inputForm';
  inputContrasena.placeholder = 'Cree una contrasena';
  inputContrasena.autocomplete = 'off';
  inputContrasena.minLength = '6';
  inputContrasena.type = 'password';
  inputContrasena.id = 'password';
  inputContrasena.required = true;
  const divImgContrasena = document.createElement('div');
  divImgContrasena.className = 'divImgContrasena';
  const imgContrasena = document.createElement('img');
  imgContrasena.className = 'imgContrasena';
  imgContrasena.src = '/img/Vector-ojito.png';
  imgContrasena.alt = 'logoContrasena';
  divContrasena.appendChild(divImgContrasena);
  divImgContrasena.appendChild(imgContrasena);
  divContrasena.appendChild(inputContrasena);
  formRegister.appendChild(divContrasena);
  mostrarContrasena(inputContrasena, imgContrasena);

  // confirmar contrasena
  const divConfirmContrasena = document.createElement('div');
  divConfirmContrasena.className = 'divConfirmContrasena inputRegister';
  const inputConfirmContrasena = document.createElement('input');
  inputConfirmContrasena.className = 'inputForm';
  inputConfirmContrasena.placeholder = 'Confime la contrasena';
  inputConfirmContrasena.autocomplete = 'off';
  inputConfirmContrasena.minLength = '6';
  inputConfirmContrasena.id = 'confirmPassword';
  inputConfirmContrasena.type = 'password';
  inputConfirmContrasena.required = true;
  const divImgContrasena2 = document.createElement('div');
  divImgContrasena2.className = 'divImgContrasena2';
  const imgConfirmContrasena = document.createElement('img');
  imgConfirmContrasena.className = 'imgConfirmContrasena';
  imgConfirmContrasena.src = '/img/Vector-ojito.png';
  imgConfirmContrasena.alt = 'logoConfirmContrasena';
  divConfirmContrasena.appendChild(divImgContrasena2);
  divImgContrasena2.appendChild(imgConfirmContrasena);
  divConfirmContrasena.appendChild(inputConfirmContrasena);
  formRegister.appendChild(divConfirmContrasena);
  mostrarContrasena(inputConfirmContrasena, imgConfirmContrasena);

  // botton registrar
  const buttonRegister = document.createElement('div');
  buttonRegister.className = 'buttonRegister inputForm';
  const inputButtonRegister = document.createElement('button');
  inputButtonRegister.type = 'submit';
  inputButtonRegister.id = 'buttonRegister';
  inputButtonRegister.textContent = 'Registrar';
  buttonRegister.appendChild(inputButtonRegister);
  formRegister.appendChild(buttonRegister);

  // texto cuando ya tienen cuenta
  const divRegisterText = document.createElement('div');
  divRegisterText.className = 'divRegisterText';
  const aLogin = document.createElement('a');
  aLogin.className = 'aLogin';
  aLogin.textContent = '¿Ya tienes una cuenta? Haz click aquí';

  const loginText = document.createTextNode('¿Ya tienes una cuenta? Haz click aquí');
  loginText.className = 'loginText';
  divRegister.appendChild(formRegister);
  divRegisterText.appendChild(aLogin);
  divRegisterText.addEventListener('click', () => onNavigate('/login'));
  divRegister.appendChild(divRegisterText);

  formRegister.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (contrasenas()) {
      registrar();
    } else {
      alert('las contraseñas no son iguales');
    }
  });
  return divContainer;
};
