// lógica
import {
  getUser,
  createPost,
  // getPosts,
  onGetPosts,
  deletePost,
  getPost,
  updatePost,
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
  const divContainerPost = document.createElement('div');

  window.addEventListener('DOMContentLoaded', async () => {
    onGetPosts((querySnapshot) => {
      divContainerPost.innerHTML = '';
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        const postData = doc.data().post;
        const postIdentity = doc.id; // user.uid
        console.log(postIdentity); // .document(uid)
        console.log(postData);
        divContainerPost.appendChild(Post(postData, postIdentity));
        divHome.appendChild(divContainerPost);
      });
      const btnsDelete = divContainerPost.querySelectorAll('.buttonDelete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const idPost = e.target.dataset.id;
          console.log('delete', idPost);
          deletePost(idPost);
        });
      });
      const btnsEdit = divContainerPost.querySelectorAll('.buttonEdit');
      const inputsPostPrinter = divContainerPost.querySelectorAll('.postBoard');
      const btnEdit = divContainerPost.querySelector('.buttonEdit');
      console.log('NodeList de inputs', inputsPostPrinter);
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          const doc = await getPost(e.target.dataset.id);
          const postPrinter = doc.data().post;
          console.log('estoy en el primer for', postPrinter);
          inputsPostPrinter.forEach((posting) => {
            console.log('soy posting id', posting.id);
            if (btnsEdit.length >= 1 && inputsPostPrinter.length >= 1) {
              if (btnsEdit[0].id === inputsPostPrinter[0].id) {
                console.log('match...', btnsEdit[0]);
                console.log('un botón', btnsEdit[0].id);
                inputsPostPrinter[0].value = postPrinter;
                updatePost(doc.id, { post: inputsPostPrinter[0].value });
                console.log(updatePost(doc.id, { post: inputsPostPrinter[0].value }));
                btnEdit.textContent = 'Actualizar';
              }
            }
          });
        });
      });
    });
  });

  btnPublic.addEventListener('click', (e) => {
    e.preventDefault();
    publicPost(inputValue.value, createPost);
    document.querySelector('.postHome').value = '';
  });

  return divHome;
};
