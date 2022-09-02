// lógica

export const Home = () => {
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
  divUserName.textContent = 'NOMBRE DE LA PERSONA LOGEADA';
  const spamUser = document.createElement ('spam')
  spamUser.className = 'spamuser';
  const divPost = document.createElement('div');
  divPost.className = 'divPostHome';
  const inputPost = document.createElement('input')
  inputPost.className = 'postHome';
  inputPost.placeholder = '¿Qué estás pensando?';
  const divbuttonPublish = document.createElement('div');
  divbuttonPublish.className = 'divButtonPublish';
  const buttonPublish = document.createElement('button')
  buttonPublish.textContent = 'Publicar';
  buttonPublish.className = 'buttonPublish button';

  formBoxProfile.appendChild(divUserName);
  formBoxProfile.appendChild(divPost);
  formBoxProfile.appendChild(divbuttonPublish);
  divUserName.appendChild(spamUser);
  divPost.appendChild(inputPost);
  divbuttonPublish.appendChild(buttonPublish)
  divContainer.appendChild(formBoxProfile);
  // Pizarra dinámica
  const formPizarra = document.createElement('form');
  formPizarra.className = 'profilePizarra';
  const divPizarraName = document.createElement('div');
  divPizarraName.className = 'pizarraName';
  const spamUserPizarra = document.createElement ('spam')
  spamUserPizarra.className = 'spamPizarra';
  const divPostPizarra = document.createElement('div');
  divPostPizarra.className = 'divPostBoard';
  const inputPizarra = document.createElement('input')
  inputPizarra.className = 'postBoard';
  inputPizarra.placeholder = 'aquI irá su comentario';
  const divButtons = document.createElement('div');
  divButtons.className = 'buttons'
  const buttonLike = document.createElement('button')
  buttonLike.textContent = '';
  buttonLike.className = 'buttonLike buttonBoard';
  const imgPlane = document.createElement ('img')
  imgPlane.src = '/img/planeLike.png';
  imgPlane.className = 'imgPlane';
  const buttonEdit = document.createElement('button')
  buttonEdit.textContent = 'editar';
  buttonEdit.className = 'buttonEdit buttonBoard';
  const buttonDelete = document.createElement('button')
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
  divButtons.appendChild(buttonDelete)
  divContainer.appendChild(formPizarra);
  
  // const divBoxPost = document.createElement('div');
  // const divBoxPublish = document.createElement('div');
  // divContainer.appendChild(divBoxMain);
  // divBoxMain.appendChild(divBoxPost);
  // divBoxMain.appendChild(divBoxPublish);
  // console.log('estoy en el Home');
  return divHome;
};
