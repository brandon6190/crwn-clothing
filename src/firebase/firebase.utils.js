import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCiJcTgpV37-cBS_4fErrcxsVL8aXrB7Z0",
    authDomain: "crwn-db-9e48a.firebaseapp.com",
    projectId: "crwn-db-9e48a",
    storageBucket: "crwn-db-9e48a.appspot.com",
    messagingSenderId: "613627146966",
    appId: "1:613627146966:web:3c0f1bdbeb07d90c774f77",
    measurementId: "G-TN3N3NLZN2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// GoogleAuth Sign in Util
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
