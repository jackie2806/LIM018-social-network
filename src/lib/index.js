// aqui exportaras las funciones que necesites
// eslint-disable-next-line import/newline-after-import
import { auth, onAuthStateChanged } from '../Firebase/config.js';
export const authState = onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('ilogged in!');
  } else {
    console.log('Firebase', 'No user');
  }
});
