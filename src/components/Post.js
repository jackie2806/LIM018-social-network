import {
  getUser,
} from '../firebase/methods.js';

export const Post = (coment) => {
  const user = getUser();
  const divContainerPost = document.createElement('div');
  divContainerPost.className = 'container';
  const formPizarra = document.createElement('form');
  formPizarra.className = 'profilePizarra';
  const divPizarraName = document.createElement('div');
  divPizarraName.className = 'pizarraName';
  const spamUserPizarra = document.createElement('spam');
  spamUserPizarra.className = 'spamPizarra';
  spamUserPizarra.textContent = user ? user.displayName : 'Nombre del usuario';
  const divPostPizarra = document.createElement('div');
  divPostPizarra.className = 'divPostBoard';
  const inputPizarra = document.createElement('input');
  inputPizarra.className = 'postBoard';
  inputPizarra.placeholder = `${coment}`;
  const divButtons = document.createElement('div');
  divButtons.className = 'buttons';
  const buttonLike = document.createElement('button');
  buttonLike.textContent = '';
  buttonLike.className = 'buttonLike buttonBoard';
  const imgPlane = document.createElement('img');
  imgPlane.src = '/img/planeLike.png';
  imgPlane.className = 'imgPlane';
  const buttonEdit = document.createElement('button');
  buttonEdit.textContent = 'editar';
  buttonEdit.className = 'buttonEdit buttonBoard';
  const buttonDelete = document.createElement('button');
  buttonDelete.textContent = 'delete';
  buttonDelete.className = 'buttonDelete buttonBoard';
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
