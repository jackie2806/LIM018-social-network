// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
  const divRegister = document.createElement('div');
  const divArrowRegister = document.createElement('div');
  divArrowRegister.className = 'divArrowRegister';
  const arrowImgRegister = document.createElement('img');
  arrowImgRegister.addEventListener('click', () => onNavigate('/'));
  arrowImgRegister.src = '../img/arrow.png';
  arrowImgRegister.alt = 'ArrowLeft';
  divArrowRegister.appendChild(arrowImgRegister);
  divRegister.appendChild(divArrowRegister);
  const span = document.createElement('span');
  span.textContent = 'Falta que Yurema haga el Resgister Form';
  divRegister.appendChild(span);

  const divLoginText = document.createElement('div');
  divLoginText.className = 'divLoginText';
  divLoginText.textContent = '¿Ya tienes una cuenta? Haz click aquí';
  divLoginText.addEventListener('click', () => onNavigate('/login'));
  divRegister.appendChild(divLoginText);
  return divRegister;
};
