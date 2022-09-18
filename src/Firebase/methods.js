/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/order
import { app } from './config.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';

import {
  getFirestore,
  doc,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  deleteDoc,
  getDoc,
  updateDoc,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js';

// eslint-disable-next-line import/no-cycle
import { dataRegister } from '../components/Register.js';

// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const saveUserInLocalStorage = (user) => localStorage.setItem('currentUser', JSON.stringify(user));
export const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('currentUser'));

export const dataBase = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// REGISTER // no pega esto desde git pull

export const registrar = async () => {
  const data = dataRegister();

  try {
    const dataRegist = await createUserWithEmailAndPassword(auth, data.email, data.password)

    await updateProfile(dataRegist.user, {
      displayName: data.name,
    });
    console.log(dataRegist);

    alert(`hola ${data.name} ya estás registrado`)
    onNavigate('/login');
  } catch (error) {
    // const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorCode);
    alert(errorMessage);
  }
};

// LOGIN
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

export const getUser = () => {
  if (auth.currentUser) {
    console.log('Firebase', auth.currentUser);
    return auth.currentUser;
  }
  if (getUserFromLocalStorage()) {
    console.log('LocalStorage', auth.currentUser);
    return getUserFromLocalStorage();
  }
  return null;
};

// Métodos para hacer el CRUD (Create, Read, Update and Delete)
export const savePost = (text) => addDoc(collection(dataBase, 'posts'), { text });
export const getPosts = () => getDocs(collection(dataBase, 'posts'));
export const onGetPosts = (callback) => onSnapshot(collection(dataBase, 'posts'), callback);
export const deletePost = (id) => deleteDoc(doc(dataBase, 'posts', id));
export const getPost = (id) => getDoc(doc(dataBase, 'posts', id));
export const updatePost = (id, contentPost) => updateDoc(doc(dataBase, 'posts', id), contentPost);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
};
