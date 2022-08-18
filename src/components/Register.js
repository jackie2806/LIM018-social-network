// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
  // flecha
  const divRegister = document.createElement('div');
  divRegister.className = 'divRegister';
  const divArrowRegister = document.createElement('div');
  divArrowRegister.className = 'divArrowRegister';
  const arrowImgRegister = document.createElement('img');
  arrowImgRegister.className = 'arrowImgRegister';
  arrowImgRegister.addEventListener('click', () => onNavigate('/'));
  arrowImgRegister.src = '/img/arrowregister.png';
  arrowImgRegister.alt = 'ArrowLeft';
  divArrowRegister.appendChild(arrowImgRegister);
  divRegister.appendChild(divArrowRegister);
  // logo
  const divLogoRegister = document.createElement('div');
  divLogoRegister.className = 'divLogoRegister';
  const imgLogo = document.createElement('img');
  imgLogo.className = 'imgLogo';
  imgLogo.src = '/img/logo.png';
  imgLogo.alt = 'logo';
  divLogoRegister.appendChild(imgLogo);
  divRegister.appendChild(divLogoRegister);
  const formRegister = document.createElement('div');
  formRegister.className = 'formulario';
  // name
  const divName = document.createElement('div');
  divName.className = 'divName inputRegister';
  const inputName = document.createElement('input');
  inputName.setAttribute('id', 'inputNameAndLastname'); // Input name
  inputName.className = 'inputForm';
  inputName.placeholder = 'Nombre y apellidos';
  const divImg = document.createElement('div');
  divImg.className = 'divimg';
  const imgName = document.createElement('img');
  imgName.className = 'imgName';
  imgName.src = '/img/Vector-name.png';
  imgName.alt = 'logoName';
  divName.appendChild(divImg);
  divImg.appendChild(imgName);
  divName.appendChild(inputName);
  formRegister.appendChild(divName);
  divRegister.appendChild(formRegister);
  // email
  const divEmail = document.createElement('div');
  divEmail.className = 'divEmail inputRegister';
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'inputEmail'); // input email
  inputEmail.className = 'inputForm';
  inputEmail.placeholder = 'ejemplo@gmail.com';
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
  divRegister.appendChild(formRegister);
  // telefono
  // contraseña
  const divPassword = document.createElement('div');
  divPassword.className = 'divContraseña inputRegister';
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('id', 'inputPassword');
  inputPassword.className = 'inputForm';
  inputPassword.placeholder = 'Cree una contraseña';
  const divImgContraseña = document.createElement('div');
  divImgContraseña.className = 'divImgContraseña';
  const imgContraseña = document.createElement('img');
  imgContraseña.className = 'imgContraseña';
  imgContraseña.src = '/img/Vector-ojito.png';
  imgContraseña.alt = 'logoContraseña';
  divPassword.appendChild(divImgContraseña);
  divImgContraseña.appendChild(imgContraseña);
  divPassword.appendChild(inputPassword);
  formRegister.appendChild(divPassword);
  divRegister.appendChild(formRegister);
  // confirmar contraseña
  const divConfirmContraseña = document.createElement('div');
  divConfirmContraseña.className = 'divConfirmContraseña inputRegister';
  const inputConfirmContraseña = document.createElement('input');
  inputConfirmContraseña.className = 'inputForm';
  inputConfirmContraseña.placeholder = 'Confime la contraseña';
  const divImgContraseña2 = document.createElement('div');
  divImgContraseña2.className = 'divImgContraseña2';
  const imgConfirmContraseña = document.createElement('img');
  imgConfirmContraseña.className = 'imgConfirmContraseña';
  imgConfirmContraseña.src = '/img/Vector-ojito.png';
  imgConfirmContraseña.alt = 'logoConfirmContraseña';
  divConfirmContraseña.appendChild(divImgContraseña2);
  divImgContraseña2.appendChild(imgConfirmContraseña);
  divConfirmContraseña.appendChild(inputConfirmContraseña);
  formRegister.appendChild(divConfirmContraseña);
  divRegister.appendChild(formRegister);
  // botton registrar
  const buttonRegister = document.createElement('div');
  buttonRegister.className = 'buttonRegister inputForm';
  const inputButtonRegister = document.createElement('button');
  inputButtonRegister.type = 'button';
  inputButtonRegister.id = 'buttonRegister';
  inputButtonRegister.textContent = 'Registrar';
  buttonRegister.appendChild(inputButtonRegister);
  formRegister.appendChild(buttonRegister);
  divRegister.appendChild(formRegister);
  // texto cuando ya tienen cuenta
  const divRegisterText = document.createElement('div');
  divRegisterText.className = 'divRegisterText';
  const aLogin = document.createElement('a');
  aLogin.className = 'aLogin';
  aLogin.textContent = '¿Ya tienes una cuenta? Haz click aquí';
  // const loginText = document.createTextNode('¿Ya tienes una cuenta? Haz click aquí');
  divRegisterText.appendChild(aLogin);
  divRegisterText.addEventListener('click', () => onNavigate('/login'));
  divRegister.appendChild(divRegisterText);
  return divRegister;
};
