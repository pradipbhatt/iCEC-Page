// firebaseConfig.js

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG1BhUDkdcxGcWbOFMqSAi1Pu2p_aHjBA",
  authDomain: "pradipblogs.firebaseapp.com",
  projectId: "pradipblogs",
  storageBucket: "pradipblogs.appspot.com",
  messagingSenderId: "513957317151",
  appId: "1:513957317151:web:c927a0fcadc2993db3632a",
  measurementId: "G-BFQKBKPXN3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  app,
  auth,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
};
