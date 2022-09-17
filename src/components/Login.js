// eslint-disable-next-line import/no-cycle, import/no-duplicates
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  provider,
  GoogleAuthProvider,
  saveUserInLocalStorage,
// eslint-disable-next-line import/no-unresolved
} from '../firebase/methods.js';

const loginEmailPassword = async () => {
  const email = document.getElementById('inputEmail').value;
  const password = document.getElementById('inputPassword').value;
  try {
    console.log('soy try');
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (userCredential.user && email !== '' && password !== '') {
      saveUserInLocalStorage(userCredential.user);
      onNavigate('/home'); // mostrar el Home con su ruta
    }
    console.log('Soy un user', userCredential.user);
    console.log('estoy legeado', auth.currentUser);
  } catch (error) {
    console.log(error);
  }
};

const signInGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      saveUserInLocalStorage(result.user);
      console.log('Usuario', credential);
      console.log(result);
      onNavigate('/home');
      // const token = credential.accessToken;
      // const user = result.user;
    // console.log(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const Login = () => {
  const divLogin = document.createElement('div');
  divLogin.className = 'divLogin';
  // Logo
  const divArrowLogin = document.createElement('div');
  divArrowLogin.className = 'divArrowLogin';
  const arrowImgLogin = document.createElement('img');
  arrowImgLogin.className = 'arrowImgLogin';
  arrowImgLogin.addEventListener('click', () => onNavigate('/'));
  arrowImgLogin.src = '../img/arrowregister.png';
  arrowImgLogin.alt = 'ArrowLeft';
  divArrowLogin.appendChild(arrowImgLogin);
  const divLoginImg = document.createElement('div');
  divLoginImg.className = 'divLoginImg';
  const imgLoginLogo = document.createElement('img');
  imgLoginLogo.className = 'imgLoginLogo';
  imgLoginLogo.src = '../img/logoMobile.png';
  imgLoginLogo.alt = 'Logo';
  divLoginImg.appendChild(imgLoginLogo);
  // inputs
  const divInputs = document.createElement('div');
  divInputs.className = 'divInputs';
  const divTextEmail = document.createElement('div');
  divTextEmail.className = 'divTextEmail';
  divTextEmail.textContent = 'Ingresa tu correo electrónico';
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'inputEmail'); // Id inputEmail
  inputEmail.className = 'inputEmail';
  inputEmail.autocomplete = 'off';
  inputEmail.required = true;
  inputEmail.placeholder = 'ejemplo@gmail.com';
  inputEmail.autofocus = 'on';
  const divTextPassword = document.createElement('div');
  divTextPassword.className = 'divTextPassword';
  divTextPassword.textContent = 'Ingresa tu contraseña';
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('id', 'inputPassword'); // Id password
  inputPassword.className = 'inputPassword';
  inputPassword.setAttribute('id', 'inputPassword'); // Id
  inputPassword.placeholder = 'Contraseña';
  inputPassword.autocomplete = 'off';
  inputPassword.required = true;
  inputPassword.type = 'password';
  divInputs.appendChild(divTextEmail);
  divInputs.appendChild(inputEmail);
  divInputs.appendChild(divTextPassword);
  divInputs.appendChild(inputPassword);
  const divTextForgotPassword = document.createElement('div');
  divTextForgotPassword.className = 'divForgotPassword';
  divTextForgotPassword.textContent = '¿Olvidaste tu contraseña?';
  divInputs.appendChild(divTextForgotPassword);
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'buttonLogin';
  buttonLogin.addEventListener('click', loginEmailPassword);
  buttonLogin.setAttribute('type', 'button');
  const buttonLoginText = document.createTextNode('Iniciar Sesión');
  buttonLogin.appendChild(buttonLoginText);
  divInputs.appendChild(buttonLogin);
  const divLoginOthers = document.createElement('div');
  divLoginOthers.className = 'divLoginOthers';
  const text = document.createElement('div');
  text.textContent = '-O-';
  const buttonGoogle = document.createElement('button');
  buttonGoogle.addEventListener('click', signInGoogle);
  buttonGoogle.className = 'buttonGoogle';
  buttonGoogle.setAttribute('type', 'button');
  const buttonGoogleText = document.createTextNode('Iniciar con Google');
  buttonGoogle.appendChild(buttonGoogleText);
  divLoginOthers.appendChild(text);
  divLoginOthers.appendChild(buttonGoogle);
  divLogin.appendChild(divArrowLogin);
  divLogin.appendChild(divLoginImg);
  divLogin.appendChild(divInputs);
  divLogin.appendChild(divLoginOthers);

  return divLogin;
};
