// lógica
import {
  getUser,
  savePost,
  getPosts,
  onGetPosts,
  deletePost,
  getPost,
  updatePost,

} from '../firebase/methods.js';
import { Post } from './Post.js';

import {
  publicPost,
} from '../lib/index.js';

//
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
  const divUserName = document.createElement('div');
  divUserName.className = 'userName';
  divUserName.textContent = user ? user.displayName : 'Nombre del usuario'; //  nombre del usuario
  const spamUser = document.createElement('spam');
  spamUser.className = 'spamuser';
  const divPost = document.createElement('div');
  divPost.className = 'divPostHome';
  const inputPost = document.createElement('input'); // input.value // lo envío a Firebase
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
  // Lógica CRUD
  const btnPublic = divHome.querySelector('.buttonPublish');
  const inputValue = divHome.querySelector('.postHome');
  const divContainerPost = document.createElement('div');
  btnPublic.addEventListener('click', (e) => {
    e.preventDefault();
    publicPost(inputValue.value, savePost);
    document.querySelector('.postHome').value = '';
  });

  // Mostrar datos guardados en Firebase
  window.addEventListener('DOMContentLoaded', async () => {
    onGetPosts((querySnapshot) => {
      divContainerPost.innerHTML = '';
      // console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        const postData = doc.data().text;
        const postIdentity = doc.id; // user.uid (para hallar el identificador del usuario)
        // console.log(postIdentity);
        divContainerPost.appendChild(Post(postData, postIdentity));
        divHome.appendChild(divContainerPost);
      });
      // Eliminar datos de Firebase
      const btnsDelete = divContainerPost.querySelectorAll('.buttonDelete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const idPost = e.target.dataset.id;
          // console.log('delete', idPost.id);
          deletePost(idPost);
        });
      });
      // Editar datos de Firebase
      const btnsEdit = divContainerPost.querySelectorAll('.buttonEdit');
      const inputBoard = divContainerPost.querySelectorAll('.postBoard');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          const doc = await getPost(e.target.dataset.id);
          const posting = doc.data();
          console.log('posting', posting);
          let postId = doc.id;
          console.log(postId);
          console.log('Firebase', posting.text);
          // Aquí el problema
          inputBoard.value = posting.text;
          console.log('inputBoard', inputBoard.value);
          btnsEdit.textContent = 'Actualizar';
          updatePost(postId, { text: '' });
        });
        
    /*     if (inputBoard.value !== '') {
          updatePost(postId, { text:'hola' });
          divContainerPost.querySelector('.buttonEdit').textContent = 'Editar';
        } */
      });
    });
    // Guardar datos en FireBase
  });
  // Enviar datos a Firebase
  return divHome;
};
