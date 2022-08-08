const Login = () => {
  const divLogin = document.createElement('div');
  divLogin.className = 'divLogin';
  // Logo
  const divLoginImg = document.createElement('div');
  divLoginImg.className = 'divLoginImg';
  const imgLoginLogo = document.createElement('img');
  imgLoginLogo.src = '../img/logo.png';
  imgLoginLogo.alt = 'Logo';
  divLoginImg.appendChild(imgLoginLogo);
  // inputs
  const divInputs = document.createElement('div');
  divInputs.className = 'divInputs';
  const divTextEmail = document.createElement('div');
  divTextEmail.textContent = 'Ingresa tu correo electrónico';
  const inputEmail = document.createElement('input');
  inputEmail.className = 'inputEmail';
  inputEmail.placeholder = 'ejemplo@gmail.com';
  const divTextPassword = document.createElement('div');
  divTextPassword.textContent = 'Ingresa tu contraseña';
  const inputPassword = document.createElement('input');
  inputPassword.className = 'inputPassword';
  inputPassword.placeholder = 'Contraseña';
  divInputs.appendChild(divTextEmail);
  divInputs.appendChild(inputEmail);
  divInputs.appendChild(divTextPassword);
  divInputs.appendChild(inputPassword);
  const divTextForgotPassword = document.createElement('div');
  divTextForgotPassword.textContent = '¿Olvidaste tu contraseña?';
  divInputs.appendChild(divTextForgotPassword);
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'buttonLogin';
  buttonLogin.setAttribute('type', 'button');
  const buttonLoginText = document.createTextNode('Iniciar Sesión');
  buttonLogin.appendChild(buttonLoginText);
  divInputs.appendChild(buttonLogin);
  const divLoginOthers = document.createElement('div');
  divLoginOthers.className = 'divLoginOthers';
  const text = document.createElement('div');
  text.textContent = '-O-';
  const buttonGoogle = document.createElement('button');
  buttonGoogle.className = 'buttonGoogle';
  buttonGoogle.setAttribute('type', 'button');
  const buttonGoogleText = document.createTextNode('Iniciar con Google');
  buttonGoogle.appendChild(buttonGoogleText);
  divLoginOthers.appendChild(text);
  divLoginOthers.appendChild(buttonGoogle);
  divLogin.appendChild(divLoginImg);
  divLogin.appendChild(divInputs);
  divLogin.appendChild(divLoginOthers);

  return divLogin;
};

export default Login;
