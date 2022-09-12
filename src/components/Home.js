// lógica
import {
  /* dataBase,
  doc,
  setDoc,
  addDoc,
  collection, */
  getUser,
  createPost,
} from '../firebase/methods.js';
import { Post } from './Post.js';

import {
  publicPost,
} from '../lib/index.js';

export const Home = () => {
  const user = getUser();
  const divHome = document.createElement('div');
  // Logo
  const divMenu = document.createElement('div');
  divMenu.className = 'menu';
  const divLogoHome = document.createElement('div');
  divLogoHome.className = 'logoHome';
  const imgLogoHome = document.createElement('img');
  imgLogoHome.className = 'imgLogo';
  imgLogoHome.src = '/img/logoMobile.png';
  imgLogoHome.alt = 'logo';
  const divLogoSandwich = document.createElement('div');
  const imgSandwich = document.createElement('img');
  imgSandwich.src = '/img/sandwich.png';
  imgSandwich.alt = 'logo-sandwich';
  imgSandwich.className = 'imgSandwich';

  divLogoSandwich.appendChild(imgSandwich);
  divLogoHome.appendChild(imgLogoHome);
  divMenu.appendChild(divLogoHome);
  divMenu.appendChild(divLogoSandwich);
  divHome.appendChild(divMenu);
  // table
  const divContainer = document.createElement('div');
  divContainer.className = 'container';
  divHome.appendChild(divContainer);
  // ProfilePost
  const formBoxProfile = document.createElement('form');
  formBoxProfile.className = 'profilePost';
  // const userName = document.getElementById('name');
  const divUserName = document.createElement('div');
  divUserName.className = 'userName';
  divUserName.textContent = user ? user.displayName : 'Nombre del usuario'; //  nombre del usuario
  const spamUser = document.createElement('spam');
  spamUser.className = 'spamuser';
  const divPost = document.createElement('div');
  divPost.className = 'divPostHome';
  const inputPost = document.createElement('input'); // input
  inputPost.className = 'postHome';
  inputPost.placeholder = '¿Qué estás pensando?';
  const divbuttonPublish = document.createElement('div');
  divbuttonPublish.className = 'divButtonPublish';
  const buttonPublish = document.createElement('button');
  buttonPublish.textContent = 'Publicar';
  buttonPublish.className = 'buttonPublish button';
  // contenedor de los post
  const divContainerPost = document.createElement('div');

  formBoxProfile.appendChild(divUserName);
  formBoxProfile.appendChild(divPost);
  formBoxProfile.appendChild(divbuttonPublish);
  divUserName.appendChild(spamUser);
  divPost.appendChild(inputPost);
  divbuttonPublish.appendChild(buttonPublish);
  divContainer.appendChild(formBoxProfile);
  // Pizarra dinámica
  // Lógica
  const btnPublic = divHome.querySelector('.buttonPublish');
  const inputValue = divHome.querySelector('.postHome');

  btnPublic.addEventListener('click', (e) => {
    e.preventDefault();
    publicPost(inputValue, divContainerPost, divHome, Post());
    createPost(user, inputValue.value);
  });
  return divHome;
};
