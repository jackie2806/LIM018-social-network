import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';

import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js';

import { app } from './config.js';

export const dataBase = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
/* export const isLoggedIn = () => {
// console.log(getAuth(app));
console.log(getAuth(app).currentUser); // Aquí por defecto siempre el valor es NULL
  return getAuth(app).currentUser;
}; */

export {
  doc,
  setDoc,
  addDoc,
  collection,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
};
