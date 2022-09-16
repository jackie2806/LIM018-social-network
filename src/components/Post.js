import {
  getUser,
} from '../firebase/methods.js';

export const Post = (coment, indentity) => {
  const user = getUser();
  const divContainerPost = document.createElement('div');
  divContainerPost.className = 'container';
  const formPizarra = document.createElement('form');
  formPizarra.className = 'profilePizarra';
  const divPizarraName = document.createElement('div');
  divPizarraName.className = 'pizarraName';
  const spamUserPizarra = document.createElement('span');
  spamUserPizarra.className = 'spamPizarra';
  spamUserPizarra.textContent = user ? user.displayName : 'Nombre del usuario';
  const divPostPizarra = document.createElement('div');
  divPostPizarra.className = 'divPostBoard';
  const inputPizarra = document.createElement('input'); // input
  inputPizarra.className = 'postBoard'; // className del input
  inputPizarra.value = coment;
  inputPizarra.setAttribute('type', 'text');
  inputPizarra.setAttribute('id', indentity);
  inputPizarra.setAttribute('readonly', 'readonly');
  const divButtons = document.createElement('div');
  divButtons.className = 'buttons';
  const buttonLike = document.createElement('button');
  buttonLike.textContent = '';
  buttonLike.className = 'buttonLike buttonBoard';
  const imgPlane = document.createElement('img');
  imgPlane.src = '/img/planeLike.png';
  imgPlane.className = 'imgPlane';
  const buttonEdit = document.createElement('button'); // Botón editar
  buttonEdit.textContent = 'Editar';
  buttonEdit.setAttribute('data-id', indentity);
  buttonEdit.className = 'buttonEdit buttonBoard'; // className Button Edit
  const buttonDelete = document.createElement('button'); // Botón eliminar
  buttonDelete.textContent = 'Eliminar'; // llamar Button, caputrar el  id y firebase
  buttonDelete.className = 'buttonDelete buttonBoard'; // className button Delete
  buttonDelete.setAttribute('data-id', indentity);
  formPizarra.appendChild(divPizarraName);
  formPizarra.appendChild(divPostPizarra);
  formPizarra.appendChild(divButtons);
  divPizarraName.appendChild(spamUserPizarra);
  divPostPizarra.appendChild(inputPizarra);
  divButtons.appendChild(buttonLike);
  buttonLike.appendChild(imgPlane);
  divButtons.appendChild(buttonEdit);
  divButtons.appendChild(buttonDelete);
  divContainerPost.appendChild(formPizarra);
  return divContainerPost;
};
