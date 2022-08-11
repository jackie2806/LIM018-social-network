// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
myFunction();
// 
const init = () => {
    window.addEventListener('hashchange', () => myFunction(window.location.hash))
    myFunction(window.location.hash)
}
window.addEventListener ('load', init)