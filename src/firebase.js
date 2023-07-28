// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';

//import ReactDOM from 'react-dom';


const firebaseConfig = {
    apiKey: "AIzaSyATBRe1zGV0q57fQK4-xfkRRU2iXOMErJc",
    authDomain: "linkedin-clone-7ce0a.firebaseapp.com",
    projectId: "linkedin-clone-7ce0a",
    storageBucket: "linkedin-clone-7ce0a.appspot.com",
    messagingSenderId: "1082127664386",
    appId: "1:1082127664386:web:e0558c5085f251bdeb6e1b",
    measurementId: "G-CSHYERQNCB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore() ;
  const auth = firebase.auth();
 // e//xport const auth = firebase.auth();
export const firestore = firebase.firestore();

  export  {db , auth};
