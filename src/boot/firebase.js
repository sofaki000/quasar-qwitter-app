// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app"

import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCA_mf7VdIdAhH4lrxcTLFFcHzhXinKgIo",
  authDomain: "qwitter-6dfe2.firebaseapp.com",
  projectId: "qwitter-6dfe2",
  storageBucket: "qwitter-6dfe2.appspot.com",
  messagingSenderId: "769439257458",
  appId: "1:769439257458:web:c0fbec8242341c183083eb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
let db= firebase.firestore()

export default db
