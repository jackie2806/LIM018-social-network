import { onNavigate } from '../main.js';

export const Init = () => {
  const divInit = document.createElement('div');
  divInit.className = 'divInit';
  // Logo
  const divInitImg = document.createElement('div');
  divInitImg.className = 'divImg';
  const imgInitLogo = document.createElement('img');
  imgInitLogo.src = '../img/logo.png';
  imgInitLogo.alt = 'Logo';
  divInitImg.appendChild(imgInitLogo);
  // botones
  const divButtons = document.createElement('div');
  divButtons.className = 'divButtons';
  const buttonCreateCount = document.createElement('button');
  buttonCreateCount.className = 'buttonCreateCount';
  buttonCreateCount.setAttribute('type', 'button');
  const buttonCreateCountText = document.createTextNode('Crear una cuneta');
  buttonCreateCount.appendChild(buttonCreateCountText);
  buttonCreateCount.addEventListener('click', () => onNavigate('/register'));
  divButtons.appendChild(buttonCreateCount);
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'buttonLogin';
  const buttonLoginText = document.createTextNode('Iniciar Sesión');
  buttonLogin.appendChild(buttonLoginText);
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  divButtons.appendChild(buttonLogin);

  divInit.appendChild(divInitImg);
  divInit.appendChild(divButtons);

  return divInit;
};
