import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';

import {
  getFirestore,
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js';

import { app } from './config.js';

export const dataBase = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const isLoggedIn = () => {
  console.log(getAuth(app));
  return getAuth(app).currentUser;
};

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
};
