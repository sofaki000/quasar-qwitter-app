// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app"

import "firebase/firestore"
const firebaseConfig = {
  apiKey: ****enter api key*******,
  authDomain: ***************,
  projectId: ***************,,
  storageBucket: ***************,,
  messagingSenderId: ***************,,
  appId: ***************,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
let db= firebase.firestore()

export default db
