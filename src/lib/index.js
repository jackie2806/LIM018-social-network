// aqui exportaras las funciones que necesites
import {vistas} from '../componentes/init.js'

<<<<<<< HEAD
export const myFunction = (route) => {
  const container = document.getElementById ('container')
  container.innerHTML = '';
  switch (route) {
    case '#/home': {
      return container.appendChild(vistas.home()) }
    case '#/register': {
      return container.appendChild(vistas.register()) }
    case '#/login': {
      return container.appendChild(vistas.loging()) }

  }
  console.log(route)
=======
export const myFunction = () => {
  // aqui tu codigo
>>>>>>> pre-main
  console.log('Hola mundo!');
};
