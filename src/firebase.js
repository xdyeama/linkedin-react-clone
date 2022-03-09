import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAKMZmkvQ7mtLmlP8bsqXdi8Aovyj1RlAY",
  authDomain: "linkedin-clone-2ac49.firebaseapp.com",
  projectId: "linkedin-clone-2ac49",
  storageBucket: "linkedin-clone-2ac49.appspot.com",
  messagingSenderId: "667493513856",
  appId: "1:667493513856:web:076dfa9f9f4ac8e8128465"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };