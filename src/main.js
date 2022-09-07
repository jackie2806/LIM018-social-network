// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
// eslint-disable-next-line import/no-cycle
import { Init } from './components/Init.js';
// eslint-disable-next-line import/no-cycle
import { Login } from './components/Login.js';
// eslint-disable-next-line import/no-cycle
import Register from './components/Register.js';
// eslint-disable-next-line import/no-unresolved
import { Home } from './components/Home.js ';

import { isLoggedIn } from './firebase/methods.js';

const divRoot = document.getElementById('root');

const routes = {
  '/': Init,
  '/register': Register,
  '/login': Login,
  '/home': Home, // ruta protegida
};

const verificarAcceso = (pathname) => {
  const estoyLogeado = isLoggedIn();
  switch (pathname) {
    case '/home':
      // esta en /home y no esta logeado
      if (estoyLogeado === null) {
         window.location.href = '/';
      }
      break;
  }
};

// logica para navegar en la web por links
export const onNavigate = (pathname) => {
  verificarAcceso(pathname);
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (divRoot.firstChild) {
    divRoot.removeChild(divRoot.firstChild);
  }
  divRoot.appendChild(routes[pathname]());
};

// logica de inicio
const component = routes[window.location.pathname];
verificarAcceso(window.location.pathname);

// logica por si cambia la navegacion por el navegador (atras, adelante o f5)
window.onpopstate = () => {
  verificarAcceso(window.location.pathname);

  while (divRoot.firstChild) {
    divRoot.removeChild(divRoot.firstChild);
  }
  divRoot.appendChild(routes[window.location.pathname]());
};
divRoot.appendChild(component());
