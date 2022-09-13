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
  setDoc,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  deleteDoc,
  getDoc,
  updateDoc,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js';

import { dataRegister } from '../components/Register.js';
import { onNavigate } from '../main.js';

export const saveUserInLocalStorage = (user) => localStorage.setItem('currentUser', JSON.stringify(user));
export const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('currentUser'));

export const dataBase = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// REGISTER // no pega esto desde git pull

export const registrar = async () => {
  const data = dataRegister()

  try {
    const dataRegister = await createUserWithEmailAndPassword (auth, data.email, data.password)

    await updateProfile(dataRegister.user, {
      displayName: data.name,
    })
    console.log(dataRegister)

    alert(`hola ${data.name} ya estás registrado`)
    onNavigate('/login')
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert (errorMessage)
  };

}

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

/* export const signInGoogle = (onNavigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      saveUserInLocalStorage(result.user);
      console.log('Usuario', credential);
      console.log(result);
      onNavigate('/home');
      //const token = credential.accessToken;
      //const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
    });
}; */
// CRUD

export const createPost = (post) => addDoc(collection(dataBase, 'post'), { post });
export const getPosts = () => getDocs(collection(dataBase, 'post'));
export const onGetPosts = (callback) => onSnapshot(collection(dataBase, 'post'), callback);
export const deletePost = (id) => {};

export {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
};

