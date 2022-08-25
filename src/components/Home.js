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
  // ProfilePost
  const divBoxProfile = document.createElement('div');
  divBoxProfile.className = 'profilePost';
  const divUserName = document.createElement('div');
  const divPost = document.createElement('div');
  const buttonPublish = document.createElement('button');

  // Pizarra dinámica
  const divBoxPost = document.createElement('div');
  const divBoxPublish = document.createElement('div');
  divContainer.appendChild(divBoxMain);
  divBoxMain.appendChild(divBoxPost);
  divBoxMain.appendChild(divBoxPublish);
  // console.log('estoy en el Home');
  return divHome;
};
