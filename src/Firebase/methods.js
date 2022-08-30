import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';

import {
  getFirestore,
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js';

import { app } from './config.js';

const isLoggedIn = () => {
  console.log(getAuth(app))
  return getAuth(app).currentUser;
}

const dataBase = getFirestore(app);
const auth = getAuth(app);
export {
  dataBase,
  auth,
  isLoggedIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};

