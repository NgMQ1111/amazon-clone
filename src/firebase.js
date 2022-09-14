import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYypeh4l80roNCQYMc_9Q_pv8YyviQfpM",
  authDomain: "clone-18d2a.firebaseapp.com",
  projectId: "clone-18d2a",
  storageBucket: "clone-18d2a.appspot.com",
  messagingSenderId: "330046645791",
  appId: "1:330046645791:web:f0618bcfaf0fe28419972a",
  measurementId: "G-9FBTWTGNPS",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db