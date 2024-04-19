
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAhhJ0014ls07zmHbk-r3AT4mEhUZBs8VE",
    authDomain: "linkware-2bbc0.firebaseapp.com",
    projectId: "linkware-2bbc0",
    storageBucket: "linkware-2bbc0.appspot.com",
    messagingSenderId: "288899509038",
    appId: "1:288899509038:web:54b4f232fcba612ea868bf",
    measurementId: "G-SN08MVHTK9"
  };
  

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export { auth, database, firebaseApp };