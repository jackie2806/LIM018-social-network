// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
  const divRegister = document.createElement('div');
  const divArrowRegister = document.createElement('div');
  divArrowRegister.className = 'divArrowRegister';
  const arrowImgRegister = document.createElement('img');
  arrowImgRegister.className = 'arrowImgRegister';
  arrowImgRegister.addEventListener('click', () => onNavigate('/'));
  arrowImgRegister.src = '../img/arrow.png';
  arrowImgRegister.alt = 'ArrowLeft';
  divArrowRegister.appendChild(arrowImgRegister);
  divRegister.appendChild(divArrowRegister);

  const span = document.createElement('span');
  span.textContent = 'Pronto seré creado. Soy un Form en proyecto :)';
  divRegister.appendChild(span);

  const divLoginText = document.createElement('div');
  divLoginText.className = 'divLoginText';
  const aLogin = document.createElement('a');
  aLogin.className = 'aLogin';
  aLogin.textContent = '¿Ya tienes una cuenta? Haz click aquí';
  // const loginText = document.createTextNode('¿Ya tienes una cuenta? Haz click aquí');
  divLoginText.appendChild(aLogin);
  divLoginText.addEventListener('click', () => onNavigate('/login'));
  divRegister.appendChild(divLoginText);
  return divRegister;
};
