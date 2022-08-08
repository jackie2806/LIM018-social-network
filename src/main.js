// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
// eslint-disable-next-line import/no-cycle
import { Init } from './components/Init.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
// myFunction();
const divRoot = document.getElementById('root');
const routes = {
  '/': Init,
  '/register': Register,
  '/login': Login,
};
export const onNavigate = (pathname) => {
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
const component = routes[window.location.pathname];
window.onpopstate = () => {
  while (divRoot.firstChild) {
    divRoot.removeChild(divRoot.firstChild);
  }
  divRoot.appendChild(routes[window.location.pathname]());
};
divRoot.appendChild(component());
