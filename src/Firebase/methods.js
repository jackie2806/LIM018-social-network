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
  getDocs,
  onSnapshot,
  deleteDocs,
  getDoc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js';

import { app } from './config.js';

const saveUserInLocalStorage = (user) => localStorage.setItem('currentUser', JSON.stringify(user));
const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('currentUser'));

export const dataBase = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const isLoggedIn = () => {
// console.log(getAuth(app));
  const firebaseLoggedUser = auth.currentUser;
  if (firebaseLoggedUser) {
    return true;
  }

  const localStorageUser = getUserFromLocalStorage();
  if (localStorageUser) {
    return true;
  }
  return false;
};

const getUser = () => {
  if (auth.currentUser){
    return auth.currentUser;
  }
  if(getUserFromLocalStorage()){
    return getUserFromLocalStorage();
  }
  return null;
}
export {
  doc,
  setDoc,
  addDoc,
  collection,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  saveUserInLocalStorage,
  getUserFromLocalStorage,
  getUser,
  getDocs,
  onSnapshot,
  deleteDocs,
  getDoc,
  updateDoc,
};
