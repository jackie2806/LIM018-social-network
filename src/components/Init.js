// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Init = () => {
  const divInit = document.createElement('div');
  divInit.className = 'divInit';
  // Logo
  const divInitImg = document.createElement('div');
  divInitImg.className = 'divInitImg';
  const imgInitLogo = document.createElement('img');
  imgInitLogo.className = 'imgInitLogo';
  imgInitLogo.src = '../img/logo.png';
  imgInitLogo.alt = 'Logo';
  divInitImg.appendChild(imgInitLogo);
  // botones
  const divButtons = document.createElement('div');
  divButtons.className = 'divButtons';
  const buttonCreateCount = document.createElement('button');
  buttonCreateCount.className = 'buttonCreateCount';
  buttonCreateCount.setAttribute('type', 'button');
  const buttonCreateCountText = document.createTextNode('Crear una cuenta');
  buttonCreateCount.appendChild(buttonCreateCountText);
  buttonCreateCount.addEventListener('click', () => onNavigate('/register'));
  divButtons.appendChild(buttonCreateCount);
  const buttonInitLogin = document.createElement('button');
  buttonInitLogin.className = 'buttonInitLogin';
  const buttonLoginText = document.createTextNode('Iniciar Sesión');
  buttonInitLogin.appendChild(buttonLoginText);
  buttonInitLogin.addEventListener('click', () => onNavigate('/login'));
  divButtons.appendChild(buttonInitLogin);

  divInit.appendChild(divInitImg);
  divInit.appendChild(divButtons);

  return divInit;
};
