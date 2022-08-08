// Este es el punto de entrada de tu aplicacion
import Init from './components/Init.js';
// import { myFunction } from './lib/index.js';
import Login from './components/Login.js';
// myFunction();
const root = document.getElementById('root');
root.appendChild(Init());
root.appendChild(Login());
