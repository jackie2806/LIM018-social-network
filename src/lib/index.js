// aqui exportaras las funciones que necesites
import {vistas} from '../componentes/init.js'

export const myFunction = (route) => {
  const container = document.getElementById ('container')
  container.innerHTML = '';
  switch (route) {
    case '#/login': {
      return container.appendChild(vistas.home()) }
  }
  console.log(route)
  console.log('Hola mundo!');
};
