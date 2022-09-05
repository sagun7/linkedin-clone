import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAi5pumydUA3dMIFqtg1smIa-5UZ92dEXs",
    authDomain: "sagun-linkedin-clone.firebaseapp.com",
    projectId: "sagun-linkedin-clone",
    storageBucket: "sagun-linkedin-clone.appspot.com",
    messagingSenderId: "31263449757",
    appId: "1:31263449757:web:f1b59f54688f4b9f742a74"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};