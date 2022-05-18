import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCSuBjrvpMhmyZ16Wj4YrQtdof7eRgas7c",
  authDomain: "discord-3c278.firebaseapp.com",
  projectId: "discord-3c278",
  storageBucket: "discord-3c278.appspot.com",
  messagingSenderId: "78677193000",
  appId: "1:78677193000:web:504935cbaf2b653049201d"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider,db};