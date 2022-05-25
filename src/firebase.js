import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBEC-tTx7-Rqa5jZnwiDyn0AkxOamuFjOk",
  authDomain: "wtuc-proje.firebaseapp.com",
  projectId: "wtuc-proje",
  storageBucket: "wtuc-proje.appspot.com",
  messagingSenderId: "814995149819",
  appId: "1:814995149819:web:9ae921087ed5be9447315e",
  measurementId: "G-MD9TEDMDDD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
