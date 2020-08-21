import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBpe_aSuBFCaFmPXOB8gflj8z0aZ3RGdWs",
  authDomain: "austine-firegram.firebaseapp.com",
  databaseURL: "https://austine-firegram.firebaseio.com",
  projectId: "austine-firegram",
  storageBucket: "austine-firegram.appspot.com",
  messagingSenderId: "27110855907",
  appId: "1:27110855907:web:c341fd31774ce0b2c7e1d6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };