// aqui exportaras las funciones que necesites
import {vistas} from '../componentes/init.js'

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
  console.log('Hola mundo!');
};
